const e="05-loops-patterns-practice",n="Loops se naam pattern",t=`// 1. String reverse — for-of:
let str = "Sheryians"
let rev = ""
for (let ch of str) {
  rev = ch + rev
}
console.log(rev)  // snaiyrehS

// 2. Triangle pattern:
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i))
}

// 3. Fibonacci (pehle 8):
let a = 0, b = 1
for (let i = 0; i < 8; i++) {
  console.log(a)
  let next = a + b
  a = b
  b = next
}
`,o=`let str = "Sheryians"
let rev = ""
for (let ch of str) rev = ch + rev
console.log(rev)
for (let i = 1; i <= 5; i++) console.log("*".repeat(i))
let a = 0, b = 1
for (let i = 0; i < 8; i++) {
  console.log(a)
  let next = a + b
  a = b
  b = next
}`,r=[{input:[],expected:"snaiyrehS"}],s=["ch + rev se naya char pehle aata hai","Fibonacci: next = a+b, a=b, b=next"],a={id:e,title:n,starterCode:t,solution:o,tests:r,hints:s};export{a as default,s as hints,e as id,o as solution,t as starterCode,r as tests,n as title};
