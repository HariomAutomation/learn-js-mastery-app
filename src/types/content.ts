export interface ModuleMeta {
  id: string
  title: string
  order: number
  description: string
  prerequisites: string[]
  lessonCount: number
}

export interface LessonFrontmatter {
  id: string
  title: string
  module: string
  order: number
  prerequisites: string[]
}

export interface Exercise {
  id: string
  title: string
  starterCode: string
  solution: string
  tests: { input: unknown[]; expected: unknown }[]
  hints: string[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ModuleData {
  meta: ModuleMeta
  lessons: LessonFrontmatter[]
  exercises: Exercise[]
  quiz: QuizQuestion[]
}

export interface ElectronAPI {
  getModules: () => Promise<ModuleMeta[]>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
