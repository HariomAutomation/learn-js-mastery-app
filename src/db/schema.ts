export interface ProgressRecord {
  lessonId: string
  completed: boolean
  score: number | null
  updatedAt: string
}

export interface ExamResult {
  date: string
  score: number
  total: number
  passed: boolean
  timeUsed: number
}

export interface UserState {
  xp: number
  streak: number
  lastActive: string
  completedLessons: string[]
}