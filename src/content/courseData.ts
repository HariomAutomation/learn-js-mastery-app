export const moduleOrder = [
  "01-variables-declarations",
  "02-data-types",
  "03-operators",
  "04-control-flow",
  "05-loops",
  "06-functions",
  "07-arrays",
  "08-objects",
  "09-strings",
  "10-dom",
  "11-events",
  "12-async",
  "13-oop",
]

export const lessonSlugs: Record<string, string[]> = {
  "01-variables-declarations": [
    "variables-intro",
    "var-let-const",
    "scope-hoisting",
  ],
  "02-data-types": [
    "primitive-types",
    "reference-types-typeof",
    "coercion-truthy-falsy",
  ],
  "03-operators": [
    "arithmetic-comparison",
    "logical-ternary",
  ],
  "04-control-flow": [
    "if-else-switch",
    "early-return",
  ],
  "05-loops": [
    "for-while",
    "for-of-for-in",
    "patterns-practice",
  ],
  "06-functions": [
    "function-basics",
    "arrow-functions",
    "closures-iife",
    "higher-order-functions",
  ],
  "07-arrays": [
    "array-methods",
    "map-filter-reduce",
    "array-patterns",
  ],
  "08-objects": [
    "object-basics",
    "destructuring-copying",
    "advanced-objects",
  ],
  "09-strings": [
    "string-basics",
    "string-methods",
    "string-patterns",
  ],
  "10-dom": [
    "dom-selectors",
    "dom-modify",
    "dom-create-delete",
  ],
  "11-events": [
    "event-basics",
    "event-delegation",
    "event-practice",
  ],
  "12-async": [
    "callbacks-promises",
    "async-await",
    "fetch-api",
  ],
  "13-oop": [
    "classes-inheritance",
    "prototypes-this",
    "oop-patterns",
  ],
}

const lessonTitles: Record<string, string> = {
  "variables-intro": "Variables kya hain?",
  "var-let-const": "var vs let vs const",
  "scope-hoisting": "Scope & Hoisting",
  "primitive-types": "Primitive Data Types",
  "reference-types-typeof": "Reference Types & typeof",
  "coercion-truthy-falsy": "Coercion & Truthy/Falsy",
  "arithmetic-comparison": "Arithmetic & Comparison",
  "logical-ternary": "Logical & Ternary",
  "if-else-switch": "if/else & switch-case",
  "early-return": "Early Return Pattern",
  "for-while": "for & while Loops",
  "for-of-for-in": "for-of & for-in",
  "patterns-practice": "Loop Patterns Practice",
  "function-basics": "Function Basics",
  "arrow-functions": "Arrow Functions",
  "closures-iife": "Closures & IIFE",
  "higher-order-functions": "Higher-Order Functions",
  "array-methods": "Array Methods",
  "map-filter-reduce": "map, filter, reduce",
  "array-patterns": "Array Patterns",
  "object-basics": "Object Basics",
  "destructuring-copying": "Destructuring & Copying",
  "advanced-objects": "Advanced Objects",
  "string-basics": "String Basics & Creation",
  "string-methods": "String Methods Deep Dive",
  "string-patterns": "String Patterns & Practice",
  "dom-selectors": "DOM Selectors",
  "dom-modify": "DOM Modify & Style",
  "dom-create-delete": "DOM Create & Delete",
  "event-basics": "Event Listeners Basics",
  "event-delegation": "Event Delegation",
  "event-practice": "Events Practice Projects",
  "callbacks-promises": "Callbacks & Promises",
  "async-await": "Async / Await",
  "fetch-api": "Fetch API & HTTP Requests",
  "classes-inheritance": "Classes & Inheritance",
  "prototypes-this": "Prototypes & this Keyword",
  "oop-patterns": "OOP Patterns & Practice",
}

const moduleIcons: Record<string, string> = {
  "01-variables-declarations": "let",
  "02-data-types": '"JS"',
  "03-operators": "+ - * /",
  "04-control-flow": "if()",
  "05-loops": "for()",
  "06-functions": "fn()",
  "07-arrays": "[]",
  "08-objects": "{}",
  "09-strings": '""',
  "10-dom": "DOM",
  "11-events": "on()",
  "12-async": "await",
  "13-oop": "class",
}

export function lessonTitle(slug: string): string {
  return lessonTitles[slug] ?? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
}

export function moduleIcon(moduleId: string): string {
  return moduleIcons[moduleId] ?? "</>"
}

export function lessonIdFor(moduleId: string, index: number, slug: string): string {
  return `${moduleId}-${String(index + 1).padStart(2, "0")}-${slug}`
}

let _allIds: string[] | null = null

export function allLessonIds(): string[] {
  if (_allIds) return _allIds
  const ids: string[] = []
  for (const mod of moduleOrder) {
    const slugs = lessonSlugs[mod] ?? []
    slugs.forEach((slug, i) => ids.push(lessonIdFor(mod, i, slug)))
  }
  _allIds = ids
  return ids
}

export function lessonSlugFromId(lessonId: string): string {
  // Format: {moduleId}-{XX}-{slug} — moduleId can contain dashes, so match the -XX- pattern
  const match = lessonId.match(/-(\d{2})-(.+)$/)
  return match ? match[2] : lessonId
}

export function lessonTitleFromId(lessonId: string): string {
  return lessonTitle(lessonSlugFromId(lessonId))
}

export function moduleFromLessonId(lessonId: string): string | null {
  for (const mod of moduleOrder) {
    if (lessonId.startsWith(`${mod}-`)) return mod
  }
  return null
}