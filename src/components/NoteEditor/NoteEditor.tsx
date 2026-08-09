import { useState, useEffect } from "react"
import { useAppStore } from "@/state/store"

interface NoteEditorProps {
  lessonId: string
}

export function NoteEditor({ lessonId }: NoteEditorProps) {
  const notes = useAppStore((s) => s.notes)
  const saveNote = useAppStore((s) => s.saveNote)
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState(notes[lessonId] ?? "")

  useEffect(() => {
    setDraft(notes[lessonId] ?? "")
  }, [lessonId, notes])

  function handleSave() {
    saveNote(lessonId, draft)
  }

  return (
    <div className="note-editor">
      <button className="btn btn-ghost note-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "📝 Hide Notes" : "📝 My Notes"}
        {notes[lessonId] && !isOpen && <span className="note-indicator">●</span>}
      </button>
      {isOpen && (
        <div className="note-content">
          <textarea
            className="note-textarea"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Yahan apne notes likho... Key concepts, doubts, shortcuts — sab yahan!"
            rows={5}
          />
          <div className="note-actions">
            <button className="btn btn-primary note-save" onClick={handleSave}>
              Save Note
            </button>
            {draft !== (notes[lessonId] ?? "") && (
              <span className="note-unsaved">Unsaved changes</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
