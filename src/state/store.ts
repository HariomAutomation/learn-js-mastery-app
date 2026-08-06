import { create } from "zustand"
import type { ModuleMeta } from "@/types/content"
import { loadProgress, saveProgress } from "@/db/progress"

export type View = "home" | "lesson" | "exam" | "moduleQuiz"

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
    const newCompleted = [...completedLessons, lessonId]
    set({ completedLessons: newCompleted })
    get().addXP(25)
  },
  recordQuizScore: (lessonId, percent) => {
    const scores = { ...get().quizScores, [lessonId]: percent }
    set({ quizScores: scores })
    saveProgress({
      completedLessons: get().completedLessons,
      quizScores: scores,
      xp: get().xp,
      streak: get().streak,
      lastActive: get().lastActive,
      bookmarks: get().bookmarks,
      notes: get().notes,
    })
  },
  addXP: (amount) => {
    const newXP = get().xp + amount
    set({ xp: newXP })
    saveProgress({
      completedLessons: get().completedLessons,
      quizScores: get().quizScores,
      xp: newXP,
      streak: get().streak,
      lastActive: get().lastActive,
      bookmarks: get().bookmarks,
      notes: get().notes,
    })
  },
  toggleBookmark: (lessonId) => {
    const { bookmarks } = get()
    const newBookmarks = bookmarks.includes(lessonId)
      ? bookmarks.filter((id) => id !== lessonId)
      : [...bookmarks, lessonId]
    set({ bookmarks: newBookmarks })
    saveProgress({
      completedLessons: get().completedLessons,
      quizScores: get().quizScores,
      xp: get().xp,
      streak: get().streak,
      lastActive: get().lastActive,
      bookmarks: newBookmarks,
      notes: get().notes,
    })
  },
  saveNote: (lessonId, content) => {
    const newNotes = { ...get().notes, [lessonId]: content }
    set({ notes: newNotes })
    saveProgress({
      completedLessons: get().completedLessons,
      quizScores: get().quizScores,
      xp: get().xp,
      streak: get().streak,
      lastActive: get().lastActive,
      bookmarks: get().bookmarks,
      notes: newNotes,
    })
  },
  initProgress: async () => {
    const progress = await loadProgress()
    if (progress) {
      const today = new Date().toISOString().split("T")[0]
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
    } else {
      const today = new Date().toISOString().split("T")[0]
      set({ streak: 1, lastActive: today })
      saveProgress({ completedLessons: [], quizScores: {}, xp: 0, streak: 1, lastActive: today, bookmarks: [], notes: {} })
    }
  },
}))
