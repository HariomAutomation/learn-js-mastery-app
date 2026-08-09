import { useAppStore } from "@/state/store"
import type { ModuleMeta } from "@/types/content"
import modulesMeta from "@/content/modules"
import {
  moduleOrder,
  lessonSlugs,
  lessonTitle,
  lessonIdFor,
} from "@/content/courseData"

interface SidebarProps {
  theme: "dark" | "light"
  onToggleTheme: () => void
  onOpenSearch: () => void
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ theme, onToggleTheme, onOpenSearch, isOpen, onClose }: SidebarProps) {
  const currentModule = useAppStore((s) => s.currentModule)
  const currentLesson = useAppStore((s) => s.currentLesson)
  const setCurrentModule = useAppStore((s) => s.setCurrentModule)
  const setCurrentLesson = useAppStore((s) => s.setCurrentLesson)
  const setView = useAppStore((s) => s.setView)
  const startModuleQuiz = useAppStore((s) => s.startModuleQuiz)
  const completedLessons = useAppStore((s) => s.completedLessons)
  const quizScores = useAppStore((s) => s.quizScores)
  const view = useAppStore((s) => s.view)

  function handleLessonClick(lessonId: string) {
    setCurrentLesson(lessonId)
    onClose()
  }

  function handleDashboardClick() {
    setView("home")
    onClose()
  }

  function handleExamClick() {
    setView("exam")
    onClose()
  }

  function handleModuleClick(modId: string) {
    setCurrentModule(currentModule === modId ? null : modId)
  }

  function handleModuleQuizClick(modId: string) {
    startModuleQuiz(modId)
    onClose()
  }

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top">
        <h2 className="sidebar-title">JS Mastery</h2>
        <div className="sidebar-actions">
          <button className="btn btn-ghost sidebar-search-hint" title="Search (Ctrl+K)" onClick={onOpenSearch}>
            🔍
          </button>
          <button className="btn btn-ghost theme-toggle" onClick={onToggleTheme} title="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
      <nav>
        <button
          className={`module-header home-btn ${view === "home" ? "active" : ""}`}
          onClick={handleDashboardClick}
        >
          <span className="module-order">🏠</span>
          <span className="module-title">Dashboard</span>
        </button>

        {moduleOrder.map((modId) => {
          const meta = modulesMeta[modId] as ModuleMeta | undefined
          if (!meta) return null
          const lessons = lessonSlugs[modId] ?? []
          const isExpanded = currentModule === modId
          const moduleCompleted = lessons.filter((slug, i) =>
            completedLessons.includes(lessonIdFor(modId, i, slug))
          ).length
          const allLessonsDone = moduleCompleted === lessons.length && lessons.length > 0

          return (
            <div key={modId} className="module-group">
              <button
                className={`module-header ${isExpanded ? "active" : ""}`}
                onClick={() => handleModuleClick(modId)}
              >
                <span className="module-order">{meta.order}</span>
                <span className="module-title">{meta.title}</span>
                <span className="module-completed">
                  {moduleCompleted}/{lessons.length}
                </span>
              </button>
              {isExpanded && (
                <ul className="lesson-list">
                  {lessons.map((slug, i) => {
                    const lessonId = lessonIdFor(modId, i, slug)
                    const isDone = completedLessons.includes(lessonId)
                    const score = quizScores[lessonId]
                    return (
                      <li key={lessonId}>
                        <button
                          className={`lesson-item ${currentLesson === lessonId ? "active" : ""}`}
                          onClick={() => handleLessonClick(lessonId)}
                        >
                          {i + 1}. {lessonTitle(slug)}
                          {isDone && <span className="lesson-dot done">✓</span>}
                          {score !== undefined && score >= 70 && isDone && (
                            <span className="lesson-dot mastered">★</span>
                          )}
                        </button>
                      </li>
                    )
                  })}
                  {allLessonsDone && (
                    <li>
                      <button
                        className="lesson-item module-quiz-btn"
                        onClick={() => handleModuleQuizClick(modId)}
                      >
                        📝 Module Quiz
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </div>
          )
        })}

        <button
          className={`home-btn exam-btn ${view === "exam" ? "active" : ""}`}
          onClick={handleExamClick}
        >
          <span className="module-order">🎓</span>
          <span className="module-title">Final Exam</span>
        </button>
      </nav>
    </aside>
  )
}
