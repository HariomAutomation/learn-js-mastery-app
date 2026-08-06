const e=`---
id: "11-events-02-event-delegation"
title: "Event Delegation"
module: "11-events"
order: 2
prerequisites: ["11-events-01-event-basics"]
---

# Event Delegation

Event delegation ek powerful pattern hai jismein ek parent element pe listener lagate hain aur child events handle karte hain.

## Problem: Multiple Listeners

\`\`\`js
// ❌ Ye mat karo — har button pe alag listener
let buttons = document.querySelectorAll(".todo-btn")
buttons.forEach(btn => {
  btn.addEventListener("click", handler)
})

// ❌ Naye buttons pe listener nahi lagega
let newBtn = document.createElement("button")
newBtn.className = "todo-btn"
// newBtn pe koi listener nahi!
\`\`\`

## Solution: Event Delegation

\`\`\`js
// ✅ Parent pe ek listener — sab children ka kaam karega
document.querySelector("#todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-btn")) {
    console.log("Delete clicked for:", e.target.dataset.id)
  }
})

// Ab naye buttons bhi kaam karenge!
\`\`\`

## How It Works

\`\`\`
Event Bubbling:
button.click → li → ul → div → body → html → document

Parent pe listener hai → event bubble hoke parent tak aata hai
e.target = actual clicked element
\`\`\`

## Real Example: Dynamic Todo List

\`\`\`js
let todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Build App", done: true },
]

function render() {
  let html = todos.map(t => \`
    <li data-id="\${t.id}">
      <span class="\${t.done ? 'done' : ''}">\${t.text}</span>
      <button class="toggle-btn">Toggle</button>
      <button class="delete-btn">Delete</button>
    </li>
  \`).join("")
  document.querySelector("#list").innerHTML = html
}

// ✅ Ek hi listener — sab handle karega
document.querySelector("#list").addEventListener("click", (e) => {
  let id = Number(e.target.closest("li").dataset.id)

  if (e.target.classList.contains("delete-btn")) {
    todos = todos.filter(t => t.id !== id)
  } else if (e.target.classList.contains("toggle-btn")) {
    let todo = todos.find(t => t.id === id)
    if (todo) todo.done = !todo.done
  }
  render()
})
\`\`\`

## Key Takeaways

- Event delegation = parent pe listener, child events handle karo
- \`e.target\` se actual clicked element pata chalta hai
- \`.closest()\` se nearest parent dhoondo
- Dynamic content ke liye best approach hai
- Performance bhi better — kam listeners = kam memory
`;export{e as default};
