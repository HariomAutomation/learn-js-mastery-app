const n=`---
id: "09-strings-01-string-basics"
title: "String Basics & Creation"
module: "09-strings"
order: 1
prerequisites: ["08-objects-03-advanced-objects"]
---

# String Basics & Creation

JavaScript mein strings kaafi important hain — text handle karna har app mein hota hai.

## String Banane ke Tarike

\`\`\`js
// 1. String Literal (sabse common)
let name = "Riya"

// 2. Single quotes
let city = 'Delhi'

// 3. Template Literal (backticks)
let greeting = \`Hello, \${name}! Welcome to \${city}\`

// 4. Constructor (avoid karo)
let str = new String("hello")
\`\`\`

## Template Literals — Power Feature

\`\`\`js
let price = 99
let item = "JS Course"

// Multi-line string
let msg = \`
  Item: \${item}
  Price: ₹\${price}
  Total: ₹\${price * 1.18}
\`
console.log(msg)
\`\`\`

## String Properties

\`\`\`js
let s = "JavaScript"
console.log(s.length)  // 10
console.log(s[0])      // J
console.log(s.at(-1))  // t (last character)
\`\`\`

## Key Takeaways

- Template literals \`\${}\` se variables inject karo
- \`.length\` se string ka size milta hai
- \`[]\` ya \`.at()\` se character access karo
- Single/double quotes mein difference nahi
`;export{n as default};
