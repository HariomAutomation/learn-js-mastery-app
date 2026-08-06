const e="03-operators-logical-ternary",s="Ternary + logical operators",n=`// 1. Marks ke basis par grade ternary se:
let marks = 82
let grade = null // ternary likho
// 90+ = A, 80-89 = B, 70-79 = C, 50-69 = D, <50 = F
console.log(grade)

// 2. Logical combinations:
let isLoggedIn = true
let isAdmin = false
let access = null // isLoggedIn && isAdmin? "admin" : isLoggedIn ? "user" : "guest"
console.log(access)
`,t=`let marks = 82
let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 50 ? "D" : "F"
console.log(grade) // B
let isLoggedIn = true
let isAdmin = false
let access = isLoggedIn && isAdmin ? "admin" : isLoggedIn ? "user" : "guest"
console.log(access) // user`,o=[{input:[],expected:"B"}],a=["condition ? trueVal : falseVal","Nested ternary: pehle highest check","Logical && || se conditions combine karo"],l={id:e,title:s,starterCode:n,solution:t,tests:o,hints:a};export{l as default,a as hints,e as id,t as solution,n as starterCode,o as tests,s as title};
