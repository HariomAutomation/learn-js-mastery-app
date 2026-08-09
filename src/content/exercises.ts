import type { Exercise } from "@/types/content"

let cache: Record<string, Exercise[]> | null = null

export async function loadExercisesForLesson(lessonId: string): Promise<Exercise[]> {
  if (!cache) {
    const data = await import("@/data/all-exercises.json")
    cache = data.default as Record<string, Exercise[]>
  }
  return cache[lessonId] ?? []
}