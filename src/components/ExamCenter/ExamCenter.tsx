import { useEffect, useMemo, useRef, useState } from "react"
import type { QuizQuestion } from "@/types/content"
import { loadAllQuizQuestions, shuffleQuestions } from "@/content/quiz"
import { saveExamResult } from "@/db/progress"
import { useAppStore } from "@/state/store"
import { ProgressRing } from "@/components/ProgressRing/ProgressRing"
import { Confetti } from "@/components/Confetti/Confetti"
import { generateCertificate } from "@/utils/certificate"

const EXAM_SIZE = 20
const TIME_LIMIT = 20 * 60
const PASS_PERCENT = 70

type Phase = "intro" | "running" | "result"

export function ExamCenter() {
  const [phase, setPhase] = useState<Phase>("intro")
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [flags, setFlags] = useState<boolean[]>([])
  const [current, setCurrent] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [studentName, setStudentName] = useState(() => localStorage.getItem("js-mastery-name") || "")
  const [showConfirmStart, setShowConfirmStart] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)
  const [showNameInput, setShowNameInput] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeLeftRef = useRef(TIME_LIMIT)
  const finalizedRef = useRef(false)
  const addXP = useAppStore((s) => s.addXP)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const score = useMemo(
    () => questions.reduce((acc, q, i) => (answers[i] === q.correctIndex ? acc + 1 : acc), 0),
    [questions, answers]
  )
  const percent = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const passed = percent >= PASS_PERCENT
  const unanswered = answers.filter((a) => a === null).length

  function finalize() {
    if (finalizedRef.current) return
    finalizedRef.current = true
    const finalScore = questions.reduce(
      (acc, q, i) => (answers[i] === q.correctIndex ? acc + 1 : acc),
      0
    )
    const finalPercent = questions.length > 0 ? Math.round((finalScore / questions.length) * 100) : 0
    const finalPassed = finalPercent >= PASS_PERCENT
    saveExamResult({
      date: new Date().toISOString(),
      score: finalScore,
      total: questions.length,
      passed: finalPassed,
      timeUsed: TIME_LIMIT - timeLeftRef.current,
    }).then(() => {
      if (finalPassed) addXP(100)
      else addXP(20)
    })
  }

  async function startExam() {
    const all = await loadAllQuizQuestions()
    const qs = shuffleQuestions(all, EXAM_SIZE)
    setQuestions(qs)
    setAnswers(new Array(qs.length).fill(null))
    setFlags(new Array(qs.length).fill(false))
    setCurrent(0)
    setTimeLeft(TIME_LIMIT)
    timeLeftRef.current = TIME_LIMIT
    finalizedRef.current = false
    setPhase("running")
    setShowConfirmStart(false)
    timerRef.current = setInterval(() => {
      timeLeftRef.current = Math.max(0, timeLeftRef.current - 1)
      setTimeLeft(timeLeftRef.current)
      if (timeLeftRef.current <= 0) {
        if (timerRef.current) clearInterval(timerRef.current)
        setPhase("result")
        finalize()
      }
    }, 1000)
  }

  function handleStartClick() {
    if (!studentName.trim()) {
      setShowNameInput(true)
      return
    }
    setShowConfirmStart(true)
  }

  function confirmStart() {
    localStorage.setItem("js-mastery-name", studentName.trim())
    startExam()
  }

  function handleSubmit() {
    if (unanswered > 0) {
      setShowConfirmSubmit(true)
      return
    }
    doSubmit()
  }

  function doSubmit() {
    if (timerRef.current) clearInterval(timerRef.current)
    setPhase("result")
    setShowConfirmSubmit(false)
    finalize()
  }

  function handleSaveName() {
    if (studentName.trim()) {
      localStorage.setItem("js-mastery-name", studentName.trim())
      setShowNameInput(false)
      setShowConfirmStart(true)
    }
  }

  const mm = Math.floor(timeLeft / 60)
  const ss = timeLeft % 60
  const timeDanger = timeLeft < 300

  function formatTime(secs: number): string {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  }

  if (phase === "intro") {
    return (
      <div className="exam-center">
        <div className="exam-intro">
          <div className="exam-intro-glow" />
          <span className="exam-badge">🎓 Certification Exam</span>
          <h1 className="exam-title">JavaScript Mastery Final Exam</h1>
          <p className="exam-desc">
            Poore course ke concepts ka ek saath test! {EXAM_SIZE} random questions —
            variables se le kar advanced objects tak. {PASS_PERCENT}%+ score karo aur
            certificate lo!
          </p>
          <div className="exam-rules">
            <div className="exam-rule">
              <span className="exam-rule-icon">⏱️</span>
              <div>
                <strong>20 minutes</strong>
                <span>Timer ke andar complete karo</span>
              </div>
            </div>
            <div className="exam-rule">
              <span className="exam-rule-icon">🎲</span>
              <div>
                <strong>Random questions</strong>
                <span>Har baar naya set — sab modules se</span>
              </div>
            </div>
            <div className="exam-rule">
              <span className="exam-rule-icon">🏆</span>
              <div>
                <strong>70% pass mark</strong>
                <span>Pass → 100 XP bonus aur certificate</span>
              </div>
            </div>
            <div className="exam-rule">
              <span className="exam-rule-icon">🚩</span>
              <div>
                <strong>Flag questions</strong>
                <span>Uncertain ones ko flag karke revise karo</span>
              </div>
            </div>
          </div>

          {showNameInput && (
            <div className="name-input-section">
              <label className="name-label">Apna naam daalo certificate ke liye:</label>
              <div className="name-input-row">
                <input
                  className="name-input"
                  type="text"
                  placeholder="Enter your name..."
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
                  autoFocus
                />
                <button className="btn btn-primary" onClick={handleSaveName} disabled={!studentName.trim()}>
                  Save
                </button>
              </div>
            </div>
          )}

          {showConfirmStart && (
            <div className="confirm-dialog">
              <p className="confirm-text">
                Exam shuru kar rahe ho <strong>{studentName}</strong>? Timer start ho jayega!
              </p>
              <div className="confirm-actions">
                <button className="btn btn-primary" onClick={confirmStart}>
                  Start Exam Now →
                </button>
                <button className="btn btn-secondary" onClick={() => setShowConfirmStart(false)}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          {!showNameInput && !showConfirmStart && (
            <button className="btn btn-primary exam-start" onClick={handleStartClick}>
              Start Exam Now →
            </button>
          )}
        </div>
      </div>
    )
  }

  if (phase === "result") {
    return (
      <div className="exam-center">
        <Confetti active={passed} count={100} />
        <div className={`exam-result ${passed ? "passed" : "failed"}`}>
          {passed ? (
            <div className="certificate">
              <span className="certificate-top">🎓 JS MASTERY CERTIFICATION</span>
              <div className="certificate-seal">✓</div>
              <h2 className="certificate-title">Congratulations, {studentName || "Learner"}!</h2>
              <p className="certificate-text">
                Aapne JavaScript Mastery Final Exam <strong>pass</strong> kar liya hai!
                Ab aap officially kahenge: <em>"JS aa gayi!"</em> 🎉
              </p>
            </div>
          ) : (
            <div className="certificate failed-cert">
              <span className="certificate-top">📚 KEEP GOING!</span>
              <div className="certificate-seal fail-seal">✗</div>
              <h2 className="certificate-title">Almost There!</h2>
              <p className="certificate-text">
                {PASS_PERCENT}% chahiye tha — aapko {percent}% mile. Weak areas revise
                karke dobara try karo! Practice makes perfect 💪
              </p>
            </div>
          )}

          <div className="result-score">
            <ProgressRing
              percent={percent}
              size={130}
              stroke={12}
              color={passed ? "#a6e3a1" : "#f38ba8"}
              label={`${percent}%`}
            />
            <div className="result-stats">
              <div className="result-stat">
                <span className="result-stat-value">
                  {score}/{questions.length}
                </span>
                <span className="result-stat-label">Correct</span>
              </div>
              <div className="result-stat">
                <span className="result-stat-value">{formatTime(TIME_LIMIT - timeLeft)}</span>
                <span className="result-stat-label">Time Used</span>
              </div>
              <div className="result-stat">
                <span className="result-stat-value">
                  {passed ? "+100 XP" : "+20 XP"}
                </span>
                <span className="result-stat-label">Reward</span>
              </div>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn btn-primary" onClick={handleStartClick}>
              🔄 Try Again
            </button>
            {passed && (
              <button
                className="btn btn-success"
                onClick={() => generateCertificate(studentName || "JavaScript Learner", percent, new Date().toLocaleDateString("en-IN"))}
              >
                📜 Download Certificate
              </button>
            )}
            <button className="btn btn-secondary" onClick={() => useAppStore.getState().setView("home")}>
              🏠 Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  const q = questions[current]

  return (
    <div className="exam-center">
      {showConfirmSubmit && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <p className="confirm-text">
              {unanswered > 0 ? (
                <>
                  <strong>{unanswered}</strong> question{unanswered > 1 ? "s" : ""} unanswered hai{unanswered > 1 ? "n" : ""}.
                  Submit karna hai?
                </>
              ) : (
                "Sab questions ka answer de diya. Submit karna hai?"
              )}
            </p>
            <div className="confirm-actions">
              <button className="btn btn-primary" onClick={doSubmit}>
                Yes, Submit
              </button>
              <button className="btn btn-secondary" onClick={() => setShowConfirmSubmit(false)}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="exam-running">
        <header className="exam-header">
          <div className="exam-header-left">
            <span className="exam-header-badge">FINAL EXAM</span>
            <span className="exam-q-count">
              Question {current + 1}/{questions.length}
            </span>
          </div>
          <div className={`exam-timer ${timeDanger ? "danger" : ""}`}>
            <span className="exam-timer-icon">⏱️</span>
            {String(mm).padStart(2, "0")}:{String(ss).padStart(2, "0")}
          </div>
        </header>

        <div className="exam-progress-bar">
          <div
            className="exam-progress-fill"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="exam-body">
          <div className="exam-question-area">
            <div className="exam-question-card">
              <p className="question-text">{q.question}</p>
              <div className="options-list">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    className={`option-item ${answers[current] === i ? "selected" : ""}`}
                    onClick={() => {
                      const newAnswers = [...answers]
                      newAnswers[current] = i
                      setAnswers(newAnswers)
                    }}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="exam-nav">
              <button
                className="btn btn-secondary"
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
              >
                ← Prev
              </button>
              <button
                className={`btn ${flags[current] ? "btn-flag" : "btn-ghost"}`}
                onClick={() => {
                  const newFlags = [...flags]
                  newFlags[current] = !newFlags[current]
                  setFlags(newFlags)
                }}
              >
                {flags[current] ? "🚩 Flagged" : "🚩 Flag"}
              </button>
              {current < questions.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setCurrent((c) => c + 1)}
                >
                  Next →
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  disabled={answers.every((a) => a === null)}
                >
                  Submit Exam ✓
                </button>
              )}
            </div>
          </div>

          <aside className="exam-palette">
            <h3 className="palette-title">Questions</h3>
            <div className="palette-grid">
              {questions.map((_, i) => (
                <button
                  key={i}
                  className={`palette-item ${
                    i === current ? "current" : ""
                  } ${answers[i] !== null ? "answered" : ""} ${flags[i] ? "flagged" : ""}`}
                  onClick={() => setCurrent(i)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="palette-legend">
              <span><i className="legend-dot current" /> Current</span>
              <span><i className="legend-dot answered" /> Answered</span>
              <span><i className="legend-dot flagged" /> Flagged</span>
              <span><i className="legend-dot" /> Unanswered</span>
            </div>
            <div className="palette-summary">
              <span>
                Answered:{" "}
                <strong>{answers.filter((a) => a !== null).length}/{questions.length}</strong>
              </span>
              <span>
                Flagged: <strong>{flags.filter(Boolean).length}</strong>
              </span>
            </div>
            <button className="btn btn-success palette-submit" onClick={handleSubmit}>
              Finish & Submit
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}
