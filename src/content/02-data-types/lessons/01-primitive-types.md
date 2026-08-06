---
id: "02-data-types-01-primitive-types"
title: "Primitive Data Types"
module: "02-data-types"
order: 1
prerequisites: []
---

JavaScript mein 7 primitive types hain — ye directly value store karte hain (reference nahi).

**7 Primitive Types:**

1. **String** — Text: `"hello"`, `'Sheryians'`
2. **Number** — Numeric: `3`, `-99`, `3.14`
3. **Boolean** — True/False: `true`, `false`
4. **Undefined** — Variable declared lekin value assign nahi
5. **Null** — Intentional empty value
6. **Symbol** — Unique identifier (rare use)
7. **BigInt** — Bahut bare integers: `123456789012345678901234567890n`

```javascript
let name = "Sheryians"     // string
let score = 99             // number
let isActive = true        // boolean
let data = null            // null
let value                  // undefined
let big = 9007199254740991n // bigint
```

**Key Point:** Primitive types immutable hain — ek baar bana, change nahi kar sakte.
