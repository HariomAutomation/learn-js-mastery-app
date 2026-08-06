---
id: "02-data-types-03-coercion-truthy-falsy"
title: "Type Coercion & Truthy/Falsy"
module: "02-data-types"
order: 3
prerequisites: []
---

**Type Coercion — Auto Conversion:**
JS automatically types convert karta hai operations mein.

```javascript
"5" + 1    // "51" (number → string)
"5" - 1    // 4 (string → number)
true + 1   // 2 (boolean → number)
null + 1   // 1 (null → 0)
undefined + 1 // NaN
```

**Loose vs Strict Equality:**
```javascript
5 == "5"   // true (type conversion hota hai)
5 === "5"  // false (value + type dono check)
```

**Hamesha `===` use karo** — predictable results ke liye.

**Falsy Values (6 total):**
`false`, `0`, `""`, `null`, `undefined`, `NaN`

**Truthy — baaki sab:**
`"0"`, `"false"`, `[]`, `{}`, `function(){}`

```javascript
if ("0") {
  console.log("Runs!") // "0" truthy hai (non-empty string)
}
```

**Quick Boolean conversion:**
```javascript
!!value  // true/false mein convert karta hai
!!"hello" // true
!!""      // false
```
