import { useEffect, useState, useCallback } from "react"
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

export default function App() {
  const setModules = useAppStore((s) => s.setModules)
  const initProgress = useAppStore((s) => s.initProgress)
  const currentLesson = useAppStore((s) => s.currentLesson)
  const completeLesson = useAppStore((s) => s.completeLesson)
  const view = useAppStore((s) => s.view)
  const currentModuleQuizId = useAppStore((s) => s.currentModuleQuizId)
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [quiz, setQuiz] = useState<QuizQuestion[]>([])
  const [moduleQuiz, setModuleQuiz] = useState<QuizQuestion[]>([])
  const [searchOpen, setSearchOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("js-mastery-theme") as "dark" | "light") ?? "dark"
  })

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
      return
    }
    setExercises(loadExercisesForLesson(currentLesson))
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

  return (
    <div className="app-layout">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} onOpenSearch={() => setSearchOpen(true)} />
      <main className="content-area">
        {view === "home" && <Dashboard />}

        {view === "exam" && <ExamCenter />}

        {view === "moduleQuiz" && currentModuleQuizId && (
          <div className="module-quiz-view">
            <QuizEngine
              questions={moduleQuiz}
              lessonTitle={modulesMeta[currentModuleQuizId]?.title ?? "Module Quiz"}
            />
          </div>
        )}

        {view === "lesson" && (
          <>
            <LessonViewer />
            {exercises.length > 0 && (
              <div className="practice-section">
                <h3 className="section-title">💻 Hands-on Practice</h3>
                {exercises.map((ex, i) => (
                  <CodePlayground
                    key={ex.id ?? i}
                    title={ex.title}
                    starterCode={ex.starterCode}
                    solution={ex.solution}
                    hints={ex.hints}
                    tests={ex.tests}
                  />
                ))}
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
