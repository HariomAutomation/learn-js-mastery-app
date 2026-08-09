import { useEffect, useRef, useState } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { EditorView, keymap } from "@codemirror/view"
import { indentWithTab } from "@codemirror/commands"

interface CodePlaygroundProps {
  title?: string
  starterCode?: string
  solution?: string
  hints?: string[]
  theme?: "dark" | "light"
}

const WORKER_TIMEOUT_MS = 8000

const WORKER_CODE = `
self.onmessage = function (event) {
  var code = event.data.code
  var logs = []

  try {
    var originalLog = console.log
    console.log = function () {
      var parts = []
      for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i]
        if (a === undefined) parts.push("undefined")
        else if (typeof a === "function") parts.push(String(a))
        else if (typeof a === "object" && a !== null) {
          try { parts.push(JSON.stringify(a, null, 2)) } catch (e) { parts.push(String(a)) }
        } else parts.push(String(a))
      }
      logs.push(parts.join(" "))
    }

    var result
    try {
      result = new Function(code)()
    } finally {
      console.log = originalLog
    }

    self.postMessage({
      type: "result",
      logs: logs,
      hasResult: result !== undefined,
      result: result === undefined ? null : formatResult(result)
    })
  } catch (err) {
    self.postMessage({ type: "error", error: String(err && err.stack ? err.stack : err) })
  }
}

function formatResult(x) {
  if (typeof x === "function") return String(x)
  if (typeof x === "object" && x !== null) {
    try { return JSON.stringify(x, null, 2) } catch (e) { return String(x) }
  }
  return String(x)
}
`

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

export function CodePlayground({ title, starterCode = "", solution = "", hints = [], theme = "dark" }: CodePlaygroundProps) {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState<{ result: unknown; error: string | null } | null>(null)
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [running, setRunning] = useState(false)
  const workerRef = useRef<Worker | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => cleanupWorker()
  }, [])

  function cleanupWorker() {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = null
    if (workerRef.current) {
      workerRef.current.terminate()
      workerRef.current = null
    }
  }

  function runCode() {
    if (running) return
    const trimmed = code.trim()
    if (!trimmed) {
      setOutput({ result: "Code khali hai — kuch likho pehle.", error: null })
      return
    }
    if (workerRef.current) cleanupWorker()

    const blob = new Blob([WORKER_CODE], { type: "application/javascript" })
    const url = URL.createObjectURL(blob)
    const worker = new Worker(url)
    workerRef.current = worker
    setOutput(null)
    setRunning(true)

    timerRef.current = setTimeout(() => {
      worker.terminate()
      workerRef.current = null
      URL.revokeObjectURL(url)
      setRunning(false)
      setOutput({ result: null, error: "Execution timed out — lagta hai code infinite loop mein phas gaya. (8s limit)" })
    }, WORKER_TIMEOUT_MS)

    worker.onmessage = (e: MessageEvent<{ type: string; logs?: string[]; hasResult?: boolean; result?: unknown; error?: string }>) => {
      cleanupWorker()
      URL.revokeObjectURL(url)
      setRunning(false)
      const msg = e.data
      if (msg.type === "error") {
        setOutput({ result: null, error: msg.error ?? "Unknown error" })
        return
      }
      const parts: string[] = []
      if (msg.logs && msg.logs.length > 0) parts.push(msg.logs.join("\n"))
      if (msg.hasResult) parts.push("=> " + String(msg.result))
      setOutput({ result: parts.join("\n") || "Code executed (no output)", error: null })
    }

    worker.onerror = (e) => {
      cleanupWorker()
      URL.revokeObjectURL(url)
      setRunning(false)
      setOutput({ result: null, error: e.message || "Worker error" })
    }

    worker.postMessage({ code: trimmed })
  }

  function resetCode() {
    cleanupWorker()
    setRunning(false)
    setCode("")
    setOutput(null)
    setShowSolution(false)
  }

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
          <button className="btn btn-primary" onClick={runCode} disabled={running}>
            {running ? "Running…" : "Run"}
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
          extensions={[javascript(), EditorView.lineWrapping, keymap.of([indentWithTab])]}
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