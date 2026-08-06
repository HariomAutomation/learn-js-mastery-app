const n=`---
id: "03-operators-01-arithmetic-comparison"
title: "Arithmetic & Comparison Operators"
module: "03-operators"
order: 1
prerequisites: []
---

**Arithmetic Operators:**
\`\`\`javascript
let a = 10, b = 3
a + b   // 13 (addition)
a - b   // 7 (subtraction)
a * b   // 30 (multiplication)
a / b   // 3.33 (division)
a % b   // 1 (modulus/remainder)
a ** b  // 1000 (exponentiation)
\`\`\`

**Assignment Operators:**
\`\`\`javascript
let score = 5
score += 2  // score = 7
score -= 1  // score = 6
score *= 3  // score = 18
score /= 2  // score = 9
\`\`\`

**Comparison Operators:**
\`\`\`javascript
5 == "5"   // true (loose — value check)
5 === "5"  // false (strict — value + type)
5 != "5"   // false (loose not equal)
5 !== "5"  // true (strict not equal)
5 > 3      // true
5 <= 5     // true
\`\`\`

**⚠️ Golden Rule:** Hamesha \`===\` aur \`!==\` use karo. \`==\` se bugs aate hain.
`;export{n as default};
