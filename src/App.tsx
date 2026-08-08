import { useEffect, useState, useCallback, useRef } from "react"
import { Sidebar } from "@/components/Sidebar/Sidebar"
import { LessonViewer } from "@/components/LessonViewer/LessonViewer"
import { CodePlayground } from "@/components/CodePlayground/CodePlayground"
import { QuizEngine } from "@/components/QuizEngine/QuizEngine"
import { ProgressTracker } from "@/components/ProgressTracker/ProgressTracker"
import { Dashboard } from "@/components/Dashboard/Dashboard"
import { ExamCenter } from "@/components/ExamCenter/ExamCenter"
import { SearchModal } from "@/components/SearchModal/SearchModal"
import { useAppStore } from "@/state/store"
import { loadExercisesForLesson } from "@/content/exercises"
import { loadQuizForLesson, loadQuizForModule } from "@/content/quiz"
import { lessonTitleFromId } from "@/content/courseData"
import type { Exercise, QuizQuestion } from "@/types/content"
import modulesMeta from "@/content/modules"
import "./App.css"

const EXERCISES_PER_PAGE = 5

export default function App() {
  const setModules = useAppStore((s) => s.setModules)
  const initProgress = useAppStore((s) => s.initProgress)
  const currentLesson = useAppStore((s) => s.currentLesson)
  const completeLesson = useAppStore((s) => s.completeLesson)
  const view = useAppStore((s) => s.view)
  const currentModuleQuizId = useAppStore((s) => s.currentModuleQuizId)
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [exercisePage, setExercisePage] = useState(0)
  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [moduleQuiz, setModuleQuiz] = useState<QuizQuestion[]>([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("js-mastery-theme") as "dark" | "light") ?? "dark"
  })
  const contentRef = useRef<HTMLDivElement>(null)

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark"
      localStorage.setItem("js-mastery-theme", next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((s) => !s)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  useEffect(() => {
    const metaList = Object.values(modulesMeta)
    setModules(metaList)
    initProgress()
  }, [setModules, initProgress])

  useEffect(() => {
    if (!currentLesson) {
      setExercises([])
      setExercisePage(0)
      return
    }
    setExercises(loadExercisesForLesson(currentLesson))
    setExercisePage(0)
  }, [currentLesson])

  useEffect(() => {
    if (!currentLesson) {
      setQuiz([])
      return
    }
    loadQuizForLesson(currentLesson).then(setQuiz)
  }, [currentLesson])

  useEffect(() => {
    if (!currentModuleQuizId) {
      setModuleQuiz([])
      return
    }
    loadQuizForModule(currentModuleQuizId).then(setModuleQuiz)
  }, [currentModuleQuizId])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0
    }
  }, [currentLesson, view, currentModuleQuizId, exercisePage])

  const totalExercisePages = Math.ceil(exercises.length / EXERCISES_PER_PAGE)
  const currentExercises = exercises.slice(
    exercisePage * EXERCISES_PER_PAGE,
    (exercisePage + 1) * EXERCISES_PER_PAGE
  )

  return (
    <div className="app-layout">
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}
      <Sidebar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setSearchOpen(true)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="content-area" ref={contentRef}>
        {view === "home" && <Dashboard />}

        {view === "exam" && <ExamCenter />}

        {view === "moduleQuiz" && currentModuleQuizId && (
          <div className="module-quiz-view">
            <QuizEngine
              questions={moduleQuiz}
              moduleId={currentModuleQuizId}
              lessonTitle={modulesMeta[currentModuleQuizId]?.title ?? "Module Quiz"}
            />
          </div>
        )}

        {view === "lesson" && (
          <>
            <LessonViewer />
            {exercises.length > 0 && (
              <div className="practice-section">
                <div className="practice-header">
                  <div className="practice-header-left">
                    <h3 className="section-title">💻 Hands-on Practice</h3>
                    <span className="practice-count-badge">
                      {exercises.length} Total Exercises
                    </span>
                  </div>

                  {totalExercisePages > 1 && (
                    <div className="exercise-pagination">
                      <span className="pagination-info">
                        Showing {exercisePage * EXERCISES_PER_PAGE + 1}–
                        {Math.min((exercisePage + 1) * EXERCISES_PER_PAGE, exercises.length)} of {exercises.length}
                      </span>
                      <div className="pagination-buttons">
                        <button
                          className="btn btn-secondary btn-sm"
                          disabled={exercisePage === 0}
                          onClick={() => setExercisePage((p) => Math.max(0, p - 1))}
                        >
                          ← Prev
                        </button>
                        {Array.from({ length: totalExercisePages }).map((_, idx) => (
                          <button
                            key={idx}
                            className={`btn btn-sm ${idx === exercisePage ? "btn-primary" : "btn-ghost"}`}
                            onClick={() => setExercisePage(idx)}
                          >
                            {idx + 1}
                          </button>
                        ))}
                        <button
                          className="btn btn-secondary btn-sm"
                          disabled={exercisePage >= totalExercisePages - 1}
                          onClick={() => setExercisePage((p) => Math.min(totalExercisePages - 1, p + 1))}
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {currentExercises.map((ex, i) => (
                  <CodePlayground
                    key={ex.id ?? i}
                    title={ex.title}
                    starterCode={ex.starterCode}
                    solution={ex.solution}
                    hints={ex.hints}
                    tests={ex.tests}
                    exerciseId={ex.id}
                    theme={theme}
                  />
                ))}

                {totalExercisePages > 1 && (
                  <div className="exercise-pagination bottom-pagination">
                    <button
                      className="btn btn-secondary"
                      disabled={exercisePage === 0}
                      onClick={() => setExercisePage((p) => Math.max(0, p - 1))}
                    >
                      ← Previous 5 Exercises
                    </button>
                    <span className="pagination-info">
                      Page {exercisePage + 1} of {totalExercisePages}
                    </span>
                    <button
                      className="btn btn-secondary"
                      disabled={exercisePage >= totalExercisePages - 1}
                      onClick={() => setExercisePage((p) => Math.min(totalExercisePages - 1, p + 1))}
                    >
                      Next 5 Exercises →
                    </button>
                  </div>
                )}
              </div>
            )}
            {quiz.length > 0 && (
              <QuizEngine
                questions={quiz}
                lessonId={currentLesson ?? undefined}
                lessonTitle={currentLesson ? lessonTitleFromId(currentLesson) : undefined}
                onComplete={currentLesson ? () => completeLesson(currentLesson) : undefined}
              />
            )}
            <ProgressTracker />
          </>
        )}
      </main>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </div>
  )
}

