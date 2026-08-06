---
id: "08-objects-01-object-basics"
title: "Object Basics & Access"
module: "08-objects"
order: 1
prerequisites: []
---

**Object kya hai?**
Key-value pairs ka collection — real-world entity ko represent karta hai.

```javascript
let student = {
  name: "Ravi",
  age: 21,
  isEnrolled: true
}
```

**Access karne ke 2 tareeke:**
```javascript
student.name          // Dot notation (preferred)
student["age"]       // Bracket notation (dynamic keys)
student["full name"] // Multi-word keys ke liye bracket zaroori
```

**Key Rules:**
- Keys hamesha strings hote hain (number bhi string mein convert ho jaata hai)
- Values kuch bhi ho sakte hain — string, number, array, object, function

**Nesting:**
```javascript
let user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pincode: 110001
  }
}
console.log(user.address.city) // "Delhi"
```

**Update & Add:**
```javascript
student.age = 22        // Update
student.course = "JS"   // Add new key
delete student.age      // Remove key
```
