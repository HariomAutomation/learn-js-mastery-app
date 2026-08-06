---
id: "01-variables-declarations-01-variables-intro"
title: "Variables kya hain?"
module: "01-variables-declarations"
order: 1
prerequisites: []
---

Variables containers hote hain jo data store karte hain. JavaScript mein hum `var`, `let`, ya `const` keyword use karke variables banate hain.

**3 tareeke:**

- `var` — purana, function-scoped, re-declare ho sakta hai
- `let` — modern, block-scoped, re-assign ho sakta hai
- `const` — modern, block-scoped, re-assign nahi ho sakta

```javascript
var oldWay = "risky"
let modernWay = "safe"
const fixedValue = "cannot change"
```

**Golden Rule:** `const` default use karo. Tabhi `let` jab value change hoga. `var` avoid karo.
