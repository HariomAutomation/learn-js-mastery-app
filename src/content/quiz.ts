import type { QuizQuestion } from "@/types/content"
import { getLessonSlug } from "./lessons"

const quizFiles = import.meta.glob('/src/content/**/quiz.json', {
  import: 'default',
}) as Record<string, () => Promise<QuizQuestion[]>>

const lessonQuizFiles = import.meta.glob('/src/content/**/quizzes/*.json', {
  import: 'default',
}) as Record<string, () => Promise<QuizQuestion[]>>

export async function loadQuizForLesson(lessonId: string): Promise<QuizQuestion[]> {
  const info = getLessonSlug(lessonId)
  if (!info) return []

  const path = `/src/content/${info.moduleId}/quizzes/${info.slug}.json`
  const loader = lessonQuizFiles[path]
  if (!loader) return []

  try {
    return await loader()
  } catch {
    return []
  }
}

export async function loadQuizForModule(moduleId: string): Promise<QuizQuestion[]> {
  const path = `/src/content/${moduleId}/quiz.json`
  const loader = quizFiles[path]
  if (!loader) return []

  try {
    return await loader()
  } catch {
    return []
  }
}

export async function loadAllQuizQuestions(): Promise<QuizQuestion[]> {
  const paths = Object.keys(lessonQuizFiles)
  const results = await Promise.all(paths.map((p) => lessonQuizFiles[p]().catch(() => [])))
  return results.flat()
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function shuffleQuestions<T>(items: T[], count: number, seed = 0): T[] {
  const pool = [...items]
  const rand = mulberry32(seed)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}
