---
id: "09-strings-02-string-methods"
title: "String Methods Deep Dive"
module: "09-strings"
order: 2
prerequisites: ["09-strings-01-string-basics"]
---

# String Methods Deep Dive

Strings ke bahut saare built-in methods hain jo kaam aasan karte hain.

## Searching Methods

```js
let s = "Hello, JavaScript World!"

console.log(s.includes("JavaScript"))  // true
console.log(s.startsWith("Hello"))     // true
console.log(s.endsWith("World!"))      // true
console.log(s.indexOf("Script"))       // 9
console.log(s.lastIndexOf("l"))        // 3
```

## Transforming Methods

```js
let s = "  Hello World  "

console.log(s.toUpperCase())        // "  HELLO WORLD  "
console.log(s.toLowerCase())        // "  hello world  "
console.log(s.trim())               // "Hello World"
console.log(s.trimStart())          // "Hello World  "
console.log(s.trimEnd())            // "  Hello World"
console.log(s.replace("World", "JS")) // "  Hello JS  "
console.log(s.replaceAll("l", "L"))   // "  HeLLo WorLLd  "
```

## Extracting Methods

```js
let s = "JavaScript"

console.log(s.slice(0, 4))    // "Java"
console.log(s.slice(4))       // "Script"
console.log(s.slice(-6))      // "Script"
console.log(s.substring(0, 4)) // "Java"
```

## Split & Join

```js
let csv = "a,b,c,d"
let arr = csv.split(",")     // ["a", "b", "c", "d"]
let back = arr.join("-")     // "a-b-c-d"

let name = "Riya Sharma"
let parts = name.split(" ")  // ["Riya", "Sharma"]
let first = parts[0]         // "Riya"
```

## Key Takeaways

- `includes()`, `indexOf()` se search karo
- `slice()` se part nikalo (negative index = end se)
- `trim()` se whitespace hatao
- `split(",")` se array banao, `join()` se string
