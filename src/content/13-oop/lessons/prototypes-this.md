---
id: "13-oop-02-prototypes-this"
title: "Prototypes & this Keyword"
module: "13-oop"
order: 2
prerequisites: ["13-oop-01-classes-inheritance"]
---

# Prototypes & this Keyword

JavaScript ka core OOP mechanism — prototypes aur `this` keyword.

## The this Keyword

```js
// 1. Global context
console.log(this)  // window (browser)

// 2. Object method
let user = {
  name: "Riya",
  greet() {
    console.log(this.name)  // "Riya"
  }
}

// 3. Function call
function showThis() {
  console.log(this)  // window (strict mode: undefined)
}

// 4. Arrow function — parent ka this hota hai
let obj = {
  name: "Riya",
  greet: () => {
    console.log(this.name)  // undefined! (arrow ne parent ka this liya)
  }
}

// 5. Explicit binding
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`)
}

// call — arguments alag alag
greet.call(user, "Hello")
// apply — arguments array mein
greet.apply(user, ["Hello"])
// bind — naya function return karta hai
let bound = greet.bind(user)
bound("Hello")
```

## Prototypes

```js
// Har JavaScript object ka ek __proto__ hota hai
let arr = [1, 2, 3]
console.log(arr.__proto__ === Array.prototype)  // true

// Hum bhi prototype pe methods add kar sakte hain
Array.prototype.first = function() {
  return this[0]
}

let nums = [10, 20, 30]
console.log(nums.first())  // 10
```

## Prototype Chain

```
rex.__proto__ === Dog.prototype
Dog.prototype.__proto__ === Animal.prototype
Animal.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null
```

## Constructor Functions (Old way)

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`
}

let aman = new Person("Aman", 25)
console.log(aman.greet())
```

## Key Takeaways

- `this` = wo object jispe method call hua
- Arrow functions ka apna `this` nahi hota
- `call()`, `apply()`, `bind()` se `this` badal sakte ho
- Har object ka ek prototype hota hai (inheritance chain)
- Modern classes under the hood prototypes use karti hain
