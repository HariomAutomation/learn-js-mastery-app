import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { EditorView } from "@codemirror/view"

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
}

interface TestResult {
  index: number
  input: string
  expected: string
  actual: string
  passed: boolean
}

function stringify(value: unknown): string {
  if (typeof value === "string") return `"${value}"`
  if (typeof value === "object") return JSON.stringify(value)
  return String(value)
}

const darkTheme = EditorView.theme({
  "&": { backgroundColor: "#181825", color: "#cdd6f4" },
  ".cm-gutters": { backgroundColor: "#181825", color: "#6c7086", border: "none" },
  ".cm-activeLineGutter": { backgroundColor: "#313244" },
  ".cm-activeLine": { backgroundColor: "#31324440" },
  ".cm-selectionBackground": { backgroundColor: "#45475a" },
  ".cm-cursor": { borderLeftColor: "#cba6f7" },
}, { dark: true })

const lightTheme = EditorView.theme({
  "&": { backgroundColor: "#e6e9ef", color: "#4c4f69" },
  ".cm-gutters": { backgroundColor: "#dce0e8", color: "#6c6f85", border: "none" },
  ".cm-activeLineGutter": { backgroundColor: "#bcc0cc" },
  ".cm-activeLine": { backgroundColor: "#bcc0cc40" },
  ".cm-selectionBackground": { backgroundColor: "#ccd0da" },
  ".cm-cursor": { borderLeftColor: "#8839ef" },
}, { dark: false })

export function CodePlayground({ title, starterCode = "", solution = "", hints = [], tests = [] }: CodePlaygroundProps) {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState<{ result: unknown; error: string | null } | null>(null)
  const [testResults, setTestResults] = useState<TestResult[] | null>(null)
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const theme = document.documentElement.getAttribute("data-theme") ?? "dark"

  function runCode() {
    try {
      const logs: string[] = []
      const originalLog = console.log
      console.log = (...args: unknown[]) => {
        logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : String(a))).join(" "))
      }

      const result = new Function(code)()
      console.log = originalLog

      const outputParts: string[] = []
      if (logs.length > 0) outputParts.push(logs.join("\n"))
      if (result !== undefined) outputParts.push("=> " + (typeof result === "object" ? JSON.stringify(result, null, 2) : String(result)))

      setOutput({ result: outputParts.join("\n") || "Code executed (no output)", error: null })
    } catch (err) {
      setOutput({ result: null, error: String(err) })
    }
  }

  function runTests() {
    if (tests.length === 0) return
    const results: TestResult[] = []
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i]
      const fnCode = `(${code})\n(${JSON.stringify(test.input)})`
      try {
        const actual = new Function(fnCode)()
        results.push({
          index: i,
          input: test.input.map(stringify).join(", "),
          expected: stringify(test.expected),
          actual: stringify(actual),
          passed: JSON.stringify(actual) === JSON.stringify(test.expected),
        })
      } catch (err) {
        results.push({
          index: i,
          input: test.input.map(stringify).join(", "),
          expected: stringify(test.expected),
          actual: `Error: ${String(err)}`,
          passed: false,
        })
      }
    }
    setTestResults(results)
  }

  function resetCode() {
    setCode("")
    setOutput(null)
    setTestResults(null)
    setShowSolution(false)
  }

  const passedCount = testResults?.filter((t) => t.passed).length ?? 0
  const allPassed = testResults !== null && passedCount === testResults.length && testResults.length > 0

  const taskInstructions = starterCode
    .split("\n")
    .filter((line) => line.trim().startsWith("//"))
    .map((line) => line.replace(/^\/\/\s*/, "").trim())
    .filter(Boolean)

  return (
    <div className="code-playground">
      <div className="playground-task">
        <div className="task-header">
          <span className="task-badge">📝 Practice</span>
          <h3 className="task-title">{title || "Code Playground"}</h3>
        </div>
        {taskInstructions.length > 0 && (
          <div className="task-instructions">
            {taskInstructions.map((instruction, i) => (
              <p key={i} className="task-line">{instruction}</p>
            ))}
          </div>
        )}
      </div>

      <div className="playground-header">
        <span className="playground-editor-label">Your Code</span>
        <div className="playground-actions">
          {tests.length > 0 && (
            <button className="btn btn-success" onClick={runTests}>
              ▶ Run Tests
            </button>
          )}
          <button className="btn btn-primary" onClick={runCode}>
            Run
          </button>
          <button className="btn btn-secondary" onClick={resetCode}>
            Clear
          </button>
        </div>
      </div>

      <div className="code-editor-wrapper">
        <CodeMirror
          value={code}
          onChange={(value) => setCode(value)}
          extensions={[javascript(), EditorView.lineWrapping]}
          theme={theme === "light" ? lightTheme : darkTheme}
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
            {allPassed && <span className="test-win">All tests passed! Concept clear hai!</span>}
            {!allPassed && <span className="test-hint-text">Kuch tests fail — hints dekho ya try karte raho!</span>}
          </div>
          {testResults.map((tr) => (
            <div key={tr.index} className={`test-case ${tr.passed ? "passed" : "failed"}`}>
              <div className="test-case-head">
                <span className="test-case-icon">{tr.passed ? "✓" : "✗"}</span>
                <span className="test-case-name">Test {tr.index + 1}</span>
              </div>
              <div className="test-case-body">
                <div className="test-line">
                  <span className="test-label">Input</span>
                  <code>({tr.input})</code>
                </div>
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

      {output && (
        <div className={"code-output " + (output.error ? "error" : "success")}>
          <pre>{output.error ?? String(output.result)}</pre>
        </div>
      )}

      <div className="playground-help-row">
        {hints.length > 0 && (
          <div className="playground-hints">
            <button className="btn btn-ghost" onClick={() => setShowHints(!showHints)}>
              {showHints ? "🙈 Hide Hints" : "💡 Show Hints (" + hints.length + ")"}
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
            <button className="btn btn-ghost" onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? "🙈 Hide Solution" : "✅ Show Solution"}
            </button>
            {showSolution && (
              <pre className="solution-code">{solution}</pre>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
