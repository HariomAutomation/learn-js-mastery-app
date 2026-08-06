const e="04-control-flow-if-else-switch",a="Grader + day-of-week switch",n=`// 1. if/else if se grade:
let marks = 78
// 90+=A, 80+=B, 70+=C, 50+=D, else F
let grade = ""

// Yahan if/else if likho
console.log(grade)

// 2. switch se day number se naam:
let dayNum = 5
let day = "" // 1=Monday ... 7=Sunday
// switch likho
console.log(day)
`,s=`let marks = 78
let grade;
if (marks >= 90) grade = "A"
else if (marks >= 80) grade = "B"
else if (marks >= 70) grade = "C"
else if (marks >= 50) grade = "D"
else grade = "F"
console.log(grade) // C
let dayNum = 5
let day;
switch (dayNum) {
  case 1: day = "Monday"; break
  case 2: day = "Tuesday"; break
  case 3: day = "Wednesday"; break
  case 4: day = "Thursday"; break
  case 5: day = "Friday"; break
  case 6: day = "Saturday"; break
  case 7: day = "Sunday"; break
  default: day = "Invalid"
}
console.log(day) // Friday`,t=[{input:[],expected:"C"}],d=["if/else if top-down — pehle highest","switch mein break zaroori — fall-through rokta hai"],r={id:e,title:a,starterCode:n,solution:s,tests:t,hints:d};export{r as default,d as hints,e as id,s as solution,n as starterCode,t as tests,a as title};
