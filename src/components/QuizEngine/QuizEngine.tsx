import { useEffect, useRef, useState } from "react"
import type { QuizQuestion } from "@/types/content"
import { useAppStore } from "@/state/store"
import { XP_PER_QUIZ_NEW, XP_PER_QUIZ_RETRY, XP_PER_QUIZ_MODULE } from "@/constants"
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
  const [reviewMode, setReviewMode] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null))
  const recordedRef = useRef(false)
  const onCompleteFired = useRef(false)
  const recordQuizScore = useAppStore((s) => s.recordQuizScore)
  const addXP = useAppStore((s) => s.addXP)

  useEffect(() => {
    recordedRef.current = false
    onCompleteFired.current = false
  }, [questions])

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
  const currentQuestion = questions[currentIndex]

  useEffect(() => {
    if (!completed || recordedRef.current) return
    recordedRef.current = true
    if (lessonId) {
      const best = useAppStore.getState().quizScores[lessonId]
      if (best === undefined || percentage > best) {
        recordQuizScore(lessonId, percentage)
        addXP(best === undefined || percentage >= best ? XP_PER_QUIZ_NEW : XP_PER_QUIZ_RETRY)
      }
    } else if (moduleId) {
      const moduleKey = `module-${moduleId}`
      const current = useAppStore.getState().quizScores[moduleKey]
      const wasFirst = current === undefined
      const isBetter = current !== undefined && percentage > current
      if (wasFirst || isBetter) {
        recordQuizScore(moduleKey, percentage)
        addXP(XP_PER_QUIZ_MODULE)
      }
    } else {
      addXP(XP_PER_QUIZ_RETRY)
    }
  }, [completed, percentage, lessonId, moduleId, recordQuizScore, addXP])

  useEffect(() => {
    if (!completed || !onComplete || onCompleteFired.current) return
    onCompleteFired.current = true
    onComplete()
  }, [completed, onComplete])

  useEffect(() => {
    if (completed || reviewMode || questions.length === 0) return
    function handleKey(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const target = e.target as HTMLElement | null
      if (target && target.closest(".cm-content, input, textarea, [contenteditable='true']")) return
      const k = e.key
      let optionIdx = -1
      if (k.length === 1 && k >= "A" && k <= "Z") optionIdx = k.charCodeAt(0) - 65
      else if (k.length === 1 && k >= "a" && k <= "z") optionIdx = k.charCodeAt(0) - 97
      else if (k.length === 1 && k >= "1" && k <= "9") optionIdx = parseInt(k, 10) - 1

      if (optionIdx >= 0 && optionIdx < currentQuestion.options.length) {
        e.preventDefault()
        if (showExplanation) {
          handleNext()
        } else {
          setSelectedOption(optionIdx)
        }
        return
      }

      if (k === "Enter") {
        e.preventDefault()
        if (showExplanation) {
          handleNext()
        } else if (selectedOption !== null) {
          handleSubmit()
        }
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [completed, reviewMode, currentIndex, currentQuestion, selectedOption, showExplanation, questions.length])

  if (questions.length === 0) {
    return (
      <div className="quiz-engine">
        <p>No quiz available for this module.</p>
      </div>
    )
  }

  const answeredCount = answers.filter((a) => a !== null).length
  const progressPercent = Math.round((answeredCount / questions.length) * 100)

  function handleSelect(optionIndex: number) {
    if (showExplanation || completed) return
    setSelectedOption(optionIndex)
  }

  function handleSubmit() {
    if (selectedOption === null || showExplanation) return

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
    setReviewMode(false)
    setAnswers(new Array(questions.length).fill(null))
    recordedRef.current = false
    onCompleteFired.current = false
  }

  function handleReview() {
    setReviewMode(true)
    setCurrentIndex(0)
    setSelectedOption(null)
    setShowExplanation(false)
  }

  function optionClass(i: number, answeredOption: number | null): string {
    let cls = "option-item"
    if (i === currentQuestion.correctIndex) {
      cls += " correct"
    } else if (i === answeredOption && i !== currentQuestion.correctIndex) {
      cls += " incorrect"
    }
    return cls
  }

  if (completed) {
    const bestScore = lessonId
      ? useAppStore.getState().quizScores[lessonId]
      : moduleId
        ? useAppStore.getState().quizScores[`module-${moduleId}`]
        : undefined
    const isImprovement = bestScore !== undefined && percentage >= bestScore
    const wasFirstAttempt = bestScore === undefined

    if (reviewMode) {
      const reviewAnswer = answers[currentIndex]
      return (
        <div className="quiz-engine">
          <div className="quiz-header">
            <h3 className="quiz-title">Review — Question {currentIndex + 1} / {questions.length}</h3>
            <span className="quiz-progress">Reviewing</span>
          </div>

          <div className="quiz-question" key={`review-${currentIndex}`}>
            <p className="question-text">{currentQuestion.question}</p>
            <div className="options-list">
              {currentQuestion.options.map((option, i) => (
                <div key={i} className={optionClass(i, reviewAnswer)}>
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="option-text">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quiz-explanation animate-in">
            <p>
              <strong>{reviewAnswer === currentQuestion.correctIndex ? "✅ Sahi! " : "❌ Galat. "}</strong>
              {currentQuestion.explanation}
            </p>
          </div>

          <div className="quiz-actions">
            {currentIndex > 0 && (
              <button className="btn btn-secondary" onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}>
                ← Prev
              </button>
            )}
            {currentIndex < questions.length - 1 ? (
              <button className="btn btn-primary" onClick={() => setCurrentIndex((i) => i + 1)}>
                Next →
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => setReviewMode(false)}>
                Back to Results
              </button>
            )}
          </div>
        </div>
      )
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
                <span className="quiz-result-value">{(isImprovement || wasFirstAttempt) ? `+${XP_PER_QUIZ_NEW}` : `+${XP_PER_QUIZ_RETRY}`} XP</span>
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
              Review Questions
            </button>
          </div>
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
            let optionClassStr = "option-item"
            if (showExplanation) {
              if (i === currentQuestion.correctIndex) {
                optionClassStr += " correct"
              } else if (i === selectedOption && i !== currentQuestion.correctIndex) {
                optionClassStr += " incorrect"
              }
            } else if (i === selectedOption) {
              optionClassStr += " selected"
            }

            return (
              <button
                key={i}
                className={optionClassStr}
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