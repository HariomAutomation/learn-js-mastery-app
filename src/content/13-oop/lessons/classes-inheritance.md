---
id: "13-oop-01-classes-inheritance"
title: "Classes & Inheritance"
module: "13-oop"
order: 1
prerequisites: ["06-functions-01-function-basics", "08-objects-01-object-basics"]
---

# Classes & Inheritance

JavaScript mein OOP (Object-Oriented Programming) ke liye classes use hoti hain.

## Class Basics

```js
class Student {
  // Constructor — object banate waqt chalta hai
  constructor(name, age, marks) {
    this.name = name
    this.age = age
    this.marks = marks
  }

  // Methods
  isPassed() {
    return this.marks >= 40
  }

  // Getter
  get grade() {
    if (this.marks >= 90) return "A+"
    if (this.marks >= 80) return "A"
    if (this.marks >= 70) return "B"
    if (this.marks >= 60) return "C"
    return "F"
  }

  // Static method — class pe directly call hota hai
  static compare(a, b) {
    return a.marks - b.marks
  }
}

let riya = new Student("Riya", 22, 85)
console.log(riya.name)      // "Riya"
console.log(riya.isPassed()) // true
console.log(riya.grade)      // "A"
```

## Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    return `${this.name} makes a sound`
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)  // parent constructor call karo
    this.breed = breed
  }

  // Method override
  speak() {
    return `${this.name} barks!`
  }

  fetch(item) {
    return `${this.name} fetches the ${item}`
  }
}

let rex = new Dog("Rex", "German Shepherd")
console.log(rex.speak())       // "Rex barks!"
console.log(rex.fetch("ball")) // "Rex fetches the ball"
```

## Key Takeaways

- `class` se blueprint banta hai objects ke liye
- `constructor()` se initial values set hoti hain
- `extends` se inheritance hota hai
- `super()` se parent ka constructor call karo
- Methods ko override kar sakte ho
