---
id: "01-variables-declarations-03-scope-hoisting"
title: "Scope & Hoisting"
module: "01-variables-declarations"
order: 3
prerequisites: []
---

**Scope types:**
- **Global Scope** — har jagah accessible
- **Function Scope** — sirf function ke andar
- **Block Scope** — sirf `{}` ke andar (let, const)

**Hoisting:**
JS declarations ko upar le jaati hai, lekin initialization nahi.

```javascript
console.log(a) // undefined (hoisted with undefined)
var a = 10

console.log(b) // ❌ ReferenceError (TDZ mein)
let b = 20
```

**Temporal Dead Zone (TDZ):**
`let` aur `const` hoisted hote hain lekin initialization se pehela access nahi kar sakte.

```javascript
// TDZ starts here
// console.log(x) ❌ Error
let x = 5 // TDZ ends here
```

**Mindset:** Declaration ko hamesha top par rakho. `const` default, `let` jab zaroorat.
