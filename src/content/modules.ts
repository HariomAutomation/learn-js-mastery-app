import mod01 from "./01-variables-declarations/meta.json"
import mod02 from "./02-data-types/meta.json"
import mod03 from "./03-operators/meta.json"
import mod04 from "./04-control-flow/meta.json"
import mod05 from "./05-loops/meta.json"
import mod06 from "./06-functions/meta.json"
import mod07 from "./07-arrays/meta.json"
import mod08 from "./08-objects/meta.json"
import mod09 from "./09-strings/meta.json"
import mod10 from "./10-dom/meta.json"
import mod11 from "./11-events/meta.json"
import mod12 from "./12-async/meta.json"
import mod13 from "./13-oop/meta.json"
import type { ModuleMeta } from "@/types/content"

const modulesMeta: Record<string, ModuleMeta> = {
  "01-variables-declarations": mod01 as ModuleMeta,
  "02-data-types": mod02 as ModuleMeta,
  "03-operators": mod03 as ModuleMeta,
  "04-control-flow": mod04 as ModuleMeta,
  "05-loops": mod05 as ModuleMeta,
  "06-functions": mod06 as ModuleMeta,
  "07-arrays": mod07 as ModuleMeta,
  "08-objects": mod08 as ModuleMeta,
  "09-strings": mod09 as ModuleMeta,
  "10-dom": mod10 as ModuleMeta,
  "11-events": mod11 as ModuleMeta,
  "12-async": mod12 as ModuleMeta,
  "13-oop": mod13 as ModuleMeta,
}

export default modulesMeta
