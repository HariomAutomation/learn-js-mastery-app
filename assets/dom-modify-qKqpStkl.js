const e=`---
id: "10-dom-02-dom-modify"
title: "DOM Modify & Style"
module: "10-dom"
order: 2
prerequisites: ["10-dom-01-dom-selectors"]
---

# DOM Modify & Style

Elements ka content, attributes, aur style change karna seekho.

## Changing Content

\`\`\`js
let el = document.querySelector("#demo")

// Text content
el.textContent = "Hello World"     // safe, no HTML parsing
el.innerHTML = "<b>Bold</b>"       // parses HTML (XSS risk!)
el.innerText = "Visible text"      // respects CSS visibility
\`\`\`

## Changing Attributes

\`\`\`js
let img = document.querySelector("img")

img.src = "new-image.png"
img.alt = "Updated image"
img.setAttribute("data-id", "123")
img.getAttribute("data-id")  // "123"
img.removeAttribute("data-id")

// Class list
let div = document.querySelector(".box")
div.classList.add("active")
div.classList.remove("hidden")
div.classList.toggle("visible")
div.classList.contains("active")  // true
\`\`\`

## Changing Styles

\`\`\`js
let box = document.querySelector(".box")

// Inline style (use sparingly)
box.style.backgroundColor = "blue"
box.style.padding = "20px"
box.style.borderRadius = "8px"

// Better: class se control karo
// CSS: .highlight { background: blue; padding: 20px }
box.classList.add("highlight")
\`\`\`

## Creating Elements

\`\`\`js
// Naya element banao
let newDiv = document.createElement("div")
newDiv.textContent = "I am new!"
newDiv.className = "card"

// DOM mein insert karo
document.body.appendChild(newDiv)           // end mein
parent.insertBefore(newDiv, referenceNode)  // reference se pehle

// Remove karo
newDiv.remove()
// ya
parent.removeChild(newDiv)
\`\`\`

## Key Takeaways

- \`textContent\` safe hai, \`innerHTML\` se XSS ho sakta hai
- \`classList.add/remove/toggle\` se CSS classes manage karo
- \`createElement()\` + \`appendChild()\` se naye elements banao
- Inline style se bacho — CSS classes use karo
`;export{e as default};
