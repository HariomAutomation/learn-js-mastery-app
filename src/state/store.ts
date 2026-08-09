import { create } from "zustand"
import type { ModuleMeta } from "@/types/content"
import { loadProgress, saveProgress } from "@/db/progress"
import { XP_PER_LESSON } from "@/constants"

export type View = "home" | "lesson" | "exam" | "moduleQuiz"

const SAVE_DEBOUNCE_MS = 400

interface AppState {
  modules: ModuleMeta[]
  currentModule: string | null
  currentLesson: string | null
  view: View
  xp: number
  streak: number
  lastActive: string
  completedLessons: string[]
  quizScores: Record<string, number>
  bookmarks: string[]
  notes: Record<string, string>
  currentModuleQuizId: string | null
  examVersion: number
  setModules: (modules: ModuleMeta[]) => void
  setCurrentModule: (id: string | null) => void
  setCurrentLesson: (id: string | null) => void
  setView: (view: View) => void
  completeLesson: (lessonId: string) => void
  recordQuizScore: (lessonId: string, percent: number) => void
  addXP: (amount: number) => void
  initProgress: () => Promise<void>
  toggleBookmark: (lessonId: string) => void
  saveNote: (lessonId: string, content: string) => void
  startModuleQuiz: (moduleId: string) => void
  bumpExamVersion: () => void
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0]
}

function persistState(): void {
  const s = useAppStore.getState()
  saveProgress({
    completedLessons: s.completedLessons,
    quizScores: s.quizScores,
    xp: s.xp,
    streak: s.streak,
    lastActive: s.lastActive,
    bookmarks: s.bookmarks,
    notes: s.notes,
  }).catch(() => {
    // Best-effort persistence — ignore IndexedDB failures
  })
}

let saveTimer: ReturnType<typeof setTimeout> | null = null

function persistSoon(): void {
  if (saveTimer) clearTimeout(saveTimer)
  saveTimer = setTimeout(() => {
    saveTimer = null
    persistState()
  }, SAVE_DEBOUNCE_MS)
}

function flushPendingSave(): void {
  if (saveTimer) {
    clearTimeout(saveTimer)
    saveTimer = null
    persistState()
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", flushPendingSave)
}

export const useAppStore = create<AppState>((set, get) => ({
  modules: [],
  currentModule: null,
  currentLesson: null,
  view: "home",
  xp: 0,
  streak: 0,
  lastActive: "",
  completedLessons: [],
  quizScores: {},
  bookmarks: [],
  notes: {},
  currentModuleQuizId: null,
  examVersion: 0,
  setModules: (modules) => set({ modules }),
  setCurrentModule: (id) => set({ currentModule: id, currentLesson: null }),
  setCurrentLesson: (id) => {
    set({ currentLesson: id, view: "lesson" })
    if (id) set({ currentModule: get().currentModule })
  },
  setView: (view) => set({ view }),
  startModuleQuiz: (moduleId) => {
    set({ currentModuleQuizId: moduleId, view: "moduleQuiz" })
  },
  completeLesson: (lessonId) => {
    const { completedLessons } = get()
    if (completedLessons.includes(lessonId)) return
    set({ completedLessons: [...completedLessons, lessonId] })
    set({ xp: get().xp + XP_PER_LESSON })
    persistSoon()
  },
  recordQuizScore: (lessonId, percent) => {
    set({ quizScores: { ...get().quizScores, [lessonId]: percent } })
    persistSoon()
  },
  addXP: (amount) => {
    set({ xp: get().xp + amount })
    persistSoon()
  },
  toggleBookmark: (lessonId) => {
    const { bookmarks } = get()
    const newBookmarks = bookmarks.includes(lessonId)
      ? bookmarks.filter((id) => id !== lessonId)
      : [...bookmarks, lessonId]
    set({ bookmarks: newBookmarks })
    persistSoon()
  },
  saveNote: (lessonId, content) => {
    set({ notes: { ...get().notes, [lessonId]: content } })
    persistSoon()
  },
  bumpExamVersion: () => set((s) => ({ examVersion: s.examVersion + 1 })),
  initProgress: async () => {
    const progress = await loadProgress()
    const today = todayISO()
    if (progress) {
      const lastActive = progress.lastActive
      let streak = progress.streak

      if (lastActive) {
        const lastDate = new Date(lastActive)
        const todayDate = new Date(today)
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))

        if (diffDays === 1) {
          streak += 1
        } else if (diffDays > 1) {
          streak = 1
        }
      } else {
        streak = 1
      }

      set({
        xp: progress.xp || 0,
        streak,
        completedLessons: progress.completedLessons || [],
        quizScores: progress.quizScores || {},
        bookmarks: progress.bookmarks || [],
        notes: progress.notes || {},
        lastActive: today,
      })
      persistSoon()
    } else {
      set({ streak: 1, lastActive: today })
      persistSoon()
    }
  },
}))