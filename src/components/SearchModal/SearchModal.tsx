import { useEffect, useState, useMemo } from "react"
import { useAppStore } from "@/state/store"
import {
  lessonTitleFromId,
  moduleFromLessonId,
  moduleOrder,
  lessonSlugs,
  lessonIdFor,
} from "@/content/courseData"
import modulesMeta from "@/content/modules"

interface SearchResult {
  id: string
  type: "lesson" | "module"
  title: string
  subtitle: string
  done: boolean
}

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("")
  const completedLessons = useAppStore((s) => s.completedLessons)
  const setCurrentModule = useAppStore((s) => s.setCurrentModule)
  const setCurrentLesson = useAppStore((s) => s.setCurrentLesson)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length === 0) return []

    const items: SearchResult[] = []

    for (const modId of moduleOrder) {
      const meta = modulesMeta[modId]
      const modTitle = meta?.title ?? modId

      if (modTitle.toLowerCase().includes(q) || modId.toLowerCase().includes(q)) {
        items.push({
          id: modId,
          type: "module",
          title: modTitle,
          subtitle: `Module · ${lessonSlugs[modId]?.length ?? 0} lessons`,
          done: false,
        })
      }

      const slugs = lessonSlugs[modId] ?? []
      for (let i = 0; i < slugs.length; i++) {
        const lessonId = lessonIdFor(modId, i, slugs[i])
        const title = lessonTitleFromId(lessonId)
        const slug = slugs[i]

        if (
          title.toLowerCase().includes(q) ||
          slug.toLowerCase().includes(q) ||
          lessonId.toLowerCase().includes(q)
        ) {
          items.push({
            id: lessonId,
            type: "lesson",
            title,
            subtitle: modTitle,
            done: completedLessons.includes(lessonId),
          })
        }
      }
    }

    return items.slice(0, 15)
  }, [query, completedLessons])

  function handleSelect(item: SearchResult) {
    if (item.type === "module") {
      setCurrentModule(item.id)
    } else {
      const modId = moduleFromLessonId(item.id)
      if (modId) {
        setCurrentModule(modId)
        setCurrentLesson(item.id)
      }
    }
    onClose()
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search lessons, modules... (e.g. closures, map, DOM, async)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>
        {query.trim().length > 0 && (
          <div className="search-results">
            {results.length > 0 ? (
              results.map((item) => (
                <button
                  key={item.id}
                  className="search-result-item"
                  onClick={() => handleSelect(item)}
                >
                  <div className="search-result-left">
                    <span className="search-result-title">{item.title}</span>
                    <span className="search-result-module">{item.subtitle}</span>
                  </div>
                  <div className="search-result-right">
                    {item.type === "module" && (
                      <span className="search-result-tag module-tag">Module</span>
                    )}
                    {item.done && (
                      <span className="search-result-tag done-tag">✓ Done</span>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <p className="search-empty">Kuch nahi mila "{query}" ke liye</p>
            )}
          </div>
        )}
        {query.trim().length === 0 && (
          <div className="search-hints">
            <p>Type to search across all lessons & modules...</p>
            <div className="search-examples">
              <span>"closures"</span>
              <span>"map filter"</span>
              <span>"DOM"</span>
              <span>"async"</span>
              <span>"arrow function"</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
