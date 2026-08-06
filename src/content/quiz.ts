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

export function shuffleQuestions<T>(items: T[], count: number, seed = 0): T[] {
  const pool = [...items]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  void seed
  return pool.slice(0, count)
}
