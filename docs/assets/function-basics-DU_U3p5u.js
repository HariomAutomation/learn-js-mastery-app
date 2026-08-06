const n="06-functions-function-basics",e="Function banakar greet karo",t=`// 1. Function declaration — greet(name) jo "Hello, {name}!" return kare
// 2. Function expression — add(a, b) jo sum return kare
// 3. Dono call karo aur result print karo

function greet(name) {
  // yahan likho
}

const add = function(a, b) {
  // yahan likho
}

console.log(greet("Riya"))
console.log(add(5, 3))
`,o=`function greet(name) {
  return \`Hello, \${name}!\`
}

const add = function(a, b) {
  return a + b
}

console.log(greet("Riya"))
console.log(add(5, 3))`,a=[{input:[],expected:`Hello, Riya!
8`}],s=["return keyword se value wapas milti hai","Function expression mein const se assign karte hain","Template literal: `Hello, ${name}!`"],i={id:n,title:e,starterCode:t,solution:o,tests:a,hints:s};export{i as default,s as hints,n as id,o as solution,t as starterCode,a as tests,e as title};
