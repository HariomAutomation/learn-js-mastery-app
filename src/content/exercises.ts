import type { Exercise } from "@/types/content"
import { getLessonSlug } from "./lessons"

const exerciseFiles = import.meta.glob('/src/content/**/exercises/*.json', {
  import: 'default',
}) as Record<string, () => Promise<Exercise>>

export async function loadExercisesForLesson(lessonId: string): Promise<Exercise[]> {
  const info = getLessonSlug(lessonId)
  if (!info) return []

  const exact = `/src/content/${info.moduleId}/exercises/${info.slug}.json`
  const extraPrefix = `/src/content/${info.moduleId}/exercises/${info.slug}-`

  const paths = Object.keys(exerciseFiles).filter(
    (p) => p === exact || p.startsWith(extraPrefix),
  )

  const results: Exercise[] = []
  for (const p of paths) {
    try {
      const ex = await exerciseFiles[p]()
      if (ex) results.push(ex)
    } catch {
      // skip broken file
    }
  }
  return results
}
