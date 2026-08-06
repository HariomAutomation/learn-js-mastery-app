import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs"
import { join, basename } from "path"

const contentDir = "src/content"
const modules = readdirSync(contentDir).filter(d => d.match(/^\d{2}-/))

const lessonSlugs = {
  "01-variables-declarations": ["variables-intro", "var-let-const", "scope-hoisting"],
  "02-data-types": ["primitive-types", "reference-types-typeof", "coercion-truthy-falsy"],
  "03-operators": ["arithmetic-comparison", "logical-ternary"],
  "04-control-flow": ["if-else-switch", "early-return"],
  "05-loops": ["for-while", "for-of-for-in", "patterns-practice"],
  "06-functions": ["function-basics", "arrow-functions", "closures-iife", "higher-order-functions"],
  "07-arrays": ["array-methods", "map-filter-reduce", "array-patterns"],
  "08-objects": ["object-basics", "destructuring-copying", "advanced-objects"],
  "09-strings": ["string-basics", "string-methods", "string-patterns"],
  "10-dom": ["dom-selectors", "dom-modify", "dom-create-delete"],
  "11-events": ["event-basics", "event-delegation", "event-practice"],
  "12-async": ["callbacks-promises", "async-await", "fetch-api"],
  "13-oop": ["classes-inheritance", "prototypes-this", "oop-patterns"],
}

const allExercises = {}

for (const mod of modules) {
  const exercisesDir = join(contentDir, mod, "exercises")
  const slugs = lessonSlugs[mod] || []
  
  try {
    const files = readdirSync(exercisesDir).filter(f => f.endsWith(".json")).sort()
    
    for (const file of files) {
      const name = file.replace(".json", "")
      const lastDash = name.lastIndexOf("-")
      const num = parseInt(name.slice(lastDash + 1))
      const slug = name.slice(0, lastDash)
      
      const slugIndex = slugs.indexOf(slug)
      if (slugIndex === -1) continue
      
      const lessonId = `${mod}-${String(slugIndex + 1).padStart(2, "0")}-${slug}`
      
      try {
        const data = JSON.parse(readFileSync(join(exercisesDir, file), "utf-8"))
        if (!allExercises[lessonId]) allExercises[lessonId] = []
        allExercises[lessonId].push(data)
      } catch (e) {
        console.error(`  Error reading ${file}: ${e.message}`)
      }
    }
  } catch {
    // no exercises dir
  }
}

let total = 0
for (const [k, v] of Object.entries(allExercises)) {
  total += v.length
  console.log(`  ${k}: ${v.length} exercises`)
}

console.log(`\nTotal: ${total} exercises across ${Object.keys(allExercises).length} lessons`)

mkdirSync("src/data", { recursive: true })
writeFileSync("src/data/all-exercises.json", JSON.stringify(allExercises, null, 2))
console.log("Written to src/data/all-exercises.json")
