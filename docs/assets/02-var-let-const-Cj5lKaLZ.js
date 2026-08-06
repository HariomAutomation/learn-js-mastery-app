const n=`---
id: "01-variables-declarations-02-var-let-const"
title: "var vs let vs const — Deep Dive"
module: "01-variables-declarations"
order: 2
prerequisites: []
---

**var — Function Scoped**
Block \`{}\` se bahar bhi accessible hai. Re-declare kar sakte hain.

\`\`\`javascript
{
  var x = 5
}
console.log(x) // 5 (block se bahar)
\`\`\`

**let — Block Scoped**
Sirf us block mein rehta hai jisme declared hai. Re-assign ho sakta hai lekin re-declare nahi.

\`\`\`javascript
{
  let y = 10
  y = 20 // ✅ OK
}
// console.log(y) ❌ ReferenceError
\`\`\`

**const — Block + Immutable binding**
Na re-assign, na re-declare. Lekin object/array ke contents change ho sakte hain.

\`\`\`javascript
const PI = 3.14
// PI = 3.14159 ❌ Error

const student = { name: "Riya" }
student.name = "Priya" // ✅ Contents change ho sakte hain
\`\`\`
`;export{n as default};
