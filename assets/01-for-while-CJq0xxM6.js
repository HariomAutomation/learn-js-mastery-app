const n=`---
id: "05-loops-01-for-while"
title: "for & while Loops"
module: "05-loops"
order: 1
prerequisites: []
---

**for Loop:**
Jab pehle se pata hai kitni baar chalana hai.

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i) // 0, 1, 2, 3, 4
}
// initialization; condition; increment
\`\`\`

**while Loop:**
Jab pehle se nahi pata kitni baar chalega.

\`\`\`javascript
let i = 0
while (i < 5) {
  console.log(i)
  i++
}
\`\`\`

**do-while Loop:**
Kam se kam ek baar zaroor chalega.

\`\`\`javascript
let i = 0
do {
  console.log(i)
  i++
} while (i < 5)
\`\`\`

**break & continue:**
\`\`\`javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break     // loop completely band
  if (i % 2 === 0) continue // skip even numbers
  console.log(i) // 1, 3
}
\`\`\`

**Kya use karna hai?**
- \`for\` — jab count pata hai
- \`while\` — jab condition-based chalana hai
- \`do-while\` — kam se kam ek baar chahiye
`;export{n as default};
