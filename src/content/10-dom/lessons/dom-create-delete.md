---
id: "10-dom-03-dom-create-delete"
title: "DOM Create & Delete"
module: "10-dom"
order: 3
prerequisites: ["10-dom-02-dom-modify"]
---

# DOM Create & Delete

Dynamic web apps ke liye elements banana aur delete karna zaroori hai.

## Dynamic List Builder

```js
let todos = ["Learn JS", "Build App", "Get Job"]

function renderTodos() {
  let list = document.querySelector("#todo-list")
  list.innerHTML = "" // clear existing

  todos.forEach((todo, i) => {
    let li = document.createElement("li")
    li.textContent = todo

    let btn = document.createElement("button")
    btn.textContent = "Delete"
    btn.onclick = () => {
      todos.splice(i, 1)
      renderTodos()
    }

    li.appendChild(btn)
    list.appendChild(li)
  })
}

renderTodos()
```

## insertAdjacentHTML

```js
let el = document.querySelector("#container")

// Different positions
el.insertAdjacentHTML("beforebegin", "<p>Before element</p>")
el.insertAdjacentHTML("afterbegin", "<p>First child</p>")
el.insertAdjacentHTML("beforeend", "<p>Last child</p>")
el.insertAdjacentHTML("afterend", "<p>After element</p>")
```

## Cloning Elements

```js
let original = document.querySelector(".card")
let clone = original.cloneNode(true)  // true = deep clone
clone.querySelector("h2").textContent = "Cloned Card"
document.body.appendChild(clone)
```

## Document Fragment (Performance)

```js
// Multiple elements ek saath insert karo
let fragment = document.createDocumentFragment()

for (let i = 0; i < 100; i++) {
  let li = document.createElement("li")
  li.textContent = `Item ${i + 1}`
  fragment.appendChild(li)
}

// Ek baar mein insert — fast!
document.querySelector("#list").appendChild(fragment)
```

## Key Takeaways

- `DocumentFragment` se batch insert karo — performance better
- `cloneNode(true)` se deep copy milta hai
- `insertAdjacentHTML` se position control hota hai
- List render karte waqt `innerHTML = ""` pehle clear karo
