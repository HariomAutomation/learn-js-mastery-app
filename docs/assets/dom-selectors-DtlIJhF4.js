const e=`---
id: "10-dom-01-dom-selectors"
title: "DOM Selectors"
module: "10-dom"
order: 1
prerequisites: ["09-strings-03-string-patterns"]
---

# DOM Selectors

DOM (Document Object Model) HTML ko tree ki tarah represent karta hai. JavaScript se is tree ko access kar sakte ho.

## DOM Kya Hai?

Jab browser HTML load karta hai, wo ek **tree structure** banata hai jismein har HTML element ek **node** hai.

\`\`\`
document
  └── html
       ├── head
       │    └── title
       └── body
            ├── h1
            ├── p
            └── div
                 └── span
\`\`\`

## Selecting Elements

\`\`\`js
// 1. Single element select
let heading = document.querySelector("h1")
let byId = document.getElementById("main")
let byClass = document.querySelector(".card")

// 2. Multiple elements
let allParagraphs = document.querySelectorAll("p")
let allCards = document.querySelectorAll(".card")

// 3. Old methods (use modern ones instead)
let byTag = document.getElementsByTagName("p")
let byClassOld = document.getElementsByClassName("card")
\`\`\`

## Traversing the DOM

\`\`\`js
let el = document.querySelector("#main")

// Parent
console.log(el.parentElement)
console.log(el.closest(".container"))  // nearest ancestor matching selector

// Children
console.log(el.children)        // HTMLCollection (elements only)
console.log(el.childNodes)      // NodeList (includes text nodes)
console.log(el.firstElementChild)
console.log(el.lastElementChild)

// Siblings
console.log(el.nextElementSibling)
console.log(el.previousElementSibling)
\`\`\`

## Key Takeaways

- \`querySelector()\` sabse powerful — CSS selector se select karo
- \`querySelectorAll()\` se multiple elements milte hain
- \`.closest()\` se nearest ancestor dhoondo
- DOM tree upar (parent) ya neeche (children) traverse kar sakte ho
`;export{e as default};
