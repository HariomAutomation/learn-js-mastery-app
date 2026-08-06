const n=`---
id: "08-objects-03-advanced-objects"
title: "Computed Keys & Optional Chaining"
module: "08-objects"
order: 3
prerequisites: []
---

**Computed Properties — Variable ko key banana:**
\`\`\`javascript
let key = "marks"
let report = {
  [key]: 89,
  [key + "Grade"]: "A"
}
// { marks: 89, marksGrade: "A" }
\`\`\`

**Optional Chaining (?.) — Safe access:**
\`\`\`javascript
let user = { name: "Amit" }

user.address         // undefined
user.address?.city   // undefined (no error!)
user.profile?.email  // undefined (no error!)

// Without optional chaining:
// user.address.city ❌ TypeError!
\`\`\`

**Practical use:**
\`\`\`javascript
function getCity(user) {
  return user?.address?.city || "Unknown"
}
\`\`\`

**Object methods (shorthand):**
\`\`\`javascript
let user = {
  name: "Harsh",
  greet() {
    return "Hi, " + this.name
  }
}
user.greet() // "Hi, Harsh"
\`\`\`

**Spread in Objects:**
\`\`\`javascript
let defaults = { theme: "dark", lang: "en" }
let userPrefs = { lang: "hi", fontSize: 14 }

let merged = { ...defaults, ...userPrefs }
// { theme: "dark", lang: "hi", fontSize: 14 }
// Later values override karte hain!
\`\`\`

**Mindest:** Objects = structured data. Destructuring clean code deta hai, optional chaining crashes avoid karta hai.
`;export{n as default};
