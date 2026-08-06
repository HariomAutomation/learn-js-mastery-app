const e="08-objects-object-basics",n="Object create aur access",t=`// 1. Student object banao
const student = {
  name: "Riya",
  age: 22,
  grades: [85, 90, 78],
  address: {
    city: "Delhi",
    pin: 110001
  }
}

// 2. Dot notation se access
console.log(student.name)
console.log(student.address.city)

// 3. Bracket notation se access
const key = "age"
console.log(student[key])

// 4. Object.keys, values, entries
console.log(Object.keys(student).length) // kitne properties?
console.log(Object.values(student).slice(0, 2)) // pehle 2 values
`,s=`const student = {
  name: "Riya",
  age: 22,
  grades: [85, 90, 78],
  address: { city: "Delhi", pin: 110001 }
}
console.log(student.name)
console.log(student.address.city)
const key = "age"
console.log(student[key])
console.log(Object.keys(student).length)
console.log(Object.values(student).slice(0, 2))`,o=[{input:[],expected:`Riya
Delhi
22
4
["Riya", 22]`}],c=["Dot notation: object.property","Bracket notation: object[variable] — dynamic key ke liye","Object.keys() returns array of property names"],a={id:e,title:n,starterCode:t,solution:s,tests:o,hints:c};export{a as default,c as hints,e as id,s as solution,t as starterCode,o as tests,n as title};
