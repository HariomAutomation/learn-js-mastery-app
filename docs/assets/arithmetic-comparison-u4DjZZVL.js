const t="03-operators-arithmetic-comparison",o="Calculator function banao",a=`// switch + arithmetic operators ka calculator banao
function calc(a, b, operator) {
  // +, -, *, /, % support karo
}

console.log(calc(10, 3, "+"))  // 13
console.log(calc(10, 3, "-"))  // 7
console.log(calc(10, 3, "*"))  // 30
console.log(calc(10, 3, "/"))  // 3.33...
console.log(calc(10, 3, "%"))  // 1
`,n=`function calc(a, b, operator) {
  switch (operator) {
    case "+": return a + b
    case "-": return a - b
    case "*": return a * b
    case "/": return a / b
    case "%": return a % b
    default: return "Invalid operator"
  }
}`,c=[{input:[],expected:"13"}],r=["Switch-case operator match karega","% modulus — remainder return karta hai"],e={id:t,title:o,starterCode:a,solution:n,tests:c,hints:r};export{e as default,r as hints,t as id,n as solution,a as starterCode,c as tests,o as title};
