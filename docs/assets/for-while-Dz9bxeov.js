const n="05-loops-for-while",o="for + while se sum aur reverse",e=`// 1. for loop se 1..10 ka sum:
let sumFor = 0
for (let i = 1; i <= 10; i++) {
  // yahan add karo
}
console.log("for sum =", sumFor)  // 55

// 2. while loop se reverse 10..1 print:
let n = 10
while (n >= 1) {
  console.log(n)
  n--
}

// 3. do-while — kam se kam ek baar:
let counter = 0
do {
  console.log("counter:", counter)
  counter++
} while (counter < 3)
`,t=`let sumFor = 0
for (let i = 1; i <= 10; i++) {
  sumFor += i
}
console.log("for sum:", sumFor)  // 55
let n = 10
while (n >= 1) {
  console.log(n)
  n--
}
let counter = 0
do {
  console.log("counter:", counter)
  counter++
} while (counter < 3)`,l=[{input:[],expected:"for sum: 55"}],s=["for: initialization; condition; increment","while: condition pehle check","do-while: body pehle, condition baad"],i={id:n,title:o,starterCode:e,solution:t,tests:l,hints:s};export{i as default,s as hints,n as id,t as solution,e as starterCode,l as tests,o as title};
