---
id: "11-events-01-event-basics"
title: "Event Listeners Basics"
module: "11-events"
order: 1
prerequisites: ["10-dom-03-dom-create-delete"]
---

# Event Listeners Basics

JavaScript events se user interactions handle karta hai — clicks, form submissions, keyboard input, etc.

## Adding Event Listeners

```js
let btn = document.querySelector("#myBtn")

// Method 1: addEventListener (preferred)
btn.addEventListener("click", function() {
  console.log("Button clicked!")
})

// Method 2: arrow function
btn.addEventListener("click", () => {
  console.log("Clicked!")
})

// Method 3: named function (can remove later)
function handleClick() {
  console.log("Clicked!")
}
btn.addEventListener("click", handleClick)
btn.removeEventListener("click", handleClick)
```

## Event Object

```js
btn.addEventListener("click", (event) => {
  console.log(event.type)      // "click"
  console.log(event.target)    // element that was clicked
  console.log(event.currentTarget) // element listener is attached to
  console.log(event.timeStamp) // when it happened
})
```

## Common Events

```js
// Mouse events
element.addEventListener("click", handler)
element.addEventListener("dblclick", handler)
element.addEventListener("mouseover", handler)
element.addEventListener("mouseout", handler)

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log(e.key)     // "Enter", "a", "Escape"
  console.log(e.code)    // "Enter", "KeyA", "Escape"
  console.log(e.altKey)  // true if Alt held
})

// Form events
form.addEventListener("submit", (e) => {
  e.preventDefault()  // stop page reload
  // handle form data
})

// Input events
input.addEventListener("input", (e) => {
  console.log(e.target.value)
})
```

## Key Takeaways

- `addEventListener` sabse best hai — multiple listeners lag sakte hain
- `event.target` wo element hai jispe click hua
- `e.preventDefault()` se default behavior roko (form submit, link navigation)
- Keyboard events mein `e.key` se key name milti hai
