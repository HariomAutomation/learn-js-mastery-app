---
id: "04-control-flow-01-if-else-switch"
title: "if/else & switch-case"
module: "04-control-flow"
order: 1
prerequisites: []
---

**if / else if / else:**
Code ko conditions ke basis par run karta hai.

```javascript
let marks = 78

if (marks >= 90) {
  console.log("A Grade")
} else if (marks >= 75) {
  console.log("B Grade")
} else if (marks >= 50) {
  console.log("C Grade")
} else {
  console.log("Fail")
}
```

**switch-case:**
Ek variable ko multiple values se compare karne ke liye.

```javascript
let fruit = "apple"

switch (fruit) {
  case "banana":
    console.log("Yellow")
    break
  case "apple":
    console.log("Red")
    break
  case "grape":
    console.log("Purple")
    break
  default:
    console.log("Unknown fruit")
}
```

**⚠️ break mat bhulna!** Warna saare cases execute ho jaate hain (fall-through).
