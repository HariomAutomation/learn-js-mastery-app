---
id: "04-control-flow-02-early-return"
title: "Early Return Pattern"
module: "04-control-flow"
order: 2
prerequisites: []
---

**Early Return** = function ko jabhod kar exit karna jab condition fail ho.

```javascript
function checkAge(age) {
  if (age < 18) return "Denied"
  if (age > 60) return "Senior discount"
  return "Allowed"
}
```

**Fayde:**
- Deep nesting avoid hoti hai
- Code readable rehta hai
- Main logic upar, edge cases pehle handle

**Truthy/Falsy direct use kar sakte hain:**
```javascript
function greet(name) {
  if (!name) return "Hello, Guest!"
  return "Hello, " + name
}
```

**Common patterns:**
```javascript
// Validation early return
function createUser(user) {
  if (!user.email) return { error: "Email required" }
  if (!user.name) return { error: "Name required" }
  
  return { success: true, user }
}
```

**Mindset:** Pehle edge cases handle karo, phir main logic.
