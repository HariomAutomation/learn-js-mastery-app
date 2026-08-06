import { moduleOrder, lessonSlugs } from "./courseData"

export interface ParsedLesson {
  id: string
  title: string
  module: string
  order: number
  prerequisites: string[]
  body: string
}

export function parseFrontmatter(raw: string): ParsedLesson {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    return {
      id: "unknown",
      title: "Untitled",
      module: "",
      order: 0,
      prerequisites: [],
      body: raw,
    }
  }

  const fm: Record<string, unknown> = {}
  const lines = match[1].split("\n")
  for (const line of lines) {
    const colonIdx = line.indexOf(": ")
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let rawValue = line.slice(colonIdx + 2).trim()

    if (rawValue === "[]") {
      fm[key] = []
    } else if (rawValue.startsWith("[") && rawValue.endsWith("]")) {
      try {
        fm[key] = JSON.parse(rawValue.replace(/'/g, '"'))
      } catch {
        fm[key] = [rawValue.slice(1, -1)]
      }
    } else if (!isNaN(Number(rawValue))) {
      fm[key] = Number(rawValue)
    } else if (rawValue === "true" || rawValue === "false") {
      fm[key] = rawValue === "true"
    } else {
      fm[key] = rawValue
    }
  }

  return {
    id: (fm["id"] as string) ?? "unknown",
    title: (fm["title"] as string) ?? "Untitled",
    module: (fm["module"] as string) ?? "",
    order: (fm["order"] as number) ?? 0,
    prerequisites: (fm["prerequisites"] as string[]) ?? [],
    body: match[2].trim(),
  }
}

const lessonModules = import.meta.glob<string>(
  "./**/lessons/*.md",
  { query: "?raw", import: "default", eager: false }
)

const lessonCache: Record<string, ParsedLesson> = {}

function findLessonKey(moduleId: string, slug: string): string | null {
  for (const key of Object.keys(lessonModules)) {
    if (key.includes(`/${moduleId}/lessons/`) && key.includes(`${slug}.md`)) {
      return key
    }
  }
  return null
}

export async function loadLesson(moduleId: string, slug: string): Promise<ParsedLesson | null> {
  const cacheKey = `${moduleId}/${slug}`
  if (lessonCache[cacheKey]) return lessonCache[cacheKey]

  const key = findLessonKey(moduleId, slug)
  if (!key) return null

  const loader = lessonModules[key]
  if (!loader) return null

  try {
    const raw = await loader()
    const parsed = parseFrontmatter(raw)
    lessonCache[cacheKey] = parsed
    return parsed
  } catch {
    return null
  }
}

export function getLessonSlug(lessonId: string): { moduleId: string; slug: string } | null {
  for (const modId of moduleOrder) {
    const slugs = lessonSlugs[modId] ?? []
    for (let i = 0; i < slugs.length; i++) {
      const expectedId = `${modId}-${String(i + 1).padStart(2, "0")}-${slugs[i]}`
      if (lessonId === expectedId) {
        return { moduleId: modId, slug: slugs[i] }
      }
    }
  }
  return null
}
