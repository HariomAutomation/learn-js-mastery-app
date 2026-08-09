import { useState, useEffect, useCallback, useRef } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { EditorView, keymap } from "@codemirror/view"
import { indentWithTab } from "@codemirror/commands"
import { useAppStore } from "@/state/store"

interface ExerciseTest {
  input: unknown[]
  expected: unknown
}

interface CodePlaygroundProps {
  title?: string
  starterCode?: string
  solution?: string
  hints?: string[]
  tests?: ExerciseTest[]
  exerciseId?: string
  theme?: "dark" | "light"
}

interface TestResult {
  index: number
  input: string
  expected: string
  actual: string
  passed: boolean
}

interface ConsoleEntry {
  id: number
  text: string
  type: "log" | "error" | "warn" | "result"
}

interface ExecutionResult {
  logs: string[]
  result: unknown
  error: string | null
}

function normalizeOutput(output: string): string {
  return output
    .trim()
    .replace(/\r\n/g, "\n")
    .replace(/\s+$/gm, "")
}

const WORKER_TIMEOUT_MS = 8000

const WORKER_CODE = `
self.onmessage = function (event) {
  var code = event.data.code
  var logs = []
  var originalLog = console.log
  var originalWarn = console.warn
  var originalError = console.error
  var originalInfo = console.info

  function fmt(a) {
    if (a === undefined) return "undefined"
    if (typeof a === "function") return String(a)
    if (typeof a === "object" && a !== null) {
      try { return JSON.stringify(a) } catch (e) { return String(a) }
    }
    return String(a)
  }

  function finish(result, error) {
    console.log = originalLog
    console.warn = originalWarn
    console.error = originalError
    console.info = originalInfo
    self.postMessage({ type: "result", logs: logs, result: result, error: error })
  }

  console.log = function () {
    var parts = []
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]))
    logs.push(parts.join(" "))
  }
  console.warn = function () {
    var parts = []
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]))
    logs.push("[WARN] " + parts.join(" "))
  }
  console.error = function () {
    var parts = []
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]))
    logs.push("[ERROR] " + parts.join(" "))
  }
  console.info = function () {
    var parts = []
    for (var i = 0; i < arguments.length; i++) parts.push(fmt(arguments[i]))
    logs.push("[INFO] " + parts.join(" "))
  }

  try {
    var isAsync = code.indexOf("async ") !== -1 || code.indexOf("await ") !== -1
    if (isAsync) {
      var asyncCode = "(async () => { " + code + " })()"
      var p = new Function(asyncCode)()
      if (p && typeof p.then === "function") {
        p.then(function () { finish(undefined, null) }).catch(function (err) {
          finish(undefined, String(err && err.stack ? err.stack : err))
        })
        return
      }
      finish(p, null)
    } else {
      finish(new Function(code)(), null)
    }
  } catch (err) {
    finish(undefined, String(err && err.stack ? err.stack : err))
  }
}
`

async function executeCode(code: string): Promise<ExecutionResult> {
  const blob = new Blob([WORKER_CODE], { type: "application/javascript" })
  const url = URL.createObjectURL(blob)
  const worker = new Worker(url)

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      worker.terminate()
      URL.revokeObjectURL(url)
      resolve({ logs: [], result: null, error: "Execution timed out — lagta hai code infinite loop mein phas gaya. (8s limit)" })
    }, WORKER_TIMEOUT_MS)

    worker.onmessage = (e: MessageEvent<{ logs?: string[]; result?: unknown; error?: string | null }>) => {
      clearTimeout(timeout)
      worker.terminate()
      URL.revokeObjectURL(url)
      const msg = e.data
      resolve({
        logs: msg.logs ?? [],
        result: msg.error ? null : msg.result,
        error: msg.error ?? null,
      })
    }

    worker.onerror = (e) => {
      clearTimeout(timeout)
      worker.terminate()
      URL.revokeObjectURL(url)
      resolve({ logs: [], result: null, error: e.message || "Worker execution error" })
    }

    worker.postMessage({ code })
  })
}

const darkTheme = EditorView.theme(
  {
    "&": { backgroundColor: "#181825", color: "#cdd6f4" },
    ".cm-gutters": { backgroundColor: "#181825", color: "#6c7086", border: "none" },
    ".cm-activeLineGutter": { backgroundColor: "#313244" },
    ".cm-activeLine": { backgroundColor: "#31324440" },
    ".cm-selectionBackground": { backgroundColor: "#45475a" },
    ".cm-cursor": { borderLeftColor: "#cba6f7" },
  },
  { dark: true }
)

const lightTheme = EditorView.theme(
  {
    "&": { backgroundColor: "#e6e9ef", color: "#4c4f69" },
    ".cm-gutters": { backgroundColor: "#dce0e8", color: "#6c6f85", border: "none" },
    ".cm-activeLineGutter": { backgroundColor: "#bcc0cc" },
    ".cm-activeLine": { backgroundColor: "#bcc0cc40" },
    ".cm-selectionBackground": { backgroundColor: "#ccd0da" },
    ".cm-cursor": { borderLeftColor: "#8839ef" },
  },
  { dark: false }
)

