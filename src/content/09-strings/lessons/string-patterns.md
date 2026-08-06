---
id: "09-strings-03-string-patterns"
title: "String Patterns & Practice"
module: "09-strings"
order: 3
prerequisites: ["09-strings-02-string-methods"]
---

# String Patterns & Practice

Real-world string problems solve karna seekho.

## Common Patterns

```js
// 1. Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("hello"))  // "Hello"

// 2. Reverse a string
function reverse(str) {
  return str.split("").reverse().join("")
}
console.log(reverse("abc"))  // "cba"

// 3. Count vowels
function countVowels(str) {
  let count = 0
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++
  }
  return count
}
console.log(countVowels("Hello World"))  // 3

// 4. Truncate string
function truncate(str, maxLen) {
  if (str.length <= maxLen) return str
  return str.slice(0, maxLen) + "..."
}
console.log(truncate("Very long string here", 10))  // "Very long s..."
```

## String Comparison

```js
console.log("apple" < "banana")   // true (alphabetical)
console.log("A" < "a")            // true (uppercase < lowercase in ASCII)
console.log("10" > "9")           // true (string comparison, not numeric!)

// Proper numeric comparison
console.log(Number("10") > Number("9"))  // true
```

## Key Takeaways

- Strings **immutable** hain — methods naya string return karte hain
- `charAt()` ya `[]` se character lo
- `for...of` se har character pe iterate karo
- Numeric string ko `Number()` ya `parseInt()` se convert karo
