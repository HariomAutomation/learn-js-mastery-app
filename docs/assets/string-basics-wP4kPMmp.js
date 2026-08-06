const t="09-strings-string-basics",e="String basics — template literals aur .at()",n=`// 1. Template literal se message banao
const name = "Aman"
const age = 25
const msg = // yahan template literal use karo
console.log(msg) // "Hello, Aman! Tum 22 saal ke ho."

// 2. String length
const str = "JavaScript"
console.log(str.length) // 10

// 3. .at() method — index se character lo
console.log(str.at(0)) // "J"
console.log(str.at(-1)) // "t"

// 4. String concatenation vs template literal
const city = "Mumbai"
const result = // "Welcome to Mumbai!" template literal se banao
console.log(result)`,a=`const name = "Aman"
const age = 25
const msg = \`Hello, \${name}! Tum \${age - 3} saal ke ho.\`
console.log(msg)
const str = "JavaScript"
console.log(str.length)
console.log(str.at(0))
console.log(str.at(-1))
const city = "Mumbai"
const result = \`Welcome to \${city}!\`
console.log(result)`,s=[{input:[],expected:`Hello, Aman! Tum 22 saal ke ho.
10
J
t
Welcome to Mumbai!`}],o=["Template literal: backtick (``) use karo with ${variable} syntax",".at(-1) se last character milta hai, .length se string ka size pata chalta hai","Template literal mein variable daalne ke liye ${} brackets use karo"],l={id:t,title:e,starterCode:n,solution:a,tests:s,hints:o};export{l as default,o as hints,t as id,a as solution,n as starterCode,s as tests,e as title};
