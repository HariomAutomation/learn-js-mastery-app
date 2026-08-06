import type { ExamResult, ProgressRecord, UserState } from "./schema"

const DB_NAME = "js-mastery-db"
const DB_VERSION = 2
const PROGRESS_STORE = "progress"
const USER_STORE = "user"
const EXAM_STORE = "exams"

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(PROGRESS_STORE)) {
        db.createObjectStore(PROGRESS_STORE, { keyPath: "lessonId" })
      }
      if (!db.objectStoreNames.contains(USER_STORE)) {
        db.createObjectStore(USER_STORE, { keyPath: "id" })
      }
      if (!db.objectStoreNames.contains(EXAM_STORE)) {
        db.createObjectStore(EXAM_STORE, { keyPath: "id", autoIncrement: true })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export interface StoredProgress {
  completedLessons: string[]
  quizScores: Record<string, number>
  xp: number
  streak: number
  lastActive: string
  bookmarks: string[]
  notes: Record<string, string>
}

interface UserStoreRecord extends UserState {
  id: string
  completedLessons: string[]
  quizScores: Record<string, number>
  bookmarks: string[]
  notes: Record<string, string>
}

export async function loadProgress(): Promise<StoredProgress | null> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(USER_STORE, "readonly")
    const store = tx.objectStore(USER_STORE)
    const request = store.get("main")

    request.onsuccess = () => {
      const result = request.result as UserStoreRecord | undefined
      if (result) {
        resolve({
          completedLessons: result.completedLessons || [],
          quizScores: result.quizScores || {},
          xp: result.xp,
          streak: result.streak,
          lastActive: result.lastActive,
          bookmarks: result.bookmarks || [],
          notes: result.notes || {},
        })
      } else {
        resolve(null)
      }
    }
    request.onerror = () => reject(request.error)
  })
}

export async function saveProgress(progress: StoredProgress): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(USER_STORE, "readwrite")
    const store = tx.objectStore(USER_STORE)
    const request = store.put({
      id: "main",
      completedLessons: progress.completedLessons,
      quizScores: progress.quizScores || {},
      xp: progress.xp,
      streak: progress.streak,
      lastActive: progress.lastActive,
      bookmarks: progress.bookmarks || [],
      notes: progress.notes || {},
    })

    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function saveLessonProgress(record: ProgressRecord): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_STORE, "readwrite")
    const store = tx.objectStore(PROGRESS_STORE)
    const request = store.put(record)

    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function getAllLessonProgress(): Promise<ProgressRecord[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(PROGRESS_STORE, "readonly")
    const store = tx.objectStore(PROGRESS_STORE)
    const request = store.getAll()

    request.onsuccess = () => resolve(request.result as ProgressRecord[])
    request.onerror = () => reject(request.error)
  })
}

export async function saveExamResult(result: ExamResult): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EXAM_STORE, "readwrite")
    const store = tx.objectStore(EXAM_STORE)
    const request = store.put(result)

    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function getExamResults(): Promise<ExamResult[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(EXAM_STORE, "readonly")
    const store = tx.objectStore(EXAM_STORE)
    const request = store.getAll()

    request.onsuccess = () => resolve(request.result as ExamResult[])
    request.onerror = () => reject(request.error)
  })
}
