const n=`---
id: "03-operators-02-logical-ternary"
title: "Logical & Ternary Operators"
module: "03-operators"
order: 2
prerequisites: []
---

**Logical Operators — Multiple conditions combine karne ke liye:**

\`\`\`javascript
// && (AND) — dono true hone chahiye
let age = 20, hasID = true
age >= 18 && hasID  // true

// || (OR) — koi ek true chahiye
let isAdmin = false, isEditor = true
isAdmin || isEditor  // true

// ! (NOT) — ulta kar deta hai
!true   // false
!false  // true
\`\`\`

**Short-circuit evaluation:**
\`\`\`javascript
// && mein pehle false mila to baaki check nahi hota
// || mein pehle true mila to baaki check nahi hota
let result = false && console.log("Won't print")
let value = "default" || "fallback"  // "default"
\`\`\`

**Ternary Operator — if/else ka shorthand:**
\`\`\`javascript
let score = 80
let grade = score > 50 ? "Pass" : "Fail"
// condition ? valueIfTrue : valueIfFalse
\`\`\`

**Unary Operators:**
\`\`\`javascript
let x = "5"
+x       // 5 (string → number)
-x       // -5
typeof x // "string"
++x      // increment
--x      // decrement
\`\`\`

**Quick Boolean trick:**
\`\`\`javascript
!!"Sheryians" // true (truthy)
!!""          // false (falsy)
\`\`\`
`;export{n as default};
