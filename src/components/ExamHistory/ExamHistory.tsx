import { useEffect, useState } from "react"
import { getExamResults } from "@/db/progress"
import type { ExamResult } from "@/db/schema"

export function ExamHistory() {
  const [results, setResults] = useState<ExamResult[]>([])

  useEffect(() => {
    getExamResults().then(setResults)
  }, [])

  if (results.length === 0) {
    return (
      <div className="exam-history">
        <h3 className="section-title">📜 Exam History</h3>
        <p className="exam-history-empty">Abhi tak koi exam nahi diya. Final Exam lo aur history banao!</p>
      </div>
    )
  }

  const sorted = [...results].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="exam-history">
      <h3 className="section-title">📜 Exam History</h3>
      <div className="exam-history-list">
        {sorted.map((r, i) => (
          <div key={i} className={`exam-history-item ${r.passed ? "passed" : "failed"}`}>
            <div className="exam-history-left">
              <span className={`exam-history-badge ${r.passed ? "pass" : "fail"}`}>
                {r.passed ? "✓ PASS" : "✗ FAIL"}
              </span>
              <span className="exam-history-score">
                {r.score}/{r.total} ({Math.round((r.score / r.total) * 100)}%)
              </span>
            </div>
            <div className="exam-history-right">
              <span className="exam-history-time">
                ⏱ {Math.floor(r.timeUsed / 60)}m {r.timeUsed % 60}s
              </span>
              <span className="exam-history-date">
                {new Date(r.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