export function CodePlayground({
  title,
  starterCode = "",
  solution = "",
  hints = [],
  tests = [],
  exerciseId,
  theme = "dark",
}: CodePlaygroundProps) {
  const [code, setCode] = useState(starterCode)
  const [testResults, setTestResults] = useState<TestResult[] | null>(null)
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [consoleHistory, setConsoleHistory] = useState<ConsoleEntry[]>([])
  const [showConsole, setShowConsole] = useState(false)
  const [executionTime, setExecutionTime] = useState<number | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [showXPNotification, setShowXPNotification] = useState(false)
  const consoleIdRef = useRef(0)
  const completeExercise = useAppStore((s) => s.completeExercise)
  const completedExercises = useAppStore((s) => s.completedExercises)

  const isCompleted = exerciseId ? completedExercises.includes(exerciseId) : false

  useEffect(() => {
    setCode(starterCode)
    setTestResults(null)
    setConsoleHistory([])
    setExecutionTime(null)
    setShowSolution(false)
    setShowHints(false)
    setShowConsole(false)
  }, [starterCode])

  const addConsoleEntry = useCallback((text: string, type: ConsoleEntry["type"] = "log") => {
    consoleIdRef.current++
    setConsoleHistory((prev) => [...prev, { id: consoleIdRef.current, text, type }])
  }, [])

  const clearConsole = useCallback(() => {
    setConsoleHistory([])
  }, [])

  const runCode = useCallback(async () => {
    if (!code.trim()) return
    setIsRunning(true)
    setConsoleHistory([])
    setShowConsole(true)

    const startTime = performance.now()
    const result = await executeCode(code)
    const endTime = performance.now()

    setExecutionTime(Math.round(endTime - startTime))

    result.logs.forEach((log) => addConsoleEntry(log, "log"))

    if (result.error) {
      addConsoleEntry(result.error, "error")
    } else if (result.result !== undefined) {
      const resultStr =
        typeof result.result === "object" && result.result !== null
          ? JSON.stringify(result.result, null, 2)
          : String(result.result)
      addConsoleEntry("=> " + resultStr, "result")
    }

    setIsRunning(false)
  }, [code, addConsoleEntry])

  const runTests = useCallback(async () => {
    if (tests.length === 0 || !code.trim()) return
    setIsRunning(true)
    setConsoleHistory([])
    setShowConsole(true)

    const startTime = performance.now()
    const results: TestResult[] = []

    for (let i = 0; i < tests.length; i++) {
      const test = tests[i]
      try {
        const executionResult = await executeCode(code)

        if (executionResult.error) {
          results.push({
            index: i,
            input: "N/A",
            expected: String(test.expected),
            actual: `Error: ${executionResult.error}`,
            passed: false,
          })
        } else {
          const actualOutput = executionResult.logs.join("\n")
          const expectedStr = String(test.expected)
          const passed = normalizeOutput(actualOutput) === normalizeOutput(expectedStr)

          results.push({
            index: i,
            input: "N/A",
            expected: expectedStr,
            actual: actualOutput || "No output",
            passed,
          })
        }
      } catch (err) {
        results.push({
          index: i,
          input: "N/A",
          expected: String(test.expected),
          actual: `Error: ${String(err)}`,
          passed: false,
        })
      }
    }

    const endTime = performance.now()
    setExecutionTime(Math.round(endTime - startTime))
    setTestResults(results)
    setIsRunning(false)

    const passed = results.filter((r) => r.passed).length
    addConsoleEntry(
      `Tests: ${passed}/${results.length} passed`,
      passed === results.length ? "result" : "error"
    )
  }, [tests, code, addConsoleEntry])

  const resetCode = useCallback(() => {
    setCode(starterCode)
    setTestResults(null)
    setConsoleHistory([])
    setExecutionTime(null)
    setShowSolution(false)
  }, [starterCode])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault()
        if (tests.length > 0) {
          runTests()
        } else {
          runCode()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [runCode, runTests, tests.length])

  const passedCount = testResults?.filter((t) => t.passed).length ?? 0
  const allPassed = testResults !== null && passedCount === testResults.length && testResults.length > 0

  useEffect(() => {
    if (allPassed && exerciseId && !isCompleted) {
      completeExercise(exerciseId)
      setShowXPNotification(true)
      const timer = setTimeout(() => setShowXPNotification(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [allPassed, exerciseId, isCompleted, completeExercise])

  const taskInstructions = starterCode
    .split("\n")
    .filter((line) => line.trim().startsWith("//"))
    .map((line) => line.replace(/^\/\/\s*/, "").trim())
    .filter(Boolean)

  const currentTheme = theme === "light" ? lightTheme : darkTheme

  return (
    <div className="code-playground">
      {showXPNotification && (
        <div className="xp-notification animate-pop">
          <span className="xp-icon">⚡</span>
          <span className="xp-text">+10 XP Earned!</span>
        </div>
      )}

      <div className="playground-task">
        <div className="task-header">
          <span className="task-badge">
            {isCompleted ? "✅ Done" : "📝 Practice"}
          </span>
          <h3 className="task-title">{title || "Code Playground"}</h3>
        </div>
        {taskInstructions.length > 0 && (
          <div className="task-instructions">
            {taskInstructions.map((instruction, i) => (
              <p key={i} className="task-line">
                {instruction}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="playground-header">
        <span className="playground-editor-label">Your Code</span>
        <div className="playground-shortcuts">
          <kbd>Ctrl+Enter</kbd> Run
        </div>
        <div className="playground-actions">
          <button
            className="btn btn-primary"
            onClick={() => (tests.length > 0 ? runTests() : runCode())}
            disabled={isRunning || !code.trim()}
          >
            {isRunning ? "⏳ Running..." : "▶ Run"}
          </button>
          <button className="btn btn-secondary" onClick={resetCode}>
            ↺ Reset
          </button>
        </div>
      </div>

      <div className="code-editor-wrapper">
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value)}
          extensions={[javascript(), EditorView.lineWrapping, keymap.of([indentWithTab])]}
          theme={currentTheme}
          placeholder="// Yahan apna code likho..."
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightActiveLine: true,
            foldGutter: true,
            bracketMatching: true,
            autocompletion: false,
          }}
        />
      </div>

      {testResults && (
        <div className={`test-results ${allPassed ? "all-pass" : ""}`}>
          <div className="test-summary">
            <span className="test-score">
              {passedCount}/{testResults.length} tests passed
            </span>
            {allPassed && (
              <span className="test-win">All tests passed! Concept clear hai!</span>
            )}
            {!allPassed && (
              <span className="test-hint-text">
                Kuch tests fail — hints dekho ya try karte raho!
              </span>
            )}
          </div>
          {testResults.map((tr) => (
            <div key={tr.index} className={`test-case ${tr.passed ? "passed" : "failed"}`}>
              <div className="test-case-head">
                <span className="test-case-icon">{tr.passed ? "✓" : "✗"}</span>
                <span className="test-case-name">Test {tr.index + 1}</span>
              </div>
              <div className="test-case-body">
                <div className="test-line">
                  <span className="test-label">Expected</span>
                  <code>{tr.expected}</code>
                </div>
                <div className="test-line">
                  <span className="test-label">Got</span>
                  <code className={tr.passed ? "ok" : "bad"}>{tr.actual}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {consoleHistory.length > 0 && (
        <div className="console-section">
          <div className="console-header">
            <span className="console-title">
              🖥 Console
              {executionTime !== null && (
                <span className="execution-time">{executionTime}ms</span>
              )}
            </span>
            <div className="console-actions">
              <button className="btn btn-ghost btn-sm" onClick={clearConsole}>
                Clear
              </button>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setShowConsole(!showConsole)}
              >
                {showConsole ? "▼ Hide" : "▶ Show"}
              </button>
            </div>
          </div>
          {showConsole && (
            <div className="console-output">
              {consoleHistory.map((entry) => (
                <div key={entry.id} className={`console-line console-${entry.type}`}>
                  <span className="console-prefix">
                    {entry.type === "error"
                      ? "✗"
                      : entry.type === "warn"
                        ? "⚠"
                        : entry.type === "result"
                          ? "=>"
                          : ">"}
                  </span>
                  <code>{entry.text}</code>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="playground-help-row">
        {hints.length > 0 && (
          <div className="playground-hints">
            <button
              className="btn btn-ghost"
              onClick={() => setShowHints(!showHints)}
            >
              {showHints
                ? "🙈 Hide Hints"
                : "💡 Show Hints (" + hints.length + ")"}
            </button>
            {showHints && (
              <ul className="hints-list">
                {hints.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {solution && (
          <div className="playground-solution">
            <button
              className="btn btn-ghost"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? "🙈 Hide Solution" : "✅ Show Solution"}
            </button>
            {showSolution && (
              <div className="solution-wrapper">
                <div className="solution-header">
                  <span className="solution-label">Solution</span>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setCode(solution)
                      setShowSolution(false)
                    }}
                  >
                    📋 Copy to Editor
                  </button>
                </div>
                <CodeMirror
                  value={solution}
                  readOnly
                  extensions={[javascript(), EditorView.lineWrapping, keymap.of([indentWithTab])]}
                  theme={currentTheme}
                  basicSetup={{
                    lineNumbers: true,
                    highlightActiveLine: false,
                    foldGutter: true,
                    bracketMatching: true,
                    autocompletion: false,
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
