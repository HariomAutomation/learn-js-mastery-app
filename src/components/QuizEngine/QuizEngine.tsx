import { useEffect, useRef, useState } from "react"
import type { QuizQuestion } from "@/types/content"
import { useAppStore } from "@/state/store"
import { ProgressRing } from "@/components/ProgressRing/ProgressRing"
import { Confetti } from "@/components/Confetti/Confetti"

interface QuizEngineProps {
  questions: QuizQuestion[]
  lessonId?: string
  moduleId?: string
  lessonTitle?: string
  onComplete?: () => void
}

export function QuizEngine({ questions, lessonId, moduleId, lessonTitle, onComplete }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const [reviewMode, setReviewMode] = useState(false)
  const recordedRef = useRef(false)
  const onCompleteFired = useRef(false)
  const recordQuizScore = useAppStore((s) => s.recordQuizScore)
  const addXP = useAppStore((s) => s.addXP)

  useEffect(() => {
    recordedRef.current = false
    onCompleteFired.current = false
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
    setAnswers(new Array(questions.length).fill(null))
    setReviewMode(false)
  }, [questions])

  if (questions.length === 0) {
    return (
      <div className="quiz-engine">
        <p>No quiz available for this module.</p>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const answeredCount = answers.filter((a) => a !== null).length
  const progressPercent = Math.round((answeredCount / questions.length) * 100)

  function handleSelect(optionIndex: number) {
    if (showExplanation || reviewMode) return
    setSelectedOption(optionIndex)
  }

  function handleSubmit() {
    if (selectedOption === null) return

    const newAnswers = [...answers]
    newAnswers[currentIndex] = selectedOption
    setAnswers(newAnswers)

    if (selectedOption === currentQuestion.correctIndex) {
      setScore((s) => s + 1)
    }
    setShowExplanation(true)
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    } else {
      setCompleted(true)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setCompleted(false)
    setAnswers(new Array(questions.length).fill(null))
    setReviewMode(false)
    recordedRef.current = false
    onCompleteFired.current = false
  }

  function handleReview() {
    setReviewMode(true)
    setCompleted(false)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
  }

  if (completed && !reviewMode) {
    const percentage = Math.round((score / questions.length) * 100)
    const bestScore = lessonId ? useAppStore.getState().quizScores[lessonId] : undefined
    const isImprovement = bestScore !== undefined && percentage >= bestScore
    const wasFirstAttempt = bestScore === undefined

    if (!recordedRef.current) {
      recordedRef.current = true
      if (lessonId) {
        const current = useAppStore.getState().quizScores[lessonId]
        if (current === undefined || percentage > current) {
          recordQuizScore(lessonId, percentage)
          addXP(isImprovement || wasFirstAttempt ? 30 : 10)
        }
      } else if (moduleId) {
        const moduleKey = `module-${moduleId}`
        const current = useAppStore.getState().quizScores[moduleKey]
        const wasFirst = current === undefined
        const isBetter = current !== undefined && percentage > current
        if (wasFirst || isBetter) {
          recordQuizScore(moduleKey, percentage)
          addXP(50)
        }
      } else {
        addXP(10)
      }
    }

    if (!onCompleteFired.current && onComplete) {
      onCompleteFired.current = true
      onComplete()
    }

    return (
      <div className="quiz-engine">
        <Confetti active={percentage >= 80} count={60} />
        <div className="quiz-completed">
          <h3 className="quiz-title">Quiz Complete!</h3>
          <div className="quiz-result-row">
            <ProgressRing
              percent={percentage}
              size={130}
              stroke={12}
              color={percentage >= 80 ? "#a6e3a1" : percentage >= 50 ? "#f9e2af" : "#f38ba8"}
              label={`${percentage}%`}
            />
            <div className="quiz-result-stats">
              <div className="quiz-result-stat">
                <span className="quiz-result-value">{score}/{questions.length}</span>
                <span className="quiz-result-label">Correct</span>
              </div>
              <div className="quiz-result-stat">
                <span className="quiz-result-value">{(isImprovement || wasFirstAttempt) ? "+30" : "+10"} XP</span>
                <span className="quiz-result-label">Earned</span>
              </div>
              {!wasFirstAttempt && (
                <div className="quiz-result-stat">
                  <span className="quiz-result-value">{bestScore}%</span>
                  <span className="quiz-result-label">Previous Best</span>
                </div>
              )}
            </div>
          </div>
          <p className="quiz-feedback">
            {percentage >= 80
              ? "Excellent! Concept mastered! 💪"
              : percentage >= 50
                ? "Good effort! Review the material and try again."
                : "Keep practicing! Review the lessons and retry."}
          </p>
          <div className="quiz-completed-actions">
            <button className="btn btn-primary" onClick={handleRestart}>
              Retry Quiz
            </button>
            <button className="btn btn-secondary" onClick={handleReview}>
              Review Answers
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (reviewMode) {
    const q = questions[currentIndex]
    const userAnswer = answers[currentIndex]
    const isCorrect = userAnswer === q.correctIndex

    return (
      <div className="quiz-engine">
        <div className="quiz-header">
          <h3 className="quiz-title">{lessonTitle ? `${lessonTitle} — Review` : "Review Answers"}</h3>
          <span className="quiz-progress">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
        </div>

        <div className="quiz-question" key={currentIndex}>
          <p className="question-text">{q.question}</p>
          <div className="options-list">
            {q.options.map((option, i) => {
              let optionClass = "option-item"
              if (i === q.correctIndex) {
                optionClass += " correct"
              } else if (i === userAnswer && i !== q.correctIndex) {
                optionClass += " incorrect"
              }
              return (
                <button key={i} className={optionClass} disabled>
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="option-text">{option}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="quiz-explanation animate-in">
          <p>
            <strong>{isCorrect ? "✅ Sahi jawab! " : "❌ Galat jawab. "}</strong>
            {q.explanation}
          </p>
        </div>

        <div className="quiz-actions">
          {currentIndex > 0 && (
            <button className="btn btn-secondary" onClick={() => setCurrentIndex((i) => i - 1)}>
              ← Previous
            </button>
          )}
          {currentIndex < questions.length - 1 ? (
            <button className="btn btn-primary" onClick={() => setCurrentIndex((i) => i + 1)}>
              Next →
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleRestart}>
              Back to Results
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-engine">
      <Confetti active={false} />
      <div className="quiz-header">
        <h3 className="quiz-title">{lessonTitle ? `${lessonTitle} — Quiz` : "Lesson Quiz"}</h3>
        <span className="quiz-progress">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="quiz-question" key={currentIndex}>
        <p className="question-text">{currentQuestion.question}</p>
        <div className="options-list">
          {currentQuestion.options.map((option, i) => {
            let optionClass = "option-item"
            if (showExplanation) {
              if (i === currentQuestion.correctIndex) {
                optionClass += " correct"
              } else if (i === selectedOption && i !== currentQuestion.correctIndex) {
                optionClass += " incorrect"
              }
            } else if (i === selectedOption) {
              optionClass += " selected"
            }

            return (
              <button
                key={i}
                className={optionClass}
                onClick={() => handleSelect(i)}
                disabled={showExplanation}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{option}</span>
              </button>
            )
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="quiz-explanation animate-in">
          <p>
            <strong>{selectedOption === currentQuestion.correctIndex ? "✅ Sahi! " : "❌ Galat. "}</strong>
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div className="quiz-actions">
        {!showExplanation ? (
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleNext}>
            {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  )
}
