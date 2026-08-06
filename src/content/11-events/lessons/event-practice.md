---
id: "11-events-03-event-practice"
title: "Events Practice Projects"
module: "11-events"
order: 3
prerequisites: ["11-events-02-event-delegation"]
---

# Events Practice Projects

Real-world event handling patterns practice karo.

## 1. Form Validation

```js
let form = document.querySelector("#signup")
let emailInput = form.querySelector("#email")
let errorDiv = form.querySelector(".error")

emailInput.addEventListener("input", () => {
  let email = emailInput.value
  if (!email.includes("@")) {
    errorDiv.textContent = "Invalid email!"
    errorDiv.style.display = "block"
  } else {
    errorDiv.style.display = "none"
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (errorDiv.style.display === "none") {
    console.log("Form submitted!")
  }
})
```

## 2. Keyboard Shortcuts

```js
document.addEventListener("keydown", (e) => {
  // Ctrl + S to save
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault()
    console.log("Saved!")
  }

  // Escape to close modal
  if (e.key === "Escape") {
    document.querySelector(".modal").classList.remove("open")
  }
})
```

## 3. Scroll Effects

```js
let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})
```

## 4. Drag and Drop

```js
let draggable = document.querySelector(".draggable")
let dropzone = document.querySelector(".dropzone")

draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", draggable.id)
})

dropzone.addEventListener("dragover", (e) => {
  e.preventDefault()  // allow drop
})

dropzone.addEventListener("drop", (e) => {
  e.preventDefault()
  let id = e.dataTransfer.getData("text/plain")
  dropzone.appendChild(document.getElementById(id))
})
```

## Key Takeaways

- `e.preventDefault()` bahut important hai — default behavior roko
- `keydown` se keyboard shortcuts banao
- `scroll` event pe navbar/header effects lagao
- Drag & drop ke liye `dragstart`, `dragover`, `drop` events use karo
