import type { Exercise } from "@/types/content"
import allExercises from "@/data/all-exercises.json"

export function loadExercisesForLesson(lessonId: string): Exercise[] {
  return (allExercises as Record<string, Exercise[]>)[lessonId] ?? []
}
