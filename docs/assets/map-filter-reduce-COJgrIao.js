const s="07-arrays-map-filter-reduce",a="map, filter, reduce se data transform",n=`const students = [
  { name: "Riya", marks: 85 },
  { name: "Aman", marks: 42 },
  { name: "Priya", marks: 91 },
  { name: "Vikram", marks: 67 },
  { name: "Neha", marks: 55 }
]

// 1. map — sirf names ka array banao
const names = students.map(s => s.name)
console.log(names)

// 2. filter — jo pass hue (marks >= 50)
const passed = students.filter(s => s.marks >= 50)
console.log(passed.map(s => s.name))

// 3. reduce — average marks nikalo
const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length
console.log("Average:", avg)
`,e=`const students = [
  { name: "Riya", marks: 85 },
  { name: "Aman", marks: 42 },
  { name: "Priya", marks: 91 },
  { name: "Vikram", marks: 67 },
  { name: "Neha", marks: 55 }
]
const names = students.map(s => s.name)
console.log(names)
const passed = students.filter(s => s.marks >= 50)
console.log(passed.map(s => s.name))
const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length
console.log("Average:", avg)`,t=[{input:[],expected:`["Riya", "Aman", "Priya", "Vikram", "Neha"]
["Riya", "Priya", "Vikram", "Neha"]
Average: 68`}],r=["map = har element ko transform karo","filter = condition lagao, sirf true wale raho","reduce = ek value mein accumulate karo"],m={id:s,title:a,starterCode:n,solution:e,tests:t,hints:r};export{m as default,r as hints,s as id,e as solution,n as starterCode,t as tests,a as title};
