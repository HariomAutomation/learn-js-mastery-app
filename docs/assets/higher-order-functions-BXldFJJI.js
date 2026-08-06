const n="06-functions-higher-order-functions",e="Higher-order functions se magic",o=`// 1. repeat(n, fn) — fn ko n baar call kare
function repeat(n, fn) {
  // yahan likho
}

// 2. once(fn) — sirf ek baar call ho, baaki ignore
function once(fn) {
  // yahan likho
}

// Test repeat
repeat(3, () => console.log("Hello!"))

// Test once
const greet = once((name) => console.log("Hi " + name))
greet("Riya")  // Hi Riya
-greet("Priya") // Riya duplicate nahi hona chahiye
`,t=`function repeat(n, fn) {
  for (let i = 0; i < n; i++) fn()
}

function once(fn) {
  let called = false
  return function(...args) {
    if (!called) {
      called = true
      return fn(...args)
    }
  }
}

repeat(3, () => console.log("Hello!"))
const greet = once((name) => console.log("Hi " + name))
greet("Riya")
greet("Priya")`,a=[{input:[],expected:`Hello!
Hello!
Hello!
Hi Riya`}],i=["Higher-order function: function jo function leta ya deta hai","repeat mein for loop chalao n baar","once mein ek flag variable rakho — true hone ke baad call mat karo"],r={id:n,title:e,starterCode:o,solution:t,tests:a,hints:i};export{r as default,i as hints,n as id,t as solution,o as starterCode,a as tests,e as title};
