import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useAppStore } from "@/state/store"
import { loadLesson, getLessonSlug, type ParsedLesson } from "@/content/lessons"
import { NoteEditor } from "@/components/NoteEditor/NoteEditor"

export function LessonViewer() {
  const currentLesson = useAppStore((s) => s.currentLesson)
  const completedLessons = useAppStore((s) => s.completedLessons)
  const bookmarks = useAppStore((s) => s.bookmarks)
  const toggleBookmark = useAppStore((s) => s.toggleBookmark)
  const [lesson, setLesson] = useState<ParsedLesson | null | "loading">(null)

  useEffect(() => {
    if (!currentLesson) {
      setLesson(null)
      return
    }

    const info = getLessonSlug(currentLesson)
    if (!info) {
      setLesson(null)
      return
    }

    setLesson("loading")
    loadLesson(info.moduleId, info.slug)
      .then((result) => setLesson(result))
      .catch(() => setLesson(null))
  }, [currentLesson])

  const isCompleted = currentLesson ? completedLessons.includes(currentLesson) : false

  if (!currentLesson) {
    return (
      <div className="lesson-viewer empty">
        <p>Select a lesson from the sidebar to begin.</p>
      </div>
    )
  }

  if (lesson === "loading") {
    return (
      <div className="lesson-viewer" aria-busy="true">
        <div className="skeleton skeleton-badge" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line half" />
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="lesson-viewer">
        <p>Lesson not found.</p>
      </div>
    )
  }

  const isBookmarked = bookmarks.includes(currentLesson)

  return (
    <div className="lesson-viewer">
      <div className="lesson-header">
        <span className="lesson-badge">Module {lesson.module.slice(0, 2)}</span>
        <h2 className="lesson-title">{lesson.title}</h2>
        <div className="lesson-actions">
          <button
            className={`btn btn-ghost bookmark-btn ${isBookmarked ? "active" : ""}`}
            onClick={() => toggleBookmark(currentLesson)}
            title={isBookmarked ? "Remove bookmark" : "Bookmark this lesson"}
          >
            {isBookmarked ? "★" : "☆"}
          </button>
          {isCompleted && <span className="completed-badge">✓ Done</span>}
        </div>
      </div>
      <div className="lesson-body">
        <Markdown remarkPlugins={[remarkGfm]}>{lesson.body}</Markdown>
      </div>
      <NoteEditor lessonId={currentLesson} />
    </div>
  )
}
