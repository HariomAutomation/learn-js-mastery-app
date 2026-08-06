const n="06-functions-closures-iife",e="Closure se counter banao",t=`// 1. Closure — createCounter() jo ek counter return kare
//    Har call pe increment ho, private rahe

function createCounter() {
  let count = 0
  // yahan ek object return karo jismein increment, decrement, getCount
}

const counter = createCounter()
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2
console.log(counter.decrement()) // 1
console.log(counter.getCount())  // 1

// 2. IIFE — turant function call karo
const result = (function() {
  return 42
})()
console.log(result) // 42
`,o=`function createCounter() {
  let count = 0
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  }
}
const counter = createCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getCount())
const result = (function() { return 42 })()
console.log(result)`,c=[{input:[],expected:`1
2
1
1
42`}],r=["Closure mein inner function outer ke variables access karta hai","IIFE: (function() { ... })() — declare + call ek line mein","count private hai — sirf methods se access ho sakta hai"],s={id:n,title:e,starterCode:t,solution:o,tests:c,hints:r};export{s as default,r as hints,n as id,o as solution,t as starterCode,c as tests,e as title};
