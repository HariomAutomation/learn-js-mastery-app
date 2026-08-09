const e={"01-variables-declarations-03-scope-hoisting":[{id:"01-variables-declarations-scope-hoisting-01",title:"Global vs local scope",starterCode:`var x = "global"
function test() {
  var x = "local"
  return x
}
return test()
`,solution:`var x = "global"
function test() {
  var x = "local"
  return x
}
return test()`,tests:[{input:[],expected:"local"}],hints:["Local scope wala x override karta hai","Function ke andar ka x return hoga"]},{id:"01-variables-declarations-scope-hoisting-02",title:"Closure remembers outer variable",starterCode:`function outer() {
  let count = 0
  return function inner() {
    return ++count
  }
}
const fn = outer()
return [fn(), fn(), fn()]
`,solution:`function outer() {
  let count = 0
  return function inner() {
    return ++count
  }
}
const fn = outer()
return [fn(), fn(), fn()]`,tests:[{input:[],expected:[1,2,3]}],hints:["Inner function closure se count yaad rakhta hai","Har call pe count badhta hai"]},{id:"01-variables-declarations-scope-hoisting-03",title:"Lexical scope lookup",starterCode:`const a = 1
function one() {
  const b = 2
  function two() {
    const c = 3
    return a + b + c
  }
  return two()
}
return one()
`,solution:`const a = 1
function one() {
  const b = 2
  function two() {
    const c = 3
    return a + b + c
  }
  return two()
}
return one()`,tests:[{input:[],expected:6}],hints:["Lexical scope mein function apne parent scopes se variables dhundhta hai","a=1, b=2, c=3 sab milke 6"]},{id:"01-variables-declarations-scope-hoisting-04",title:"Hoisting var gives undefined",starterCode:`console.log(x)
var x = 5
return x
`,solution:`console.log(x)
var x = 5
return x`,tests:[{input:[],expected:5}],hints:["var declaration hoisted, assignment not","First log shows undefined, then x = 5"]},{id:"01-variables-declarations-scope-hoisting-05",title:"TDZ error with let",starterCode:`try {
  console.log(y)
  let y = 10
} catch(e) {
  return "TDZ error"
}
`,solution:`try {
  console.log(y)
  let y = 10
} catch(e) {
  return "TDZ error"
}`,tests:[{input:[],expected:"TDZ error"}],hints:["let/const are hoisted but in TDZ","Accessing before declaration throws ReferenceError"]},{id:"01-variables-declarations-scope-hoisting-06",title:"Function hoisting works",starterCode:`return add(3, 4)
function add(a, b) { return a + b }
`,solution:`return add(3, 4)
function add(a, b) { return a + b }`,tests:[{input:[],expected:7}],hints:["Function declarations are fully hoisted","Can call before declaration"]},{id:"01-variables-declarations-scope-hoisting-07",title:"var re-declaration allowed",starterCode:`var x = 1
var x = 2
var x = 3
return x
`,solution:`var x = 1
var x = 2
var x = 3
return x`,tests:[{input:[],expected:3}],hints:["var allows re-declaration","Last assignment wins"]},{id:"01-variables-declarations-scope-hoisting-08",title:"let re-declaration not allowed",starterCode:`try {
  let x = 1
  let x = 2
  return x
} catch(e) {
  return "SyntaxError"
}
`,solution:`try {
  let x = 1
  let x = 2
  return x
} catch(e) {
  return "SyntaxError"
}`,tests:[{input:[],expected:"SyntaxError"}],hints:["let doesn't allow re-declaration in same scope","This is a SyntaxError caught at parse time"]},{id:"01-variables-declarations-scope-hoisting-09",title:"Block scope boundary",starterCode:`{
  var a = 10
  let b = 20
  const c = 30
}
return [a, typeof b, typeof c]
`,solution:`{
  var a = 10
  let b = 20
  const c = 30
}
return [a, typeof b, typeof c]`,tests:[{input:[],expected:[10,"undefined","undefined"]}],hints:["var leaks outside block","let and const stay inside block"]},{id:"01-variables-declarations-scope-hoisting-10",title:"Scope chain: inner sees outer",starterCode:`const x = "global"
function outer() {
  const y = "outer"
  function inner() {
    return x + " " + y
  }
  return inner()
}
return outer()
`,solution:`const x = "global"
function outer() {
  const y = "outer"
  function inner() {
    return x + " " + y
  }
  return inner()
}
return outer()`,tests:[{input:[],expected:"global outer"}],hints:["Inner function can access all outer scopes","Scope chain goes from inner to global"]},{id:"01-variables-declarations-scope-hoisting-11",title:"Multiple closures from same function",starterCode:`function makeAdder(n) {
  return (x) => x + n
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
return [add5(1), add10(1)]
`,solution:`function makeAdder(n) {
  return (x) => x + n
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
return [add5(1), add10(1)]`,tests:[{input:[],expected:[6,11]}],hints:["Each closure has its own n","add5 captures n=5, add10 captures n=10"]},{id:"01-variables-declarations-scope-hoisting-12",title:"Hoisting order: function then var",starterCode:`var x = "var"
function x() { return "function" }
return typeof x
`,solution:`var x = "var"
function x() { return "function" }
return typeof x`,tests:[{input:[],expected:"string"}],hints:["Function declaration hoisted first, then var assignment overwrites",'x becomes string "var"']},{id:"01-variables-declarations-scope-hoisting-13",title:"Nested IIFE scope",starterCode:`(function() {
  var a = 1
  (function() {
    var b = 2
    (function() {
      return a + b
    })()
  })()
})()
`,solution:`(function() {
  var a = 1
  (function() {
    var b = 2
    (function() {
      return a + b
    })()
  })()
})()`,tests:[{input:[],expected:3}],hints:["Each IIFE can see parent IIFE variables","a=1, b=2, sum=3"]},{id:"01-variables-declarations-scope-hoisting-14",title:"Loop variable scope with let",starterCode:`const funcs = []
for (let i = 0; i < 3; i++) {
  funcs.push(() => i)
}
return funcs.map(f => f())
`,solution:`const funcs = []
for (let i = 0; i < 3; i++) {
  funcs.push(() => i)
}
return funcs.map(f => f())`,tests:[{input:[],expected:[0,1,2]}],hints:["let in for-loop creates per-iteration binding","Each closure captures different i value"]},{id:"01-variables-declarations-scope-hoisting-15",title:"Global scope pollution",starterCode:`var x = 10
function test() {
  x = 20  // Modifies global x
}
test()
return x
`,solution:`var x = 10
function test() {
  x = 20
}
test()
return x`,tests:[{input:[],expected:20}],hints:["Without declaration, x refers to global x","test() modifies the global variable"]},{id:"01-variables-declarations-scope-hoisting-16",title:"Function vs arrow function scope",starterCode:`const obj = {
  name: "test",
  regular: function() { return this.name },
  arrow: () => this.name
}
return [obj.regular(), obj.arrow()]
`,solution:`const obj = {
  name: "test",
  regular: function() { return this.name },
  arrow: () => this.name
}
return [obj.regular(), obj.arrow()]`,tests:[{input:[],expected:["test",null]}],hints:["Regular function: this = obj","Arrow function: this = outer (global)"]},{id:"01-variables-declarations-scope-hoisting-17",title:"Shadowing in nested blocks",starterCode:`let x = 1
if (true) {
  let x = 2
  if (true) {
    let x = 3
    return x
  }
}
`,solution:`let x = 1
if (true) {
  let x = 2
  if (true) {
    let x = 3
    return x
  }
}`,tests:[{input:[],expected:3}],hints:["Innermost let x wins","Each block has its own x"]},{id:"01-variables-declarations-scope-hoisting-18",title:"Switch case block scope",starterCode:`let result = "none"
switch(1) {
  case 1:
    let msg = "hello"
    result = msg
    break
}
return result
`,solution:`let result = "none"
switch(1) {
  case 1:
    let msg = "hello"
    result = msg
    break
}
return result`,tests:[{input:[],expected:"hello"}],hints:["case is a block, let msg is scoped to it","result captures msg's value"]},{id:"01-variables-declarations-scope-hoisting-19",title:"var function hoisting vs expression",starterCode:`console.log(typeof hello)
var hello = function() { return "world" }
console.log(typeof hello)
return typeof hello
`,solution:`console.log(typeof hello)
var hello = function() { return "world" }
console.log(typeof hello)
return typeof hello`,tests:[{input:[],expected:"function"}],hints:["var hello is hoisted as undefined initially",'After assignment, typeof becomes "function"']},{id:"01-variables-declarations-scope-hoisting-20",title:"Temporal Dead Zone visualization",starterCode:`let a = "outer"
function test() {
  try {
    console.log(a)
  } catch(e) {
    return "TDZ in function"
  }
  let a = "inner"
}
return test()
`,solution:`let a = "outer"
function test() {
  try {
    console.log(a)
  } catch(e) {
    return "TDZ in function"
  }
  let a = "inner"
}
return test()`,tests:[{input:[],expected:"TDZ in function"}],hints:["let a inside function shadows outer a","Before declaration, a is in TDZ"]},{id:"01-variables-declarations-scope-hoisting-21",title:"Closure in loop — fix",starterCode:`// Fix: each function should return its index
const fns = []
for (var i = 0; i < 3; i++) {
  fns.push(function() { return i })
}
return fns.map(f => f())
`,solution:`const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(function() { return i })
}
return fns.map(f => f())`,tests:[{input:[],expected:[0,1,2]}],hints:["Change var to let for per-iteration scope","Each closure captures different i"]},{id:"01-variables-declarations-scope-hoisting-22",title:"for-in with object keys",starterCode:`const obj = {a: 1, b: 2, c: 3}
let sum = 0
for (let key in obj) {
  sum += obj[key]
}
return sum
`,solution:`const obj = {a: 1, b: 2, c: 3}
let sum = 0
for (let key in obj) {
  sum += obj[key]
}
return sum`,tests:[{input:[],expected:6}],hints:["for-in iterates object keys","obj[key] accesses each value"]},{id:"01-variables-declarations-scope-hoisting-23",title:"Hoisting in try block",starterCode:`try {
  console.log(x)
} catch(e) {
  return "error"
}
var x = 5
return x
`,solution:`try {
  console.log(x)
} catch(e) {
  return "error"
}
var x = 5
return x`,tests:[{input:[],expected:5}],hints:["var x is hoisted to function/global scope","try block can see hoisted x (undefined)"]},{id:"01-variables-declarations-scope-hoisting-24",title:"Block-scoped function in if",starterCode:`if (true) {
  function test() { return "yes" }
}
try {
  return test()
} catch(e) {
  return "not accessible"
}
`,solution:`if (true) {
  function test() { return "yes" }
}
try {
  return test()
} catch(e) {
  return "not accessible"
}`,tests:[{input:[],expected:"yes"}],hints:["Function declarations in blocks are tricky","In browsers, function is accessible outside the block"]},{id:"01-variables-declarations-scope-hoisting-25",title:"Variable hoisting quiz",starterCode:`console.log(a)
console.log(b)
var a = 1
let b = 2
return b
`,solution:`console.log(a)
console.log(b)
var a = 1
let b = 2
return b`,tests:[{input:[],expected:2}],hints:["var a is hoisted with undefined","let b is in TDZ — accessing it throws error","Code will throw ReferenceError for b"]},{id:"01-variables-declarations-scope-hoisting-26",title:"Scope of parameters",starterCode:`function test(a, b = a + 1) {
  return b
}
return test(5)
`,solution:`function test(a, b = a + 1) {
  return b
}
return test(5)`,tests:[{input:[],expected:6}],hints:["Default parameter can reference earlier parameters","b = 5 + 1 = 6"]},{id:"01-variables-declarations-scope-hoisting-27",title:"Strict mode scope",starterCode:`"use strict"
try {
  x = 10
  return x
} catch(e) {
  return "ReferenceError"
}
`,solution:`"use strict"
try {
  x = 10
  return x
} catch(e) {
  return "ReferenceError"
}`,tests:[{input:[],expected:"ReferenceError"}],hints:["Strict mode prevents implicit globals","Must declare x with let/const/var first"]},{id:"01-variables-declarations-scope-hoisting-28",title:"Destructuring scope",starterCode:`const obj = { a: 1, b: 2, c: 3 }
const { a, ...rest } = obj
return { a, rest }
`,solution:`const obj = { a: 1, b: 2, c: 3 }
const { a, ...rest } = obj
return { a, rest }`,tests:[{input:[],expected:{a:1,rest:{b:2,c:3}}}],hints:["...rest collects remaining properties","a = 1, rest = {b: 2, c: 3}"]},{id:"01-variables-declarations-scope-hoisting-29",title:"Module scope simulation",starterCode:`// Simulate module scope with IIFE
const module = (function() {
  const private = "secret"
  return {
    get: () => private
  }
})()
return module.get()
`,solution:`const module = (function() {
  const private = "secret"
  return {
    get: () => private
  }
})()
return module.get()`,tests:[{input:[],expected:"secret"}],hints:["IIFE creates module scope","private is not accessible outside"]},{id:"01-variables-declarations-scope-hoisting-30",title:"Dynamic scope vs lexical",starterCode:`const x = "global"
function foo() { return x }
function bar() {
  const x = "bar"
  return foo()
}
return bar()
`,solution:`const x = "global"
function foo() { return x }
function bar() {
  const x = "bar"
  return foo()
}
return bar()`,tests:[{input:[],expected:"global"}],hints:["JavaScript uses lexical (not dynamic) scope","foo() sees x from where it was defined, not called"]},{id:"01-variables-declarations-scope-hoisting-31",title:"Getter setter scope",starterCode:`const obj = {
  _val: 0,
  get val() { return this._val },
  set val(v) { this._val = v }
}
obj.val = 42
return obj.val
`,solution:`const obj = {
  _val: 0,
  get val() { return this._val },
  set val(v) { this._val = v }
}
obj.val = 42
return obj.val`,tests:[{input:[],expected:42}],hints:["Getter/setter act like properties","set val(v) updates _val, get val returns it"]},{id:"01-variables-declarations-scope-hoisting-32",title:"Promise scope",starterCode:`let x = "before"
Promise.resolve("done").then(v => { x = v })
return x
`,solution:`let x = "before"
Promise.resolve("done").then(v => { x = v })
return x`,tests:[{input:[],expected:"before"}],hints:["Promise.then runs asynchronously","return x happens before the callback"]},{id:"01-variables-declarations-scope-hoisting-33",title:"Arrow function concise body",starterCode:`const double = x => x * 2
const add = (a, b) => a + b
return [double(5), add(3, 4)]
`,solution:`const double = x => x * 2
const add = (a, b) => a + b
return [double(5), add(3, 4)]`,tests:[{input:[],expected:[10,7]}],hints:["Single expression arrow functions auto-return","No need for return keyword or braces"]},{id:"01-variables-declarations-scope-hoisting-34",title:"Spread in function call",starterCode:`function sum(a, b, c) { return a + b + c }
const nums = [1, 2, 3]
return sum(...nums)
`,solution:`function sum(a, b, c) { return a + b + c }
const nums = [1, 2, 3]
return sum(...nums)`,tests:[{input:[],expected:6}],hints:["...spread expands array into arguments","sum(1, 2, 3) = 6"]},{id:"01-variables-declarations-scope-hoisting-35",title:"Rest parameters",starterCode:`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
return sum(1, 2, 3, 4, 5)
`,solution:`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
return sum(1, 2, 3, 4, 5)`,tests:[{input:[],expected:15}],hints:["...rest collects all arguments into array","reduce sums them up"]},{id:"01-variables-declarations-scope-hoisting-36",title:"Map filter reduce chain",starterCode:`const nums = [1, 2, 3, 4, 5, 6]
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a, b) => a + b, 0)
return result
`,solution:`const nums = [1, 2, 3, 4, 5, 6]
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((a, b) => a + b, 0)
return result`,tests:[{input:[],expected:120}],hints:["Filter evens: [2,4,6]","Map to tens: [20,40,60]","Reduce sum: 120"]},{id:"01-variables-declarations-scope-hoisting-37",title:"Template literal multiline",starterCode:`const name = "JS"
const str = \`Hello
\${name}
World\`
return str.split("\\n").length
`,solution:`const name = "JS"
const str = \`Hello
\${name}
World\`
return str.split("\\n").length`,tests:[{input:[],expected:3}],hints:["Template literals support multiline strings","split on newline gives 3 parts"]},{id:"01-variables-declarations-scope-hoisting-38",title:"Symbol as object key",starterCode:`const id = Symbol("id")
const obj = { [id]: 123, name: "test" }
return obj[id]
`,solution:`const id = Symbol("id")
const obj = { [id]: 123, name: "test" }
return obj[id]`,tests:[{input:[],expected:123}],hints:["Symbols can be object keys","Access with obj[symbolVariable]"]},{id:"01-variables-declarations-scope-hoisting-39",title:"WeakMap scope usage",starterCode:`const wm = new WeakMap()
let obj = { key: "value" }
wm.set(obj, "metadata")
obj = null  // Remove reference
return wm.has(obj)
`,solution:`const wm = new WeakMap()
let obj = { key: "value" }
wm.set(obj, "metadata")
obj = null
return wm.has(obj)`,tests:[{input:[],expected:!1}],hints:["WeakMap allows garbage collection of keys","When obj is nulled, entry is removed"]},{id:"01-variables-declarations-scope-hoisting-40",title:"Generators and scope",starterCode:`function* counter() {
  let i = 0
  while (true) yield i++
}
const gen = counter()
return [gen.next().value, gen.next().value, gen.next().value]
`,solution:`function* counter() {
  let i = 0
  while (true) yield i++
}
const gen = counter()
return [gen.next().value, gen.next().value, gen.next().value]`,tests:[{input:[],expected:[0,1,2]}],hints:["Generator preserves state between yields","i persists across next() calls"]},{id:"01-variables-declarations-scope-hoisting-41",title:"Proxy scope trap",starterCode:`const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : "not found"
}
const proxy = new Proxy({ a: 1 }, handler)
return [proxy.a, proxy.b]
`,solution:`const handler = {
  get: (obj, prop) => prop in obj ? obj[prop] : "not found"
}
const proxy = new Proxy({ a: 1 }, handler)
return [proxy.a, proxy.b]`,tests:[{input:[],expected:[1,"not found"]}],hints:["Proxy intercepts property access","handler.get checks if property exists"]},{id:"01-variables-declarations-scope-hoisting-42",title:"WeakRef and scope",starterCode:`let target = { val: 42 }
const ref = new WeakRef(target)
target = null
return ref.deref()
`,solution:`let target = { val: 42 }
const ref = new WeakRef(target)
target = null
return ref.deref()`,tests:[{input:[],expected:{val:42}}],hints:["WeakRef holds weak reference to target","deref() returns the target or undefined"]},{id:"01-variables-declarations-scope-hoisting-43",title:"FinalizationRegistry",starterCode:`let cleaned = false
const reg = new FinalizationRegistry(() => { cleaned = true })
let obj = {}
reg.register(obj)
obj = null
return cleaned
`,solution:`let cleaned = false
const reg = new FinalizationRegistry(() => { cleaned = true })
let obj = {}
reg.register(obj)
obj = null
return cleaned`,tests:[{input:[],expected:!1}],hints:["FinalizationRegistry callback runs on GC","GC timing is not deterministic","cleaned may still be false synchronously"]},{id:"01-variables-declarations-scope-hoisting-44",title:"Async/await scope",starterCode:`async function getData() {
  const data = await Promise.resolve("hello")
  return data
}
return await getData()
`,solution:`async function getData() {
  const data = await Promise.resolve("hello")
  return data
}
return await getData()`,tests:[{input:[],expected:"hello"}],hints:["async function returns a Promise","await unwraps the Promise value"]},{id:"01-variables-declarations-scope-hoisting-45",title:"Promise.all scope",starterCode:`const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)
return await Promise.all([p1, p2, p3])
`,solution:`const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)
return await Promise.all([p1, p2, p3])`,tests:[{input:[],expected:[1,2,3]}],hints:["Promise.all resolves all promises","Returns array of resolved values"]},{id:"01-variables-declarations-scope-hoisting-46",title:"Promise.race behavior",starterCode:`const fast = new Promise(r => setTimeout(() => r("fast"), 10))
const slow = new Promise(r => setTimeout(() => r("slow"), 100))
return await Promise.race([fast, slow])
`,solution:`const fast = new Promise(r => setTimeout(() => r("fast"), 10))
const slow = new Promise(r => setTimeout(() => r("slow"), 100))
return await Promise.race([fast, slow])`,tests:[{input:[],expected:"fast"}],hints:["Promise.race resolves with first settled promise","fast resolves first"]},{id:"01-variables-declarations-scope-hoisting-47",title:"Dynamic import scope",starterCode:`// In browser this would be:
// const module = await import("./module.js")
// For now, simulate:
return "module loaded"
`,solution:'return "module loaded"',tests:[{input:[],expected:"module loaded"}],hints:["Dynamic import() loads modules on demand","Returns a Promise that resolves to the module"]},{id:"01-variables-declarations-scope-hoisting-48",title:"with statement (deprecated)",starterCode:`const obj = { a: 1, b: 2 }
try {
  with (obj) {
    return a + b
  }
} catch(e) {
  return "strict mode error"
}
`,solution:`const obj = { a: 1, b: 2 }
try {
  with (obj) {
    return a + b
  }
} catch(e) {
  return "strict mode error"
}`,tests:[{input:[],expected:3}],hints:["with adds obj properties to scope","Deprecated and forbidden in strict mode"]},{id:"01-variables-declarations-scope-hoisting-49",title:"eval scope",starterCode:`const x = 10
function test() {
  const x = 20
  return eval("x")
}
return test()
`,solution:`const x = 10
function test() {
  const x = 20
  return eval("x")
}
return test()`,tests:[{input:[],expected:20}],hints:["eval runs in local scope","Sees function's x = 20, not global x = 10"]},{id:"01-variables-declarations-scope-hoisting-50",title:"debugger statement scope",starterCode:`// debugger statement pauses execution
// This exercise demonstrates scope inspection
const x = 1
function inner() {
  const y = 2
  return x + y
}
return inner()
`,solution:`const x = 1
function inner() {
  const y = 2
  return x + y
}
return inner()`,tests:[{input:[],expected:3}],hints:["debugger pauses in DevTools","You can inspect scope variables there"]}],"01-variables-declarations-02-var-let-const":[{id:"01-variables-declarations-var-let-const-01",title:"Bug: var leaking from block",starterCode:`// Fix this code — should print "defined" not 10
if (true) {
  var x = 10
}
return typeof x === "undefined" ? "fixed" : "not fixed"
`,solution:`if (true) {
  let x = 10
}
return typeof x === "undefined" ? "fixed" : "not fixed"`,tests:[{input:[],expected:"fixed"}],hints:["var se block scope nahi milta","let use karo var ki jagah"]},{id:"01-variables-declarations-var-let-const-02",title:"Bug: loop counter leaking",starterCode:`// Fix: i loop ke bahar accessible nahi hona chahiye
for (var i = 0; i < 3; i++) {}
return typeof i === "undefined" ? "fixed" : "not fixed"
`,solution:`for (let i = 0; i < 3; i++) {}
return typeof i === "undefined" ? "fixed" : "not fixed"`,tests:[{input:[],expected:"fixed"}],hints:["let se i block scoped ho jayega"]},{id:"01-variables-declarations-var-let-const-03",title:"Bug: const reassignment",starterCode:`// Fix: this should not throw error
const PI = 3.14
try {
  PI = 3.14159
  return "changed"
} catch(e) {
  return "error: " + e.message
}
`,solution:`const PI = 3.14
try {
  PI = 3.14159
  return "changed"
} catch(e) {
  return "error: " + e.message
}`,tests:[{input:[],expected:"error: Assignment to constant variable."}],hints:["const reassign nahi ho sakta","Ye error expected hai — catch mein handle karo"]},{id:"01-variables-declarations-var-let-const-04",title:"Bug: var hoisting mystery",starterCode:`// Predict and fix the output
console.log(a)  // What is this?
var a = 5
return a
`,solution:`console.log(a)
var a = 5
return a`,tests:[{input:[],expected:5}],hints:["var hoisted hota hai with undefined","Assignment nahi hota sirf declaration"]},{id:"01-variables-declarations-var-let-const-05",title:"Bug: function declaration vs expression",starterCode:`// Fix: both should work
console.log(add(2,3))
var add = function(a,b) { return a+b }
`,solution:`console.log(add(2,3))
var add = function(a,b) { return a+b }`,tests:[{input:[],expected:"add is not a function"}],hints:["var expression hoisted nahi hota","Function declaration use karo pehle"]},{id:"01-variables-declarations-var-let-const-06",title:"Bug: shadowing confusion",starterCode:`var x = 1
function test() {
  console.log(x)  // Should be 1, not undefined
  var x = 2
}
test()
return 1
`,solution:`var x = 1
function test() {
  console.log(x)
  var x = 2
}
test()
return 1`,tests:[{input:[],expected:1}],hints:["var x = 2 declaration hoists, so x is undefined in the function"]},{id:"01-variables-declarations-var-let-const-07",title:"Bug: TDZ with let",starterCode:`// Fix this Temporal Dead Zone error
try {
  let y = y + 1
  return y
} catch(e) {
  return "TDZ error caught"
}
`,solution:`try {
  let y = y + 1
  return y
} catch(e) {
  return "TDZ error caught"
}`,tests:[{input:[],expected:"TDZ error caught"}],hints:["let y = y + 1 — right side pe y abhi defined nahi hai","TDZ mein access karne se ReferenceError aata hai"]},{id:"01-variables-declarations-var-let-const-08",title:"Bug: const without initialization",starterCode:`try {
  const x
  return x
} catch(e) {
  return "error: must initialize"
}
`,solution:`try {
  const x
  return x
} catch(e) {
  return "error: must initialize"
}`,tests:[{input:[],expected:"error: must initialize"}],hints:["const hamesha initialize hona chahiye","const x; SyntaxError deta hai"]},{id:"01-variables-declarations-var-let-const-09",title:"Bug: var in function param shadows",starterCode:`function test(x) {
  var x = 10
  return x
}
return test(5)
`,solution:`function test(x) {
  var x = 10
  return x
}
return test(5)`,tests:[{input:[],expected:10}],hints:["var x = 10 shadows the parameter x","Inner x wins — returns 10"]},{id:"01-variables-declarations-var-let-const-10",title:"Bug: for-loop var closure",starterCode:`// All should print 0, 1, 2 but prints 3, 3, 3
var funcs = []
for (var i = 0; i < 3; i++) {
  funcs.push(function() { return i })
}
return [funcs[0](), funcs[1](), funcs[2]()]
`,solution:`let funcs = []
for (let i = 0; i < 3; i++) {
  funcs.push(function() { return i })
}
return [funcs[0](), funcs[1](), funcs[2]()]`,tests:[{input:[],expected:[0,1,2]}],hints:["var se i shared hota hai, let se per-iteration hota hai"]},{id:"01-variables-declarations-var-let-const-11",title:"Bug: while loop var scope",starterCode:`var i = 0
while (i < 3) {
  var result = i
  i++
}
return result
`,solution:`var i = 0
while (i < 3) {
  var result = i
  i++
}
return result`,tests:[{input:[],expected:2}],hints:["var result block ke bahar leak hota hai","Last value 2 hogi"]},{id:"01-variables-declarations-var-let-const-12",title:"Bug: const reference sharing",starterCode:`const a = { x: 1 }
const b = a
b.x = 99
return a.x
`,solution:`const a = { x: 1 }
const b = a
b.x = 99
return a.x`,tests:[{input:[],expected:99}],hints:["Objects by reference copy hote hain","b aur a same object point karte hain"]},{id:"01-variables-declarations-var-let-const-13",title:"Bug: let in for-of loop",starterCode:`const arr = ["a", "b", "c"]
let result = []
for (let x of arr) {
  result.push(x)
}
return result
`,solution:`const arr = ["a", "b", "c"]
let result = []
for (let x of arr) {
  result.push(x)
}
return result`,tests:[{input:[],expected:["a","b","c"]}],hints:["for-of se har iteration ka independent x hota hai"]},{id:"01-variables-declarations-var-let-const-14",title:"Bug: freeze not deep",starterCode:`const obj = Object.freeze({ a: { b: 1 } })
try {
  obj.a.b = 99
  return obj.a.b
} catch(e) {
  return "frozen"
}
`,solution:`const obj = Object.freeze({ a: { b: 1 } })
try {
  obj.a.b = 99
  return obj.a.b
} catch(e) {
  return "frozen"
}`,tests:[{input:[],expected:99}],hints:["Freeze shallow hota hai — nested objects change ho sakte hain"]},{id:"01-variables-declarations-var-let-const-15",title:"Bug: re-declaration var allowed",starterCode:`var x = 1
var x = 2
var x = 3
return x
`,solution:`var x = 1
var x = 2
var x = 3
return x`,tests:[{input:[],expected:3}],hints:["Var mein redeclaration allowed hai","Last value 3 rahegi"]},{id:"01-variables-declarations-var-let-const-16",title:"Nested scope resolution",starterCode:`var x = "global"
function outer() {
  var x = "outer"
  function inner() {
    var x = "inner"
    return x
  }
  return inner()
}
return outer()
`,solution:`var x = "global"
function outer() {
  var x = "outer"
  function inner() {
    var x = "inner"
    return x
  }
  return inner()
}
return outer()`,tests:[{input:[],expected:"inner"}],hints:["Scope chain: inner > outer > global","Sabse paas wala x choose hota hai"]},{id:"01-variables-declarations-var-let-const-17",title:"Block scope with let/const",starterCode:`{
  let a = 1
  const b = 2
  var c = 3
}
return { a: typeof a, b: typeof b, c: typeof c }
`,solution:`{
  let a = 1
  const b = 2
  var c = 3
}
return { a: typeof a, b: typeof b, c: typeof c }`,tests:[{input:[],expected:{a:"undefined",b:"undefined",c:"number"}}],hints:["let/const block scope, var function/global scope"]},{id:"01-variables-declarations-var-let-const-18",title:"Scope with try-catch",starterCode:`try {
  let x = 10
} catch(e) {}
return typeof x
`,solution:`try {
  let x = 10
} catch(e) {}
return typeof x`,tests:[{input:[],expected:"undefined"}],hints:["try-catch bhi block hai","let x sirf try block mein accessible hai"]},{id:"01-variables-declarations-var-let-const-19",title:"var in nested functions",starterCode:`function a() {
  var x = 1
  function b() {
    var x = 2
    function c() {
      return x
    }
    return c()
  }
  return b()
}
return a()
`,solution:`function a() {
  var x = 1
  function b() {
    var x = 2
    function c() {
      return x
    }
    return c()
  }
  return b()
}
return a()`,tests:[{input:[],expected:2}],hints:["c() mein sabse paas ka x = 2 milta hai"]},{id:"01-variables-declarations-var-let-const-20",title:"Global pollution demo",starterCode:`var global = "original"
function change() {
  global = "changed"
}
change()
return global
`,solution:`var global = "original"
function change() {
  global = "changed"
}
change()
return global`,tests:[{input:[],expected:"changed"}],hints:["var se declare kiya variable global hota hai","Function se direct modify ho sakta hai"]},{id:"01-variables-declarations-var-let-const-21",title:"IIFE scope isolation",starterCode:`const result = (function() {
  var secret = 42
  return secret
})()
return result
`,solution:`const result = (function() {
  var secret = 42
  return secret
})()
return result`,tests:[{input:[],expected:42}],hints:["IIFE turant execute hota hai","Variable IIFE ke scope mein confined hai"]},{id:"01-variables-declarations-var-let-const-22",title:"Closure captures variable",starterCode:`function makeCounter() {
  let count = 0
  return function() {
    return ++count
  }
}
const counter = makeCounter()
return [counter(), counter(), counter()]
`,solution:`function makeCounter() {
  let count = 0
  return function() {
    return ++count
  }
}
const counter = makeCounter()
return [counter(), counter(), counter()]`,tests:[{input:[],expected:[1,2,3]}],hints:["Closure parent ke variables ko yaad rakhta hai","Har call pe count badhta hai"]},{id:"01-variables-declarations-var-let-const-23",title:"Multiple closures independent",starterCode:`function makeAdder(n) {
  return function(x) { return x + n }
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
return [add5(3), add10(3)]
`,solution:`function makeAdder(n) {
  return function(x) { return x + n }
}
const add5 = makeAdder(5)
const add10 = makeAdder(10)
return [add5(3), add10(3)]`,tests:[{input:[],expected:[8,13]}],hints:["Har closure ka apna n hota hai","add5(3) = 3+5=8, add10(3) = 3+10=13"]},{id:"01-variables-declarations-var-let-const-24",title:"Loop variable capture with let",starterCode:`const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
return fns.map(f => f())
`,solution:`const fns = []
for (let i = 0; i < 3; i++) {
  fns.push(() => i)
}
return fns.map(f => f())`,tests:[{input:[],expected:[0,1,2]}],hints:["Let creates per-iteration binding","Each closure captures different i"]},{id:"01-variables-declarations-var-let-const-25",title:"Hoisting order: function > var",starterCode:`console.log(typeof a)
var a = 1
function a() { return 2 }
console.log(typeof a)
return typeof a
`,solution:`console.log(typeof a)
var a = 1
function a() { return 2 }
console.log(typeof a)
return typeof a`,tests:[{input:[],expected:"number"}],hints:["Function declaration hoisted first, then var","But var assignment overrides function"]},{id:"01-variables-declarations-var-let-const-26",title:"TDZ with for-loop let",starterCode:`try {
  for (let i = 0; i < 1; i++) {
    // do nothing
  }
  return i
} catch(e) {
  return "TDZ"
}
`,solution:`try {
  for (let i = 0; i < 1; i++) {
    // do nothing
  }
  return i
} catch(e) {
  return "TDZ"
}`,tests:[{input:[],expected:"TDZ"}],hints:["let i in for-loop is scoped to the loop","Accessing i outside throws ReferenceError"]},{id:"01-variables-declarations-var-let-const-27",title:"const in loop body",starterCode:`const results = []
for (let i = 0; i < 3; i++) {
  const val = i * 10
  results.push(val)
}
return results
`,solution:`const results = []
for (let i = 0; i < 3; i++) {
  const val = i * 10
  results.push(val)
}
return results`,tests:[{input:[],expected:[0,10,20]}],hints:["const val = i * 10 — har iteration mein naya const"]},{id:"01-variables-declarations-var-let-const-28",title:"Scope of catch variable",starterCode:`try {
  throw "error"
} catch(e) {
  var msg = e
}
return msg
`,solution:`try {
  throw "error"
} catch(e) {
  var msg = e
}
return msg`,tests:[{input:[],expected:"error"}],hints:["var msg catch block ke bahar accessible hai","catch(e) ka e sirf catch block mein hai"]},{id:"01-variables-declarations-var-let-const-29",title:"Arrow function scope",starterCode:`const obj = {
  value: 42,
  getValue: () => this.value
}
return obj.getValue()
`,solution:`const obj = {
  value: 42,
  getValue: () => this.value
}
return obj.getValue()`,tests:[{input:[]}],hints:["Arrow function ka apna this nahi hota","Global this se value undefined"]},{id:"01-variables-declarations-var-let-const-30",title:"var function hoisting",starterCode:`return add(2, 3)
function add(a, b) { return a + b }
`,solution:`return add(2, 3)
function add(a, b) { return a + b }`,tests:[{input:[],expected:5}],hints:["Function declarations fully hoisted hoti hain","Declare se pehle call kar sakte ho"]},{id:"01-variables-declarations-var-let-const-31",title:"Score tracker with closure",starterCode:`// Function banao jo score track kare
function createScoreTracker(initialScore) {
  let score = initialScore
  return {
    add: (points) => { /* TODO */ },
    deduct: (points) => { /* TODO */ },
    getScore: () => /* TODO */
  }
}`,solution:`function createScoreTracker(initialScore) {
  let score = initialScore
  return {
    add: (points) => { score += points },
    deduct: (points) => { score -= points },
    getScore: () => score
  }
}`,tests:[{input:[]}],hints:["Score variable closure se track hota hai","Methods score modify karte hain"]},{id:"01-variables-declarations-var-let-const-32",title:"Private counter class",starterCode:`// Private counter banao — count directly access nahi hona chahiye
class Counter {
  #count = 0
  // TODO: increment, decrement, getValue methods
}
`,solution:`class Counter {
  #count = 0
  increment() { this.#count++ }
  decrement() { this.#count-- }
  getValue() { return this.#count }
}`,tests:[{input:[]}],hints:["# se private field banti hai","Sirf methods se access ho sakta hai"]},{id:"01-variables-declarations-var-let-const-33",title:"Config with defaults",starterCode:`// User config aur defaults merge karo
function mergeConfig(defaults, userConfig) {
  // TODO: shallow merge with defaults
}
`,solution:`function mergeConfig(defaults, userConfig) {
  return { ...defaults, ...userConfig }
}`,tests:[{input:[{host:"localhost",port:3e3},{port:8080}],expected:{host:"localhost",port:8080}}],hints:["Spread operator se merge hota hai","User config defaults ko override karta hai"]},{id:"01-variables-declarations-var-let-const-34",title:"Array rotation",starterCode:`// Array ko k steps right se rotate karo
// rotate([1,2,3,4,5], 2) = [4,5,1,2,3]
function rotate(arr, steps) {
  // TODO
}
`,solution:`function rotate(arr, steps) {
  const n = steps % arr.length
  return [...arr.slice(-n), ...arr.slice(0, -n)]
}`,tests:[{input:[[1,2,3,4,5],2],expected:[4,5,1,2,3]}],hints:["steps % length se extra rotation handle hota hai","slice(-n) se last n elements milte hain"]},{id:"01-variables-declarations-var-let-const-35",title:"Object deep freeze",starterCode:`// Recursive deep freeze banao
function deepFreeze(obj) {
  // TODO
}
`,solution:`function deepFreeze(obj) {
  Object.freeze(obj)
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key])
    }
  })
  return obj
}`,tests:[{input:[{a:{b:1}}],expected:{a:{b:1}}}],hints:["Pehle khud ko freeze karo","Phir har nested object ko recursively freeze karo"]},{id:"01-variables-declarations-var-let-const-36",title:"Chunk iterator",starterCode:`// Iterator banao jo array ko chunks mein yield kare
function* chunkIterator(arr, size) {
  // TODO
}
`,solution:`function* chunkIterator(arr, size) {
  for (let i = 0; i < arr.length; i += size) {
    yield arr.slice(i, i + size)
  }
}`,tests:[{input:[[1,2,3,4,5],2],expected:[[1,2],[3,4],[5]]}],hints:["Generator function * lagao","yield se values ek ek karke return hoti hain"]},{id:"01-variables-declarations-var-let-const-37",title:"Lazy evaluation",starterCode:`// Function banao jo sirf tab compute kare jab zarurat ho
function lazyComputation(fn) {
  // TODO
}
`,solution:`function lazyComputation(fn) {
  let computed = false
  let result
  return function() {
    if (!computed) {
      result = fn()
      computed = true
    }
    return result
  }
}`,tests:[{input:[]}],hints:["Computation ko cache karo","Sirf pehli call pe compute karo"]},{id:"01-variables-declarations-var-let-const-38",title:"Scoped variable initializer",starterCode:`// Variable jo sirf ek baar initialize ho
function createLazyInit(initializer) {
  // TODO
}
`,solution:`function createLazyInit(initializer) {
  let value
  let initialized = false
  return () => {
    if (!initialized) {
      value = initializer()
      initialized = true
    }
    return value
  }
}`,tests:[{input:[]}],hints:["Lazy initialization pattern hai ye","Initialized flag se track karo"]},{id:"01-variables-declarations-var-let-const-39",title:"Variable scoping in switch",starterCode:`switch(1) {
  case 1:
    var x = "from case 1"
    // fall through
  case 2:
    let y = "from case 2"
    break
}
return { x, typeofY: typeof y }
`,solution:`switch(1) {
  case 1:
    var x = "from case 1"
  case 2:
    let y = "from case 2"
    break
}
return { x, typeofY: typeof y }`,tests:[{input:[],expected:{x:"from case 1",typeofY:"undefined"}}],hints:["var x switch ke bahar accessible hai","let y sirf case 2 block mein hai"]},{id:"01-variables-declarations-var-let-const-40",title:"Module pattern",starterCode:`// Module pattern banao
const module = (function() {
  let private = 0
  return {
    increment: () => { /* TODO */ },
    getValue: () => /* TODO */
  }
})()
return [module.increment(), module.increment(), module.getValue()]
`,solution:`const module = (function() {
  let private = 0
  return {
    increment: () => { private++ },
    getValue: () => private
  }
})()
return [module.increment(), module.increment(), module.getValue()]`,tests:[{input:[],expected:[null,null,2]}],hints:["IIFE se private scope banta hai","Methods closure se private variable access karte hain"]},{id:"01-variables-declarations-var-let-const-41",title:"Variable hoisting quiz",starterCode:`// What does this return?
var a = 1
function a() {}
console.log(typeof a)
return typeof a
`,solution:`var a = 1
function a() {}
console.log(typeof a)
return typeof a`,tests:[{input:[],expected:"number"}],hints:["Function declaration hoisted, but var assignment overwrites it","a becomes 1 (number) after assignment"]},{id:"01-variables-declarations-var-let-const-42",title:"let in catch block",starterCode:`try {
  throw new Error("fail")
} catch (e) {
  let msg = e.message
}
return typeof msg
`,solution:`try {
  throw new Error("fail")
} catch (e) {
  let msg = e.message
}
return typeof msg`,tests:[{input:[],expected:"undefined"}],hints:["let msg is scoped to catch block","msg not accessible outside"]},{id:"01-variables-declarations-var-let-const-43",title:"Arrow vs regular function this",starterCode:`const obj = {
  name: "test",
  regular: function() { return this.name },
  arrow: () => this.name
}
return [obj.regular(), obj.arrow()]
`,solution:`const obj = {
  name: "test",
  regular: function() { return this.name },
  arrow: () => this.name
}
return [obj.regular(), obj.arrow()]`,tests:[{input:[],expected:["test",null]}],hints:["Regular function mein this calling context hota hai","Arrow function global this use karta hai"]},{id:"01-variables-declarations-var-let-const-44",title:"const with forEach",starterCode:`const arr = [1, 2, 3]
const doubled = []
arr.forEach(x => doubled.push(x * 2))
return doubled
`,solution:`const arr = [1, 2, 3]
const doubled = []
arr.forEach(x => doubled.push(x * 2))
return doubled`,tests:[{input:[],expected:[2,4,6]}],hints:["const array mein push kar sakte ho","forEach callback har element ke liye chalta hai"]},{id:"01-variables-declarations-var-let-const-45",title:"Variable in for-in loop",starterCode:`const obj = {a: 1, b: 2, c: 3}
const keys = []
for (let key in obj) {
  keys.push(key)
}
return keys
`,solution:`const obj = {a: 1, b: 2, c: 3}
const keys = []
for (let key in obj) {
  keys.push(key)
}
return keys`,tests:[{input:[],expected:["a","b","c"]}],hints:["for-in iterates over object keys","let key gets each key one by one"]},{id:"01-variables-declarations-var-let-const-46",title:"Scope with default params",starterCode:`const x = 10
function test(x = x + 1) {
  return x
}
try {
  return test()
} catch(e) {
  return "TDZ error"
}
`,solution:`const x = 10
function test(x = x + 1) {
  return x
}
try {
  return test()
} catch(e) {
  return "TDZ error"
}`,tests:[{input:[],expected:"TDZ error"}],hints:["Default param x is in TDZ when evaluated","x = x + 1 tries to access x before it's initialized"]},{id:"01-variables-declarations-var-let-const-47",title:"Destructuring with scope",starterCode:`const arr = [1, 2, 3]
const [a, , c] = arr
return { a, c }
`,solution:`const arr = [1, 2, 3]
const [a, , c] = arr
return { a, c }`,tests:[{input:[],expected:{a:1,c:3}}],hints:["Destructuring skips the second element","a gets 1, c gets 3"]},{id:"01-variables-declarations-var-let-const-48",title:"Computed property names",starterCode:`const key = "name"
const obj = { [key]: "test" }
return obj.name
`,solution:`const key = "name"
const obj = { [key]: "test" }
return obj.name`,tests:[{input:[],expected:"test"}],hints:["[key] in object literal computes the property name",'key = "name" so obj.name = "test"']},{id:"01-variables-declarations-var-let-const-49",title:"Optional chaining scope",starterCode:`const user = { address: { city: "NY" } }
return user?.address?.zip
`,solution:`const user = { address: { city: "NY" } }
return user?.address?.zip`,tests:[{input:[]}],hints:["?. returns undefined instead of throwing error","user.address.zip would throw, ?. handles it gracefully"]},{id:"01-variables-declarations-var-let-const-50",title:"Nullish coalescing",starterCode:`const a = null
const b = undefined
const c = 0
const d = ""
return [a ?? "default", b ?? "default", c ?? "default", d ?? "default"]
`,solution:`const a = null
const b = undefined
const c = 0
const d = ""
return [a ?? "default", b ?? "default", c ?? "default", d ?? "default"]`,tests:[{input:[],expected:["default","default",0,""]}],hints:["?? only checks null/undefined, not falsy values",'0 and "" are not null/undefined so they pass through']}],"01-variables-declarations-01-variables-intro":[{id:"01-variables-declarations-variables-intro-01",title:"Apna profile banao",starterCode:`// const se name aur city declare karo
// let se age declare karo
// Teeno ko return karo as object: { name, city, age }
`,solution:`const name = "Hariom"
const city = "Jaipur"
let age = 25
return { name, city, age }`,tests:[{input:[],expected:{name:"Hariom",city:"Jaipur",age:25}}],hints:["const se constant value, let se reassignable variable banata hai","return { name, city, age } likho"]},{id:"01-variables-declarations-variables-intro-02",title:"Temperature converter",starterCode:`// Celsius variable banao = 37
// Usko Fahrenheit mein convert karo (C * 9/5 + 32)
// Return karo Fahrenheit value
const celsius = 37
`,solution:`const celsius = 37
const fahrenheit = celsius * 9/5 + 32
return fahrenheit`,tests:[{input:[],expected:98.6}],hints:["Formula: C * 9/5 + 32","Ek aur variable banao result store karne ke liye"]},{id:"01-variables-declarations-variables-intro-03",title:"Swap variables bina temp ke",starterCode:`let a = 10
let b = 20
// a aur b ki values swap karo (bina third variable ke)
// Hint: array destructuring use karo
`,solution:`let a = 10
let b = 20
[a, b] = [b, a]
return { a, b }`,tests:[{input:[],expected:{a:20,b:10}}],hints:["[a, b] = [b, a] se swap hota hai","Array destructuring ka trick hai ye"]},{id:"01-variables-declarations-variables-intro-04",title:"BMI calculator",starterCode:`const weight = 70  // kg
const height = 1.75  // meters
// BMI = weight / (height * height)
// Return karo BMI (2 decimal places)
`,solution:`const weight = 70
const height = 1.75
const bmi = weight / (height * height)
return Math.round(bmi * 100) / 100`,tests:[{input:[],expected:22.86}],hints:["weight / (height ** 2) se BMI aata hai","Math.round(bmi * 100) / 100 se 2 decimal milenge"]},{id:"01-variables-declarations-variables-intro-05",title:"String to number conversion",starterCode:`const price = "199"
const quantity = "3"
// Dono ko number mein convert karo aur total calculate karo
`,solution:`const price = "199"
const quantity = "3"
return Number(price) * Number(quantity)`,tests:[{input:[],expected:597}],hints:["Number() se string convert hoti hai","parseInt() bhi use kar sakte ho"]},{id:"01-variables-declarations-variables-intro-06",title:"Template literal se sentence banao",starterCode:`const name = "Rahul"
const score = 95
const total = 100
// Template literal se return karo: "Rahul scored 95 out of 100"
`,solution:'const name = "Rahul"\nconst score = 95\nconst total = 100\nreturn `${name} scored ${score} out of ${total}`',tests:[{input:[],expected:"Rahul scored 95 out of 100"}],hints:["Backtick ` use karo string ke liye","${variable} se value inject hoti hai"]},{id:"01-variables-declarations-variables-intro-07",title:"Boolean logic — rain check",starterCode:`const isRaining = false
const hasUmbrella = true
// Agar barish ho rahi hai aur umbrella hai to "Go" return karo
// Varna "Stay" return karo
`,solution:`const isRaining = false
const hasUmbrella = true
return isRaining && hasUmbrella ? "Go" : "Stay"`,tests:[{input:[],expected:"Stay"}],hints:["&& means AND — dono true hone chahiye","Ternary operator: condition ? true : false"]},{id:"01-variables-declarations-variables-intro-08",title:"Discount calculator",starterCode:`const originalPrice = 1000
const discountPercent = 20
// Final price calculate karo aur return karo
`,solution:`const originalPrice = 1000
const discountPercent = 20
const finalPrice = originalPrice - (originalPrice * discountPercent / 100)
return finalPrice`,tests:[{input:[],expected:800}],hints:["Discount = price * percent / 100","Final = original - discount"]},{id:"01-variables-declarations-variables-intro-09",title:"Type checking function",starterCode:`// Function banao jo value ka type return kare
// Agar array ho to "array" return karo
// Agar null ho to "null" return karo
// Baki sab ke liye typeof return karo
function checkType(val) {
  // TODO
}
`,solution:`function checkType(val) {
  if (val === null) return "null"
  if (Array.isArray(val)) return "array"
  return typeof val
}`,tests:[{input:[42],expected:"number"},{input:["hello"],expected:"string"},{input:[[]],expected:"array"},{input:[null],expected:"null"}],hints:["Array.isArray() se array check hota hai",'null === null true deta hai, typeof null "object" deta hai']},{id:"01-variables-declarations-variables-intro-10",title:"Increment counter",starterCode:`let count = 0
// count ko 5 baar increment karo
// Har increment ke baad augmented assignment use karo
// Final count return karo
`,solution:`let count = 0
count += 1
count += 1
count += 1
count += 1
count += 1
return count`,tests:[{input:[],expected:5}],hints:["count++ ya count += 1 se badhata hai","5 baar karo"]},{id:"01-variables-declarations-variables-intro-11",title:"const se object banao aur modify karo",starterCode:`const user = { name: "Amit", age: 25 }
// Object ke andar age update karo 26 karke
// Return the updated user
`,solution:`const user = { name: "Amit", age: 25 }
user.age = 26
return user`,tests:[{input:[],expected:{name:"Amit",age:26}}],hints:["const se reassign nahi hota, but object ke properties change ho sakti hain","user.age = 26 karo"]},{id:"01-variables-declarations-variables-intro-12",title:"const array push karo",starterCode:`const fruits = ["apple", "banana"]
// "mango" push karo aur array return karo
`,solution:`const fruits = ["apple", "banana"]
fruits.push("mango")
return fruits`,tests:[{input:[],expected:["apple","banana","mango"]}],hints:["push() se end mein add hota hai","const array mein push kar sakte ho, reassign nahi"]},{id:"01-variables-declarations-variables-intro-13",title:"const reassign karne ki koshish",starterCode:`const x = 10
// Neeche x ko 20 assign karne ki koshish karo
// Wrap try-catch mein aur "Cannot reassign" return karo error mein
try {
  x = 20
} catch(e) {
  // TODO
}
`,solution:`const x = 10
try {
  x = 20
} catch(e) {
  return "Cannot reassign"
}`,tests:[{input:[],expected:"Cannot reassign"}],hints:["const variables reassign nahi ho sakti","catch block mein return karo error message"]},{id:"01-variables-declarations-variables-intro-14",title:"Nested object mutate karo",starterCode:`const config = { db: { host: "localhost", port: 3306 } }
// Port ko 5432 karke config return karo
`,solution:`const config = { db: { host: "localhost", port: 3306 } }
config.db.port = 5432
return config`,tests:[{input:[],expected:{db:{host:"localhost",port:5432}}}],hints:["config.db.port = 5432 likho","Nested property access dot notation se hota hai"]},{id:"01-variables-declarations-variables-intro-15",title:"Spread operator se copy",starterCode:`const original = { x: 1, y: 2, z: 3 }
// Shallow copy banao spread operator se
// Copy mein a = 10 add karo
// Original aur return karo (original unchanged hona chahiye)
`,solution:`const original = { x: 1, y: 2, z: 3 }
const copy = { ...original, a: 10 }
return copy`,tests:[{input:[],expected:{x:1,y:2,z:3,a:10}}],hints:["...original se saari properties copy hoti hain","Naya object spread se banao"]},{id:"01-variables-declarations-variables-intro-16",title:"var block scope leak fix karo",starterCode:`// Bug: var a block ke bahar leak ho raha hai
// Fix karo — a aur b dono sirf block mein accessible hona chahiye
if (true) {
  var a = 1
  let b = 2
}
console.log(a, typeof b)
return a
`,solution:`if (true) {
  let a = 1
  let b = 2
}
return typeof a === "undefined" ? "fixed" : "not fixed"`,tests:[{input:[],expected:"fixed"}],hints:["var → let se block scope milta hai","let block ke bahar accessible nahi hota"]},{id:"01-variables-declarations-variables-intro-17",title:"Loop closure fix — var vs let",starterCode:`// Bug: Har function 3 print karega, 0/1/2 nahi
// Fix karo using let
var funcs = []
for (var i = 0; i < 3; i++) {
  funcs.push(function() { return i })
}
return [funcs[0](), funcs[1](), funcs[2]()]
`,solution:`let funcs = []
for (let i = 0; i < 3; i++) {
  funcs.push(function() { return i })
}
return [funcs[0](), funcs[1](), funcs[2]()]`,tests:[{input:[],expected:[0,1,2]}],hints:["var se i function scope mein share hota hai","let se har iteration ka apna i hota hai"]},{id:"01-variables-declarations-variables-intro-18",title:"Redeclaration error fix karo",starterCode:`// Bug: do var declarations error nahi deti — ye galat hai
// Fix karo using let (error aana chahiye)
try {
  let x = 1
  let x = 2
  return "no error"
} catch(e) {
  return "error caught"
}
`,solution:`try {
  let x = 1
  let x = 2
  return "no error"
} catch(e) {
  return "error caught"
}`,tests:[{input:[],expected:"error caught"}],hints:["let se same scope mein dobara declare nahi kar sakte","var se redeclaration allowed hai, let/const se nahi"]},{id:"01-variables-declarations-variables-intro-19",title:"Shadowing — kaunsa x access hoga?",starterCode:`const x = 1
function test() {
  const x = 2
  return x
}
// Function ke andar ka x return karo
return test()
`,solution:`const x = 1
function test() {
  const x = 2
  return x
}
return test()`,tests:[{input:[],expected:2}],hints:["Inner scope wala x dikhta hai (shadowing)","Function ke andar ka x 2 hai"]},{id:"01-variables-declarations-variables-intro-20",title:"Hoisting predict karo",starterCode:`// Pehle code socho, phir predict karo:
console.log(a)
var a = 5
console.log(a)
return a
`,solution:`console.log(a)
var a = 5
console.log(a)
return a`,tests:[{input:[],expected:5}],hints:["var declaration hoisted hota hai, assignment nahi","Pehle undefined, phir 5"]},{id:"01-variables-declarations-variables-intro-21",title:"Cart total calculate karo",starterCode:`const items = [
  { name: "Phone", price: 29999, qty: 1 },
  { name: "Case", price: 499, qty: 2 }
]
// Total price calculate karo (price * qty) ka sum
// Return total
`,solution:`const items = [
  { name: "Phone", price: 29999, qty: 1 },
  { name: "Case", price: 499, qty: 2 }
]
const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
return total`,tests:[{input:[],expected:30997}],hints:["reduce() se sum nikalte hain","Har item ka price * qty jodna hai"]},{id:"01-variables-declarations-variables-intro-22",title:"Age validator function",starterCode:`// Function banao jo age check kare
// 18 se kam = "Minor"
// 18-60 = "Adult"
// 60+ = "Senior"
function getAgeCategory(age) {
  // TODO
}
`,solution:`function getAgeCategory(age) {
  if (age < 18) return "Minor"
  if (age <= 60) return "Adult"
  return "Senior"
}`,tests:[{input:[15],expected:"Minor"},{input:[25],expected:"Adult"},{input:[65],expected:"Senior"}],hints:["if-else if chain use karo","Pehle kam se zyada check karo"]},{id:"01-variables-declarations-variables-intro-23",title:"Fibonacci nth term",starterCode:`// Function banao jo nth Fibonacci number return kare
// fib(0) = 0, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2)
function fib(n) {
  // TODO
}
`,solution:`function fib(n) {
  if (n <= 0) return 0
  if (n === 1) return 1
  let a = 0, b = 1
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}`,tests:[{input:[0],expected:0},{input:[1],expected:1},{input:[6],expected:8},{input:[10],expected:55}],hints:["Base case: fib(0)=0, fib(1)=1","Loop se iterative solve karo recursion se fast hoga"]},{id:"01-variables-declarations-variables-intro-24",title:"Palindrome checker",starterCode:`// Function banao jo check kare string palindrome hai ya nahi
// Ignore case aur non-alphanumeric characters
function isPalindrome(str) {
  // TODO
}
`,solution:`function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  return cleaned === cleaned.split("").reverse().join("")
}`,tests:[{input:["racecar"],expected:!0},{input:["A man a plan a canal Panama"],expected:!0},{input:["hello"],expected:!1}],hints:["Pehle string clean karo — lowercase + special chars hatao","Reverse karke compare karo"]},{id:"01-variables-declarations-variables-intro-25",title:"Even or Odd without modulo",starterCode:`// Function banao jo check kare number even hai ya odd
// Bitwise AND operator use karo (modulo nahi chalega)
function evenOrOdd(n) {
  // TODO
}
`,solution:`function evenOrOdd(n) {
  return (n & 1) === 0 ? "even" : "odd"
}`,tests:[{input:[4],expected:"even"},{input:[7],expected:"odd"},{input:[0],expected:"even"}],hints:["n & 1 — agar last bit 0 hai to even","Bitwise AND se LSB check hota hai"]},{id:"01-variables-declarations-variables-intro-26",title:"Deep clone object",starterCode:`// Function banao jo deeply clone kare object
// structuredClone ya manual method use karo
function deepClone(obj) {
  // TODO
}
`,solution:`function deepClone(obj) {
  return structuredClone(obj)
}`,tests:[{input:[{a:1,b:{c:2}}],expected:{a:1,b:{c:2}}}],hints:["structuredClone() modern method hai deep copy ke liye","JSON.parse(JSON.stringify()) bhi kaam karega"]},{id:"01-variables-declarations-variables-intro-27",title:"Unique array elements",starterCode:`// Function banao jo array ke unique elements return kare
function unique(arr) {
  // TODO
}
`,solution:`function unique(arr) {
  return [...new Set(arr)]
}`,tests:[{input:[[1,2,2,3,3,3]],expected:[1,2,3]},{input:[["a","b","a"]],expected:["a","b"]}],hints:["Set data structure unique values rakhta hai","Spread operator se array mein convert karo"]},{id:"01-variables-declarations-variables-intro-28",title:"Flatten nested array",starterCode:`// Function banao jo 1 level deep array flatten kare
// flatten([1, [2, 3], [4, 5]]) = [1, 2, 3, 4, 5]
function flatten(arr) {
  // TODO
}
`,solution:`function flatten(arr) {
  return arr.flat()
}`,tests:[{input:[[1,[2,3],[4,5]]],expected:[1,2,3,4,5]},{input:[["a",["b","c"]]],expected:["a","b","c"]}],hints:["flat() method 1 level deep flatten karta hai","flat(Infinity) se deeply flatten hota hai"]},{id:"01-variables-declarations-variables-intro-29",title:"Group by property",starterCode:`// Function banao jo array ko property se group kare
// groupBy([{type:"fruit",name:"apple"}, {type:"veggie",name:"carrot"}, {type:"fruit",name:"banana"}], "type")
// = { fruit: [{...}, {...}], veggie: [{...}] }
function groupBy(arr, key) {
  // TODO
}
`,solution:`function groupBy(arr, key) {
  return arr.reduce((groups, item) => {
    const val = item[key]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}`,tests:[{input:[[{type:"fruit",name:"apple"},{type:"veggie",name:"carrot"},{type:"fruit",name:"banana"}],"type"],expected:{fruit:[{type:"fruit",name:"apple"},{type:"fruit",name:"banana"}],veggie:[{type:"veggie",name:"carrot"}]}}],hints:["reduce se object build karo","Har group ka array initialize karo"]},{id:"01-variables-declarations-variables-intro-30",title:"Debounce function banao",starterCode:`// Debounce function banao jo delay ms tak wait kare
// Agar dobara call ho to pehla call cancel ho
function debounce(fn, delay) {
  // TODO
}`,solution:`function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}`,tests:[{input:[]}],hints:["setTimeout use karo","Purana timer clearTimeout se cancel karo"]},{id:"01-variables-declarations-variables-intro-31",title:"Array intersection",starterCode:`// Do arrays ka intersection nikalo (common elements)
function intersect(a, b) {
  // TODO
}
`,solution:`function intersect(a, b) {
  return a.filter(x => b.includes(x))
}`,tests:[{input:[[1,2,3,4],[3,4,5,6]],expected:[3,4]},{input:[["a","b"],["b","c"]],expected:["b"]}],hints:["filter + includes use karo","Jo elements dono mein ho wo rakhna hai"]},{id:"01-variables-declarations-variables-intro-32",title:"Chunk array into groups",starterCode:`// Array ko size ke chunks mein divide karo
// chunk([1,2,3,4,5], 2) = [[1,2],[3,4],[5]]
function chunk(arr, size) {
  // TODO
}`,solution:`function chunk(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}`,tests:[{input:[[1,2,3,4,5],2],expected:[[1,2],[3,4],[5]]},{input:[["a","b","c"],1],expected:[["a"],["b"],["c"]]}],hints:["Loop mein i += size se jump hota hai","slice(i, i+size) se chunk milta hai"]},{id:"01-variables-declarations-variables-intro-33",title:"Pick specific keys from object",starterCode:`// Function banao jo object se sirf given keys pick kare
// pick({a:1, b:2, c:3}, ["a","c"]) = {a:1, c:3}
function pick(obj, keys) {
  // TODO
}`,solution:`function pick(obj, keys) {
  const result = {}
  for (const key of keys) {
    if (key in obj) result[key] = obj[key]
  }
  return result
}`,tests:[{input:[{a:1,b:2,c:3},["a","c"]],expected:{a:1,c:3}}],hints:["for...of loop se keys iterate karo","Har key check karo ki object mein hai"]},{id:"01-variables-declarations-variables-intro-34",title:"Omit keys from object",starterCode:`// Function banao jo object se given keys hata de
// omit({a:1, b:2, c:3}, ["b"]) = {a:1, c:3}
function omit(obj, keys) {
  // TODO
}`,solution:`function omit(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keys.includes(k))
  )
}`,tests:[{input:[{a:1,b:2,c:3},["b"]],expected:{a:1,c:3}}],hints:["Object.entries() se entries nikalo","filter se unwanted keys hatao"]},{id:"01-variables-declarations-variables-intro-35",title:"Camel case converter",starterCode:`// String ko camel case mein convert karo
// "hello world" = "helloWorld"
// "foo bar baz" = "fooBarBaz"
function camelCase(str) {
  // TODO
}`,solution:`function camelCase(str) {
  return str.toLowerCase().split(" ").map((word, i) =>
    i === 0 ? word : word[0].toUpperCase() + word.slice(1)
  ).join("")
}`,tests:[{input:["hello world"],expected:"helloWorld"},{input:["foo bar baz"],expected:"fooBarBaz"}],hints:["split se words alag karo","Pehla word lowercase, baaki ke first letter uppercase"]},{id:"01-variables-declarations-variables-intro-36",title:"Truncate string with ellipsis",starterCode:`// String ko maxLength tak truncate karo, agar cut ho to "..." lagao
// truncate("Hello World", 5) = "Hello..."
function truncate(str, max) {
  // TODO
}`,solution:`function truncate(str, max) {
  if (str.length <= max) return str
  return str.slice(0, max) + "..."
}`,tests:[{input:["Hello World",5],expected:"Hello..."},{input:["Hi",10],expected:"Hi"}],hints:["str.length > max check karo","slice(0, max) se pehle max characters lo"]},{id:"01-variables-declarations-variables-intro-37",title:"Count word frequency",starterCode:`// String mein har word ki frequency count karo
// wordCount("hello hello world") = {hello: 2, world: 1}
function wordCount(str) {
  // TODO
}`,solution:`function wordCount(str) {
  return str.split(" ").reduce((count, word) => {
    count[word] = (count[word] || 0) + 1
    return count
  }, {})
}`,tests:[{input:["hello hello world"],expected:{hello:2,word:1,world:1}}],hints:["split se words alag karo","Reduce se object build karo"]},{id:"01-variables-declarations-variables-intro-38",title:"Range generator",starterCode:`// Function jo start se end tak ka array banaye
// range(1, 5) = [1, 2, 3, 4, 5]
function range(start, end) {
  // TODO
}`,solution:`function range(start, end) {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}`,tests:[{input:[1,5],expected:[1,2,3,4,5]},{input:[3,7],expected:[3,4,5,6,7]}],hints:["for loop se start se end tak jao","Har i ko array mein push karo"]},{id:"01-variables-declarations-variables-intro-39",title:"Object invert karo",starterCode:`// Keys aur values swap karo
// invert({a:1, b:2}) = {1:"a", 2:"b"}
function invert(obj) {
  // TODO
}`,solution:`function invert(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [v, k])
  )
}`,tests:[{input:[{a:1,b:2}],expected:{1:"a",2:"b"}}],hints:["Object.entries se pairs nikalo","Har pair reverse karo"]},{id:"01-variables-declarations-variables-intro-40",title:"Compact array — remove falsy",starterCode:`// Array se saare falsy values hatao
// compact([0, 1, false, 2, "", 3]) = [1, 2, 3]
function compact(arr) {
  // TODO
}`,solution:`function compact(arr) {
  return arr.filter(Boolean)
}`,tests:[{input:[[0,1,!1,2,"",3]],expected:[1,2,3]}],hints:["filter(Boolean) se falsy values hat jati hain",'0, false, null, undefined, "" sab falsy hain']},{id:"01-variables-declarations-variables-intro-41",title:"Memoize function banao",starterCode:`// Function ko memoize karo — same arguments pe cached result do
function memoize(fn) {
  // TODO
}`,solution:`function memoize(fn) {
  const cache = {}
  return function(...args) {
    const key = JSON.stringify(args)
    if (key in cache) return cache[key]
    cache[key] = fn(...args)
    return cache[key]
  }
}`,tests:[{input:[]}],hints:["Object mein cache store karo","JSON.stringify(args) se unique key banti hai"]},{id:"01-variables-declarations-variables-intro-42",title:"Throttle function",starterCode:`// Throttle banao — function har delay ms mein max ek baar chale
function throttle(fn, delay) {
  // TODO
}`,solution:`function throttle(fn, delay) {
  let lastCall = 0
  return function(...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      return fn(...args)
    }
  }
}`,tests:[{input:[]}],hints:["Date.now() se time track karo","Sirf tab call karo jab delay ho jaye"]},{id:"01-variables-declarations-variables-intro-43",title:"Deep flatten array",starterCode:`// Array ko fully flatten karo (kitne bhi levels ho)
// deepFlatten([1, [2, [3, [4]]]]) = [1, 2, 3, 4]
function deepFlatten(arr) {
  // TODO
}`,solution:`function deepFlatten(arr) {
  return arr.flat(Infinity)
}`,tests:[{input:[[1,[2,[3,[4]]]]],expected:[1,2,3,4]}],hints:["flat(Infinity) se sab levels flatten hoti hain"]},{id:"01-variables-declarations-variables-intro-44",title:"Object flatten",starterCode:`// Nested object ko flatten karo
// flatten({a: 1, b: {c: 2, d: {e: 3}}}) = {a:1, "b.c":2, "b.d.e":3}
function flattenObj(obj, prefix = "") {
  // TODO
}`,solution:`function flattenObj(obj, prefix = "") {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    const newKey = prefix ? \`\${prefix}.\${key}\` : key
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      Object.assign(acc, flattenObj(val, newKey))
    } else {
      acc[newKey] = val
    }
    return acc
  }, {})
}`,tests:[{input:[{a:1,b:{c:2,d:{e:3}}}],expected:{a:1,"b.c":2,"b.d.e":3}}],hints:["Recursion se nested objects jao","Prefix mein path build karte jao"]},{id:"01-variables-declarations-variables-intro-45",title:"Pagination helper",starterCode:`// Array ko paginated chunks mein divide karo with metadata
// paginate([1,2,3,4,5,6,7], 2, 2) = {data: [3,4], page: 2, totalPages: 4, total: 7}
function paginate(arr, pageSize, page) {
  // TODO
}`,solution:`function paginate(arr, pageSize, page) {
  const totalPages = Math.ceil(arr.length / pageSize)
  const start = (page - 1) * pageSize
  const data = arr.slice(start, start + pageSize)
  return { data, page, totalPages, total: arr.length }
}`,tests:[{input:[[1,2,3,4,5,6,7],2,2],expected:{data:[3,4],page:2,totalPages:4,total:7}}],hints:["Math.ceil se total pages nikalo","slice((page-1)*size, page*size) se data lo"]},{id:"01-variables-declarations-variables-intro-46",title:"Debounced counter",starterCode:`// Counter banao jo 500ms tak multiple calls ko merge kare
function createCounter() {
  let count = 0
  // TODO: increment method banao jo debounced ho
  return {
    increment: () => { /* TODO */ },
    getCount: () => count
  }
}`,solution:`function createCounter() {
  let count = 0
  let pending = false
  return {
    increment: () => {
      count++
    },
    getCount: () => count
  }
}`,tests:[{input:[]}],hints:["Count ko directly increment karo","GetCount se current value lo"]},{id:"01-variables-declarations-variables-intro-47",title:"Event emitter basics",starterCode:`// Simple event emitter banao
function createEmitter() {
  const listeners = {}
  return {
    on: (event, fn) => { /* TODO */ },
    emit: (event, ...args) => { /* TODO */ },
    off: (event, fn) => { /* TODO */ }
  }
}`,solution:`function createEmitter() {
  const listeners = {}
  return {
    on: (event, fn) => {
      listeners[event] = listeners[event] || []
      listeners[event].push(fn)
    },
    emit: (event, ...args) => {
      (listeners[event] || []).forEach(fn => fn(...args))
    },
    off: (event, fn) => {
      listeners[event] = (listeners[event] || []).filter(f => f !== fn)
    }
  }
}`,tests:[{input:[]}],hints:["Listeners object mein event names key hain","On se add, off se remove, emit se call karo"]},{id:"01-variables-declarations-variables-intro-48",title:"Promise all polyfill",starterCode:`// Promise.all ka basic polyfill banao
function promiseAll(promises) {
  // TODO
}`,solution:`function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let completed = 0
    if (promises.length === 0) return resolve([])
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val
        completed++
        if (completed === promises.length) resolve(results)
      }).catch(reject)
    })
  })
}`,tests:[{input:[[{},{}]],expected:[1,2]}],hints:["Counter se track karo kitne resolve ho gaye","Promise.resolve() se non-promise values handle karo"]},{id:"01-variables-declarations-variables-intro-49",title:"Retry function",starterCode:`// Function banao jo async function ko max retries tak try kare
function retry(fn, maxRetries, delay) {
  // TODO
}`,solution:`async function retry(fn, maxRetries, delay) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (e) {
      if (i === maxRetries - 1) throw e
      await new Promise(r => setTimeout(r, delay))
    }
  }
}`,tests:[{input:[]}],hints:["for loop mein try-catch lagao","Har failure pe delay se wait karo"]},{id:"01-variables-declarations-variables-intro-50",title:"Mini LRU Cache",starterCode:`// LRU Cache banao with maxSize
function createLRU(maxSize) {
  const cache = new Map()
  return {
    get: (key) => { /* TODO */ },
    set: (key, value) => { /* TODO */ }
  }
}`,solution:`function createLRU(maxSize) {
  const cache = new Map()
  return {
    get: (key) => {
      if (!cache.has(key)) return -1
      const val = cache.get(key)
      cache.delete(key)
      cache.set(key, val)
      return val
    },
    set: (key, value) => {
      cache.delete(key)
      if (cache.size >= maxSize) {
        cache.delete(cache.keys().next().value)
      }
      cache.set(key, value)
    }
  }
}`,tests:[{input:[]}],hints:["Map maintain order rakhta hai","Get pe entry ko end mein move karo, set pe oldest hatao"]}],"02-data-types-03-coercion-truthy-falsy":[{id:"02-data-types-coercion-truthy-falsy-01",title:"Check if 0 is falsy",starterCode:`if (0) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (0) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"falsy"}],hints:["0 is one of the falsy values","Numbers can be truthy or falsy"]},{id:"02-data-types-coercion-truthy-falsy-02",title:"Check if 1 is truthy",starterCode:`if (1) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (1) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"truthy"}],hints:["Non-zero numbers are truthy","Even negative numbers"]},{id:"02-data-types-coercion-truthy-falsy-03",title:"Check if empty string is falsy",starterCode:`if ("") {
  console.log("truthy");
} else {
  console.log("falsy");
}`,solution:`if ("") {
  console.log("truthy");
} else {
  console.log("falsy");
}`,tests:[{input:[],expected:"falsy"}],hints:["Empty strings are falsy","Non-empty strings are truthy"]},{id:"02-data-types-coercion-truthy-falsy-04",title:"Check if non-empty string is truthy",starterCode:`if ("hello") {
  console.log("truthy");
} else {
  console.log("falsy");
}`,solution:`if ("hello") {
  console.log("truthy");
} else {
  console.log("falsy");
}`,tests:[{input:[],expected:"truthy"}],hints:["Any non-empty string is truthy","Even whitespace-only strings"]},{id:"02-data-types-coercion-truthy-falsy-05",title:"Check if null is falsy",starterCode:`if (null) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (null) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"falsy"}],hints:["null is always falsy","It represents absence of value"]},{id:"02-data-types-coercion-truthy-falsy-06",title:"Check if undefined is falsy",starterCode:`if (undefined) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (undefined) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"falsy"}],hints:["undefined is falsy","It means no value assigned"]},{id:"02-data-types-coercion-truthy-falsy-07",title:"Check if NaN is falsy",starterCode:`if (NaN) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (NaN) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"falsy"}],hints:["NaN is falsy","It stands for Not a Number"]},{id:"02-data-types-coercion-truthy-falsy-08",title:"Check if false is falsy",starterCode:`if (false) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if (false) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"falsy"}],hints:["false is obviously falsy","It's the boolean false"]},{id:"02-data-types-coercion-truthy-falsy-09",title:"Check if object is truthy",starterCode:`if ({}) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if ({}) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"truthy"}],hints:["Objects are always truthy","Even empty objects"]},{id:"02-data-types-coercion-truthy-falsy-10",title:"Check if array is truthy",starterCode:`if ([]) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,solution:`if ([]) {
  console.log('truthy');
} else {
  console.log('falsy');
}`,tests:[{input:[],expected:"truthy"}],hints:["Arrays are always truthy","Even empty arrays"]},{id:"02-data-types-coercion-truthy-falsy-11",title:"String to number coercion with +",starterCode:'console.log("5" + 3);',solution:'console.log("5" + 3);',tests:[{input:[],expected:"53"}],hints:["+ with a string does concatenation","The number becomes a string"]},{id:"02-data-types-coercion-truthy-falsy-12",title:"String to number coercion with -",starterCode:'console.log("5" - 3);',solution:'console.log("5" - 3);',tests:[{input:[],expected:"2"}],hints:["- always does math","The string is converted to a number"]},{id:"02-data-types-coercion-truthy-falsy-13",title:"Loose equality with type coercion",starterCode:'console.log(5 == "5");',solution:'console.log(5 == "5");',tests:[{input:[],expected:"true"}],hints:["== does type coercion","It converts types to compare"]},{id:"02-data-types-coercion-truthy-falsy-14",title:"Strict equality no coercion",starterCode:'console.log(5 === "5");',solution:'console.log(5 === "5");',tests:[{input:[],expected:"false"}],hints:["=== checks type and value","No conversion happens"]},{id:"02-data-types-coercion-truthy-falsy-15",title:"Double NOT for boolean conversion",starterCode:'console.log(!!"hello");',solution:'console.log(!!"hello");',tests:[{input:[],expected:"true"}],hints:["! converts to boolean and negates","Double NOT restores original truthiness"]},{id:"02-data-types-coercion-truthy-falsy-16",title:"Boolean() conversion",starterCode:"console.log(Boolean(0));",solution:"console.log(Boolean(0));",tests:[{input:[],expected:"false"}],hints:["Boolean() converts to boolean","0 is falsy"]},{id:"02-data-types-coercion-truthy-falsy-17",title:"Number() conversion from string",starterCode:'console.log(Number("42"));',solution:'console.log(Number("42"));',tests:[{input:[],expected:"42"}],hints:["Number() parses strings","Returns the numeric value"]},{id:"02-data-types-coercion-truthy-falsy-18",title:"String() conversion from number",starterCode:"console.log(String(42));",solution:"console.log(String(42));",tests:[{input:[],expected:"42"}],hints:["String() converts to string","Returns '42' not 42"]},{id:"02-data-types-coercion-truthy-falsy-19",title:"parseInt for string parsing",starterCode:'console.log(parseInt("42abc"));',solution:'console.log(parseInt("42abc"));',tests:[{input:[],expected:"42"}],hints:["parseInt stops at non-numeric","Parses until it can't anymore"]},{id:"02-data-types-coercion-truthy-falsy-20",title:"Unary plus conversion",starterCode:'console.log(+"42");',solution:'console.log(+"42");',tests:[{input:[],expected:"42"}],hints:["+ before a value converts to number","It's a shorthand for Number()"]},{id:"02-data-types-coercion-truthy-falsy-21",title:"null == undefined",starterCode:"console.log(null == undefined);",solution:"console.log(null == undefined);",tests:[{input:[],expected:"true"}],hints:["null and undefined are loosely equal","They're both 'empty' values"]},{id:"02-data-types-coercion-truthy-falsy-22",title:"null === undefined",starterCode:"console.log(null === undefined);",solution:"console.log(null === undefined);",tests:[{input:[],expected:"false"}],hints:["=== checks type","null and undefined are different types"]},{id:"02-data-types-coercion-truthy-falsy-23",title:"NaN is not equal to itself",starterCode:"console.log(NaN === NaN);",solution:"console.log(NaN === NaN);",tests:[{input:[],expected:"false"}],hints:["NaN is the only value not equal to itself","Use Number.isNaN() to check"]},{id:"02-data-types-coercion-truthy-falsy-24",title:"Implicit string conversion in comparison",starterCode:'console.log("2" > "12");',solution:'console.log("2" > "12");',tests:[{input:[],expected:"true"}],hints:["String comparison is lexicographic","'2' comes after '1' alphabetically"]},{id:"02-data-types-coercion-truthy-falsy-25",title:"Numeric comparison",starterCode:'console.log(2 > "12");',solution:'console.log(2 > "12");',tests:[{input:[],expected:"false"}],hints:["Number on left converts string to number","2 > 12 is false"]},{id:"02-data-types-coercion-truthy-falsy-26",title:"Falsy 0 vs truthy string 0",starterCode:'console.log(0 == "0");',solution:'console.log(0 == "0");',tests:[{input:[],expected:"true"}],hints:["== coerces types","0 and '0' are loosely equal"]},{id:"02-data-types-coercion-truthy-falsy-27",title:"Boolean coercion in arithmetic",starterCode:"console.log(true + true);",solution:"console.log(true + true);",tests:[{input:[],expected:"2"}],hints:["true converts to 1","1 + 1 = 2"]},{id:"02-data-types-coercion-truthy-falsy-28",title:"null coerces to 0 in arithmetic",starterCode:"console.log(null + 5);",solution:"console.log(null + 5);",tests:[{input:[],expected:"5"}],hints:["null converts to 0","0 + 5 = 5"]},{id:"02-data-types-coercion-truthy-falsy-29",title:"undefined coerces to NaN",starterCode:"console.log(undefined + 5);",solution:"console.log(undefined + 5);",tests:[{input:[],expected:"NaN"}],hints:["undefined converts to NaN","Any math with NaN is NaN"]},{id:"02-data-types-coercion-truthy-falsy-30",title:"Empty string coerces to 0",starterCode:'console.log("" - 5);',solution:'console.log("" - 5);',tests:[{input:[],expected:"-5"}],hints:["Empty string converts to 0","0 - 5 = -5"]},{id:"02-data-types-coercion-truthy-falsy-31",title:"Boolean of empty array",starterCode:"console.log(Boolean([]));",solution:"console.log(Boolean([]));",tests:[{input:[],expected:"true"}],hints:["Arrays are objects","All objects are truthy"]},{id:"02-data-types-coercion-truthy-falsy-32",title:"Boolean of empty object",starterCode:"console.log(Boolean({}));",solution:"console.log(Boolean({}));",tests:[{input:[],expected:"true"}],hints:["Objects are always truthy","Even with no properties"]},{id:"02-data-types-coercion-truthy-falsy-33",title:"String 'false' is truthy",starterCode:'console.log(Boolean("false"));',solution:'console.log(Boolean("false"));',tests:[{input:[],expected:"true"}],hints:["Any non-empty string is truthy","Even the string 'false'"]},{id:"02-data-types-coercion-truthy-falsy-34",title:"String '0' is truthy",starterCode:'console.log(Boolean("0"));',solution:'console.log(Boolean("0"));',tests:[{input:[],expected:"true"}],hints:["String '0' is not the same as number 0","Non-empty strings are truthy"]},{id:"02-data-types-coercion-truthy-falsy-35",title:"Space string is truthy",starterCode:'console.log(Boolean(" "));',solution:'console.log(Boolean(" "));',tests:[{input:[],expected:"true"}],hints:["A space is a character","Non-empty strings are truthy"]},{id:"02-data-types-coercion-truthy-falsy-36",title:"Number 0 is falsy but '0' is truthy",starterCode:'console.log(0 == "0", 0 === "0");',solution:'console.log(0 == "0", 0 === "0");',tests:[{input:[],expected:"true false"}],hints:["== does type coercion","=== does not"]},{id:"02-data-types-coercion-truthy-falsy-37",title:"Implicit conversion in if condition",starterCode:`const val = "hello";
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}`,solution:`const val = "hello";
if (val) {
  console.log("truthy");
} else {
  console.log("falsy");
}`,tests:[{input:[],expected:"truthy"}],hints:["Non-empty strings are truthy","if converts to boolean"]},{id:"02-data-types-coercion-truthy-falsy-38",title:"Logical NOT converts to boolean",starterCode:"console.log(!0);",solution:"console.log(!0);",tests:[{input:[],expected:"true"}],hints:["! converts to boolean","0 is falsy, so !0 is true"]},{id:"02-data-types-coercion-truthy-falsy-39",title:"Double NOT preserves truthiness",starterCode:"console.log(!!42);",solution:"console.log(!!42);",tests:[{input:[],expected:"true"}],hints:["42 is truthy","!! converts to boolean"]},{id:"02-data-types-coercion-truthy-falsy-40",title:"Comparison coercion chain",starterCode:'console.log(1 < 2 > "1");',solution:'console.log(1 < 2 > "1");',tests:[{input:[],expected:"false"}],hints:["1 < 2 is true","true > '1' converts true to 1, so 1 > 1 is false"]},{id:"02-data-types-coercion-truthy-falsy-41",title:"Plus with string and number",starterCode:'console.log("Age: " + 25);',solution:'console.log("Age: " + 25);',tests:[{input:[],expected:"Age: 25"}],hints:["String + number = concatenation","Number becomes a string"]},{id:"02-data-types-coercion-truthy-falsy-42",title:"Minus with string and number",starterCode:'console.log("10" - 3);',solution:'console.log("10" - 3);',tests:[{input:[],expected:"7"}],hints:["- always does math","String is converted to number"]},{id:"02-data-types-coercion-truthy-falsy-43",title:"Multiply with string",starterCode:'console.log("3" * 2);',solution:'console.log("3" * 2);',tests:[{input:[],expected:"6"}],hints:["* does math","String is converted to number"]},{id:"02-data-types-coercion-truthy-falsy-44",title:"Divide with string",starterCode:'console.log("10" / 2);',solution:'console.log("10" / 2);',tests:[{input:[],expected:"5"}],hints:["/ does math","String is converted to number"]},{id:"02-data-types-coercion-truthy-falsy-45",title:"Modulo with string",starterCode:'console.log("10" % 3);',solution:'console.log("10" % 3);',tests:[{input:[],expected:"1"}],hints:["% does math","10 % 3 = 1"]},{id:"02-data-types-coercion-truthy-falsy-46",title:"Exponentiation with string",starterCode:'console.log("2" ** 3);',solution:'console.log("2" ** 3);',tests:[{input:[],expected:"8"}],hints:["** does math","2^3 = 8"]},{id:"02-data-types-coercion-truthy-falsy-47",title:"Implicit conversion in template literal",starterCode:"const num = 42;\nconsole.log(`Number: ${num}`);",solution:"const num = 42;\nconsole.log(`Number: ${num}`);",tests:[{input:[],expected:"Number: 42"}],hints:["Template literals convert to string","No explicit conversion needed"]},{id:"02-data-types-coercion-truthy-falsy-48",title:"Array to string conversion",starterCode:"console.log([1, 2, 3] + '');",solution:"console.log([1, 2, 3] + '');",tests:[{input:[],expected:"1,2,3"}],hints:["Arrays use join with comma","Default join uses commas"]},{id:"02-data-types-coercion-truthy-falsy-49",title:"Object to string conversion",starterCode:"console.log({} + '');",solution:"console.log({} + '');",tests:[{input:[],expected:"[object Object]"}],hints:["Objects use toString()","Default is '[object Object]'"]},{id:"02-data-types-coercion-truthy-falsy-50",title:"Date to string conversion",starterCode:"console.log(new Date() + '');",solution:"console.log(new Date() + '');",tests:[{input:[],expected:"dynamic"}],hints:["Date has a toString method","Returns human-readable date string"]}],"02-data-types-01-primitive-types":[{id:"02-data-types-primitive-types-01",title:"Create a string using double quotes",starterCode:`const greeting = "Hello";
console.log(greeting);`,solution:`const greeting = "Hello";
console.log(greeting);`,tests:[{input:[],expected:"Hello"}],hints:["Use double quotes to create a string","Assign the string to a variable"]},{id:"02-data-types-primitive-types-02",title:"Create a string using single quotes",starterCode:`const name = '';
console.log(name);`,solution:`const name = 'Alice';
console.log(name);`,tests:[{input:[],expected:"Alice"}],hints:["Use single quotes this time","Type a name inside the quotes"]},{id:"02-data-types-primitive-types-03",title:"Create a string using backticks",starterCode:"const msg = ``;\nconsole.log(msg);",solution:"const msg = `Hello world`;\nconsole.log(msg);",tests:[{input:[],expected:"Hello world"}],hints:["Backticks create template literals","Type the message inside backticks"]},{id:"02-data-types-primitive-types-04",title:"Create an empty string",starterCode:`const empty = ;
console.log(empty.length);`,solution:`const empty = '';
console.log(empty.length);`,tests:[{input:[],expected:"0"}],hints:["An empty string has no characters","Use two quotes with nothing between them"]},{id:"02-data-types-primitive-types-05",title:"Store your age as a string",starterCode:`const age = ;
console.log(age);`,solution:`const age = "25";
console.log(age);`,tests:[{input:[],expected:"25"}],hints:["Wrap the number in quotes to make it a string","Use typeof to verify if unsure"]},{id:"02-data-types-primitive-types-06",title:"Concatenate two strings",starterCode:`const first = "John";
const last = "Doe";
const full = ;
console.log(full);`,solution:`const first = "John";
const last = "Doe";
const full = first + " " + last;
console.log(full);`,tests:[{input:[],expected:"John Doe"}],hints:["Use the + operator to join strings","Add a space between the names"]},{id:"02-data-types-primitive-types-07",title:"Get the length of a string",starterCode:`const word = "JavaScript";
const len = ;
console.log(len);`,solution:`const word = "JavaScript";
const len = word.length;
console.log(len);`,tests:[{input:[],expected:"10"}],hints:["Strings have a .length property","Access it with dot notation"]},{id:"02-data-types-primitive-types-08",title:"Access first character of a string",starterCode:`const str = "Hello";
const first = ;
console.log(first);`,solution:`const str = "Hello";
const first = str[0];
console.log(first);`,tests:[{input:[],expected:"H"}],hints:["Strings are indexed starting at 0","Use bracket notation"]},{id:"02-data-types-primitive-types-09",title:"Access last character of a string",starterCode:`const str = "Hello";
const last = ;
console.log(last);`,solution:`const str = "Hello";
const last = str[str.length - 1];
console.log(last);`,tests:[{input:[],expected:"o"}],hints:["The last index is length minus 1","Use str.length - 1 as the index"]},{id:"02-data-types-primitive-types-10",title:"Create a multi-line string with backticks",starterCode:`const poem = ;
console.log(poem);`,solution:"const poem = `Roses are red\nViolets are blue`;\nconsole.log(poem);",tests:[{input:[],expected:`Roses are red
Violets are blue`}],hints:["Backticks allow multi-line strings","Just press Enter inside backticks"]},{id:"02-data-types-primitive-types-11",title:"Create an integer variable",starterCode:`const count = ;
console.log(count);`,solution:`const count = 42;
console.log(count);`,tests:[{input:[],expected:"42"}],hints:["Integers are whole numbers","No quotes needed for numbers"]},{id:"02-data-types-primitive-types-12",title:"Create a floating point number",starterCode:`const pi = ;
console.log(pi);`,solution:`const pi = 3.14159;
console.log(pi);`,tests:[{input:[],expected:"3.14159"}],hints:["Use a decimal point","Pi is approximately 3.14"]},{id:"02-data-types-primitive-types-13",title:"Create a negative number",starterCode:`const temp = ;
console.log(temp);`,solution:`const temp = -10;
console.log(temp);`,tests:[{input:[],expected:"-10"}],hints:["Put a minus sign before the number","Negative numbers are just regular numbers with a sign"]},{id:"02-data-types-primitive-types-14",title:"Store Infinity",starterCode:`const big = ;
console.log(big);`,solution:`const big = Infinity;
console.log(big);`,tests:[{input:[],expected:"Infinity"}],hints:["JavaScript has a special value for infinity","It's a global property, not a string"]},{id:"02-data-types-primitive-types-15",title:"Store negative Infinity",starterCode:`const small = ;
console.log(small);`,solution:`const small = -Infinity;
console.log(small);`,tests:[{input:[],expected:"-Infinity"}],hints:["Just add a minus before Infinity","It represents the smallest possible value"]},{id:"02-data-types-primitive-types-16",title:"Store NaN",starterCode:`const notANumber = ;
console.log(notANumber);`,solution:`const notANumber = NaN;
console.log(notANumber);`,tests:[{input:[],expected:"NaN"}],hints:["NaN stands for Not a Number","It's a global property"]},{id:"02-data-types-primitive-types-17",title:"Create a number using exponential notation",starterCode:`const bigNum = ;
console.log(bigNum);`,solution:`const bigNum = 5e3;
console.log(bigNum);`,tests:[{input:[],expected:"5000"}],hints:["e notation means times 10 to the power","5e3 = 5 × 10^3"]},{id:"02-data-types-primitive-types-18",title:"Create a hexadecimal number",starterCode:`const hex = ;
console.log(hex);`,solution:`const hex = 0xFF;
console.log(hex);`,tests:[{input:[],expected:"255"}],hints:["Hex uses 0x prefix","FF in hex equals 255 in decimal"]},{id:"02-data-types-primitive-types-19",title:"Create a number with underscore separators",starterCode:`const million = ;
console.log(million);`,solution:`const million = 1_000_000;
console.log(million);`,tests:[{input:[],expected:"1000000"}],hints:["Underscores improve readability","They don't affect the actual value"]},{id:"02-data-types-primitive-types-20",title:"Create a binary number",starterCode:`const bin = ;
console.log(bin);`,solution:`const bin = 0b1010;
console.log(bin);`,tests:[{input:[],expected:"10"}],hints:["0b prefix for binary","1010 in binary equals 10 in decimal"]},{id:"02-data-types-primitive-types-21",title:"Create a true boolean",starterCode:`const isReady = ;
console.log(isReady);`,solution:`const isReady = true;
console.log(isReady);`,tests:[{input:[],expected:"true"}],hints:["Boolean literals are true or false","No quotes needed"]},{id:"02-data-types-primitive-types-22",title:"Create a false boolean",starterCode:`const isActive = ;
console.log(isActive);`,solution:`const isActive = false;
console.log(isActive);`,tests:[{input:[],expected:"false"}],hints:["Use the keyword false","Make sure it's lowercase"]},{id:"02-data-types-primitive-types-23",title:"Declare a variable without assigning a value",starterCode:`let x;
console.log(x);`,solution:`let x;
console.log(x);`,tests:[{input:[],expected:"undefined"}],hints:["Uninitialized variables are undefined","Just declare with let and no assignment"]},{id:"02-data-types-primitive-types-24",title:"Explicitly assign null",starterCode:`const val = ;
console.log(val);`,solution:`const val = null;
console.log(val);`,tests:[{input:[],expected:"null"}],hints:["null represents intentional absence","It's its own type of value"]},{id:"02-data-types-primitive-types-25",title:"Check type of a string with typeof",starterCode:`const name = "Alice";
console.log();`,solution:`const name = "Alice";
console.log(typeof name);`,tests:[{input:[],expected:"string"}],hints:["typeof returns a string of the type","Use typeof operator before the variable"]},{id:"02-data-types-primitive-types-26",title:"Check type of a number with typeof",starterCode:`const age = 25;
console.log();`,solution:`const age = 25;
console.log(typeof age);`,tests:[{input:[],expected:"number"}],hints:["typeof works on any value","Numbers return 'number'"]},{id:"02-data-types-primitive-types-27",title:"Check type of a boolean with typeof",starterCode:`const flag = true;
console.log();`,solution:`const flag = true;
console.log(typeof flag);`,tests:[{input:[],expected:"boolean"}],hints:["typeof returns the type as a string","Booleans return 'boolean'"]},{id:"02-data-types-primitive-types-28",title:"Check typeof null (the famous bug)",starterCode:"console.log(typeof null);",solution:"console.log(typeof null);",tests:[{input:[],expected:"object"}],hints:["This is a known bug in JavaScript","It's been around since the beginning"]},{id:"02-data-types-primitive-types-29",title:"Check typeof undefined",starterCode:`let x;
console.log();`,solution:`let x;
console.log(typeof x);`,tests:[{input:[],expected:"undefined"}],hints:["typeof undefined returns 'undefined'","This is the only case where typeof matches the value"]},{id:"02-data-types-primitive-types-30",title:"Check typeof a function",starterCode:`function greet() {}
console.log();`,solution:`function greet() {}
console.log(typeof greet);`,tests:[{input:[],expected:"function"}],hints:["Functions have their own typeof","It returns 'function' not 'object'"]},{id:"02-data-types-primitive-types-31",title:"Convert string to number with Number()",starterCode:`const str = "42";
const num = ;
console.log(num + 8);`,solution:`const str = "42";
const num = Number(str);
console.log(num + 8);`,tests:[{input:[],expected:"50"}],hints:["Number() converts strings to numbers","Then you can do math with it"]},{id:"02-data-types-primitive-types-32",title:"Convert number to string with String()",starterCode:`const num = 42;
const str = ;
console.log(str + 8);`,solution:`const num = 42;
const str = String(num);
console.log(str + 8);`,tests:[{input:[],expected:"428"}],hints:["String() converts to a string","String + number concatenates"]},{id:"02-data-types-primitive-types-33",title:"Use template literal with variable",starterCode:`const name = "Bob";
const age = 30;
console.log();`,solution:'const name = "Bob";\nconst age = 30;\nconsole.log(`Name: ${name}, Age: ${age}`);',tests:[{input:[],expected:"Name: Bob, Age: 30"}],hints:["Use backticks for template literals","Wrap variables in ${}"]},{id:"02-data-types-primitive-types-34",title:"Use toFixed to format a number",starterCode:`const pi = 3.14159;
console.log();`,solution:`const pi = 3.14159;
console.log(pi.toFixed(2));`,tests:[{input:[],expected:"3.14"}],hints:["toFixed takes number of decimal places","It returns a string"]},{id:"02-data-types-primitive-types-35",title:"Use toPrecision",starterCode:`const num = 3.14159;
console.log();`,solution:`const num = 3.14159;
console.log(num.toPrecision(3));`,tests:[{input:[],expected:"3.14"}],hints:["toPrecision takes total significant digits","It rounds to that many digits"]},{id:"02-data-types-primitive-types-36",title:"Convert number to binary string",starterCode:`const num = 10;
console.log();`,solution:`const num = 10;
console.log(num.toString(2));`,tests:[{input:[],expected:"1010"}],hints:["toString accepts a radix parameter","2 for binary, 8 for octal, 16 for hex"]},{id:"02-data-types-primitive-types-37",title:"Convert string to integer with parseInt",starterCode:`const str = "42px";
const num = ;
console.log(num);`,solution:`const str = "42px";
const num = parseInt(str);
console.log(num);`,tests:[{input:[],expected:"42"}],hints:["parseInt parses until it finds non-numeric","It stops at the 'px'"]},{id:"02-data-types-primitive-types-38",title:"Convert string to float with parseFloat",starterCode:`const str = "3.14abc";
const num = ;
console.log(num);`,solution:`const str = "3.14abc";
const num = parseFloat(str);
console.log(num);`,tests:[{input:[],expected:"3.14"}],hints:["parseFloat parses decimal numbers","It stops at the first non-numeric character"]},{id:"02-data-types-primitive-types-39",title:"Repeat a string",starterCode:`const str = "ha";
console.log();`,solution:`const str = "ha";
console.log(str.repeat(3));`,tests:[{input:[],expected:"hahaha"}],hints:["Strings have a repeat method","Pass the number of times to repeat"]},{id:"02-data-types-primitive-types-40",title:"Pad a string to length",starterCode:`const str = "5";
console.log();`,solution:`const str = "5";
console.log(str.padStart(3, "0"));`,tests:[{input:[],expected:"005"}],hints:["padStart adds characters to the beginning","Second argument is the padding character"]},{id:"02-data-types-primitive-types-41",title:"Use includes to check substring",starterCode:`const str = "Hello World";
console.log();`,solution:`const str = "Hello World";
console.log(str.includes("World"));`,tests:[{input:[],expected:"true"}],hints:["includes returns a boolean","Check if substring exists in string"]},{id:"02-data-types-primitive-types-42",title:"Use indexOf to find position",starterCode:`const str = "Hello";
console.log();`,solution:`const str = "Hello";
console.log(str.indexOf("ll"));`,tests:[{input:[],expected:"2"}],hints:["indexOf returns the position","Positions start at 0"]},{id:"02-data-types-primitive-types-43",title:"Check if value is NaN with Number.isNaN",starterCode:"console.log(Number.isNaN(NaN));",solution:"console.log(Number.isNaN(NaN));",tests:[{input:[],expected:"true"}],hints:["Number.isNaN is more reliable than isNaN","It only returns true for actual NaN"]},{id:"02-data-types-primitive-types-44",title:"Check if value is finite",starterCode:"console.log(Number.isFinite(42));",solution:"console.log(Number.isFinite(42));",tests:[{input:[],expected:"true"}],hints:["Number.isFinite checks for finite numbers","Infinity returns false"]},{id:"02-data-types-primitive-types-45",title:"Parse integer with radix",starterCode:'console.log(Number.parseInt("FF", 16));',solution:'console.log(Number.parseInt("FF", 16));',tests:[{input:[],expected:"255"}],hints:["The second parameter is the radix","16 means hexadecimal"]},{id:"02-data-types-primitive-types-46",title:"Use unary plus for conversion",starterCode:`const str = "42";
const num = ;
console.log(typeof num);`,solution:`const str = "42";
const num = +str;
console.log(typeof num);`,tests:[{input:[],expected:"number"}],hints:["+ before a value converts to number","It's the fastest conversion method"]},{id:"02-data-types-primitive-types-47",title:"Get char code of a character",starterCode:`const ch = "A";
console.log();`,solution:`const ch = "A";
console.log(ch.charCodeAt(0));`,tests:[{input:[],expected:"65"}],hints:["charCodeAt returns Unicode code point","A is 65 in ASCII"]},{id:"02-data-types-primitive-types-48",title:"Create character from code",starterCode:"console.log();",solution:"console.log(String.fromCharCode(65));",tests:[{input:[],expected:"A"}],hints:["String.fromCharCode creates from code","65 is 'A' in ASCII"]},{id:"02-data-types-primitive-types-49",title:"Use trim to remove whitespace",starterCode:`const str = "  hello  ";
console.log();`,solution:`const str = "  hello  ";
console.log(str.trim());`,tests:[{input:[],expected:"hello"}],hints:["trim removes spaces from both ends","It doesn't modify the original"]},{id:"02-data-types-primitive-types-50",title:"Convert boolean to number",starterCode:"console.log(Number(true));",solution:"console.log(Number(true));",tests:[{input:[],expected:"1"}],hints:["true becomes 1","false becomes 0"]}],"02-data-types-02-reference-types-typeof":[{id:"02-data-types-reference-types-typeof-01",title:"Create an object literal",starterCode:`const person = ;
console.log(person.name);`,solution:`const person = { name: "Alice", age: 25 };
console.log(person.name);`,tests:[{input:[],expected:"Alice"}],hints:["Objects use curly braces","Key-value pairs separated by commas"]},{id:"02-data-types-reference-types-typeof-02",title:"Create an array",starterCode:`const nums = ;
console.log(nums[0]);`,solution:`const nums = [1, 2, 3];
console.log(nums[0]);`,tests:[{input:[],expected:"1"}],hints:["Arrays use square brackets","Index 0 is the first element"]},{id:"02-data-types-reference-types-typeof-03",title:"Check typeof an object",starterCode:`const obj = { a: 1 };
console.log();`,solution:`const obj = { a: 1 };
console.log(typeof obj);`,tests:[{input:[],expected:"object"}],hints:["typeof returns 'object' for objects","Objects and arrays both return 'object'"]},{id:"02-data-types-reference-types-typeof-04",title:"Check typeof an array (tricky!)",starterCode:`const arr = [1, 2, 3];
console.log();`,solution:`const arr = [1, 2, 3];
console.log(typeof arr);`,tests:[{input:[],expected:"object"}],hints:["typeof doesn't distinguish arrays","Arrays are technically objects"]},{id:"02-data-types-reference-types-typeof-05",title:"Use Array.isArray to check arrays",starterCode:`const arr = [1, 2, 3];
console.log();`,solution:`const arr = [1, 2, 3];
console.log(Array.isArray(arr));`,tests:[{input:[],expected:"true"}],hints:["Array.isArray is the correct way","It returns true only for arrays"]},{id:"02-data-types-reference-types-typeof-06",title:"Create two references to same object",starterCode:`const a = { x: 1 };
const b = ;
console.log(a === b);`,solution:`const a = { x: 1 };
const b = a;
console.log(a === b);`,tests:[{input:[],expected:"true"}],hints:["Assignment copies the reference","Both variables point to the same object"]},{id:"02-data-types-reference-types-typeof-07",title:"Modify through reference",starterCode:`const a = { x: 1 };
const b = a;
;
console.log(a.x);`,solution:`const a = { x: 1 };
const b = a;
b.x = 99;
console.log(a.x);`,tests:[{input:[],expected:"99"}],hints:["Changing b changes a too","They reference the same object"]},{id:"02-data-types-reference-types-typeof-08",title:"Object comparison by reference",starterCode:`const a = { x: 1 };
const b = { x: 1 };
console.log();`,solution:`const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);`,tests:[{input:[],expected:"false"}],hints:["Different objects are never ===","Even with same content"]},{id:"02-data-types-reference-types-typeof-09",title:"Check typeof null (bug)",starterCode:"console.log();",solution:"console.log(typeof null);",tests:[{input:[],expected:"object"}],hints:["This is a historical bug","null should be 'null' but returns 'object'"]},{id:"02-data-types-reference-types-typeof-10",title:"Use instanceof for type checking",starterCode:`const d = new Date();
console.log();`,solution:`const d = new Date();
console.log(d instanceof Date);`,tests:[{input:[],expected:"true"}],hints:["instanceof checks prototype chain","Returns true for Date objects"]},{id:"02-data-types-reference-types-typeof-11",title:"Shallow copy with spread operator",starterCode:`const original = { a: 1, b: 2 };
const copy = ;
console.log(copy);`,solution:`const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);`,tests:[{input:[],expected:"{ a: 1, b: 2 }"}],hints:["... spreads the properties","Creates a new object"]},{id:"02-data-types-reference-types-typeof-12",title:"Shallow copy with Object.assign",starterCode:`const original = { a: 1 };
const copy = ;
console.log(copy);`,solution:`const original = { a: 1 };
const copy = Object.assign({}, original);
console.log(copy);`,tests:[{input:[],expected:"{ a: 1 }"}],hints:["Object.assign copies properties","First arg is target, rest are sources"]},{id:"02-data-types-reference-types-typeof-13",title:"Deep copy with structuredClone",starterCode:`const original = { a: { b: 1 } };
const copy = ;
console.log(copy.a.b);`,solution:`const original = { a: { b: 1 } };
const copy = structuredClone(original);
console.log(copy.a.b);`,tests:[{input:[],expected:"1"}],hints:["structuredClone creates deep copies","Nested objects are fully cloned"]},{id:"02-data-types-reference-types-typeof-14",title:"Spread doesn't deep copy",starterCode:`const original = { a: { b: 1 } };
const copy = { ...original };
copy.a.b = 99;
console.log();`,solution:`const original = { a: { b: 1 } };
const copy = { ...original };
copy.a.b = 99;
console.log(original.a.b);`,tests:[{input:[],expected:"99"}],hints:["Spread is only shallow","Nested objects still share references"]},{id:"02-data-types-reference-types-typeof-15",title:"Array reference sharing",starterCode:`const a = [1, 2];
const b = a;
b.push(3);
console.log();`,solution:`const a = [1, 2];
const b = a;
b.push(3);
console.log(a.length);`,tests:[{input:[],expected:"3"}],hints:["Arrays are objects too","Modifying b modifies a"]},{id:"02-data-types-reference-types-typeof-16",title:"Copy array with spread",starterCode:`const a = [1, 2, 3];
const b = ;
b.push(4);
console.log(a.length);`,solution:`const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(a.length);`,tests:[{input:[],expected:"3"}],hints:["Spread creates a new array","Original is not affected"]},{id:"02-data-types-reference-types-typeof-17",title:"typeof function",starterCode:`function greet() {}
console.log();`,solution:`function greet() {}
console.log(typeof greet);`,tests:[{input:[],expected:"function"}],hints:["Functions have special typeof","Returns 'function' not 'object'"]},{id:"02-data-types-reference-types-typeof-18",title:"typeof symbol",starterCode:`const s = Symbol('id');
console.log();`,solution:`const s = Symbol('id');
console.log(typeof s);`,tests:[{input:[],expected:"symbol"}],hints:["Symbols are a primitive type","typeof correctly returns 'symbol'"]},{id:"02-data-types-reference-types-typeof-19",title:"Check if property exists",starterCode:`const obj = { a: 1, b: 2 };
console.log();`,solution:`const obj = { a: 1, b: 2 };
console.log('a' in obj);`,tests:[{input:[],expected:"true"}],hints:["'in' operator checks property existence","Returns true if property exists"]},{id:"02-data-types-reference-types-typeof-20",title:"Object.keys returns array",starterCode:`const obj = { x: 1, y: 2 };
console.log();`,solution:`const obj = { x: 1, y: 2 };
console.log(Object.keys(obj));`,tests:[{input:[],expected:"x,y"}],hints:["Object.keys returns an array of keys","console.log shows array without brackets in some environments"]},{id:"02-data-types-reference-types-typeof-21",title:"Nested object reference",starterCode:`const a = { nested: { val: 1 } };
const b = a;
console.log(a === b);`,solution:`const a = { nested: { val: 1 } };
const b = a;
console.log(a === b);`,tests:[{input:[],expected:"true"}],hints:["Assignment copies the reference","Same reference, same object"]},{id:"02-data-types-reference-types-typeof-22",title:"Nested spread shallow copy",starterCode:`const a = { nested: { val: 1 } };
const b = { ...a };
console.log(a === b);`,solution:`const a = { nested: { val: 1 } };
const b = { ...a };
console.log(a === b);`,tests:[{input:[],expected:"false"}],hints:["Spread creates a new object","But nested objects still reference"]},{id:"02-data-types-reference-types-typeof-23",title:"Nested deep copy check",starterCode:`const a = { nested: { val: 1 } };
const b = structuredClone(a);
b.nested.val = 99;
console.log();`,solution:`const a = { nested: { val: 1 } };
const b = structuredClone(a);
b.nested.val = 99;
console.log(a.nested.val);`,tests:[{input:[],expected:"1"}],hints:["Deep copy breaks all references","Original is unaffected"]},{id:"02-data-types-reference-types-typeof-24",title:"typeof of array is object",starterCode:`const arr = [];
console.log();`,solution:`const arr = [];
console.log(typeof arr);`,tests:[{input:[],expected:"object"}],hints:["Arrays are objects in JS","Use Array.isArray for proper check"]},{id:"02-data-types-reference-types-typeof-25",title:"Reference sharing in function",starterCode:`function modify(obj) { obj.x = 10; }
const a = { x: 1 };
modify(a);
console.log();`,solution:`function modify(obj) { obj.x = 10; }
const a = { x: 1 };
modify(a);
console.log(a.x);`,tests:[{input:[],expected:"10"}],hints:["Objects are passed by reference","Modifying inside affects the original"]},{id:"02-data-types-reference-types-typeof-26",title:"Primitive passed by value",starterCode:`function modify(n) { n = 10; }
let a = 1;
modify(a);
console.log();`,solution:`function modify(n) { n = 10; }
let a = 1;
modify(a);
console.log(a);`,tests:[{input:[],expected:"1"}],hints:["Primitives are copied by value","The original is not affected"]},{id:"02-data-types-reference-types-typeof-27",title:"Object identity check",starterCode:`const a = {};
const b = a;
const c = {};
console.log(a === b, a === c);`,solution:`const a = {};
const b = a;
const c = {};
console.log(a === b, a === c);`,tests:[{input:[],expected:"true false"}],hints:["=== checks reference equality","Same reference = true, different = false"]},{id:"02-data-types-reference-types-typeof-28",title:"typeof undefined",starterCode:`let x;
console.log();`,solution:`let x;
console.log(typeof x);`,tests:[{input:[],expected:"undefined"}],hints:["typeof undefined returns 'undefined'","This is the correct behavior"]},{id:"02-data-types-reference-types-typeof-29",title:"typeof doesn't throw for undeclared",starterCode:"console.log();",solution:"console.log(typeof undeclaredVar);",tests:[{input:[],expected:"undefined"}],hints:["typeof is safe for undeclared variables","Other operations would throw ReferenceError"]},{id:"02-data-types-reference-types-typeof-30",title:"Delete removes property",starterCode:`const obj = { a: 1, b: 2 };
;
console.log(obj.a);`,solution:`const obj = { a: 1, b: 2 };
delete obj.b;
console.log(obj.a);`,tests:[{input:[],expected:"1"}],hints:["delete removes a property","The property no longer exists"]},{id:"02-data-types-reference-types-typeof-31",title:"Array is object",starterCode:`const arr = [1, 2, 3];
console.log();`,solution:`const arr = [1, 2, 3];
console.log(typeof arr);`,tests:[{input:[],expected:"object"}],hints:["typeof arr returns 'object'","Use Array.isArray for proper check"]},{id:"02-data-types-reference-types-typeof-32",title:"Date is object",starterCode:`const d = new Date();
console.log();`,solution:`const d = new Date();
console.log(typeof d);`,tests:[{input:[],expected:"object"}],hints:["Date objects are objects","instanceof is better for checking"]},{id:"02-data-types-reference-types-typeof-33",title:"RegExp is object",starterCode:`const r = /abc/;
console.log();`,solution:`const r = /abc/;
console.log(typeof r);`,tests:[{input:[],expected:"object"}],hints:["Regular expressions are objects","typeof returns 'object'"]},{id:"02-data-types-reference-types-typeof-34",title:"Function is callable object",starterCode:`const fn = function() {};
console.log();`,solution:`const fn = function() {};
console.log(typeof fn);`,tests:[{input:[],expected:"function"}],hints:["Functions are special objects","typeof returns 'function'"]},{id:"02-data-types-reference-types-typeof-35",title:"Arrow function typeof",starterCode:`const fn = () => {};
console.log();`,solution:`const fn = () => {};
console.log(typeof fn);`,tests:[{input:[],expected:"function"}],hints:["Arrow functions are also functions","typeof works the same"]},{id:"02-data-types-reference-types-typeof-36",title:"Class typeof",starterCode:`class Dog {}
console.log();`,solution:`class Dog {}
console.log(typeof Dog);`,tests:[{input:[],expected:"function"}],hints:["Classes are syntactic sugar for functions","typeof returns 'function'"]},{id:"02-data-types-reference-types-typeof-37",title:"Object.assign merges",starterCode:`const a = { x: 1 };
Object.assign(a, { y: 2 });
console.log();`,solution:`const a = { x: 1 };
Object.assign(a, { y: 2 });
console.log(a.y);`,tests:[{input:[],expected:"2"}],hints:["Object.assign can add properties","It mutates the first argument"]},{id:"02-data-types-reference-types-typeof-38",title:"Spread creates new object",starterCode:`const a = { x: 1 };
const b = { ...a, y: 2 };
console.log(b);`,solution:`const a = { x: 1 };
const b = { ...a, y: 2 };
console.log(b);`,tests:[{input:[],expected:"{ x: 1, y: 2 }"}],hints:["Spread can add new properties","Creates a new object"]},{id:"02-data-types-reference-types-typeof-39",title:"Null is object (typeof bug)",starterCode:"console.log();",solution:"console.log(typeof null);",tests:[{input:[],expected:"object"}],hints:["This is a well-known bug","It's been there since JS was created"]},{id:"02-data-types-reference-types-typeof-40",title:"Check for null explicitly",starterCode:`const val = null;
console.log();`,solution:`const val = null;
console.log(val === null);`,tests:[{input:[],expected:"true"}],hints:["Use === null for null checks","typeof is unreliable for null"]},{id:"02-data-types-reference-types-typeof-41",title:"WeakMap holds object keys",starterCode:`const wm = new WeakMap();
const obj = {};
wm.set(obj, 42);
console.log();`,solution:`const wm = new WeakMap();
const obj = {};
wm.set(obj, 42);
console.log(wm.get(obj));`,tests:[{input:[],expected:"42"}],hints:["WeakMap keys must be objects","It allows garbage collection"]},{id:"02-data-types-reference-types-typeof-42",title:"Map preserves insertion order",starterCode:`const m = new Map();
m.set('b', 2);
m.set('a', 1);
console.log();`,solution:`const m = new Map();
m.set('b', 2);
m.set('a', 1);
console.log([...m.keys()]);`,tests:[{input:[],expected:"b,a"}],hints:["Maps preserve key order","Use spread to get keys as array"]},{id:"02-data-types-reference-types-typeof-43",title:"Set removes duplicates",starterCode:`const s = new Set([1, 2, 2, 3]);
console.log();`,solution:`const s = new Set([1, 2, 2, 3]);
console.log(s.size);`,tests:[{input:[],expected:"3"}],hints:["Sets only store unique values","size gives the count"]},{id:"02-data-types-reference-types-typeof-44",title:"Reference in destructuring",starterCode:`const obj = { a: 1, b: 2 };
const { a } = obj;
console.log(a);`,solution:`const obj = { a: 1, b: 2 };
const { a } = obj;
console.log(a);`,tests:[{input:[],expected:"1"}],hints:["Destructuring extracts values","a gets the value of obj.a"]},{id:"02-data-types-reference-types-typeof-45",title:"Array destructuring copies values",starterCode:`const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);`,solution:`const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);`,tests:[{input:[],expected:"1 2"}],hints:["Array destructuring extracts by position","Values are copied, not referenced"]},{id:"02-data-types-reference-types-typeof-46",title:"Object.entries returns pairs",starterCode:`const obj = { x: 1, y: 2 };
console.log();`,solution:`const obj = { x: 1, y: 2 };
console.log(Object.entries(obj));`,tests:[{input:[],expected:"x,1,y,2"}],hints:["Object.entries returns [key, value] pairs","Each pair is an array"]},{id:"02-data-types-reference-types-typeof-47",title:"Object.values returns values",starterCode:`const obj = { a: 1, b: 2, c: 3 };
console.log();`,solution:`const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));`,tests:[{input:[],expected:"1,2,3"}],hints:["Object.values returns just the values","It's an array of the values"]},{id:"02-data-types-reference-types-typeof-48",title:"Frozen object can't be modified",starterCode:`const obj = Object.freeze({ x: 1 });
obj.x = 2;
console.log();`,solution:`const obj = Object.freeze({ x: 1 });
obj.x = 2;
console.log(obj.x);`,tests:[{input:[],expected:"1"}],hints:["freeze prevents modifications","Silently fails in non-strict mode"]},{id:"02-data-types-reference-types-typeof-49",title:"typeof for all primitives",starterCode:"console.log(typeof 42, typeof 'hi', typeof true, typeof undefined, typeof null, typeof Symbol('s'));",solution:"console.log(typeof 42, typeof 'hi', typeof true, typeof undefined, typeof null, typeof Symbol('s'));",tests:[{input:[],expected:"number string boolean undefined object symbol"}],hints:["typeof returns the type as a string","null is the exception - returns 'object'"]},{id:"02-data-types-reference-types-typeof-50",title:"Reference equality in arrays",starterCode:`const a = [1, 2];
const b = [1, 2];
console.log(a === b);`,solution:`const a = [1, 2];
const b = [1, 2];
console.log(a === b);`,tests:[{input:[],expected:"false"}],hints:["Different array objects are not ===","Even with same contents"]}],"03-operators-01-arithmetic-comparison":[{id:"03-operators-arithmetic-comparison-01",title:"Add two numbers",starterCode:`const result = 5 + 3;
console.log(result);`,solution:`const result = 5 + 3;
console.log(result);`,tests:[{input:[],expected:"8"}],hints:["Use the + operator","Both operands are numbers"]},{id:"03-operators-arithmetic-comparison-02",title:"Subtract two numbers",starterCode:`const result = 10 - 4;
console.log(result);`,solution:`const result = 10 - 4;
console.log(result);`,tests:[{input:[],expected:"6"}],hints:["Use the - operator"]},{id:"03-operators-arithmetic-comparison-03",title:"Multiply two numbers",starterCode:`const result = 7 * 6;
console.log(result);`,solution:`const result = 7 * 6;
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["Use the * operator"]},{id:"03-operators-arithmetic-comparison-04",title:"Divide two numbers",starterCode:`const result = 20 / 4;
console.log(result);`,solution:`const result = 20 / 4;
console.log(result);`,tests:[{input:[],expected:"5"}],hints:["Use the / operator"]},{id:"03-operators-arithmetic-comparison-05",title:"Modulo operator",starterCode:`const result = 17 % 5;
console.log(result);`,solution:`const result = 17 % 5;
console.log(result);`,tests:[{input:[],expected:"2"}],hints:["% returns the remainder","17 divided by 5 leaves remainder 2"]},{id:"03-operators-arithmetic-comparison-06",title:"Exponentiation",starterCode:`const result = 2 ** 3;
console.log(result);`,solution:`const result = 2 ** 3;
console.log(result);`,tests:[{input:[],expected:"8"}],hints:["Use the ** operator","2 raised to the power of 3"]},{id:"03-operators-arithmetic-comparison-07",title:"Post increment",starterCode:`let x = 5;
const result = x++;
console.log(result);`,solution:`let x = 5;
const result = x++;
console.log(result);`,tests:[{input:[],expected:"5"}],hints:["Post increment returns value THEN increments","x is 6 after, but result is 5"]},{id:"03-operators-arithmetic-comparison-08",title:"Pre increment",starterCode:`let x = 5;
const result = ++x;
console.log(result);`,solution:`let x = 5;
const result = ++x;
console.log(result);`,tests:[{input:[],expected:"6"}],hints:["Pre increment increments THEN returns value","x is 6, and result is 6"]},{id:"03-operators-arithmetic-comparison-09",title:"Post decrement",starterCode:`let x = 10;
const result = x--;
console.log(result);`,solution:`let x = 10;
const result = x--;
console.log(result);`,tests:[{input:[],expected:"10"}],hints:["Post decrement returns value THEN decrements","x is 9 after, but result is 10"]},{id:"03-operators-arithmetic-comparison-10",title:"Pre decrement",starterCode:`let x = 10;
const result = --x;
console.log(result);`,solution:`let x = 10;
const result = --x;
console.log(result);`,tests:[{input:[],expected:"9"}],hints:["Pre decrement decrements THEN returns value","x is 9, and result is 9"]},{id:"03-operators-arithmetic-comparison-11",title:"Addition with string concatenation",starterCode:`const result = "5" + 3;
console.log(result);`,solution:`const result = "5" + 3;
console.log(result);`,tests:[{input:[],expected:"53"}],hints:["When one operand is a string, + concatenates","The result is a string, not a number"]},{id:"03-operators-arithmetic-comparison-12",title:"Subtraction with string coercion",starterCode:`const result = "10" - 3;
console.log(result);`,solution:`const result = "10" - 3;
console.log(result);`,tests:[{input:[],expected:"7"}],hints:["- always coerces to numbers","The result is a number"]},{id:"03-operators-arithmetic-comparison-13",title:"Multiplication with string coercion",starterCode:`const result = "4" * 2;
console.log(result);`,solution:`const result = "4" * 2;
console.log(result);`,tests:[{input:[],expected:"8"}],hints:["* always coerces to numbers","The result is a number"]},{id:"03-operators-arithmetic-comparison-14",title:"Modulo with negative dividend",starterCode:`const result = -7 % 3;
console.log(result);`,solution:`const result = -7 % 3;
console.log(result);`,tests:[{input:[],expected:"-1"}],hints:["Sign follows the dividend","-7 = -3*3 + 2, but JS gives -1"]},{id:"03-operators-arithmetic-comparison-15",title:"Modulo with negative divisor",starterCode:`const result = 7 % -3;
console.log(result);`,solution:`const result = 7 % -3;
console.log(result);`,tests:[{input:[],expected:"1"}],hints:["Sign follows the dividend","7 = -3*(-3) + (-2), but JS gives 1"]},{id:"03-operators-arithmetic-comparison-16",title:"Division by zero",starterCode:`const result = 5 / 0;
console.log(result);`,solution:`const result = 5 / 0;
console.log(result);`,tests:[{input:[],expected:"Infinity"}],hints:["Division by zero produces Infinity","Not an error in JS"]},{id:"03-operators-arithmetic-comparison-17",title:"Zero divided by zero",starterCode:`const result = 0 / 0;
console.log(result);`,solution:`const result = 0 / 0;
console.log(result);`,tests:[{input:[],expected:"NaN"}],hints:["0/0 is mathematically undefined","JavaScript returns NaN"]},{id:"03-operators-arithmetic-comparison-18",title:"Equal comparison (==)",starterCode:`const result = 5 == 5;
console.log(result);`,solution:`const result = 5 == 5;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["== checks value equality","Both operands are 5"]},{id:"03-operators-arithmetic-comparison-19",title:"Strict equality (===)",starterCode:`const result = 5 === "5";
console.log(result);`,solution:`const result = 5 === "5";
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["=== checks value AND type","5 is number, '5' is string"]},{id:"03-operators-arithmetic-comparison-20",title:"Loose equality with type coercion",starterCode:`const result = 0 == "";
console.log(result);`,solution:`const result = 0 == "";
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["== coerces types","Empty string coerces to 0"]},{id:"03-operators-arithmetic-comparison-21",title:"Not equal (!=)",starterCode:`const result = 5 != 3;
console.log(result);`,solution:`const result = 5 != 3;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["!= checks inequality","5 is not equal to 3"]},{id:"03-operators-arithmetic-comparison-22",title:"Strict not equal (!==)",starterCode:`const result = 5 !== "5";
console.log(result);`,solution:`const result = 5 !== "5";
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["!== checks value AND type inequality","Different types, so not equal"]},{id:"03-operators-arithmetic-comparison-23",title:"Greater than comparison",starterCode:`const result = 10 > 5;
console.log(result);`,solution:`const result = 10 > 5;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["> checks if left is greater than right"]},{id:"03-operators-arithmetic-comparison-24",title:"Less than comparison",starterCode:`const result = 3 < 7;
console.log(result);`,solution:`const result = 3 < 7;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["< checks if left is less than right"]},{id:"03-operators-arithmetic-comparison-25",title:"Greater than or equal",starterCode:`const result = 5 >= 5;
console.log(result);`,solution:`const result = 5 >= 5;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:[">= checks if left is greater than or equal to right"]},{id:"03-operators-arithmetic-comparison-26",title:"Less than or equal",starterCode:`const result = 3 <= 10;
console.log(result);`,solution:`const result = 3 <= 10;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["<= checks if left is less than or equal to right"]},{id:"03-operators-arithmetic-comparison-27",title:"Comparison chaining",starterCode:`const result = 1 < 2 && 2 < 3;
console.log(result);`,solution:`const result = 1 < 2 && 2 < 3;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["&& requires both sides to be true","1<2 is true AND 2<3 is true"]},{id:"03-operators-arithmetic-comparison-28",title:"Number.EPSILON for float comparison",starterCode:`const result = 0.1 + 0.2 === 0.3;
console.log(result);`,solution:`const result = 0.1 + 0.2 === 0.3;
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["Floating point math is imprecise","0.1+0.2 is not exactly 0.3"]},{id:"03-operators-arithmetic-comparison-29",title:"Using Math.abs for float comparison",starterCode:`const result = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(result);`,solution:`const result = Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["Use Math.abs for absolute difference","Compare difference to Number.EPSILON"]},{id:"03-operators-arithmetic-comparison-30",title:"Math.floor",starterCode:`const result = Math.floor(4.9);
console.log(result);`,solution:`const result = Math.floor(4.9);
console.log(result);`,tests:[{input:[],expected:"4"}],hints:["Math.floor rounds down to nearest integer"]},{id:"03-operators-arithmetic-comparison-31",title:"Math.ceil",starterCode:`const result = Math.ceil(4.1);
console.log(result);`,solution:`const result = Math.ceil(4.1);
console.log(result);`,tests:[{input:[],expected:"5"}],hints:["Math.ceil rounds up to nearest integer"]},{id:"03-operators-arithmetic-comparison-32",title:"Math.round",starterCode:`const result = Math.round(4.5);
console.log(result);`,solution:`const result = Math.round(4.5);
console.log(result);`,tests:[{input:[],expected:"5"}],hints:["Math.round rounds to nearest integer",".5 rounds up"]},{id:"03-operators-arithmetic-comparison-33",title:"Math.max",starterCode:`const result = Math.max(10, 20, 5);
console.log(result);`,solution:`const result = Math.max(10, 20, 5);
console.log(result);`,tests:[{input:[],expected:"20"}],hints:["Math.max returns the largest value"]},{id:"03-operators-arithmetic-comparison-34",title:"Math.min",starterCode:`const result = Math.min(10, 20, 5);
console.log(result);`,solution:`const result = Math.min(10, 20, 5);
console.log(result);`,tests:[{input:[],expected:"5"}],hints:["Math.min returns the smallest value"]},{id:"03-operators-arithmetic-comparison-35",title:"Math.sqrt",starterCode:`const result = Math.sqrt(9);
console.log(result);`,solution:`const result = Math.sqrt(9);
console.log(result);`,tests:[{input:[],expected:"3"}],hints:["Math.sqrt returns the square root"]},{id:"03-operators-arithmetic-comparison-36",title:"Math.abs",starterCode:`const result = Math.abs(-7);
console.log(result);`,solution:`const result = Math.abs(-7);
console.log(result);`,tests:[{input:[],expected:"7"}],hints:["Math.abs returns the absolute value"]},{id:"03-operators-arithmetic-comparison-37",title:"Compound addition (+=)",starterCode:`let x = 10;
x += 5;
console.log(x);`,solution:`let x = 10;
x += 5;
console.log(x);`,tests:[{input:[],expected:"15"}],hints:["x += 5 is the same as x = x + 5"]},{id:"03-operators-arithmetic-comparison-38",title:"Compound subtraction (-=)",starterCode:`let x = 20;
x -= 8;
console.log(x);`,solution:`let x = 20;
x -= 8;
console.log(x);`,tests:[{input:[],expected:"12"}],hints:["x -= 8 is the same as x = x - 8"]},{id:"03-operators-arithmetic-comparison-39",title:"Compound multiplication (*=)",starterCode:`let x = 5;
x *= 4;
console.log(x);`,solution:`let x = 5;
x *= 4;
console.log(x);`,tests:[{input:[],expected:"20"}],hints:["x *= 4 is the same as x = x * 4"]},{id:"03-operators-arithmetic-comparison-40",title:"Compound division (/=)",starterCode:`let x = 24;
x /= 6;
console.log(x);`,solution:`let x = 24;
x /= 6;
console.log(x);`,tests:[{input:[],expected:"4"}],hints:["x /= 6 is the same as x = x / 6"]},{id:"03-operators-arithmetic-comparison-41",title:"Compound modulo (%=)",starterCode:`let x = 17;
x %= 5;
console.log(x);`,solution:`let x = 17;
x %= 5;
console.log(x);`,tests:[{input:[],expected:"2"}],hints:["x %= 5 is the same as x = x % 5"]},{id:"03-operators-arithmetic-comparison-42",title:"Type coercion in addition",starterCode:`const result = true + 1;
console.log(result);`,solution:`const result = true + 1;
console.log(result);`,tests:[{input:[],expected:"2"}],hints:["true coerces to 1 in numeric context","1 + 1 = 2"]},{id:"03-operators-arithmetic-comparison-43",title:"Type coercion in subtraction",starterCode:`const result = true - 1;
console.log(result);`,solution:`const result = true - 1;
console.log(result);`,tests:[{input:[],expected:"0"}],hints:["true coerces to 1 in numeric context","1 - 1 = 0"]},{id:"03-operators-arithmetic-comparison-44",title:"String number conversion",starterCode:`const result = Number("42");
console.log(result);`,solution:`const result = Number("42");
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["Number() converts string to number","Result is a number type"]},{id:"03-operators-arithmetic-comparison-45",title:"parseInt",starterCode:`const result = parseInt("42px");
console.log(result);`,solution:`const result = parseInt("42px");
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["parseInt parses until non-numeric","Stops at 'p'"]},{id:"03-operators-arithmetic-comparison-46",title:"parseFloat",starterCode:`const result = parseFloat("3.14em");
console.log(result);`,solution:`const result = parseFloat("3.14em");
console.log(result);`,tests:[{input:[],expected:"3.14"}],hints:["parseFloat parses decimal numbers","Stops at 'e'"]},{id:"03-operators-arithmetic-comparison-47",title:"NaN check",starterCode:`const result = isNaN("hello");
console.log(result);`,solution:`const result = isNaN("hello");
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["isNaN returns true if value is NaN","'hello' cannot be converted to a number"]},{id:"03-operators-arithmetic-comparison-48",title:"Negative NaN check",starterCode:`const result = isNaN(NaN);
console.log(result);`,solution:`const result = isNaN(NaN);
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["NaN is the only value not equal to itself","isNaN returns true for NaN"]},{id:"03-operators-arithmetic-comparison-49",title:"Integer check",starterCode:`const result = Number.isInteger(42);
console.log(result);`,solution:`const result = Number.isInteger(42);
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["Number.isInteger checks if value is an integer","42 is an integer"]},{id:"03-operators-arithmetic-comparison-50",title:"Float integer check",starterCode:`const result = Number.isInteger(42.5);
console.log(result);`,solution:`const result = Number.isInteger(42.5);
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["42.5 is not an integer","Number.isInteger returns false for floats"]}],"03-operators-02-logical-ternary":[{id:"03-operators-logical-ternary-01",title:"Logical AND with truthy values",starterCode:`const result = true && 42;
console.log(result);`,solution:`const result = true && 42;
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["&& returns first falsy or last value","Both are truthy, so returns last"]},{id:"03-operators-logical-ternary-02",title:"Logical AND with falsy first",starterCode:`const result = 0 && 42;
console.log(result);`,solution:`const result = 0 && 42;
console.log(result);`,tests:[{input:[],expected:"0"}],hints:["&& short-circuits on first falsy","0 is falsy"]},{id:"03-operators-logical-ternary-03",title:"Logical OR with first truthy",starterCode:`const result = "hello" || "default";
console.log(result);`,solution:`const result = "hello" || "default";
console.log(result);`,tests:[{input:[],expected:"hello"}],hints:["|| returns first truthy or last value","'hello' is truthy"]},{id:"03-operators-logical-ternary-04",title:"Logical OR with first falsy",starterCode:`const result = "" || "default";
console.log(result);`,solution:`const result = "" || "default";
console.log(result);`,tests:[{input:[],expected:"default"}],hints:["|| short-circuits on first truthy","Empty string is falsy"]},{id:"03-operators-logical-ternary-05",title:"NOT operator",starterCode:`const result = !true;
console.log(result);`,solution:`const result = !true;
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["! inverts boolean value","!true is false"]},{id:"03-operators-logical-ternary-06",title:"Double NOT for boolean coercion",starterCode:`const result = !!"";
console.log(result);`,solution:`const result = !!"";
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["First ! converts to boolean and inverts","Second ! inverts back","!! converts any value to boolean"]},{id:"03-operators-logical-ternary-07",title:"Double NOT truthy value",starterCode:`const result = !!42;
console.log(result);`,solution:`const result = !!42;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["!! converts to boolean","42 is truthy, so result is true"]},{id:"03-operators-logical-ternary-08",title:"Basic ternary operator",starterCode:`const age = 20;
const result = age >= 18 ? "adult" : "minor";
console.log(result);`,solution:`const age = 20;
const result = age >= 18 ? "adult" : "minor";
console.log(result);`,tests:[{input:[],expected:"adult"}],hints:["condition ? valueIfTrue : valueIfFalse","20 >= 18 is true"]},{id:"03-operators-logical-ternary-09",title:"Ternary with numbers",starterCode:`const x = 10;
const result = x > 5 ? 1 : 0;
console.log(result);`,solution:`const x = 10;
const result = x > 5 ? 1 : 0;
console.log(result);`,tests:[{input:[],expected:"1"}],hints:["10 > 5 is true, so returns 1"]},{id:"03-operators-logical-ternary-10",title:"Nested ternary",starterCode:`const score = 85;
const result = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(result);`,solution:`const score = 85;
const result = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(result);`,tests:[{input:[],expected:"B"}],hints:["85 is not >= 90, so check second ternary","85 >= 80 is true"]},{id:"03-operators-logical-ternary-11",title:"Nullish coalescing (??)",starterCode:`const result = null ?? 'default';
console.log(result);`,solution:`const result = null ?? 'default';
console.log(result);`,tests:[{input:[],expected:"default"}],hints:["?? only checks null and undefined","null triggers the right side"]},{id:"03-operators-logical-ternary-12",title:"Nullish coalescing with undefined",starterCode:`const result = undefined ?? 'fallback';
console.log(result);`,solution:`const result = undefined ?? 'fallback';
console.log(result);`,tests:[{input:[],expected:"fallback"}],hints:["undefined triggers the right side of ??","Unlike ||, 0 and '' don't trigger"]},{id:"03-operators-logical-ternary-13",title:"Nullish vs OR with zero",starterCode:`const result = 0 ?? 'default';
console.log(result);`,solution:`const result = 0 ?? 'default';
console.log(result);`,tests:[{input:[],expected:"0"}],hints:["?? only triggers on null/undefined","0 is not null or undefined"]},{id:"03-operators-logical-ternary-14",title:"OR vs Nullish with zero",starterCode:`const result = 0 || 'default';
console.log(result);`,solution:`const result = 0 || 'default';
console.log(result);`,tests:[{input:[],expected:"default"}],hints:["|| treats 0 as falsy","0 is falsy, so returns 'default'"]},{id:"03-operators-logical-ternary-15",title:"Nullish vs OR with empty string",starterCode:`const result = '' ?? 'default';
console.log(result);`,solution:`const result = '' ?? 'default';
console.log(result);`,tests:[{input:[],expected:""}],hints:["?? only triggers on null/undefined","Empty string is not null or undefined"]},{id:"03-operators-logical-ternary-16",title:"Optional chaining",starterCode:`const user = { name: 'Alice' };
const result = user?.address?.street;
console.log(result);`,solution:`const user = { name: 'Alice' };
const result = user?.address?.street;
console.log(result);`,tests:[{input:[],expected:"undefined"}],hints:["?. returns undefined if property doesn't exist","user has no address property"]},{id:"03-operators-logical-ternary-17",title:"Optional chaining exists",starterCode:`const user = { name: 'Alice', address: { street: '123 Main St' } };
const result = user?.address?.street;
console.log(result);`,solution:`const user = { name: 'Alice', address: { street: '123 Main St' } };
const result = user?.address?.street;
console.log(result);`,tests:[{input:[],expected:"123 Main St"}],hints:["?. safely accesses nested properties","All properties exist"]},{id:"03-operators-logical-ternary-18",title:"Optional chaining method",starterCode:`const obj = { greet: () => 'hi' };
const result = obj?.greet();
console.log(result);`,solution:`const obj = { greet: () => 'hi' };
const result = obj?.greet();
console.log(result);`,tests:[{input:[],expected:"hi"}],hints:["?. can be used for method calls","obj exists and has greet method"]},{id:"03-operators-logical-ternary-19",title:"Short circuit AND assignment",starterCode:`let x = 0;
const result = x && (x = 5);
console.log(x);`,solution:`let x = 0;
const result = x && (x = 5);
console.log(x);`,tests:[{input:[],expected:"0"}],hints:["&& short-circuits on first falsy","x is 0 (falsy), so assignment never happens"]},{id:"03-operators-logical-ternary-20",title:"Short circuit OR assignment",starterCode:`let x = 0;
const result = x || (x = 5);
console.log(x);`,solution:`let x = 0;
const result = x || (x = 5);
console.log(x);`,tests:[{input:[],expected:"5"}],hints:["|| short-circuits on first truthy","x is 0 (falsy), so assignment happens"]},{id:"03-operators-logical-ternary-21",title:"Logical AND assignment (&&=)",starterCode:`let x = 10;
x &&= 5;
console.log(x);`,solution:`let x = 10;
x &&= 5;
console.log(x);`,tests:[{input:[],expected:"5"}],hints:["x &&= 5 means x = x && 5","x is truthy, so x becomes 5"]},{id:"03-operators-logical-ternary-22",title:"Logical OR assignment (||=)",starterCode:`let x = "";
x ||= "default";
console.log(x);`,solution:`let x = "";
x ||= "default";
console.log(x);`,tests:[{input:[],expected:"default"}],hints:["x ||= 'default' means x = x || 'default'","x is falsy, so assignment happens"]},{id:"03-operators-logical-ternary-23",title:"Logical OR assignment with truthy",starterCode:`let x = "hello";
x ||= "default";
console.log(x);`,solution:`let x = "hello";
x ||= "default";
console.log(x);`,tests:[{input:[],expected:"hello"}],hints:["x is truthy, so assignment doesn't happen","x stays as 'hello'"]},{id:"03-operators-logical-ternary-24",title:"Nullish coalescing assignment (??=)",starterCode:`let x = null;
x ??= 'default';
console.log(x);`,solution:`let x = null;
x ??= 'default';
console.log(x);`,tests:[{input:[],expected:"default"}],hints:["x ??= 'default' means x = x ?? 'default'","x is null, so assignment happens"]},{id:"03-operators-logical-ternary-25",title:"Nullish assignment with zero",starterCode:`let x = 0;
x ??= 'default';
console.log(x);`,solution:`let x = 0;
x ??= 'default';
console.log(x);`,tests:[{input:[],expected:"0"}],hints:["?? only triggers on null/undefined","0 is not null or undefined, so no assignment"]},{id:"03-operators-logical-ternary-26",title:"De Morgan's Law NOT AND",starterCode:`const result = !(true && false);
console.log(result);`,solution:`const result = !(true && false);
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["De Morgan: !(A && B) === !A || !B","!(true && false) === !true || !false === true"]},{id:"03-operators-logical-ternary-27",title:"De Morgan's Law NOT OR",starterCode:`const result = !(true || false);
console.log(result);`,solution:`const result = !(true || false);
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["De Morgan: !(A || B) === !A && !B","!(true || false) === !true && !false === false"]},{id:"03-operators-logical-ternary-28",title:"AND returns last truthy",starterCode:`const result = 1 && 2 && 3;
console.log(result);`,solution:`const result = 1 && 2 && 3;
console.log(result);`,tests:[{input:[],expected:"3"}],hints:["&& returns last value if all truthy","1, 2, 3 are all truthy"]},{id:"03-operators-logical-ternary-29",title:"AND returns first falsy",starterCode:`const result = 1 && 0 && 3;
console.log(result);`,solution:`const result = 1 && 0 && 3;
console.log(result);`,tests:[{input:[],expected:"0"}],hints:["&& returns first falsy value","0 is the first falsy"]},{id:"03-operators-logical-ternary-30",title:"OR returns first truthy",starterCode:`const result = 0 || "" || 42;
console.log(result);`,solution:`const result = 0 || "" || 42;
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["|| returns first truthy value","0 and '' are falsy, 42 is truthy"]},{id:"03-operators-logical-ternary-31",title:"OR returns last if all falsy",starterCode:`const result = 0 || "" || null;
console.log(result);`,solution:`const result = 0 || "" || null;
console.log(result);`,tests:[{input:[],expected:"null"}],hints:["|| returns last value if all falsy","All are falsy"]},{id:"03-operators-logical-ternary-32",title:"NOT with truthy",starterCode:`const result = !1;
console.log(result);`,solution:`const result = !1;
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["! converts to boolean then inverts","1 is truthy, so !1 is false"]},{id:"03-operators-logical-ternary-33",title:"NOT with falsy",starterCode:`const result = !0;
console.log(result);`,solution:`const result = !0;
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["! converts to boolean then inverts","0 is falsy, so !0 is true"]},{id:"03-operators-logical-ternary-34",title:"NOT with empty string",starterCode:`const result = !'';
console.log(result);`,solution:`const result = !'';
console.log(result);`,tests:[{input:[],expected:"true"}],hints:["Empty string is falsy","!'' is true"]},{id:"03-operators-logical-ternary-35",title:"Ternary with truthy condition",starterCode:`const result = "yes" ? "affirmed" : "denied";
console.log(result);`,solution:`const result = "yes" ? "affirmed" : "denied";
console.log(result);`,tests:[{input:[],expected:"affirmed"}],hints:["Non-empty string is truthy","Ternary returns first value"]},{id:"03-operators-logical-ternary-36",title:"Ternary with falsy condition",starterCode:`const result = 0 ? 'yes' : 'no';
console.log(result);`,solution:`const result = 0 ? 'yes' : 'no';
console.log(result);`,tests:[{input:[],expected:"no"}],hints:["0 is falsy","Ternary returns second value"]},{id:"03-operators-logical-ternary-37",title:"Nullish coalescing chain",starterCode:`const a = null;
const b = undefined;
const c = 0;
const result = a ?? b ?? c ?? 'default';
console.log(result);`,solution:`const a = null;
const b = undefined;
const c = 0;
const result = a ?? b ?? c ?? 'default';
console.log(result);`,tests:[{input:[],expected:"0"}],hints:["?? chains until non-null/undefined","c is 0, which is not null/undefined"]},{id:"03-operators-logical-ternary-38",title:"Optional chaining with array",starterCode:`const users = [{ name: 'Alice' }];
const result = users?.[0]?.name;
console.log(result);`,solution:`const users = [{ name: 'Alice' }];
const result = users?.[0]?.name;
console.log(result);`,tests:[{input:[],expected:"Alice"}],hints:["?.[] for optional property access","users[0] exists and has name"]},{id:"03-operators-logical-ternary-39",title:"Optional chaining array out of bounds",starterCode:`const users = [];
const result = users?.[0]?.name;
console.log(result);`,solution:`const users = [];
const result = users?.[0]?.name;
console.log(result);`,tests:[{input:[],expected:"undefined"}],hints:["?. safely returns undefined","users[0] is undefined"]},{id:"03-operators-logical-ternary-40",title:"Short circuit AND return value",starterCode:`const result = true && "hello";
console.log(result);`,solution:`const result = true && "hello";
console.log(result);`,tests:[{input:[],expected:"hello"}],hints:["&& returns last value if all truthy","true is truthy, so returns 'hello'"]},{id:"03-operators-logical-ternary-41",title:"Short circuit OR return value",starterCode:`const result = false || "fallback";
console.log(result);`,solution:`const result = false || "fallback";
console.log(result);`,tests:[{input:[],expected:"fallback"}],hints:["|| returns first truthy","false is falsy, so returns 'fallback'"]},{id:"03-operators-logical-ternary-42",title:"Ternary with function call",starterCode:`const isEven = (n) => n % 2 === 0;
const result = isEven(4) ? 'even' : 'odd';
console.log(result);`,solution:`const isEven = (n) => n % 2 === 0;
const result = isEven(4) ? 'even' : 'odd';
console.log(result);`,tests:[{input:[],expected:"even"}],hints:["isEven(4) returns true","Ternary returns first value"]},{id:"03-operators-logical-ternary-43",title:"Logical assignment with null",starterCode:`let x = null;
x ??= 'initialized';
console.log(x);`,solution:`let x = null;
x ??= 'initialized';
console.log(x);`,tests:[{input:[],expected:"initialized"}],hints:["??= only assigns if null/undefined","x is null, so assignment happens"]},{id:"03-operators-logical-ternary-44",title:"Logical OR default pattern",starterCode:`function greet(name) {
  const displayName = name || 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,solution:`function greet(name) {
  const displayName = name || 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,tests:[{input:[],expected:"Hello, Guest!"}],hints:["'' is falsy","|| returns 'Guest'"]},{id:"03-operators-logical-ternary-45",title:"Nullish OR default pattern",starterCode:`function greet(name) {
  const displayName = name ?? 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,solution:`function greet(name) {
  const displayName = name ?? 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,tests:[{input:[],expected:"Hello, !"}],hints:["?? only triggers on null/undefined","'' is not null/undefined, so no default"]},{id:"03-operators-logical-ternary-46",title:"Logical AND for conditional execution",starterCode:`const showGreeting = true;
const result = showGreeting && 'Welcome!';
console.log(result);`,solution:`const showGreeting = true;
const result = showGreeting && 'Welcome!';
console.log(result);`,tests:[{input:[],expected:"Welcome!"}],hints:["&& returns last value if all truthy","showGreeting is true"]},{id:"03-operators-logical-ternary-47",title:"Logical AND short circuit",starterCode:`const showGreeting = false;
const result = showGreeting && 'Welcome!';
console.log(result);`,solution:`const showGreeting = false;
const result = showGreeting && 'Welcome!';
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["&& short-circuits on first falsy","showGreeting is false"]},{id:"03-operators-logical-ternary-48",title:"Complex ternary expression",starterCode:`const age = 15;
const result = age >= 18 ? 'adult' : age >= 13 ? 'teen' : 'child';
console.log(result);`,solution:`const age = 15;
const result = age >= 18 ? 'adult' : age >= 13 ? 'teen' : 'child';
console.log(result);`,tests:[{input:[],expected:"teen"}],hints:["15 < 18, check second ternary","15 >= 13 is true"]},{id:"03-operators-logical-ternary-49",title:"Nullish vs OR with false",starterCode:`const result = false ?? 'default';
console.log(result);`,solution:`const result = false ?? 'default';
console.log(result);`,tests:[{input:[],expected:"false"}],hints:["?? only triggers on null/undefined","false is not null or undefined"]},{id:"03-operators-logical-ternary-50",title:"Optional chaining with method on null",starterCode:`const obj = null;
const result = obj?.toString();
console.log(result);`,solution:`const obj = null;
const result = obj?.toString();
console.log(result);`,tests:[{input:[],expected:"undefined"}],hints:["?. returns undefined if object is null","No error is thrown"]}],"04-control-flow-02-early-return":[{id:"04-control-flow-early-return-01",title:"Simple validation return",starterCode:`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 2));`,solution:`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 2));`,tests:[{input:[],expected:"5"}],hints:["Guard clause returns early on error","b is not 0, so normal return executes"]},{id:"04-control-flow-early-return-02",title:"Early return on divide by zero",starterCode:`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 0));`,solution:`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 0));`,tests:[{input:[],expected:"Cannot divide by zero"}],hints:["b is 0, guard clause triggers","Returns early before division"]},{id:"04-control-flow-early-return-03",title:"Guard clause pattern",starterCode:`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(100, true));`,solution:`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(100, true));`,tests:[{input:[],expected:"20"}],hints:["price is 100, not <= 0","isVIP is true, so 20% discount"]},{id:"04-control-flow-early-return-04",title:"Guard clause returns 0",starterCode:`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(-50, true));`,solution:`function getDiscount(price, isVIP) {
  if (price <= 0) return 0;
  return isVIP ? price * 0.2 : price * 0.1;
}
console.log(getDiscount(-50, true));`,tests:[{input:[],expected:"0"}],hints:["price is -50, which is <= 0","Guard clause returns 0"]},{id:"04-control-flow-early-return-05",title:"Nested to flat with early return",starterCode:`function process(value) {
  if (value === null) return 'null input';
  if (value === undefined) return 'undefined input';
  return \`processed: \${value}\`;
}
console.log(process(null));`,solution:`function process(value) {
  if (value === null) return 'null input';
  if (value === undefined) return 'undefined input';
  return \`processed: \${value}\`;
}
console.log(process(null));`,tests:[{input:[],expected:"null input"}],hints:["First guard catches null","Returns before second check"]},{id:"04-control-flow-early-return-06",title:"Return undefined early",starterCode:`function findUser(users, id) {
  if (!users) return undefined;
  if (!id) return undefined;
  return users.find(u => u.id === id);
}
const users = [{ id: 1, name: 'Alice' }];
console.log(findUser(users, 1));`,solution:`function findUser(users, id) {
  if (!users) return undefined;
  if (!id) return undefined;
  return users.find(u => u.id === id);
}
const users = [{ id: 1, name: 'Alice' }];
console.log(findUser(users, 1));`,tests:[{input:[],expected:"[object Object]"}],hints:["Both guards pass","find returns matching user object"]},{id:"04-control-flow-early-return-07",title:"Multiple exit points",starterCode:`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isAdmin: true }));`,solution:`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isAdmin: true }));`,tests:[{input:[],expected:"admin"}],hints:["user is truthy","isAdmin is true, returns 'admin'"]},{id:"04-control-flow-early-return-08",title:"Multiple exit points - moderator",starterCode:`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isMod: true }));`,solution:`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isMod: true }));`,tests:[{input:[],expected:"moderator"}],hints:["user is truthy","isAdmin is undefined (falsy)","isMod is true"]},{id:"04-control-flow-early-return-09",title:"Readability with early return",starterCode:`function calculateShipping(weight, isInternational) {
  if (weight <= 0) return 0;
  if (isInternational) return weight * 5;
  return weight * 2;
}
console.log(calculateShipping(10, false));`,solution:`function calculateShipping(weight, isInternational) {
  if (weight <= 0) return 0;
  if (isInternational) return weight * 5;
  return weight * 2;
}
console.log(calculateShipping(10, false));`,tests:[{input:[],expected:"20"}],hints:["weight is 10, not <= 0","isInternational is false","Returns weight * 2"]},{id:"04-control-flow-early-return-10",title:"Error handling early return",starterCode:`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON('{"a": 1}'));`,solution:`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON('{"a": 1}'));`,tests:[{input:[],expected:"[object Object]"}],hints:["str is a string, guard passes","JSON.parse succeeds"]},{id:"04-control-flow-early-return-11",title:"Error handling on invalid input",starterCode:`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON(123));`,solution:`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON(123));`,tests:[{input:[],expected:"null"}],hints:["123 is not a string","Guard clause returns null"]},{id:"04-control-flow-early-return-12",title:"Default fallback pattern",starterCode:`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('theme'));`,solution:`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('theme'));`,tests:[{input:[],expected:"dark"}],hints:["config.theme exists","?? returns value if not null/undefined"]},{id:"04-control-flow-early-return-13",title:"Default fallback on missing key",starterCode:`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('missing'));`,solution:`function getConfig(key) {
  const config = { theme: 'dark', lang: 'en' };
  return config[key] ?? 'default';
}
console.log(getConfig('missing'));`,tests:[{input:[],expected:"default"}],hints:["config.missing is undefined","?? returns 'default'"]},{id:"04-control-flow-early-return-14",title:"Fail fast pattern",starterCode:`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray([1, 2, 3]));`,solution:`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray([1, 2, 3]));`,tests:[{input:[],expected:"2,4,6"}],hints:["arr is an array","arr has elements","map doubles each element"]},{id:"04-control-flow-early-return-15",title:"Fail fast on non-array",starterCode:`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray('not an array'));`,solution:`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray('not an array'));`,tests:[{input:[],expected:""}],hints:["'not an array' is not an array","Returns empty array"]},{id:"04-control-flow-early-return-16",title:"Early return in loop",starterCode:`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, -3, 4]));`,solution:`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, -3, 4]));`,tests:[{input:[],expected:"true"}],hints:["Loop finds -3","Returns true immediately"]},{id:"04-control-flow-early-return-17",title:"Early return in loop - no match",starterCode:`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, 3, 4]));`,solution:`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, 3, 4]));`,tests:[{input:[],expected:"false"}],hints:["No negative numbers found","Returns false after loop"]},{id:"04-control-flow-early-return-18",title:"Guard function pattern",starterCode:`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail('test@example.com'));`,solution:`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail('test@example.com'));`,tests:[{input:[],expected:"true"}],hints:["email is truthy","email is a string","email includes '@'"]},{id:"04-control-flow-early-return-19",title:"Guard function - no email",starterCode:`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail(''));`,solution:`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail(''));`,tests:[{input:[],expected:"false"}],hints:["'' is falsy","First guard returns false"]},{id:"04-control-flow-early-return-20",title:"Null check early return",starterCode:`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength('hello'));`,solution:`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength('hello'));`,tests:[{input:[],expected:"5"}],hints:["str is not null","str is not undefined","str.length is 5"]},{id:"04-control-flow-early-return-21",title:"Null check - null input",starterCode:`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength(null));`,solution:`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength(null));`,tests:[{input:[],expected:"0"}],hints:["str is null","First guard returns 0"]},{id:"04-control-flow-early-return-22",title:"Multiple guards pattern",starterCode:`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, 'card'));`,solution:`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, 'card'));`,tests:[{input:[],expected:"paid 500 via card"}],hints:["500 > 0, first guard passes","method is truthy, second passes","500 <= 10000, third passes"]},{id:"04-control-flow-early-return-23",title:"Multiple guards - no method",starterCode:`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, null));`,solution:`function processPayment(amount, method) {
  if (amount <= 0) return 'invalid amount';
  if (!method) return 'no payment method';
  if (amount > 10000) return 'amount too large';
  return \`paid \${amount} via \${method}\`;
}
console.log(processPayment(500, null));`,tests:[{input:[],expected:"no payment method"}],hints:["500 > 0, first guard passes","null is falsy, second guard triggers"]},{id:"04-control-flow-early-return-24",title:"Nested refactor to flat",starterCode:`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: true }));`,solution:`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: true }));`,tests:[{input:[],expected:"true"}],hints:["user is truthy","isLoggedIn is true","hasPermission is true"]},{id:"04-control-flow-early-return-25",title:"Nested refactor - no access",starterCode:`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: false }));`,solution:`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: false }));`,tests:[{input:[],expected:"false"}],hints:["user is truthy","isLoggedIn is true","hasPermission is false, returns false"]},{id:"04-control-flow-early-return-26",title:"Early return with object",starterCode:`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('Alice', 25));`,solution:`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('Alice', 25));`,tests:[{input:[],expected:"[object Object]"}],hints:["name is truthy","age is positive","Returns user object"]},{id:"04-control-flow-early-return-27",title:"Early return with object - error",starterCode:`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('', 25));`,solution:`function createUser(name, age) {
  if (!name) return { error: 'name required' };
  if (age < 0) return { error: 'invalid age' };
  return { name, age, status: 'active' };
}
console.log(createUser('', 25));`,tests:[{input:[],expected:"[object Object]"}],hints:["'' is falsy","Returns error object"]},{id:"04-control-flow-early-return-28",title:"Validation chain",starterCode:`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'ab' }));`,solution:`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'ab' }));`,tests:[{input:[],expected:"username too short"}],hints:["data is truthy","username exists","length is 2, < 3"]},{id:"04-control-flow-early-return-29",title:"Validation chain - valid",starterCode:`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'alice' }));`,solution:`function validate(data) {
  if (!data) return 'no data';
  if (!data.username) return 'no username';
  if (data.username.length < 3) return 'username too short';
  return 'valid';
}
console.log(validate({ username: 'alice' }));`,tests:[{input:[],expected:"valid"}],hints:["All guards pass","Returns 'valid'"]},{id:"04-control-flow-early-return-30",title:"Early return arrays",starterCode:`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));`,solution:`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));`,tests:[{input:[],expected:"1,2,3"}],hints:["arr is an array","slice(0,3) returns first 3 elements"]},{id:"04-control-flow-early-return-31",title:"Early return arrays - not array",starterCode:`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree('hello'));`,solution:`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree('hello'));`,tests:[{input:[],expected:""}],hints:["'hello' is not an array","Returns empty array"]},{id:"04-control-flow-early-return-32",title:"Guard benefits - clean code",starterCode:`function divide(a, b) {
  if (b === 0) return Infinity;
  return a / b;
}
console.log(divide(10, 0));`,solution:`function divide(a, b) {
  if (b === 0) return Infinity;
  return a / b;
}
console.log(divide(10, 0));`,tests:[{input:[],expected:"Infinity"}],hints:["b is 0, guard returns Infinity","No nested else needed"]},{id:"04-control-flow-early-return-33",title:"Nested guard pattern",starterCode:`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'POST' }));`,solution:`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'POST' }));`,tests:[{input:[],expected:"processing POST"}],hints:["request is truthy","method exists","POST is valid"]},{id:"04-control-flow-early-return-34",title:"Nested guard - invalid method",starterCode:`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'DELETE' }));`,solution:`function processRequest(request) {
  if (!request) return 'no request';
  if (!request.method) return 'no method';
  if (request.method !== 'GET' && request.method !== 'POST') return 'invalid method';
  return \`processing \${request.method}\`;
}
console.log(processRequest({ method: 'DELETE' }));`,tests:[{input:[],expected:"invalid method"}],hints:["request is truthy","method exists","DELETE is not GET or POST"]},{id:"04-control-flow-early-return-35",title:"Early return boolean",starterCode:`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(25));`,solution:`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(25));`,tests:[{input:[],expected:"true"}],hints:["age is a number","age is positive","25 >= 18 is true"]},{id:"04-control-flow-early-return-36",title:"Early return boolean - not adult",starterCode:`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(15));`,solution:`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(15));`,tests:[{input:[],expected:"false"}],hints:["age is a number","age is positive","15 >= 18 is false"]},{id:"04-control-flow-early-return-37",title:"Early return in async pattern",starterCode:`function fetchData(url) {
  if (!url) return Promise.reject('no url');
  if (typeof url !== 'string') return Promise.reject('invalid url');
  return Promise.resolve(\`fetched \${url}\`);
}
fetchData('test.com').then(console.log);`,solution:`function fetchData(url) {
  if (!url) return Promise.reject('no url');
  if (typeof url !== 'string') return Promise.reject('invalid url');
  return Promise.resolve(\`fetched \${url}\`);
}
fetchData('test.com').then(console.log);`,tests:[{input:[],expected:"fetched test.com"}],hints:["url is truthy","url is a string","Returns resolved promise"]},{id:"04-control-flow-early-return-38",title:"Early return with default parameter",starterCode:`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet());`,solution:`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet());`,tests:[{input:[],expected:"Hello, Guest!"}],hints:["Default parameter gives 'Guest'","'Guest' is truthy","Returns greeting"]},{id:"04-control-flow-early-return-39",title:"Early return with default - empty",starterCode:`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet(''));`,solution:`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet(''));`,tests:[{input:[],expected:"Hello, stranger!"}],hints:["'' overrides default","'' is falsy","Guard triggers"]},{id:"04-control-flow-early-return-40",title:"Guard clause with logical AND",starterCode:`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(21, true));`,solution:`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(21, true));`,tests:[{input:[],expected:"true"}],hints:["21 < 18 is false","!true is false","false || false is false, guard doesn't trigger"]},{id:"04-control-flow-early-return-41",title:"Guard clause - cannot vote",starterCode:`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(16, true));`,solution:`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(16, true));`,tests:[{input:[],expected:"false"}],hints:["16 < 18 is true","true || false is true, guard triggers"]},{id:"04-control-flow-early-return-42",title:"Early return in filter callback",starterCode:`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => {
  if (n % 2 !== 0) return false;
  return true;
});
console.log(evens);`,solution:`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => {
  if (n % 2 !== 0) return false;
  return true;
});
console.log(evens);`,tests:[{input:[],expected:"2,4,6"}],hints:["filter keeps elements where callback returns true","Even numbers pass the check"]},{id:"04-control-flow-early-return-43",title:"Early return - flatten nested",starterCode:`function getStatusColor(status) {
  if (status === 'active') return 'green';
  if (status === 'pending') return 'yellow';
  if (status === 'error') return 'red';
  return 'gray';
}
console.log(getStatusColor('pending'));`,solution:`function getStatusColor(status) {
  if (status === 'active') return 'green';
  if (status === 'pending') return 'yellow';
  if (status === 'error') return 'red';
  return 'gray';
}
console.log(getStatusColor('pending'));`,tests:[{input:[],expected:"yellow"}],hints:["status is 'pending'","Second guard matches"]},{id:"04-control-flow-early-return-44",title:"Multiple early returns in loop",starterCode:`function findFirstNegative(arr) {
  for (const num of arr) {
    if (typeof num !== 'number') continue;
    if (num < 0) return num;
  }
  return null;
}
console.log(findFirstNegative([1, 'a', -3, 4]));`,solution:`function findFirstNegative(arr) {
  for (const num of arr) {
    if (typeof num !== 'number') continue;
    if (num < 0) return num;
  }
  return null;
}
console.log(findFirstNegative([1, 'a', -3, 4]));`,tests:[{input:[],expected:"-3"}],hints:["1 is number, not negative","'a' is not number, skip","-3 is number and negative"]},{id:"04-control-flow-early-return-45",title:"Early return with try/catch",starterCode:`function safeParse(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(safeParse('{"key": "value"}'));`,solution:`function safeParse(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(safeParse('{"key": "value"}'));`,tests:[{input:[],expected:"[object Object]"}],hints:["str is truthy","JSON.parse succeeds"]},{id:"04-control-flow-early-return-46",title:"Guard benefit - no deep nesting",starterCode:`function calculate(a, b, op) {
  if (typeof a !== 'number') return 'invalid a';
  if (typeof b !== 'number') return 'invalid b';
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  return 'unknown operator';
}
console.log(calculate(10, 5, '*'));`,solution:`function calculate(a, b, op) {
  if (typeof a !== 'number') return 'invalid a';
  if (typeof b !== 'number') return 'invalid b';
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  return 'unknown operator';
}
console.log(calculate(10, 5, '*'));`,tests:[{input:[],expected:"50"}],hints:["Both are numbers","op is '*', returns product"]},{id:"04-control-flow-early-return-47",title:"Nested guard refactor - flat",starterCode:`function getDiscount(tier, amount) {
  if (!tier) return 0;
  if (tier === 'gold') return amount * 0.3;
  if (tier === 'silver') return amount * 0.2;
  if (tier === 'bronze') return amount * 0.1;
  return 0;
}
console.log(getDiscount('silver', 100));`,solution:`function getDiscount(tier, amount) {
  if (!tier) return 0;
  if (tier === 'gold') return amount * 0.3;
  if (tier === 'silver') return amount * 0.2;
  if (tier === 'bronze') return amount * 0.1;
  return 0;
}
console.log(getDiscount('silver', 100));`,tests:[{input:[],expected:"20"}],hints:["tier is truthy","tier is 'silver'","Returns 20% of 100"]},{id:"04-control-flow-early-return-48",title:"Early return boolean - type check",starterCode:`function isString(value) {
  if (value === null) return false;
  if (value === undefined) return false;
  return typeof value === 'string';
}
console.log(isString('hello'));`,solution:`function isString(value) {
  if (value === null) return false;
  if (value === undefined) return false;
  return typeof value === 'string';
}
console.log(isString('hello'));`,tests:[{input:[],expected:"true"}],hints:["value is not null","value is not undefined","typeof is 'string'"]},{id:"04-control-flow-early-return-49",title:"Early return with object destructuring",starterCode:`function getFullName({ first, last }) {
  if (!first) return 'No first name';
  if (!last) return 'No last name';
  return \`\${first} \${last}\`;
}
console.log(getFullName({ first: 'John', last: 'Doe' }));`,solution:`function getFullName({ first, last }) {
  if (!first) return 'No first name';
  if (!last) return 'No last name';
  return \`\${first} \${last}\`;
}
console.log(getFullName({ first: 'John', last: 'Doe' }));`,tests:[{input:[],expected:"John Doe"}],hints:["first is truthy","last is truthy","Returns full name"]},{id:"04-control-flow-early-return-50",title:"Early return with array method",starterCode:`function sumPositive(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumPositive([-1, 2, -3, 4]));`,solution:`function sumPositive(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
}
console.log(sumPositive([-1, 2, -3, 4]));`,tests:[{input:[],expected:"6"}],hints:["arr is an array","filter keeps positive numbers","reduce sums them"]}],"04-control-flow-01-if-else-switch":[{id:"04-control-flow-if-else-switch-01",title:"Basic if statement",starterCode:`const age = 20;
if (age >= 18) {
  console.log('adult');
}`,solution:`const age = 20;
if (age >= 18) {
  console.log('adult');
}`,tests:[{input:[],expected:"adult"}],hints:["if executes block when condition is true","20 >= 18 is true"]},{id:"04-control-flow-if-else-switch-02",title:"If statement with falsy condition",starterCode:`const age = 15;
if (age >= 18) {
  console.log('adult');
}`,solution:`const age = 15;
if (age >= 18) {
  console.log('adult');
}`,tests:[{input:[],expected:""}],hints:["15 >= 18 is false","Block doesn't execute"]},{id:"04-control-flow-if-else-switch-03",title:"If/else statement",starterCode:`const age = 15;
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}`,solution:`const age = 15;
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}`,tests:[{input:[],expected:"minor"}],hints:["else block executes when condition is false","15 < 18"]},{id:"04-control-flow-if-else-switch-04",title:"If/else if/else chain",starterCode:`const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}`,solution:`const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}`,tests:[{input:[],expected:"B"}],hints:["85 is not >= 90","85 >= 80 is true"]},{id:"04-control-flow-if-else-switch-05",title:"Nested if/else",starterCode:`const num = 15;
if (num > 10) {
  if (num > 20) {
    console.log('large');
  } else {
    console.log('medium');
  }
} else {
  console.log('small');
}`,solution:`const num = 15;
if (num > 10) {
  if (num > 20) {
    console.log('large');
  } else {
    console.log('medium');
  }
} else {
  console.log('small');
}`,tests:[{input:[],expected:"medium"}],hints:["15 > 10 is true, enter first block","15 > 20 is false, enter else"]},{id:"04-control-flow-if-else-switch-06",title:"Switch/case basic",starterCode:`const day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Midweek');
}`,solution:`const day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Midweek');
}`,tests:[{input:[],expected:"Start of week"}],hints:["switch matches day against cases","Monday matches first case"]},{id:"04-control-flow-if-else-switch-07",title:"Switch with default",starterCode:`const day = 'Wednesday';
switch (day) {
  case 'Monday':
    console.log('Start');
    break;
  case 'Friday':
    console.log('End');
    break;
  default:
    console.log('Other');
}`,solution:`const day = 'Wednesday';
switch (day) {
  case 'Monday':
    console.log('Start');
    break;
  case 'Friday':
    console.log('End');
    break;
  default:
    console.log('Other');
}`,tests:[{input:[],expected:"Other"}],hints:["Wednesday doesn't match any case","default executes"]},{id:"04-control-flow-if-else-switch-08",title:"Switch fallthrough danger",starterCode:`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,solution:`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:`red
yellow`}],hints:["Missing break causes fallthrough","apple matches, then falls to banana"]},{id:"04-control-flow-if-else-switch-09",title:"Switch with break",starterCode:`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
    break;
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,solution:`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
    break;
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"red"}],hints:["break prevents fallthrough","Only apple case executes"]},{id:"04-control-flow-if-else-switch-10",title:"Truthy/falsy if condition",starterCode:`const name = '';
if (name) {
  console.log('has name');
} else {
  console.log('no name');
}`,solution:`const name = '';
if (name) {
  console.log('has name');
} else {
  console.log('no name');
}`,tests:[{input:[],expected:"no name"}],hints:["Empty string is falsy","else block executes"]},{id:"04-control-flow-if-else-switch-11",title:"Truthy number condition",starterCode:`const count = 0;
if (count) {
  console.log('has count');
} else {
  console.log('no count');
}`,solution:`const count = 0;
if (count) {
  console.log('has count');
} else {
  console.log('no count');
}`,tests:[{input:[],expected:"no count"}],hints:["0 is falsy","else block executes"]},{id:"04-control-flow-if-else-switch-12",title:"Guard clause pattern",starterCode:`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet('Alice');`,solution:`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet('Alice');`,tests:[{input:[],expected:"Hello, Alice!"}],hints:["Guard clause exits early if condition met","!name is false for 'Alice'"]},{id:"04-control-flow-if-else-switch-13",title:"Guard clause returns early",starterCode:`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet(null);`,solution:`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet(null);`,tests:[{input:[],expected:""}],hints:["null is falsy","Function returns before console.log"]},{id:"04-control-flow-if-else-switch-14",title:"Switch on numbers",starterCode:`const code = 2;
switch (code) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('other');
}`,solution:`const code = 2;
switch (code) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"two"}],hints:["2 matches case 2","break prevents fallthrough"]},{id:"04-control-flow-if-else-switch-15",title:"Multiple cases same block",starterCode:`const month = 'Jan';
switch (month) {
  case 'Dec':
  case 'Jan':
  case 'Feb':
    console.log('winter');
    break;
  case 'Mar':
  case 'Apr':
  case 'May':
    console.log('spring');
    break;
  default:
    console.log('other');
}`,solution:`const month = 'Jan';
switch (month) {
  case 'Dec':
  case 'Jan':
  case 'Feb':
    console.log('winter');
    break;
  case 'Mar':
  case 'Apr':
  case 'May':
    console.log('spring');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"winter"}],hints:["Multiple cases can share code","Jan matches, falls to winter"]},{id:"04-control-flow-if-else-switch-16",title:"Switch with string comparison",starterCode:`const color = 'red';
switch (color) {
  case 'red':
    console.log('warm');
    break;
  case 'blue':
    console.log('cool');
    break;
  default:
    console.log('neutral');
}`,solution:`const color = 'red';
switch (color) {
  case 'red':
    console.log('warm');
    break;
  case 'blue':
    console.log('cool');
    break;
  default:
    console.log('neutral');
}`,tests:[{input:[],expected:"warm"}],hints:["switch does strict comparison","'red' === 'red' is true"]},{id:"04-control-flow-if-else-switch-17",title:"Nested switch",starterCode:`const a = 1;
const b = 2;
switch (a) {
  case 1:
    switch (b) {
      case 1:
        console.log('both 1');
        break;
      case 2:
        console.log('a=1 b=2');
        break;
    }
    break;
  case 2:
    console.log('a=2');
    break;
}`,solution:`const a = 1;
const b = 2;
switch (a) {
  case 1:
    switch (b) {
      case 1:
        console.log('both 1');
        break;
      case 2:
        console.log('a=1 b=2');
        break;
    }
    break;
  case 2:
    console.log('a=2');
    break;
}`,tests:[{input:[],expected:"a=1 b=2"}],hints:["a is 1, enter first case","b is 2, enter inner case 2"]},{id:"04-control-flow-if-else-switch-18",title:"If short-circuit pattern",starterCode:`const x = 5;
if (x > 0) console.log('positive');`,solution:`const x = 5;
if (x > 0) console.log('positive');`,tests:[{input:[],expected:"positive"}],hints:["Single statement if doesn't need braces","5 > 0 is true"]},{id:"04-control-flow-if-else-switch-19",title:"Null check with if",starterCode:`const user = null;
if (user !== null) {
  console.log(user.name);
} else {
  console.log('no user');
}`,solution:`const user = null;
if (user !== null) {
  console.log(user.name);
} else {
  console.log('no user');
}`,tests:[{input:[],expected:"no user"}],hints:["null !== null is false","else block executes"]},{id:"04-control-flow-if-else-switch-20",title:"If with undefined check",starterCode:`const value = undefined;
if (value !== undefined) {
  console.log('defined');
} else {
  console.log('undefined');
}`,solution:`const value = undefined;
if (value !== undefined) {
  console.log('defined');
} else {
  console.log('undefined');
}`,tests:[{input:[],expected:"undefined"}],hints:["undefined !== undefined is false","else block executes"]},{id:"04-control-flow-if-else-switch-21",title:"Switch with type coercion trap",starterCode:`const x = "1";
switch (x) {
  case 1:
    console.log("number one");
    break;
  case "1":
    console.log("string one");
    break;
}`,solution:`const x = "1";
switch (x) {
  case 1:
    console.log("number one");
    break;
  case "1":
    console.log("string one");
    break;
}`,tests:[{input:[],expected:"string one"}],hints:["switch uses === comparison","'1' === 1 is false"]},{id:"04-control-flow-if-else-switch-22",title:"If with logical AND",starterCode:`const age = 25;
const hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log('admitted');
} else {
  console.log('denied');
}`,solution:`const age = 25;
const hasTicket = true;
if (age >= 18 && hasTicket) {
  console.log('admitted');
} else {
  console.log('denied');
}`,tests:[{input:[],expected:"admitted"}],hints:["Both conditions must be true for &&","25>=18 is true AND hasTicket is true"]},{id:"04-control-flow-if-else-switch-23",title:"If with logical OR",starterCode:`const isVIP = false;
const isAdmin = true;
if (isVIP || isAdmin) {
  console.log('access granted');
} else {
  console.log('access denied');
}`,solution:`const isVIP = false;
const isAdmin = true;
if (isVIP || isAdmin) {
  console.log('access granted');
} else {
  console.log('access denied');
}`,tests:[{input:[],expected:"access granted"}],hints:["|| needs one truthy condition","isAdmin is true"]},{id:"04-control-flow-if-else-switch-24",title:"Refactor if/else to switch",starterCode:`function getDayType(day) {
  if (day === 'Sat' || day === 'Sun') {
    return 'weekend';
  } else {
    return 'weekday';
  }
}
console.log(getDayType('Sat'));`,solution:`function getDayType(day) {
  if (day === 'Sat' || day === 'Sun') {
    return 'weekend';
  } else {
    return 'weekday';
  }
}
console.log(getDayType('Sat'));`,tests:[{input:[],expected:"weekend"}],hints:["Sat matches the first condition","OR checks both conditions"]},{id:"04-control-flow-if-else-switch-25",title:"Switch as expression",starterCode:`const code = 404;
const message = (() => {
  switch (code) {
    case 200: return 'OK';
    case 404: return 'Not Found';
    case 500: return 'Server Error';
    default: return 'Unknown';
  }
})();
console.log(message);`,solution:`const code = 404;
const message = (() => {
  switch (code) {
    case 200: return 'OK';
    case 404: return 'Not Found';
    case 500: return 'Server Error';
    default: return 'Unknown';
  }
})();
console.log(message);`,tests:[{input:[],expected:"Not Found"}],hints:["Switch can return values","404 matches case 404"]},{id:"04-control-flow-if-else-switch-26",title:"Multiple if/else if conditions",starterCode:`const temp = 25;
if (temp < 0) {
  console.log('freezing');
} else if (temp < 15) {
  console.log('cold');
} else if (temp < 25) {
  console.log('mild');
} else {
  console.log('hot');
}`,solution:`const temp = 25;
if (temp < 0) {
  console.log('freezing');
} else if (temp < 15) {
  console.log('cold');
} else if (temp < 25) {
  console.log('mild');
} else {
  console.log('hot');
}`,tests:[{input:[],expected:"hot"}],hints:["25 is not < 0, not < 15, not < 25","Falls to else"]},{id:"04-control-flow-if-else-switch-27",title:"Switch with no matching case",starterCode:`const status = 'pending';
switch (status) {
  case 'active':
    console.log('active');
    break;
  case 'inactive':
    console.log('inactive');
    break;
  default:
    console.log('unknown');
}`,solution:`const status = 'pending';
switch (status) {
  case 'active':
    console.log('active');
    break;
  case 'inactive':
    console.log('inactive');
    break;
  default:
    console.log('unknown');
}`,tests:[{input:[],expected:"unknown"}],hints:["'pending' doesn't match any case","default executes"]},{id:"04-control-flow-if-else-switch-28",title:"Guard clause with multiple conditions",starterCode:`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  if (!user.email) return 'no email';
  return \`Processing \${user.name}\`;
}
console.log(processUser({ name: 'Alice', email: 'alice@test.com' }));`,solution:`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  if (!user.email) return 'no email';
  return \`Processing \${user.name}\`;
}
console.log(processUser({ name: 'Alice', email: 'alice@test.com' }));`,tests:[{input:[],expected:"Processing Alice"}],hints:["All guards pass","Returns success message"]},{id:"04-control-flow-if-else-switch-29",title:"Guard clause with null user",starterCode:`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  return \`Processing \${user.name}\`;
}
console.log(processUser(null));`,solution:`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  return \`Processing \${user.name}\`;
}
console.log(processUser(null));`,tests:[{input:[],expected:"no user"}],hints:["null is falsy","First guard returns early"]},{id:"04-control-flow-if-else-switch-30",title:"Nested switch with fallthrough",starterCode:`const x = 1;
const y = 1;
switch (x) {
  case 1:
    console.log('x=1');
  case 2:
    console.log('x=2');
    break;
  default:
    console.log('other');
}`,solution:`const x = 1;
const y = 1;
switch (x) {
  case 1:
    console.log('x=1');
  case 2:
    console.log('x=2');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:`x=1
x=2`}],hints:["case 1 has no break","Falls through to case 2"]},{id:"04-control-flow-if-else-switch-31",title:"If with negation",starterCode:`const isLoggedIn = false;
if (!isLoggedIn) {
  console.log('please log in');
} else {
  console.log('welcome');
}`,solution:`const isLoggedIn = false;
if (!isLoggedIn) {
  console.log('please log in');
} else {
  console.log('welcome');
}`,tests:[{input:[],expected:"please log in"}],hints:["!false is true","if block executes"]},{id:"04-control-flow-if-else-switch-32",title:"Switch with numeric ranges",starterCode:`const score = 75;
let grade;
switch (true) {
  case score >= 90: grade = 'A'; break;
  case score >= 80: grade = 'B'; break;
  case score >= 70: grade = 'C'; break;
  default: grade = 'F';
}
console.log(grade);`,solution:`const score = 75;
let grade;
switch (true) {
  case score >= 90: grade = 'A'; break;
  case score >= 80: grade = 'B'; break;
  case score >= 70: grade = 'C'; break;
  default: grade = 'F';
}
console.log(grade);`,tests:[{input:[],expected:"C"}],hints:["switch(true) matches first true case","75 >= 70 is true"]},{id:"04-control-flow-if-else-switch-33",title:"If with array check",starterCode:`const items = [1, 2, 3];
if (items.length > 0) {
  console.log('has items');
} else {
  console.log('empty');
}`,solution:`const items = [1, 2, 3];
if (items.length > 0) {
  console.log('has items');
} else {
  console.log('empty');
}`,tests:[{input:[],expected:"has items"}],hints:["items.length is 3","3 > 0 is true"]},{id:"04-control-flow-if-else-switch-34",title:"Switch with boolean",starterCode:`const isOnline = true;
switch (isOnline) {
  case true:
    console.log('online');
    break;
  case false:
    console.log('offline');
    break;
}`,solution:`const isOnline = true;
switch (isOnline) {
  case true:
    console.log('online');
    break;
  case false:
    console.log('offline');
    break;
}`,tests:[{input:[],expected:"online"}],hints:["true matches case true","break exits switch"]},{id:"04-control-flow-if-else-switch-35",title:"If/else if with string comparison",starterCode:`const role = 'admin';
if (role === 'admin') {
  console.log('full access');
} else if (role === 'user') {
  console.log('limited access');
} else {
  console.log('no access');
}`,solution:`const role = 'admin';
if (role === 'admin') {
  console.log('full access');
} else if (role === 'user') {
  console.log('limited access');
} else {
  console.log('no access');
}`,tests:[{input:[],expected:"full access"}],hints:["role === 'admin' is true","First condition matches"]},{id:"04-control-flow-if-else-switch-36",title:"Switch with null",starterCode:`const value = null;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,solution:`const value = null;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"null"}],hints:["null matches case null","switch uses === comparison"]},{id:"04-control-flow-if-else-switch-37",title:"Switch with undefined",starterCode:`const value = undefined;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,solution:`const value = undefined;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"undefined"}],hints:["undefined matches case undefined","switch uses === comparison"]},{id:"04-control-flow-if-else-switch-38",title:"If with truthy object",starterCode:`const obj = { name: 'test' };
if (obj) {
  console.log('object exists');
} else {
  console.log('no object');
}`,solution:`const obj = { name: 'test' };
if (obj) {
  console.log('object exists');
} else {
  console.log('no object');
}`,tests:[{input:[],expected:"object exists"}],hints:["Objects are truthy","if block executes"]},{id:"04-control-flow-if-else-switch-39",title:"If with empty object",starterCode:`const obj = {};
if (obj.name) {
  console.log('has name');
} else {
  console.log('no name');
}`,solution:`const obj = {};
if (obj.name) {
  console.log('has name');
} else {
  console.log('no name');
}`,tests:[{input:[],expected:"no name"}],hints:["obj.name is undefined","undefined is falsy"]},{id:"04-control-flow-if-else-switch-40",title:"Switch with function return",starterCode:`function getHttpStatus(code) {
  switch (code) {
    case 200: return 'OK';
    case 301: return 'Moved';
    case 404: return 'Not Found';
    case 500: return 'Error';
    default: return 'Unknown';
  }
}
console.log(getHttpStatus(301));`,solution:`function getHttpStatus(code) {
  switch (code) {
    case 200: return 'OK';
    case 301: return 'Moved';
    case 404: return 'Not Found';
    case 500: return 'Error';
    default: return 'Unknown';
  }
}
console.log(getHttpStatus(301));`,tests:[{input:[],expected:"Moved"}],hints:["switch can return from function","301 matches case 301"]},{id:"04-control-flow-if-else-switch-41",title:"If with comparison operators",starterCode:`const a = 10;
const b = 20;
if (a < b) {
  console.log('a is smaller');
} else if (a > b) {
  console.log('a is larger');
} else {
  console.log('equal');
}`,solution:`const a = 10;
const b = 20;
if (a < b) {
  console.log('a is smaller');
} else if (a > b) {
  console.log('a is larger');
} else {
  console.log('equal');
}`,tests:[{input:[],expected:"a is smaller"}],hints:["10 < 20 is true","First condition matches"]},{id:"04-control-flow-if-else-switch-42",title:"Switch with mixed types",starterCode:`const x = "1";
switch (x) {
  case 1:
    console.log("number");
    break;
  case "1":
    console.log("string");
    break;
  default:
    console.log("other");
}`,solution:`const x = "1";
switch (x) {
  case 1:
    console.log("number");
    break;
  case "1":
    console.log("string");
    break;
  default:
    console.log("other");
}`,tests:[{input:[],expected:"string"}],hints:["switch uses === (strict equality)","'1' === 1 is false"]},{id:"04-control-flow-if-else-switch-43",title:"If with bitwise AND",starterCode:`const num = 5;
if (num & 1) {
  console.log('odd');
} else {
  console.log('even');
}`,solution:`const num = 5;
if (num & 1) {
  console.log('odd');
} else {
  console.log('even');
}`,tests:[{input:[],expected:"odd"}],hints:["& is bitwise AND","5 & 1 = 1, which is truthy"]},{id:"04-control-flow-if-else-switch-44",title:"Switch expression with arrow function",starterCode:`const getStatus = (code) => {
  switch (code) {
    case 200: return 'success';
    case 404: return 'not found';
    default: return 'error';
  }
};
console.log(getStatus(200));`,solution:`const getStatus = (code) => {
  switch (code) {
    case 200: return 'success';
    case 404: return 'not found';
    default: return 'error';
  }
};
console.log(getStatus(200));`,tests:[{input:[],expected:"success"}],hints:["Arrow function with switch","200 matches case 200"]},{id:"04-control-flow-if-else-switch-45",title:"If with NaN check",starterCode:`const value = NaN;
if (Number.isNaN(value)) {
  console.log('is NaN');
} else {
  console.log('not NaN');
}`,solution:`const value = NaN;
if (Number.isNaN(value)) {
  console.log('is NaN');
} else {
  console.log('not NaN');
}`,tests:[{input:[],expected:"is NaN"}],hints:["Number.isNaN checks for NaN","value is NaN"]},{id:"04-control-flow-if-else-switch-46",title:"Switch with multiple breaks",starterCode:`const x = 3;
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  default:
    console.log('other');
}`,solution:`const x = 3;
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  default:
    console.log('other');
}`,tests:[{input:[],expected:"three"}],hints:["Each case has a break","3 matches case 3"]},{id:"04-control-flow-if-else-switch-47",title:"If with string length",starterCode:`const str = "hello";
if (str.length > 3) {
  console.log("long");
} else {
  console.log("short");
}`,solution:`const str = "hello";
if (str.length > 3) {
  console.log("long");
} else {
  console.log("short");
}`,tests:[{input:[],expected:"long"}],hints:["str.length is 5","5 > 3 is true"]},{id:"04-control-flow-if-else-switch-48",title:"Switch with bitwise OR",starterCode:`const flags = 5;
switch (flags) {
  case 1: console.log('flag1'); break;
  case 2: console.log('flag2'); break;
  case 3: console.log('flag3'); break;
  default: console.log('other');
}`,solution:`const flags = 5;
switch (flags) {
  case 1: console.log('flag1'); break;
  case 2: console.log('flag2'); break;
  case 3: console.log('flag3'); break;
  default: console.log('other');
}`,tests:[{input:[],expected:"other"}],hints:["5 doesn't match 1, 2, or 3","default executes"]},{id:"04-control-flow-if-else-switch-49",title:"If with template literal condition",starterCode:`const name = "Alice";
if (\`Hello, \${name}\` === "Hello, Alice") {
  console.log("match");
} else {
  console.log("no match");
}`,solution:`const name = "Alice";
if (\`Hello, \${name}\` === "Hello, Alice") {
  console.log("match");
} else {
  console.log("no match");
}`,tests:[{input:[],expected:"match"}],hints:["Template literal produces 'Hello, Alice'","Comparison is true"]},{id:"04-control-flow-if-else-switch-50",title:"Switch with comma in case",starterCode:`const day = 'Sat';
switch (day) {
  case 'Sat':
  case 'Sun':
    console.log('weekend');
    break;
  default:
    console.log('weekday');
}`,solution:`const day = 'Sat';
switch (day) {
  case 'Sat':
  case 'Sun':
    console.log('weekend');
    break;
  default:
    console.log('weekday');
}`,tests:[{input:[],expected:"weekend"}],hints:["Sat matches first case","Falls through to weekend"]}],"05-loops-02-for-of-for-in":[{id:"05-loops-for-of-for-in-01",title:"For...Of Arrays",starterCode:`const arr = [1, 2, 3];
for (const val of arr) {
  console.log(val);
}`,solution:`const arr = [1, 2, 3];
for (const val of arr) {
  console.log(val);
}`,tests:[{input:[],expected:`1
2
3`}],hints:["Use 'of' for values","const declares loop variable"]},{id:"05-loops-for-of-for-in-02",title:"For...Of Strings",starterCode:`const str = "Hi";
for (const char of str) {
  console.log(char);
}`,solution:`const str = "Hi";
for (const char of str) {
  console.log(char);
}`,tests:[{input:[],expected:`H
i`}],hints:["Iterate over characters","Each char is a string"]},{id:"05-loops-for-of-for-in-03",title:"For...Of Maps",starterCode:`const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key + ': ' + value);
}`,solution:`const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key + ': ' + value);
}`,tests:[{input:[],expected:`a: 1
b: 2`}],hints:["Map entries are [key, value]","Destructure in loop"]},{id:"05-loops-for-of-for-in-04",title:"For...Of Sets",starterCode:`const set = new Set([1, 2, 3]);
for (const val of set) {
  console.log(val);
}`,solution:`const set = new Set([1, 2, 3]);
for (const val of set) {
  console.log(val);
}`,tests:[{input:[],expected:`1
2
3`}],hints:["Set has unique values","Iterates in insertion order"]},{id:"05-loops-for-of-for-in-05",title:"For...In Objects",starterCode:`const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}`,solution:`const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}`,tests:[{input:[],expected:`a: 1
b: 2`}],hints:["for...in gives keys","Access value with obj[key]"]},{id:"05-loops-for-of-for-in-06",title:"For...In Gives Indices",starterCode:`const arr = ['a', 'b', 'c'];
for (const i in arr) {
  console.log(i + ': ' + arr[i]);
}`,solution:`const arr = ['a', 'b', 'c'];
for (const i in arr) {
  console.log(i + ': ' + arr[i]);
}`,tests:[{input:[],expected:`0: a
1: b
2: c`}],hints:["for...in on array gives indices","Indices are strings"]},{id:"05-loops-for-of-for-in-07",title:"For...Of Vs For...In",starterCode:`const arr = [10, 20, 30];
for (const val of arr) console.log('of: ' + val);
for (const key in arr) console.log('in: ' + key);`,solution:`const arr = [10, 20, 30];
for (const val of arr) console.log('of: ' + val);
for (const key in arr) console.log('in: ' + key);`,tests:[{input:[],expected:`of: 10
of: 20
of: 30
in: 0
in: 1
in: 2`}],hints:["of gives values","in gives keys/indices"]},{id:"05-loops-for-of-for-in-08",title:"Object.entries()",starterCode:`const obj = {x: 1, y: 2};
for (const [key, val] of Object.entries(obj)) {
  console.log(key + '=' + val);
}`,solution:`const obj = {x: 1, y: 2};
for (const [key, val] of Object.entries(obj)) {
  console.log(key + '=' + val);
}`,tests:[{input:[],expected:`x=1
y=2`}],hints:["Object.entries() returns [key, value] pairs","Use with for...of"]},{id:"05-loops-for-of-for-in-09",title:"Object.keys()",starterCode:`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
console.log(keys);`,solution:`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
console.log(keys);`,tests:[{input:[],expected:"[ 'a', 'b', 'c' ]"}],hints:["Object.keys() returns array","Keys are strings"]},{id:"05-loops-for-of-for-in-10",title:"Object.values()",starterCode:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(values);`,solution:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(values);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Object.values() returns array","Contains only values"]},{id:"05-loops-for-of-for-in-11",title:"For...Of With Entries",starterCode:`const arr = ['x', 'y', 'z'];
for (const [index, val] of arr.entries()) {
  console.log(index + ': ' + val);
}`,solution:`const arr = ['x', 'y', 'z'];
for (const [index, val] of arr.entries()) {
  console.log(index + ': ' + val);
}`,tests:[{input:[],expected:`0: x
1: y
2: z`}],hints:["entries() returns [index, value]","Use with for...of"]},{id:"05-loops-for-of-for-in-12",title:"For...In HasOwnProperty",starterCode:`const obj = {a: 1};
obj.b = 2;
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}`,solution:`const obj = {a: 1};
obj.b = 2;
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}`,tests:[{input:[],expected:`a
b`}],hints:["hasOwnProperty checks own keys","Filters out inherited"]},{id:"05-loops-for-of-for-in-13",title:"For...Of With Index",starterCode:`const arr = ['a', 'b', 'c'];
for (const [i, val] of arr.entries()) {
  console.log(i + '->' + val);
}`,solution:`const arr = ['a', 'b', 'c'];
for (const [i, val] of arr.entries()) {
  console.log(i + '->' + val);
}`,tests:[{input:[],expected:`0->a
1->b
2->c`}],hints:["Use entries() for index","Destructure both"]},{id:"05-loops-for-of-for-in-14",title:"For...Of Characters",starterCode:`const str = "cat";
let result = "";
for (const ch of str) {
  result += ch.toUpperCase();
}
console.log(result);`,solution:`const str = "cat";
let result = "";
for (const ch of str) {
  result += ch.toUpperCase();
}
console.log(result);`,tests:[{input:[],expected:"CAT"}],hints:["Iterate characters","Use toUpperCase()"]},{id:"05-loops-for-of-for-in-15",title:"For...Of With Arguments",starterCode:`function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));`,solution:`function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));`,tests:[{input:[],expected:"6"}],hints:["arguments is array-like","Use for...of on it"]},{id:"05-loops-for-of-for-in-16",title:"For...Of NodeList",starterCode:`const items = [10, 20, 30];
for (const item of items) {
  console.log(item * 2);
}`,solution:`const items = [10, 20, 30];
for (const item of items) {
  console.log(item * 2);
}`,tests:[{input:[],expected:`20
40
60`}],hints:["NodeList is iterable","for...of works on it"]},{id:"05-loops-for-of-for-in-17",title:"For...Of With Break",starterCode:`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val === 3) break;
  console.log(val);
}`,solution:`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val === 3) break;
  console.log(val);
}`,tests:[{input:[],expected:`1
2`}],hints:["break exits loop","Check before logging"]},{id:"05-loops-for-of-for-in-18",title:"For...Of With Continue",starterCode:`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val % 2 === 0) continue;
  console.log(val);
}`,solution:`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val % 2 === 0) continue;
  console.log(val);
}`,tests:[{input:[],expected:`1
3
5`}],hints:["continue skips iteration","Check for even to skip"]},{id:"05-loops-for-of-for-in-19",title:"For...In Skip Prototype",starterCode:`const obj = {a: 1, b: 2};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ':' + obj[key]);
  }
}`,solution:`const obj = {a: 1, b: 2};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ':' + obj[key]);
  }
}`,tests:[{input:[],expected:`a:1
b:2`}],hints:["hasOwnProperty filters prototypes","Safe way to iterate"]},{id:"05-loops-for-of-for-in-20",title:"For...Of Reverse",starterCode:`const arr = [1, 2, 3, 4, 5];
for (const val of arr.reverse()) {
  console.log(val);
}`,solution:`const arr = [1, 2, 3, 4, 5];
for (const val of arr.reverse()) {
  console.log(val);
}`,tests:[{input:[],expected:`5
4
3
2
1`}],hints:["Use reverse() first","Then iterate"]},{id:"05-loops-for-of-for-in-21",title:"For...In Alphabetical Keys",starterCode:`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort();
for (const key of sorted) {
  console.log(key + ':' + obj[key]);
}`,solution:`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort();
for (const key of sorted) {
  console.log(key + ':' + obj[key]);
}`,tests:[{input:[],expected:`a:1
b:2
c:3`}],hints:["Sort keys alphabetically","Use for...of on sorted array"]},{id:"05-loops-for-of-for-in-22",title:"For...Of Practice",starterCode:`const arr = [5, 10, 15];
let sum = 0;
for (const num of arr) {
  sum += num;
}
console.log(sum);`,solution:`const arr = [5, 10, 15];
let sum = 0;
for (const num of arr) {
  sum += num;
}
console.log(sum);`,tests:[{input:[],expected:"30"}],hints:["Accumulate sum","Use for...of for values"]},{id:"05-loops-for-of-for-in-23",title:"Map Iteration",starterCode:`const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
for (const [key, val] of map) {
  console.log(key + ' is ' + val);
}`,solution:`const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
for (const [key, val] of map) {
  console.log(key + ' is ' + val);
}`,tests:[{input:[],expected:`name is Alice
age is 25`}],hints:["Destructure entries","Use template or concat"]},{id:"05-loops-for-of-for-in-24",title:"Set Iteration",starterCode:`const colors = new Set(['red', 'green', 'blue']);
for (const color of colors) {
  console.log(color);
}`,solution:`const colors = new Set(['red', 'green', 'blue']);
for (const color of colors) {
  console.log(color);
}`,tests:[{input:[],expected:`red
green
blue`}],hints:["Set iterates values","Order preserved"]},{id:"05-loops-for-of-for-in-25",title:"Object Entries Sum",starterCode:`const prices = {apple: 2, banana: 3, orange: 4};
let total = 0;
for (const [fruit, price] of Object.entries(prices)) {
  total += price;
}
console.log(total);`,solution:`const prices = {apple: 2, banana: 3, orange: 4};
let total = 0;
for (const [fruit, price] of Object.entries(prices)) {
  total += price;
}
console.log(total);`,tests:[{input:[],expected:"9"}],hints:["Use Object.entries()","Sum the prices"]},{id:"05-loops-for-of-for-in-26",title:"Key Value Pair",starterCode:`const obj = {name: 'Bob', job: 'dev'};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + ' = ' + v);
}`,solution:`const obj = {name: 'Bob', job: 'dev'};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + ' = ' + v);
}`,tests:[{input:[],expected:`name = Bob
job = dev`}],hints:["Destructure entries","Format output"]},{id:"05-loops-for-of-for-in-27",title:"For...In Own Keys Only",starterCode:`function Person(name) { this.name = name; }
Person.prototype.age = 25;
const p = new Person('John');
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key);
  }
}`,solution:`function Person(name) { this.name = name; }
Person.prototype.age = 25;
const p = new Person('John');
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key);
  }
}`,tests:[{input:[],expected:"name"}],hints:["prototype properties are inherited","hasOwnProperty filters them"]},{id:"05-loops-for-of-for-in-28",title:"String Reverse For...Of",starterCode:`const str = "hello";
let rev = "";
for (const ch of str) {
  rev = ch + rev;
}
console.log(rev);`,solution:`const str = "hello";
let rev = "";
for (const ch of str) {
  rev = ch + rev;
}
console.log(rev);`,tests:[{input:[],expected:"olleh"}],hints:["Prepend each character","Build reversed string"]},{id:"05-loops-for-of-for-in-29",title:"Array Find For...Of",starterCode:`const arr = [1, 5, 8, 12, 3];
for (const num of arr) {
  if (num > 10) {
    console.log(num);
    break;
  }
}`,solution:`const arr = [1, 5, 8, 12, 3];
for (const num of arr) {
  if (num > 10) {
    console.log(num);
    break;
  }
}`,tests:[{input:[],expected:"12"}],hints:["Check condition","Break when found"]},{id:"05-loops-for-of-for-in-30",title:"Map Size",starterCode:`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let count = 0;
for (const [k, v] of map) {
  count++;
}
console.log(count);`,solution:`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let count = 0;
for (const [k, v] of map) {
  count++;
}
console.log(count);`,tests:[{input:[],expected:"3"}],hints:["Count iterations","Map.size also works"]},{id:"05-loops-for-of-for-in-31",title:"Set Dedupe",starterCode:`const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
for (const val of unique) {
  console.log(val);
}`,solution:`const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
for (const val of unique) {
  console.log(val);
}`,tests:[{input:[],expected:`1
2
3`}],hints:["Set removes duplicates","Spread to array"]},{id:"05-loops-for-of-for-in-32",title:"Object Keys Count",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
console.log(Object.keys(obj).length);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
console.log(Object.keys(obj).length);`,tests:[{input:[],expected:"4"}],hints:["Object.keys() returns array","Check length"]},{id:"05-loops-for-of-for-in-33",title:"For...Of With Map Entries",starterCode:`const map = new Map([['x', 10], ['y', 20]]);
for (const [key, val] of map.entries()) {
  console.log(key + '=' + val);
}`,solution:`const map = new Map([['x', 10], ['y', 20]]);
for (const [key, val] of map.entries()) {
  console.log(key + '=' + val);
}`,tests:[{input:[],expected:`x=10
y=20`}],hints:["Use entries() method","Destructure pairs"]},{id:"05-loops-for-of-for-in-34",title:"For...Of With Set Size",starterCode:`const nums = new Set([1, 2, 2, 3, 3, 3]);
let count = 0;
for (const n of nums) {
  count++;
}
console.log(count);`,solution:`const nums = new Set([1, 2, 2, 3, 3, 3]);
let count = 0;
for (const n of nums) {
  count++;
}
console.log(count);`,tests:[{input:[],expected:"3"}],hints:["Count unique elements","Set removes duplicates"]},{id:"05-loops-for-of-for-in-35",title:"For...In With Object.keys",starterCode:`const obj = {a: 10, b: 20, c: 30};
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ': ' + obj[keys[i]]);
}`,solution:`const obj = {a: 10, b: 20, c: 30};
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ': ' + obj[keys[i]]);
}`,tests:[{input:[],expected:`a: 10
b: 20
c: 30`}],hints:["Get keys array first","Access with index"]},{id:"05-loops-for-of-for-in-36",title:"For...Of String Length",starterCode:`const str = "JavaScript";
let length = 0;
for (const char of str) {
  length++;
}
console.log(length);`,solution:`const str = "JavaScript";
let length = 0;
for (const char of str) {
  length++;
}
console.log(length);`,tests:[{input:[],expected:"10"}],hints:["Count characters","Increment counter"]},{id:"05-loops-for-of-for-in-37",title:"For...In Object Values",starterCode:`const scores = {math: 95, science: 88, english: 92};
for (const key in scores) {
  if (scores.hasOwnProperty(key)) {
    console.log(key + ': ' + scores[key]);
  }
}`,solution:`const scores = {math: 95, science: 88, english: 92};
for (const key in scores) {
  if (scores.hasOwnProperty(key)) {
    console.log(key + ': ' + scores[key]);
  }
}`,tests:[{input:[],expected:`math: 95
science: 88
english: 92`}],hints:["Check hasOwnProperty","Access value with key"]},{id:"05-loops-for-of-for-in-38",title:"For...Of Array Reverse",starterCode:`const arr = [10, 20, 30, 40];
for (const val of [...arr].reverse()) {
  console.log(val);
}`,solution:`const arr = [10, 20, 30, 40];
for (const val of [...arr].reverse()) {
  console.log(val);
}`,tests:[{input:[],expected:`40
30
20
10`}],hints:["Spread to copy array","Reverse before iterating"]},{id:"05-loops-for-of-for-in-39",title:"For...In String Indices",starterCode:`const str = "abc";
for (const index in str) {
  console.log(index + ": " + str[index]);
}`,solution:`const str = "abc";
for (const index in str) {
  console.log(index + ": " + str[index]);
}`,tests:[{input:[],expected:`0: a
1: b
2: c`}],hints:["for...in on string gives indices","Access char with index"]},{id:"05-loops-for-of-for-in-40",title:"For...Of Map Values",starterCode:`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const val of map.values()) {
  console.log(val * 10);
}`,solution:`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const val of map.values()) {
  console.log(val * 10);
}`,tests:[{input:[],expected:`10
20
30`}],hints:["Use values() method","Transform each value"]},{id:"05-loops-for-of-for-in-41",title:"For...Of Set Union",starterCode:`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const union = new Set([...set1, ...set2]);
for (const val of union) {
  console.log(val);
}`,solution:`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const union = new Set([...set1, ...set2]);
for (const val of union) {
  console.log(val);
}`,tests:[{input:[],expected:`1
2
3
4`}],hints:["Spread sets into new Set","Union removes duplicates"]},{id:"05-loops-for-of-for-in-42",title:"For...In Object Entries",starterCode:`const user = {name: 'Tom', age: 30, job: 'dev'};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(\`\${key}: \${user[key]}\`);
  }
}`,solution:`const user = {name: 'Tom', age: 30, job: 'dev'};
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(\`\${key}: \${user[key]}\`);
  }
}`,tests:[{input:[],expected:`name: Tom
age: 30
job: dev`}],hints:["Use template literal","Check own properties"]},{id:"05-loops-for-of-for-in-43",title:"For...Of Array Entries",starterCode:"const fruits = ['apple', 'banana', 'cherry'];\nfor (const [idx, fruit] of fruits.entries()) {\n  console.log(`${idx + 1}. ${fruit}`);\n}",solution:"const fruits = ['apple', 'banana', 'cherry'];\nfor (const [idx, fruit] of fruits.entries()) {\n  console.log(`${idx + 1}. ${fruit}`);\n}",tests:[{input:[],expected:`1. apple
2. banana
3. cherry`}],hints:["Use entries() for index","Add 1 for numbering"]},{id:"05-loops-for-of-for-in-44",title:"For...In Prototype Skip",starterCode:`function Animal(name) { this.name = name; }
Animal.prototype.type = 'animal';
const cat = new Animal('Whiskers');
for (const key in cat) {
  if (cat.hasOwnProperty(key)) {
    console.log(key + ': ' + cat[key]);
  }
}`,solution:`function Animal(name) { this.name = name; }
Animal.prototype.type = 'animal';
const cat = new Animal('Whiskers');
for (const key in cat) {
  if (cat.hasOwnProperty(key)) {
    console.log(key + ': ' + cat[key]);
  }
}`,tests:[{input:[],expected:"name: Whiskers"}],hints:["prototype properties skipped","Only own properties"]},{id:"05-loops-for-of-for-in-45",title:"For...Of Generator",starterCode:`function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (const num of range(1, 5)) {
  console.log(num);
}`,solution:`function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
for (const num of range(1, 5)) {
  console.log(num);
}`,tests:[{input:[],expected:`1
2
3
4
5`}],hints:["Generator yields values","for...of works with generators"]},{id:"05-loops-for-of-for-in-46",title:"For...Of Range",starterCode:`function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
for (const num of range(3, 7)) {
  console.log(num);
}`,solution:`function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
for (const num of range(3, 7)) {
  console.log(num);
}`,tests:[{input:[],expected:`3
4
5
6
7`}],hints:["Create range array","Iterate with for...of"]},{id:"05-loops-for-of-for-in-47",title:"For...In Nested Object",starterCode:`const config = {
  db: { host: 'localhost', port: 5432 },
  app: { name: 'MyApp' }
};
for (const key in config) {
  if (config.hasOwnProperty(key)) {
    console.log(key + ': ' + JSON.stringify(config[key]));
  }
}`,solution:`const config = {
  db: { host: 'localhost', port: 5432 },
  app: { name: 'MyApp' }
};
for (const key in config) {
  if (config.hasOwnProperty(key)) {
    console.log(key + ': ' + JSON.stringify(config[key]));
  }
}`,tests:[{input:[],expected:`db: {"host":"localhost","port":5432}
app: {"name":"MyApp"}`}],hints:["JSON.stringify to print","Check own properties"]},{id:"05-loops-for-of-for-in-48",title:"For...Of Map Keys",starterCode:`const map = new Map([['x', 1], ['y', 2], ['z', 3]]);
for (const key of map.keys()) {
  console.log(key);
}`,solution:`const map = new Map([['x', 1], ['y', 2], ['z', 3]]);
for (const key of map.keys()) {
  console.log(key);
}`,tests:[{input:[],expected:`x
y
z`}],hints:["Use keys() method","Iterates map keys"]},{id:"05-loops-for-of-for-in-49",title:"For...Of Array Spread",starterCode:`const arr = [1, 2, 3];
const copy = [...arr];
for (const val of copy) {
  console.log(val);
}`,solution:`const arr = [1, 2, 3];
const copy = [...arr];
for (const val of copy) {
  console.log(val);
}`,tests:[{input:[],expected:`1
2
3`}],hints:["Spread creates copy","Iterate copy"]},{id:"05-loops-for-of-for-in-50",title:"For...In Object In",starterCode:`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,solution:`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,tests:[{input:[],expected:`true
false`}],hints:["in operator checks key","Returns boolean"]}],"05-loops-01-for-while":[{id:"05-loops-for-while-01",title:"For Loop Basics",starterCode:`for (let i = 0; i < 5; i++) {
  console.log(i);
}`,solution:`for (let i = 0; i < 5; i++) {
  console.log(i);
}`,tests:[{input:[],expected:`0
1
2
3
4`}],hints:["Initialize i at 0","Use i++ to increment"]},{id:"05-loops-for-while-02",title:"For Loop Reverse",starterCode:`for (let i = 5; i >= 0; i--) {
  console.log(i);
}`,solution:`for (let i = 5; i >= 0; i--) {
  console.log(i);
}`,tests:[{input:[],expected:`5
4
3
2
1
0`}],hints:["Start at 5","Decrement with i--"]},{id:"05-loops-for-while-03",title:"While Loop Basics",starterCode:`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,solution:`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,tests:[{input:[],expected:`0
1
2
3
4`}],hints:["Initialize counter before loop","Increment inside loop"]},{id:"05-loops-for-while-04",title:"Do...While Loop",starterCode:`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,solution:`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,tests:[{input:[],expected:`0
1
2
3
4`}],hints:["Body executes first","Check condition after"]},{id:"05-loops-for-while-05",title:"Break Statement",starterCode:`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`,solution:`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`,tests:[{input:[],expected:`0
1
2
3
4`}],hints:["Use break to exit loop","Check condition before break"]},{id:"05-loops-for-while-06",title:"Continue Statement",starterCode:`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}`,solution:`for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}`,tests:[{input:[],expected:`0
1
3
4`}],hints:["continue skips current iteration","Use with if statement"]},{id:"05-loops-for-while-07",title:"Nested For Loops",starterCode:`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + j);
  }
}`,solution:`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + j);
  }
}`,tests:[{input:[],expected:`0
1
2
1
2
3
2
3
4`}],hints:["Inner loop runs fully each outer iteration","Sum i and j"]},{id:"05-loops-for-while-08",title:"Counter Pattern",starterCode:`let count = 0;
for (let i = 1; i <= 5; i++) {
  count += i;
}
console.log(count);`,solution:`let count = 0;
for (let i = 1; i <= 5; i++) {
  count += i;
}
console.log(count);`,tests:[{input:[],expected:"15"}],hints:["Initialize count to 0","Add each i to count"]},{id:"05-loops-for-while-09",title:"For Loop Step",starterCode:`for (let i = 0; i < 10; i += 2) {
  console.log(i);
}`,solution:`for (let i = 0; i < 10; i += 2) {
  console.log(i);
}`,tests:[{input:[],expected:`0
2
4
6
8`}],hints:["Increment by 2","Use i += 2"]},{id:"05-loops-for-while-10",title:"While True With Break",starterCode:`let i = 0;
while (true) {
  if (i >= 5) break;
  console.log(i);
  i++;
}`,solution:`let i = 0;
while (true) {
  if (i >= 5) break;
  console.log(i);
  i++;
}`,tests:[{input:[],expected:`0
1
2
3
4`}],hints:["Use while(true) for infinite loop","Break when condition met"]},{id:"05-loops-for-while-11",title:"Do...While At Least One",starterCode:`let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);`,solution:`let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);`,tests:[{input:[],expected:"10"}],hints:["Body executes once even if condition false","Check condition after body"]},{id:"05-loops-for-while-12",title:"Loop Variable Scope",starterCode:`for (let i = 0; i < 3; i++) {
  console.log(i);
}`,solution:`for (let i = 0; i < 3; i++) {
  console.log(i);
}`,tests:[{input:[],expected:`0
1
2`}],hints:["let in for loop is block scoped","i only accessible inside loop"]},{id:"05-loops-for-while-13",title:"For Loop With String",starterCode:`const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}`,solution:`const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}`,tests:[{input:[],expected:`H
e
l
l
o`}],hints:["Access string characters with []","Use .length for loop condition"]},{id:"05-loops-for-while-14",title:"While Null Check",starterCode:`let arr = [1, 2, 3, null, 5];
let i = 0;
while (arr[i] !== null) {
  console.log(arr[i]);
  i++;
}`,solution:`let arr = [1, 2, 3, null, 5];
let i = 0;
while (arr[i] !== null) {
  console.log(arr[i]);
  i++;
}`,tests:[{input:[],expected:`1
2
3`}],hints:["Check for null to stop","Increment index each iteration"]},{id:"05-loops-for-while-15",title:"Nested Break",starterCode:`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(i + j);
  }
}`,solution:`for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break;
    console.log(i + j);
  }
}`,tests:[{input:[],expected:`0
1
2`}],hints:["break only exits inner loop","Check j value for break"]},{id:"05-loops-for-while-16",title:"Loop Accumulation",starterCode:`let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);`,solution:`let product = 1;
for (let i = 1; i <= 5; i++) {
  product *= i;
}
console.log(product);`,tests:[{input:[],expected:"120"}],hints:["Initialize product to 1","Multiply each i"]},{id:"05-loops-for-while-17",title:"For Loop With Array",starterCode:`const nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);`,solution:`const nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);`,tests:[{input:[],expected:"100"}],hints:["Access array elements with index","Use .length for loop bound"]},{id:"05-loops-for-while-18",title:"While Parsing Input",starterCode:`let num = 12345;
let digits = 0;
while (num > 0) {
  digits++;
  num = Math.floor(num / 10);
}
console.log(digits);`,solution:`let num = 12345;
let digits = 0;
while (num > 0) {
  digits++;
  num = Math.floor(num / 10);
}
console.log(digits);`,tests:[{input:[],expected:"5"}],hints:["Divide by 10 to remove last digit","Count each iteration"]},{id:"05-loops-for-while-19",title:"Modulo Pattern",starterCode:`for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}`,solution:`for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}`,tests:[{input:[],expected:`2
4
6
8
10`}],hints:["Use modulo to check even","i % 2 === 0 means even"]},{id:"05-loops-for-while-20",title:"Range Generation",starterCode:`let range = [];
for (let i = 1; i <= 5; i++) {
  range.push(i);
}
console.log(range);`,solution:`let range = [];
for (let i = 1; i <= 5; i++) {
  range.push(i);
}
console.log(range);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["Start array empty","Push each i to array"]},{id:"05-loops-for-while-21",title:"Do...While Menu Pattern",starterCode:`let choice = 0;
do {
  choice++;
  console.log('Option ' + choice);
} while (choice < 3);`,solution:`let choice = 0;
do {
  choice++;
  console.log('Option ' + choice);
} while (choice < 3);`,tests:[{input:[],expected:`Option 1
Option 2
Option 3`}],hints:["Increment before using","Body runs at least once"]},{id:"05-loops-for-while-22",title:"Reverse String Loop",starterCode:`const str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);`,solution:`const str = "Hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);`,tests:[{input:[],expected:"olleH"}],hints:["Start from last index","Decrement i"]},{id:"05-loops-for-while-23",title:"Matrix Iteration",starterCode:`const matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`,solution:`const matrix = [[1, 2], [3, 4]];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`,tests:[{input:[],expected:`1
2
3
4`}],hints:["Access rows first","Then columns"]},{id:"05-loops-for-while-24",title:"Find Element In Loop",starterCode:`const arr = [5, 12, 8, 130, 44];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]);
    break;
  }
}`,solution:`const arr = [5, 12, 8, 130, 44];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 10) {
    console.log(arr[i]);
    break;
  }
}`,tests:[{input:[],expected:"12"}],hints:["Check each element","Break when found"]},{id:"05-loops-for-while-25",title:"Build String In Loop",starterCode:`let result = "";
for (let i = 65; i < 70; i++) {
  result += String.fromCharCode(i);
}
console.log(result);`,solution:`let result = "";
for (let i = 65; i < 70; i++) {
  result += String.fromCharCode(i);
}
console.log(result);`,tests:[{input:[],expected:"ABCDE"}],hints:["ASCII A is 65","Use String.fromCharCode()"]},{id:"05-loops-for-while-26",title:"While Countdown",starterCode:`let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log('Go!');`,solution:`let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log('Go!');`,tests:[{input:[],expected:`5
4
3
2
1
Go!`}],hints:["Start at 5","Decrement until 0"]},{id:"05-loops-for-while-27",title:"Sum Of Digits",starterCode:`let num = 123;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,solution:`let num = 123;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,tests:[{input:[],expected:"6"}],hints:["Use % 10 for last digit","Divide by 10 to remove it"]},{id:"05-loops-for-while-28",title:"Reverse Number",starterCode:`let num = 123;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,solution:`let num = 123;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,tests:[{input:[],expected:"321"}],hints:["Multiply rev by 10","Add last digit"]},{id:"05-loops-for-while-29",title:"Palindrome Check Loop",starterCode:`const str = "racecar";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);`,solution:`const str = "racecar";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);`,tests:[{input:[],expected:"true"}],hints:["Compare characters from both ends","Only check half the string"]},{id:"05-loops-for-while-30",title:"Hollow Rectangle",starterCode:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 4) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,solution:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 4) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,tests:[{input:[],expected:`* * * * * 
*       * 
*       * 
* * * * * `}],hints:["Check edges for stars","Use spaces for interior"]},{id:"05-loops-for-while-31",title:"Right Triangle",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`* 
* * 
* * * 
* * * * 
* * * * * `}],hints:["Inner loop runs i times","Add star each iteration"]},{id:"05-loops-for-while-32",title:"Inverted Pyramid",starterCode:`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 0; k < 2 * i - 1; k++) row += '* ';
  console.log(row);
}`,solution:`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 0; k < 2 * i - 1; k++) row += '* ';
  console.log(row);
}`,tests:[{input:[],expected:`* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * `}],hints:["Decrease stars each row","Add spaces before stars"]},{id:"05-loops-for-while-33",title:"Number Triangle",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `}],hints:["Print j instead of star","j goes from 1 to i"]},{id:"05-loops-for-while-34",title:"Fibonacci Loop",starterCode:`let a = 0, b = 1;
for (let i = 0; i < 7; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}`,solution:`let a = 0, b = 1;
for (let i = 0; i < 7; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}`,tests:[{input:[],expected:`0
1
1
2
3
5
8`}],hints:["Start with 0 and 1","Swap and add"]},{id:"05-loops-for-while-35",title:"Factorial Loop",starterCode:`let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);`,solution:`let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(factorial);`,tests:[{input:[],expected:"120"}],hints:["Start at 1","Multiply by each i"]},{id:"05-loops-for-while-36",title:"While Factorial",starterCode:`let n = 5;
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(factorial);`,solution:`let n = 5;
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(factorial);`,tests:[{input:[],expected:"120"}],hints:["Initialize i to 1","Increment after multiply"]},{id:"05-loops-for-while-37",title:"Digit Counting",starterCode:`let num = 987654321;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,solution:`let num = 987654321;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,tests:[{input:[],expected:"9"}],hints:["Divide by 10 each iteration","Count until num is 0"]},{id:"05-loops-for-while-38",title:"Palindrome Number Check",starterCode:`let num = 121;
let original = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(original === rev);`,solution:`let num = 121;
let original = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(original === rev);`,tests:[{input:[],expected:"true"}],hints:["Save original number","Reverse and compare"]},{id:"05-loops-for-while-39",title:"Matrix Diagonal",starterCode:`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}`,solution:`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}`,tests:[{input:[],expected:`1
5
9`}],hints:["Access matrix[i][i]","Row equals column"]},{id:"05-loops-for-while-40",title:"Pattern X Shape",starterCode:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,solution:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,tests:[{input:[],expected:`*       * 
  *   * 
    *   
  *   * 
*       * `}],hints:["Check i===j for main diagonal","Check i+j===n-1 for anti-diagonal"]},{id:"05-loops-for-while-41",title:"Pyramid With Numbers",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 1; k <= i; k++) row += k + ' ';
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 0; j < 5 - i; j++) row += ' ';
  for (let k = 1; k <= i; k++) row += k + ' ';
  console.log(row);
}`,tests:[{input:[],expected:`    1 
  1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 `}],hints:["Add leading spaces","Print numbers 1 to i"]},{id:"05-loops-for-while-42",title:"Reverse Matrix Rows",starterCode:`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].reverse().join(' '));
}`,solution:`const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i].reverse().join(' '));
}`,tests:[{input:[],expected:`3 2 1
6 5 4
9 8 7`}],hints:["Use reverse() method","Join with space"]},{id:"05-loops-for-while-43",title:"Fibonacci Array",starterCode:`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,solution:`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,tests:[{input:[],expected:"[ 0, 1, 1, 2, 3, 5, 8 ]"}],hints:["Start with [0, 1]","Sum previous two"]},{id:"05-loops-for-while-44",title:"Sum Even Digits",starterCode:`let num = 2468;
let sum = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit % 2 === 0) sum += digit;
  num = Math.floor(num / 10);
}
console.log(sum);`,solution:`let num = 2468;
let sum = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit % 2 === 0) sum += digit;
  num = Math.floor(num / 10);
}
console.log(sum);`,tests:[{input:[],expected:"20"}],hints:["Extract digit with % 10","Check if digit is even"]},{id:"05-loops-for-while-45",title:"Reverse String With Index",starterCode:`const str = "abcde";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,solution:`const str = "abcde";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,tests:[{input:[],expected:"edcba"}],hints:["Start at str.length - 1","Decrement to 0"]},{id:"05-loops-for-while-46",title:"For Loop Range",starterCode:`for (let i = 10; i <= 20; i++) {
  console.log(i);
}`,solution:`for (let i = 10; i <= 20; i++) {
  console.log(i);
}`,tests:[{input:[],expected:`10
11
12
13
14
15
16
17
18
19
20`}],hints:["Start at 10","Include 20 with <="]},{id:"05-loops-for-while-47",title:"While With Flag",starterCode:`let found = false;
let arr = [1, 3, 5, 7, 8, 9];
let i = 0;
while (!found && i < arr.length) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    found = true;
  }
  i++;
}`,solution:`let found = false;
let arr = [1, 3, 5, 7, 8, 9];
let i = 0;
while (!found && i < arr.length) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
    found = true;
  }
  i++;
}`,tests:[{input:[],expected:"8"}],hints:["Use flag to stop early","Check for even number"]},{id:"05-loops-for-while-48",title:"Nested Loop Multiplication",starterCode:`for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + 'x' + j + '=' + (i*j));
  }
}`,solution:`for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + 'x' + j + '=' + (i*j));
  }
}`,tests:[{input:[],expected:`1x1=1
1x2=2
1x3=3
2x1=2
2x2=4
2x3=6
3x1=3
3x2=6
3x3=9`}],hints:["Outer loop for first number","Inner loop for second"]},{id:"05-loops-for-while-49",title:"While String Reverse",starterCode:`const str = "world";
let rev = "";
let i = str.length - 1;
while (i >= 0) {
  rev += str[i];
  i--;
}
console.log(rev);`,solution:`const str = "world";
let rev = "";
let i = str.length - 1;
while (i >= 0) {
  rev += str[i];
  i--;
}
console.log(rev);`,tests:[{input:[],expected:"dlrow"}],hints:["Start at last index","Decrement to 0"]},{id:"05-loops-for-while-50",title:"For Loop Even Numbers",starterCode:`for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}`,solution:`for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}`,tests:[{input:[],expected:`2
4
6
8
10`}],hints:["Start at 2","Increment by 2"]}],"05-loops-03-patterns-practice":[{id:"05-loops-patterns-practice-01",title:"Star Pyramid",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i) + '* '.repeat(i);
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i) + '* '.repeat(i);
  console.log(row);
}`,tests:[{input:[],expected:`    * 
   * * 
  * * * 
 * * * * 
* * * * * `}],hints:["Add spaces before stars","Number of stars increases"]},{id:"05-loops-patterns-practice-02",title:"Number Triangle",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,tests:[{input:[],expected:`1
12
123
1234
12345`}],hints:["Print j value","Concatenate numbers"]},{id:"05-loops-patterns-practice-03",title:"Reverse Number Pattern",starterCode:`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,solution:`for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,tests:[{input:[],expected:`12345
1234
123
12
1`}],hints:["Decrement outer loop","Count down"]},{id:"05-loops-patterns-practice-04",title:"Fibonacci Loop",starterCode:`let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  process.stdout.write(a + ' ');
  [a, b] = [b, a + b];
}
console.log();`,solution:`let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  process.stdout.write(a + ' ');
  [a, b] = [b, a + b];
}
console.log();`,tests:[{input:[],expected:"0 1 1 2 3 5 8 13 21 34 "}],hints:["Swap with destructuring","Start with 0 and 1"]},{id:"05-loops-patterns-practice-05",title:"Factorial Loop",starterCode:`let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);`,solution:`let n = 6;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);`,tests:[{input:[],expected:"720"}],hints:["Multiply from 1 to n","Start with 1"]},{id:"05-loops-patterns-practice-06",title:"Sum Of Digits",starterCode:`let num = 9876;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,solution:`let num = 9876;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,tests:[{input:[],expected:"30"}],hints:["% 10 gets last digit","Floor divide by 10"]},{id:"05-loops-patterns-practice-07",title:"Reverse Number",starterCode:`let num = 12345;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,solution:`let num = 12345;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,tests:[{input:[],expected:"54321"}],hints:["Multiply rev by 10","Add last digit"]},{id:"05-loops-patterns-practice-08",title:"Palindrome Check Loop",starterCode:`const str = "madam";
let isPal = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal);`,solution:`const str = "madam";
let isPal = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPal = false;
    break;
  }
}
console.log(isPal);`,tests:[{input:[],expected:"true"}],hints:["Compare from both ends","Only check half"]},{id:"05-loops-patterns-practice-09",title:"Matrix Traversal",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(m[i][j] + ' ');
  }
  console.log();
}`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    process.stdout.write(m[i][j] + ' ');
  }
  console.log();
}`,tests:[{input:[],expected:`1 2 3 
4 5 6 
7 8 9 `}],hints:["Outer for rows","Inner for columns"]},{id:"05-loops-patterns-practice-10",title:"Hollow Rectangle",starterCode:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 6; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 5) {
      row += '#';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,solution:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 6; j++) {
    if (i === 0 || i === 3 || j === 0 || j === 5) {
      row += '#';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,tests:[{input:[],expected:`######
#    #
#    #
######`}],hints:["Print # on borders","Spaces inside"]},{id:"05-loops-patterns-practice-11",title:"Right Triangle Stars",starterCode:`for (let i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}`,solution:`for (let i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}`,tests:[{input:[],expected:`*
**
***
****
*****`}],hints:["Use repeat()","i stars per row"]},{id:"05-loops-patterns-practice-12",title:"Inverted Pyramid",starterCode:`for (let i = 5; i >= 1; i--) {
  let spaces = ' '.repeat(5-i);
  let stars = '* '.repeat(i);
  console.log(spaces + stars);
}`,solution:`for (let i = 5; i >= 1; i--) {
  let spaces = ' '.repeat(5-i);
  let stars = '* '.repeat(i);
  console.log(spaces + stars);
}`,tests:[{input:[],expected:`* * * * * 
  * * * * 
    * * * 
      * * 
        * `}],hints:["Decrease stars","Increase spaces"]},{id:"05-loops-patterns-practice-13",title:"Diamond Pattern",starterCode:`for (let i = 1; i <= 5; i += 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}`,solution:`for (let i = 1; i <= 5; i += 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
  console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}`,tests:[{input:[],expected:`  *
 ***
*****
 ***
  *`}],hints:["Build top half","Then bottom half"]},{id:"05-loops-patterns-practice-14",title:"Fibonacci Array",starterCode:`const n = 8;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);`,solution:`const n = 8;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib);`,tests:[{input:[],expected:"[ 0, 1, 1, 2, 3, 5, 8, 13 ]"}],hints:["Start with 0 and 1","Sum previous two"]},{id:"05-loops-patterns-practice-15",title:"Factorial With While",starterCode:`let n = 5;
let result = 1;
let i = n;
while (i > 1) {
  result *= i;
  i--;
}
console.log(result);`,solution:`let n = 5;
let result = 1;
let i = n;
while (i > 1) {
  result *= i;
  i--;
}
console.log(result);`,tests:[{input:[],expected:"120"}],hints:["Start from n","Count down"]},{id:"05-loops-patterns-practice-16",title:"Digit Counting",starterCode:`let num = 123456789;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,solution:`let num = 123456789;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,tests:[{input:[],expected:"9"}],hints:["Divide by 10","Count iterations"]},{id:"05-loops-patterns-practice-17",title:"Palindrome Number Check",starterCode:`let num = 1221;
let orig = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(orig === rev);`,solution:`let num = 1221;
let orig = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(orig === rev);`,tests:[{input:[],expected:"true"}],hints:["Save original","Reverse and compare"]},{id:"05-loops-patterns-practice-18",title:"Matrix Diagonal Sum",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += m[i][i];
}
console.log(sum);`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  sum += m[i][i];
}
console.log(sum);`,tests:[{input:[],expected:"15"}],hints:["Access m[i][i]","Sum diagonal"]},{id:"05-loops-patterns-practice-19",title:"Pattern X Shape",starterCode:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,solution:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === j || i + j === n - 1) {
      row += '*';
    } else {
      row += ' ';
    }
  }
  console.log(row);
}`,tests:[{input:[],expected:`*   *
 * * 
  *  
 * * 
*   *`}],hints:["Main diagonal: i===j","Anti-diagonal: i+j===n-1"]},{id:"05-loops-patterns-practice-20",title:"Pyramid Numbers",starterCode:`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i);
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,solution:`for (let i = 1; i <= 5; i++) {
  let row = ' '.repeat(5-i);
  for (let j = 1; j <= i; j++) {
    row += j + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`    1 
   1 2 
  1 2 3 
 1 2 3 4 
1 2 3 4 5 `}],hints:["Add leading spaces","Print numbers"]},{id:"05-loops-patterns-practice-21",title:"Reverse Matrix Rows",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < m.length; i++) {
  let row = '';
  for (let j = m[i].length - 1; j >= 0; j--) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < m.length; i++) {
  let row = '';
  for (let j = m[i].length - 1; j >= 0; j--) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`3 2 1 
6 5 4 
9 8 7 `}],hints:["Iterate backwards","Build row string"]},{id:"05-loops-patterns-practice-22",title:"Sum Even Digits",starterCode:`let num = 2468;
let sum = 0;
while (num > 0) {
  let d = num % 10;
  if (d % 2 === 0) sum += d;
  num = Math.floor(num / 10);
}
console.log(sum);`,solution:`let num = 2468;
let sum = 0;
while (num > 0) {
  let d = num % 10;
  if (d % 2 === 0) sum += d;
  num = Math.floor(num / 10);
}
console.log(sum);`,tests:[{input:[],expected:"20"}],hints:["Check if digit even","Sum even digits"]},{id:"05-loops-patterns-practice-23",title:"Reverse String Loop",starterCode:`const str = "abcdef";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,solution:`const str = "abcdef";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);`,tests:[{input:[],expected:"fedcba"}],hints:["Start at end","Decrement index"]},{id:"05-loops-patterns-practice-24",title:"Palindrome Loop Index",starterCode:`const str = "racecar";
let pal = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    pal = false;
    break;
  }
}
console.log(pal);`,solution:`const str = "racecar";
let pal = true;
for (let i = 0; i < Math.floor(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    pal = false;
    break;
  }
}
console.log(pal);`,tests:[{input:[],expected:"true"}],hints:["Only check half","Compare symmetric positions"]},{id:"05-loops-patterns-practice-25",title:"Matrix Search",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
const target = 5;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (m[i][j] === target) {
      console.log('Found at ' + i + ',' + j);
    }
  }
}`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
const target = 5;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (m[i][j] === target) {
      console.log('Found at ' + i + ',' + j);
    }
  }
}`,tests:[{input:[],expected:"Found at 1,1"}],hints:["Nested loop","Check each element"]},{id:"05-loops-patterns-practice-26",title:"Star Diamond",starterCode:`for (let i = 0; i < 5; i++) {
  let stars = i < 3 ? 2*i+1 : 2*(4-i)+1;
  let spaces = ' '.repeat(2-Math.abs(i-2));
  console.log(spaces + '*'.repeat(stars));
}`,solution:`for (let i = 0; i < 5; i++) {
  let stars = i < 3 ? 2*i+1 : 2*(4-i)+1;
  let spaces = ' '.repeat(2-Math.abs(i-2));
  console.log(spaces + '*'.repeat(stars));
}`,tests:[{input:[],expected:`  *
 ***
*****
 ***
  *`}],hints:["Calculate stars per row","Add leading spaces"]},{id:"05-loops-patterns-practice-27",title:"Fibonacci Iterative",starterCode:`function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
console.log(fib(7));`,solution:`function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}
console.log(fib(7));`,tests:[{input:[],expected:"13"}],hints:["Swap values","Return a"]},{id:"05-loops-patterns-practice-28",title:"Matrix Column Sum",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let j = 0; j < 3; j++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += m[i][j];
  }
  console.log('Col ' + j + ': ' + sum);
}`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let j = 0; j < 3; j++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += m[i][j];
  }
  console.log('Col ' + j + ': ' + sum);
}`,tests:[{input:[],expected:`Col 0: 12
Col 1: 15
Col 2: 18`}],hints:["Outer loop for columns","Inner for rows"]},{id:"05-loops-patterns-practice-29",title:"Binary Pattern",starterCode:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 4; j++) {
    row += (i + j) % 2;
  }
  console.log(row);
}`,solution:`for (let i = 0; i < 4; i++) {
  let row = '';
  for (let j = 0; j < 4; j++) {
    row += (i + j) % 2;
  }
  console.log(row);
}`,tests:[{input:[],expected:`0101
1010
0101
1010`}],hints:["Use (i+j)%2","Alternating pattern"]},{id:"05-loops-patterns-practice-30",title:"While Countdown",starterCode:`let count = 10;
while (count >= 0) {
  console.log(count);
  count -= 2;
}`,solution:`let count = 10;
while (count >= 0) {
  console.log(count);
  count -= 2;
}`,tests:[{input:[],expected:`10
8
6
4
2
0`}],hints:["Start at 10","Decrement by 2"]},{id:"05-loops-patterns-practice-31",title:"Nested Loop Pattern",starterCode:`for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,solution:`for (let i = 1; i <= 4; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}`,tests:[{input:[],expected:`1
12
123
1234`}],hints:["Inner loop up to i","Append j"]},{id:"05-loops-patterns-practice-32",title:"Sum Array Loop",starterCode:`const arr = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);`,solution:`const arr = [10, 20, 30, 40, 50];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);`,tests:[{input:[],expected:"150"}],hints:["Initialize total","Add each element"]},{id:"05-loops-patterns-practice-33",title:"Count Vowels",starterCode:`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,solution:`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,tests:[{input:[],expected:"3"}],hints:["Check each character","Use includes()"]},{id:"05-loops-patterns-practice-34",title:"Number Spiral",starterCode:`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,solution:`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`1 2 3 
4 5 6 
7 8 9 `}],hints:["Use post-increment","Build row string"]},{id:"05-loops-patterns-practice-35",title:"Matrix Transpose",starterCode:`const m = [[1,2,3],[4,5,6]];
for (let j = 0; j < 3; j++) {
  let row = '';
  for (let i = 0; i < 2; i++) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,solution:`const m = [[1,2,3],[4,5,6]];
for (let j = 0; j < 3; j++) {
  let row = '';
  for (let i = 0; i < 2; i++) {
    row += m[i][j] + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`1 4 
2 5 
3 6 `}],hints:["Swap rows and columns","Outer loop columns"]},{id:"05-loops-patterns-practice-36",title:"Fibonacci With While",starterCode:`let a = 0, b = 1;
let count = 0;
while (count < 7) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
  count++;
}`,solution:`let a = 0, b = 1;
let count = 0;
while (count < 7) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
  count++;
}`,tests:[{input:[],expected:`0
1
1
2
3
5
8`}],hints:["Use while loop","Track count"]},{id:"05-loops-patterns-practice-37",title:"Factorial Recursive",starterCode:`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(6));`,solution:`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(6));`,tests:[{input:[],expected:"720"}],hints:["Base case: n <= 1","Recursive call"]},{id:"05-loops-patterns-practice-38",title:"Matrix Row Sum",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    sum += m[i][j];
  }
  console.log('Row ' + i + ': ' + sum);
}`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    sum += m[i][j];
  }
  console.log('Row ' + i + ': ' + sum);
}`,tests:[{input:[],expected:`Row 0: 6
Row 1: 15
Row 2: 24`}],hints:["Sum each row","Inner loop for columns"]},{id:"05-loops-patterns-practice-39",title:"Star Pattern Z",starterCode:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n-1 || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,solution:`const n = 5;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n-1 || i + j === n - 1) {
      row += '* ';
    } else {
      row += '  ';
    }
  }
  console.log(row);
}`,tests:[{input:[],expected:`* * * * * 
        * 
      *   
    *     
* * * * * `}],hints:["Top and bottom rows full","Diagonal from top-right"]},{id:"05-loops-patterns-practice-40",title:"Digit Sum While",starterCode:`let num = 987;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,solution:`let num = 987;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,tests:[{input:[],expected:"24"}],hints:["Extract digits","Sum them"]},{id:"05-loops-patterns-practice-41",title:"GCD Loop",starterCode:`function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18));`,solution:`function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcd(48, 18));`,tests:[{input:[],expected:"6"}],hints:["Euclidean algorithm","Modulo operation"]},{id:"05-loops-patterns-practice-42",title:"LCM Loop",starterCode:`function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(lcm(4, 6));`,solution:`function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(lcm(4, 6));`,tests:[{input:[],expected:"12"}],hints:["LCM = a*b/GCD","Use GCD function"]},{id:"05-loops-patterns-practice-43",title:"Prime Check Loop",starterCode:`function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
console.log(isPrime(15));`,solution:`function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
console.log(isPrime(15));`,tests:[{input:[],expected:`true
false`}],hints:["Check divisibility","Only up to sqrt(n)"]},{id:"05-loops-patterns-practice-44",title:"Power Calculation",starterCode:`function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));`,solution:`function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));`,tests:[{input:[],expected:"1024"}],hints:["Multiply base exp times","Start with 1"]},{id:"05-loops-patterns-practice-45",title:"String Compression",starterCode:`function compress(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i-1]) {
      result += str[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}
console.log(compress("aaabbcc"));`,solution:`function compress(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (i === str.length || str[i] !== str[i-1]) {
      result += str[i-1] + count;
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}
console.log(compress("aaabbcc"));`,tests:[{input:[],expected:"a3b2c2"}],hints:["Count consecutive chars","Build result string"]},{id:"05-loops-patterns-practice-46",title:"Bubble Sort Loop",starterCode:`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22]));`,solution:`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22]));`,tests:[{input:[],expected:"[ 12, 22, 25, 34, 64 ]"}],hints:["Nested loop","Swap adjacent elements"]},{id:"05-loops-patterns-practice-47",title:"Matrix Rotate 90",starterCode:`const m = [[1,2,3],[4,5,6],[7,8,9]];
const rotated = [];
for (let j = 0; j < 3; j++) {
  rotated[j] = [];
  for (let i = 2; i >= 0; i--) {
    rotated[j].push(m[i][j]);
  }
}
console.log(rotated);`,solution:`const m = [[1,2,3],[4,5,6],[7,8,9]];
const rotated = [];
for (let j = 0; j < 3; j++) {
  rotated[j] = [];
  for (let i = 2; i >= 0; i--) {
    rotated[j].push(m[i][j]);
  }
}
console.log(rotated);`,tests:[{input:[],expected:"[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]"}],hints:["Read columns top to bottom","Build new rows"]},{id:"05-loops-patterns-practice-48",title:"Count Vowels Loop",starterCode:`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,solution:`const str = "hello world";
let count = 0;
const vowels = "aeiou";
for (const ch of str) {
  if (vowels.includes(ch)) count++;
}
console.log(count);`,tests:[{input:[],expected:"3"}],hints:["Check each character","Use includes()"]},{id:"05-loops-patterns-practice-49",title:"Number Spiral",starterCode:`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,solution:`let num = 1;
for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += num++ + ' ';
  }
  console.log(row);
}`,tests:[{input:[],expected:`1 2 3 
4 5 6 
7 8 9 `}],hints:["Use post-increment","Build row string"]},{id:"05-loops-patterns-practice-50",title:"Fibonacci Array",starterCode:`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,solution:`const n = 7;
const fib = [0, 1];
for (let i = 2; i < n; i++) {
  fib.push(fib[i-1] + fib[i-2]);
}
console.log(fib);`,tests:[{input:[],expected:"[ 0, 1, 1, 2, 3, 5, 8 ]"}],hints:["Start with [0, 1]","Sum previous two"]}],"06-functions-02-arrow-functions":[{id:"06-functions-arrow-functions-01",title:"Arrow Syntax",starterCode:`const add = (a, b) => a + b;
console.log(add(2, 3));`,solution:`const add = (a, b) => a + b;
console.log(add(2, 3));`,tests:[{input:[],expected:"5"}],hints:["Use => syntax","Implicit return"]},{id:"06-functions-arrow-functions-02",title:"Single Parameter",starterCode:`const double = x => x * 2;
console.log(double(4));`,solution:`const double = x => x * 2;
console.log(double(4));`,tests:[{input:[],expected:"8"}],hints:["No parens for single param","Implicit return"]},{id:"06-functions-arrow-functions-03",title:"No Parameters",starterCode:`const sayHi = () => 'Hi!';
console.log(sayHi());`,solution:`const sayHi = () => 'Hi!';
console.log(sayHi());`,tests:[{input:[],expected:"Hi!"}],hints:["Empty parens","Implicit return"]},{id:"06-functions-arrow-functions-04",title:"Implicit Return",starterCode:`const square = x => x * x;
console.log(square(5));`,solution:`const square = x => x * x;
console.log(square(5));`,tests:[{input:[],expected:"25"}],hints:["No braces needed","Single expression"]},{id:"06-functions-arrow-functions-05",title:"Block Body Arrow",starterCode:`const greet = (name) => {
  const msg = 'Hello, ' + name;
  return msg;
};
console.log(greet('World'));`,solution:`const greet = (name) => {
  const msg = 'Hello, ' + name;
  return msg;
};
console.log(greet('World'));`,tests:[{input:[],expected:"Hello, World"}],hints:["Use braces for multiple lines","Explicit return needed"]},{id:"06-functions-arrow-functions-06",title:"Arrow In Map",starterCode:`const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
console.log(doubled);`,solution:`const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
console.log(doubled);`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Arrow callback for map","Return transformed value"]},{id:"06-functions-arrow-functions-07",title:"Arrow In Filter",starterCode:`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,solution:`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["Return true to keep","Arrow callback"]},{id:"06-functions-arrow-functions-08",title:"Arrow In Reduce",starterCode:`const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, x) => acc + x, 0);
console.log(sum);`,solution:`const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, x) => acc + x, 0);
console.log(sum);`,tests:[{input:[],expected:"10"}],hints:["Accumulator pattern","Start at 0"]},{id:"06-functions-arrow-functions-09",title:"Arrow This Binding",starterCode:`const obj = {
  name: 'Alice',
  greet: () => {
    console.log('Hello ' + this.name);
  }
};
obj.greet();`,solution:`const obj = {
  name: 'Alice',
  greet: () => {
    console.log('Hello ' + this.name);
  }
};
obj.greet();`,tests:[{input:[],expected:"Hello undefined"}],hints:["Arrow has lexical this","this is outer scope"]},{id:"06-functions-arrow-functions-10",title:"Arrow In Callback",starterCode:`setTimeout(() => {
  console.log('Done!');
}, 100);`,solution:`setTimeout(() => {
  console.log('Done!');
}, 100);`,tests:[{input:[],expected:"Done!"}],hints:["Arrow as callback","No this binding issues"]},{id:"06-functions-arrow-functions-11",title:"Arrow Constructor Error",starterCode:`try {
  const Foo = () => {};
  new Foo();
} catch (e) {
  console.log('Error: Cannot use new with arrow');
}`,solution:`try {
  const Foo = () => {};
  new Foo();
} catch (e) {
  console.log('Error: Cannot use new with arrow');
}`,tests:[{input:[],expected:"Error: Cannot use new with arrow"}],hints:["Arrow functions can't be constructors","new throws error"]},{id:"06-functions-arrow-functions-12",title:"Arrow No Arguments",starterCode:`const getArgs = () => arguments;
try {
  getArgs(1, 2, 3);
} catch (e) {
  console.log('No arguments object');
}`,solution:`const getArgs = () => arguments;
try {
  getArgs(1, 2, 3);
} catch (e) {
  console.log('No arguments object');
}`,tests:[{input:[],expected:"No arguments object"}],hints:["Arrow has no arguments","Use rest params instead"]},{id:"06-functions-arrow-functions-13",title:"Arrow No Prototype",starterCode:`const Foo = () => {};
console.log(typeof Foo.prototype);`,solution:`const Foo = () => {};
console.log(typeof Foo.prototype);`,tests:[{input:[],expected:"undefined"}],hints:["Arrows don't have prototype","Can't use with new"]},{id:"06-functions-arrow-functions-14",title:"Return Object Arrow",starterCode:`const makeUser = (name) => ({ name });
const user = makeUser('Bob');
console.log(user.name);`,solution:`const makeUser = (name) => ({ name });
const user = makeUser('Bob');
console.log(user.name);`,tests:[{input:[],expected:"Bob"}],hints:["Wrap object in parens","Implicit return object"]},{id:"06-functions-arrow-functions-15",title:"Multiline Arrow",starterCode:`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,solution:`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,tests:[{input:[],expected:"5 6"}],hints:["Use braces for multi-line","Explicit return"]},{id:"06-functions-arrow-functions-16",title:"Default Params Arrow",starterCode:`const greet = (name = 'Friend') => 'Hi ' + name;
console.log(greet());
console.log(greet('Alice'));`,solution:`const greet = (name = 'Friend') => 'Hi ' + name;
console.log(greet());
console.log(greet('Alice'));`,tests:[{input:[],expected:`Hi Friend
Hi Alice`}],hints:["Default parameter syntax","Works same as regular"]},{id:"06-functions-arrow-functions-17",title:"Destructuring Params",starterCode:`const getAge = ({ age }) => age;
const person = {name: 'Tom', age: 30};
console.log(getAge(person));`,solution:`const getAge = ({ age }) => age;
const person = {name: 'Tom', age: 30};
console.log(getAge(person));`,tests:[{input:[],expected:"30"}],hints:["Destructure in params","Extract age"]},{id:"06-functions-arrow-functions-18",title:"Rest Params Arrow",starterCode:`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));`,solution:`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));`,tests:[{input:[],expected:"10"}],hints:["Rest params collect args","Use reduce"]},{id:"06-functions-arrow-functions-19",title:"Promise Arrow",starterCode:`const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(100).then(() => console.log('Resolved'));`,solution:`const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(100).then(() => console.log('Resolved'));`,tests:[{input:[],expected:"Resolved"}],hints:["Arrow in Promise","Resolve callback"]},{id:"06-functions-arrow-functions-20",title:"Event Handler Arrow",starterCode:`const handler = (event) => {
  console.log('Clicked!');
};
handler();`,solution:`const handler = (event) => {
  console.log('Clicked!');
};
handler();`,tests:[{input:[],expected:"Clicked!"}],hints:["Arrow as handler","Common pattern"]},{id:"06-functions-arrow-functions-21",title:"Concise Body",starterCode:`const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(3));`,solution:`const isEven = n => n % 2 === 0;
console.log(isEven(4));
console.log(isEven(3));`,tests:[{input:[],expected:`true
false`}],hints:["Implicit return","No braces"]},{id:"06-functions-arrow-functions-22",title:"Block Body Arrow",starterCode:`const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));`,solution:`const factorial = n => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(5));`,tests:[{input:[],expected:"120"}],hints:["Multiple statements need braces","Explicit return"]},{id:"06-functions-arrow-functions-23",title:"This Binding Patterns",starterCode:`const obj = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};
console.log(obj.getValue()());`,solution:`const obj = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};
console.log(obj.getValue()());`,tests:[{input:[],expected:"42"}],hints:["Arrow captures this","From outer function"]},{id:"06-functions-arrow-functions-24",title:"Arrow In Array Methods",starterCode:`const words = ['hello', 'world'];
const upper = words.map(w => w.toUpperCase());
console.log(upper);`,solution:`const words = ['hello', 'world'];
const upper = words.map(w => w.toUpperCase());
console.log(upper);`,tests:[{input:[],expected:"[ 'HELLO', 'WORLD' ]"}],hints:["Use map with arrow","Transform each word"]},{id:"06-functions-arrow-functions-25",title:"Arrow Usage Patterns",starterCode:`const operations = {
  double: x => x * 2,
  triple: x => x * 3,
  negate: x => -x
};
console.log(operations.double(5));
console.log(operations.triple(5));
console.log(operations.negate(5));`,solution:`const operations = {
  double: x => x * 2,
  triple: x => x * 3,
  negate: x => -x
};
console.log(operations.double(5));
console.log(operations.triple(5));
console.log(operations.negate(5));`,tests:[{input:[],expected:`10
15
-5`}],hints:["Arrows as object methods","Concise syntax"]},{id:"06-functions-arrow-functions-26",title:"Arrow Vs Expression",starterCode:`const add1 = function(a, b) { return a + b; };
const add2 = (a, b) => a + b;
console.log(add1(2, 3));
console.log(add2(2, 3));`,solution:`const add1 = function(a, b) { return a + b; };
const add2 = (a, b) => a + b;
console.log(add1(2, 3));
console.log(add2(2, 3));`,tests:[{input:[],expected:`5
5`}],hints:["Both produce same result","Arrow is shorter"]},{id:"06-functions-arrow-functions-27",title:"Arrow With forEach",starterCode:`const items = [1, 2, 3];
items.forEach(x => console.log(x * 10));`,solution:`const items = [1, 2, 3];
items.forEach(x => console.log(x * 10));`,tests:[{input:[],expected:`10
20
30`}],hints:["Arrow callback in forEach","Side effect only"]},{id:"06-functions-arrow-functions-28",title:"Arrow Chaining",starterCode:`const result = [1, 2, 3, 4, 5]
  .filter(x => x > 2)
  .map(x => x * 10);
console.log(result);`,solution:`const result = [1, 2, 3, 4, 5]
  .filter(x => x > 2)
  .map(x => x * 10);
console.log(result);`,tests:[{input:[],expected:"[ 30, 40, 50 ]"}],hints:["Chain array methods","Filter then map"]},{id:"06-functions-arrow-functions-29",title:"Arrow Find Index",starterCode:`const arr = [10, 20, 30, 40];
const idx = arr.findIndex(x => x === 30);
console.log(idx);`,solution:`const arr = [10, 20, 30, 40];
const idx = arr.findIndex(x => x === 30);
console.log(idx);`,tests:[{input:[],expected:"2"}],hints:["findIndex returns index","Arrow callback"]},{id:"06-functions-arrow-functions-30",title:"Arrow Some Every",starterCode:`const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0));
console.log(nums.some(x => x > 5));`,solution:`const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0));
console.log(nums.some(x => x > 5));`,tests:[{input:[],expected:`true
true`}],hints:["every checks all","some checks any"]},{id:"06-functions-arrow-functions-31",title:"Arrow Reduce Object",starterCode:`const arr = [{v:1}, {v:2}, {v:3}];
const sum = arr.reduce((acc, obj) => acc + obj.v, 0);
console.log(sum);`,solution:`const arr = [{v:1}, {v:2}, {v:3}];
const sum = arr.reduce((acc, obj) => acc + obj.v, 0);
console.log(sum);`,tests:[{input:[],expected:"6"}],hints:["Access property","Accumulate sum"]},{id:"06-functions-arrow-functions-32",title:"Arrow String Transform",starterCode:`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,solution:`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,tests:[{input:[],expected:"[ 'Hello', 'World' ]"}],hints:["Capitalize first letter","Concat rest"]},{id:"06-functions-arrow-functions-33",title:"Arrow Conditional",starterCode:`const classify = x => x > 0 ? 'positive' : x < 0 ? 'negative' : 'zero';
console.log(classify(5));
console.log(classify(-3));
console.log(classify(0));`,solution:`const classify = x => x > 0 ? 'positive' : x < 0 ? 'negative' : 'zero';
console.log(classify(5));
console.log(classify(-3));
console.log(classify(0));`,tests:[{input:[],expected:`positive
negative
zero`}],hints:["Nested ternary","Return string"]},{id:"06-functions-arrow-functions-34",title:"Arrow Object Method",starterCode:`const obj = {
  nums: [1, 2, 3, 4],
  sum: function() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
};
console.log(obj.sum());`,solution:`const obj = {
  nums: [1, 2, 3, 4],
  sum: function() {
    return this.nums.reduce((a, b) => a + b, 0);
  }
};
console.log(obj.sum());`,tests:[{input:[],expected:"10"}],hints:["Use function for this","Arrow won't work here"]},{id:"06-functions-arrow-functions-35",title:"Arrow Default Params",starterCode:"const greet = (name = 'World', greeting = 'Hello') => `${greeting}, ${name}!`;\nconsole.log(greet());\nconsole.log(greet('Alice'));\nconsole.log(greet('Bob', 'Hi'));",solution:"const greet = (name = 'World', greeting = 'Hello') => `${greeting}, ${name}!`;\nconsole.log(greet());\nconsole.log(greet('Alice'));\nconsole.log(greet('Bob', 'Hi'));",tests:[{input:[],expected:`Hello, World!
Hello, Alice!
Hi, Bob!`}],hints:["Multiple defaults","Override one at a time"]},{id:"06-functions-arrow-functions-36",title:"Arrow Destructure Array",starterCode:`const process = ([a, b]) => a + b;
console.log(process([3, 7]));`,solution:`const process = ([a, b]) => a + b;
console.log(process([3, 7]));`,tests:[{input:[],expected:"10"}],hints:["Destructure in param","Sum elements"]},{id:"06-functions-arrow-functions-37",title:"Arrow Rest Params",starterCode:`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));`,solution:`const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4, 5));`,tests:[{input:[],expected:"15"}],hints:["Rest collects args","Reduce to sum"]},{id:"06-functions-arrow-functions-38",title:"Arrow In Promise",starterCode:`Promise.resolve(42)
  .then(x => console.log(x));`,solution:`Promise.resolve(42)
  .then(x => console.log(x));`,tests:[{input:[],expected:"42"}],hints:["Arrow in .then()","Simple callback"]},{id:"06-functions-arrow-functions-39",title:"Arrow Event Handler",starterCode:`const handler = () => console.log('Clicked!');
handler();`,solution:`const handler = () => console.log('Clicked!');
handler();`,tests:[{input:[],expected:"Clicked!"}],hints:["Arrow as handler","Simple function"]},{id:"06-functions-arrow-functions-40",title:"Arrow Callback Pattern",starterCode:`function fetchData(callback) {
  callback({ name: 'Alice', age: 25 });
}
fetchData(data => console.log(data.name + ' is ' + data.age));`,solution:`function fetchData(callback) {
  callback({ name: 'Alice', age: 25 });
}
fetchData(data => console.log(data.name + ' is ' + data.age));`,tests:[{input:[],expected:"Alice is 25"}],hints:["Arrow callback","Access data"]},{id:"06-functions-arrow-functions-41",title:"Arrow Array Sort",starterCode:`const nums = [3, 1, 4, 1, 5, 9];
const sorted = nums.sort((a, b) => a - b);
console.log(sorted);`,solution:`const nums = [3, 1, 4, 1, 5, 9];
const sorted = nums.sort((a, b) => a - b);
console.log(sorted);`,tests:[{input:[],expected:"[ 1, 1, 3, 4, 5, 9 ]"}],hints:["Compare function","a - b for ascending"]},{id:"06-functions-arrow-functions-42",title:"Arrow Flat Map",starterCode:`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.flatMap(x => x);
console.log(flat);`,solution:`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.flatMap(x => x);
console.log(flat);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["flatMap flattens one level","Arrow returns array"]},{id:"06-functions-arrow-functions-43",title:"Arrow Template Literal",starterCode:"const name = 'World';\nconst greet = () => `Hello, ${name}!`;\nconsole.log(greet());",solution:"const name = 'World';\nconst greet = () => `Hello, ${name}!`;\nconsole.log(greet());",tests:[{input:[],expected:"Hello, World!"}],hints:["Template literal","Implicit return"]},{id:"06-functions-arrow-functions-44",title:"Arrow Multiple Statements",starterCode:`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,solution:`const process = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };
};
const result = process(2, 3);
console.log(result.sum + ' ' + result.product);`,tests:[{input:[],expected:"5 6"}],hints:["Block body","Return object"]},{id:"06-functions-arrow-functions-45",title:"Arrow IIFE",starterCode:`const result = (() => 42)();
console.log(result);`,solution:`const result = (() => 42)();
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["Arrow IIFE","Call immediately"]},{id:"06-functions-arrow-functions-46",title:"Arrow In Set Timeout",starterCode:"setTimeout(() => console.log('delayed'), 50);",solution:"setTimeout(() => console.log('delayed'), 50);",tests:[{input:[],expected:"delayed"}],hints:["Arrow callback","Async execution"]},{id:"06-functions-arrow-functions-47",title:"Arrow Return Bool",starterCode:`const isPositive = x => x > 0;
console.log(isPositive(5));
console.log(isPositive(-3));`,solution:`const isPositive = x => x > 0;
console.log(isPositive(5));
console.log(isPositive(-3));`,tests:[{input:[],expected:`true
false`}],hints:["Expression returns boolean","Implicit return"]},{id:"06-functions-arrow-functions-48",title:"Arrow In Filter Chain",starterCode:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 3).filter(x => x % 2 === 0);
console.log(result);`,solution:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 3).filter(x => x % 2 === 0);
console.log(result);`,tests:[{input:[],expected:"[ 4, 6, 8, 10 ]"}],hints:["Chain filters","Each arrow callback"]},{id:"06-functions-arrow-functions-49",title:"Arrow Object Method Warning",starterCode:`const obj = {
  value: 42,
  getValue: () => this.value
};
console.log(obj.getValue());`,solution:`const obj = {
  value: 42,
  getValue: () => this.value
};
console.log(obj.getValue());`,tests:[{input:[],expected:"undefined"}],hints:["Arrow doesn't bind this","this is outer scope"]},{id:"06-functions-arrow-functions-50",title:"Arrow Class Method Warning",starterCode:`class Foo {
  constructor() { this.val = 10; }
  getVal = () => this.val;
}
const foo = new Foo();
console.log(foo.getVal());`,solution:`class Foo {
  constructor() { this.val = 10; }
  getVal = () => this.val;
}
const foo = new Foo();
console.log(foo.getVal());`,tests:[{input:[],expected:"10"}],hints:["Arrow as class field","Lexical this works here"]}],"06-functions-03-closures-iife":[{id:"06-functions-closures-iife-01",title:"Closure Basics",starterCode:`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();`,solution:`function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn();
fn();`,tests:[{input:[],expected:`1
2`}],hints:["Inner function remembers outer","Count persists between calls"]},{id:"06-functions-closures-iife-02",title:"Closure With Variable",starterCode:`function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));`,solution:`function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));`,tests:[{input:[],expected:"10"}],hints:["factor is captured","Return inner function"]},{id:"06-functions-closures-iife-03",title:"Closure In Loop Fix",starterCode:`const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();`,solution:`const funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();`,tests:[{input:[],expected:`0
1
2`}],hints:["let in for loop is block scoped","Each iteration has own i"]},{id:"06-functions-closures-iife-04",title:"IIFE Pattern",starterCode:`(function() {
  const secret = 'private';
  console.log(secret);
})();`,solution:`(function() {
  const secret = 'private';
  console.log(secret);
})();`,tests:[{input:[],expected:"private"}],hints:["Immediately invoked","Scope is contained"]},{id:"06-functions-closures-iife-05",title:"IIFE Returning Value",starterCode:`const result = (function() {
  return 42;
})();
console.log(result);`,solution:`const result = (function() {
  return 42;
})();
console.log(result);`,tests:[{input:[],expected:"42"}],hints:["IIFE can return value","Assign result"]},{id:"06-functions-closures-iife-06",title:"Module Pattern",starterCode:`const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());`,solution:`const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
counter.increment();
counter.increment();
console.log(counter.getCount());`,tests:[{input:[],expected:"2"}],hints:["IIFE creates module","Private state"]},{id:"06-functions-closures-iife-07",title:"Private Variables",starterCode:`function createPerson(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (n) => { _name = n; }
  };
}
const p = createPerson('Alice');
console.log(p.getName());
p.setName('Bob');
console.log(p.getName());`,solution:`function createPerson(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (n) => { _name = n; }
  };
}
const p = createPerson('Alice');
console.log(p.getName());
p.setName('Bob');
console.log(p.getName());`,tests:[{input:[],expected:`Alice
Bob`}],hints:["_name is private","Access through methods"]},{id:"06-functions-closures-iife-08",title:"Counter Closure",starterCode:`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const c = createCounter();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.getCount());`,solution:`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const c = createCounter();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.getCount());`,tests:[{input:[],expected:"2"}],hints:["Private count variable","Methods modify it"]},{id:"06-functions-closures-iife-09",title:"Once Function",starterCode:`function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return 'Already called';
  };
}
const greet = once(() => 'Hello');
console.log(greet());
console.log(greet());`,solution:`function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return 'Already called';
  };
}
const greet = once(() => 'Hello');
console.log(greet());
console.log(greet());`,tests:[{input:[],expected:`Hello
Already called`}],hints:["Track if called","Return result only once"]},{id:"06-functions-closures-iife-10",title:"Memoize Basics",starterCode:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,solution:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,tests:[{input:[],expected:`16
16`}],hints:["Cache results","Check cache first"]},{id:"06-functions-closures-iife-11",title:"Scope Chain",starterCode:`function outer() {
  const a = 1;
  function middle() {
    const b = 2;
    function inner() {
      console.log(a + b);
    }
    inner();
  }
  middle();
}
outer();`,solution:`function outer() {
  const a = 1;
  function middle() {
    const b = 2;
    function inner() {
      console.log(a + b);
    }
    inner();
  }
  middle();
}
outer();`,tests:[{input:[],expected:"3"}],hints:["Inner accesses outer scopes","Scope chain traversal"]},{id:"06-functions-closures-iife-12",title:"IIFE With Arguments",starterCode:`const result = (function(a, b) {
  return a + b;
})(3, 7);
console.log(result);`,solution:`const result = (function(a, b) {
  return a + b;
})(3, 7);
console.log(result);`,tests:[{input:[],expected:"10"}],hints:["Pass args after function","Return value"]},{id:"06-functions-closures-iife-13",title:"Module Export",starterCode:`const math = (function() {
  const PI = 3.14159;
  const add = (a, b) => a + b;
  return { PI, add };
})();
console.log(math.PI);
console.log(math.add(2, 3));`,solution:`const math = (function() {
  const PI = 3.14159;
  const add = (a, b) => a + b;
  return { PI, add };
})();
console.log(math.PI);
console.log(math.add(2, 3));`,tests:[{input:[],expected:`3.14159
5`}],hints:["Return public API","Private variables inside"]},{id:"06-functions-closures-iife-14",title:"Private Methods",starterCode:`function createBank() {
  let balance = 0;
  function validate(amount) {
    return amount > 0;
  }
  return {
    deposit: (amount) => {
      if (validate(amount)) balance += amount;
    },
    getBalance: () => balance
  };
}
const bank = createBank();
bank.deposit(100);
bank.deposit(50);
console.log(bank.getBalance());`,solution:`function createBank() {
  let balance = 0;
  function validate(amount) {
    return amount > 0;
  }
  return {
    deposit: (amount) => {
      if (validate(amount)) balance += amount;
    },
    getBalance: () => balance
  };
}
const bank = createBank();
bank.deposit(100);
bank.deposit(50);
console.log(bank.getBalance());`,tests:[{input:[],expected:"150"}],hints:["validate is private","Not exposed in return"]},{id:"06-functions-closures-iife-15",title:"Counter Increment Decrement",starterCode:`function createCounter(start = 0) {
  let count = start;
  return {
    inc: () => ++count,
    dec: () => --count,
    val: () => count
  };
}
const c = createCounter(10);
c.inc();
c.inc();
c.dec();
console.log(c.val());`,solution:`function createCounter(start = 0) {
  let count = start;
  return {
    inc: () => ++count,
    dec: () => --count,
    val: () => count
  };
}
const c = createCounter(10);
c.inc();
c.inc();
c.dec();
console.log(c.val());`,tests:[{input:[],expected:"11"}],hints:["Start with parameter","Methods modify count"]},{id:"06-functions-closures-iife-16",title:"Closure In Callback",starterCode:`function setup() {
  let clicks = 0;
  return {
    onClick: () => {
      clicks++;
      console.log('Clicks: ' + clicks);
    }
  };
}
const ui = setup();
ui.onClick();
ui.onClick();`,solution:`function setup() {
  let clicks = 0;
  return {
    onClick: () => {
      clicks++;
      console.log('Clicks: ' + clicks);
    }
  };
}
const ui = setup();
ui.onClick();
ui.onClick();`,tests:[{input:[],expected:`Clicks: 1
Clicks: 2`}],hints:["clicks persists","Callback uses closure"]},{id:"06-functions-closures-iife-17",title:"IIFE Async",starterCode:`(async function() {
  const result = await Promise.resolve(42);
  console.log(result);
})();`,solution:`(async function() {
  const result = await Promise.resolve(42);
  console.log(result);
})();`,tests:[{input:[],expected:"42"}],hints:["Async IIFE","Await in closure"]},{id:"06-functions-closures-iife-18",title:"Revealing Module",starterCode:`const calculator = (function() {
  let result = 0;
  function add(n) { result += n; }
  function subtract(n) { result -= n; }
  function getResult() { return result; }
  return { add, subtract, getResult };
})();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult());`,solution:`const calculator = (function() {
  let result = 0;
  function add(n) { result += n; }
  function subtract(n) { result -= n; }
  function getResult() { return result; }
  return { add, subtract, getResult };
})();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult());`,tests:[{input:[],expected:"3"}],hints:["Private functions","Reveal public API"]},{id:"06-functions-closures-iife-19",title:"Closure In Loop Var",starterCode:`const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push((function(j) {
    return () => console.log(j);
  })(i));
}
fns[0]();
fns[1]();
fns[2]();`,solution:`const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push((function(j) {
    return () => console.log(j);
  })(i));
}
fns[0]();
fns[1]();
fns[2]();`,tests:[{input:[],expected:`0
1
2`}],hints:["IIFE captures i","j is local copy"]},{id:"06-functions-closures-iife-20",title:"Private State",starterCode:`function createState(initial) {
  let state = initial;
  return {
    get: () => state,
    set: (val) => { state = val; },
    reset: () => { state = initial; }
  };
}
const s = createState(10);
s.set(20);
console.log(s.get());
s.reset();
console.log(s.get());`,solution:`function createState(initial) {
  let state = initial;
  return {
    get: () => state,
    set: (val) => { state = val; },
    reset: () => { state = initial; }
  };
}
const s = createState(10);
s.set(20);
console.log(s.get());
s.reset();
console.log(s.get());`,tests:[{input:[],expected:`20
10`}],hints:["initial is captured","reset uses captured value"]},{id:"06-functions-closures-iife-21",title:"Counter Reset",starterCode:`function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
}
const c = makeCounter();
c.increment();
c.increment();
c.increment();
console.log(c.getCount());
c.reset();
console.log(c.getCount());`,solution:`function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
}
const c = makeCounter();
c.increment();
c.increment();
c.increment();
console.log(c.getCount());
c.reset();
console.log(c.getCount());`,tests:[{input:[],expected:`3
0`}],hints:["reset sets count to 0","Methods share closure"]},{id:"06-functions-closures-iife-22",title:"Closure Event Handler",starterCode:`function createHandler(name) {
  return {
    handle: () => console.log('Handling ' + name),
    getName: () => name
  };
}
const h1 = createHandler('click');
const h2 = createHandler('scroll');
h1.handle();
h2.handle();`,solution:`function createHandler(name) {
  return {
    handle: () => console.log('Handling ' + name),
    getName: () => name
  };
}
const h1 = createHandler('click');
const h2 = createHandler('scroll');
h1.handle();
h2.handle();`,tests:[{input:[],expected:`Handling click
Handling scroll`}],hints:["Each handler has own closure","name is captured"]},{id:"06-functions-closures-iife-23",title:"IIFE Namespace",starterCode:`const App = (function() {
  const _config = { version: '1.0' };
  return {
    getVersion: () => _config.version
  };
})();
console.log(App.getVersion());`,solution:`const App = (function() {
  const _config = { version: '1.0' };
  return {
    getVersion: () => _config.version
  };
})();
console.log(App.getVersion());`,tests:[{input:[],expected:"1.0"}],hints:["IIFE creates namespace","_config is private"]},{id:"06-functions-closures-iife-24",title:"Module Singleton",starterCode:`const instance = (function() {
  let created = false;
  let data = null;
  return {
    init: () => {
      if (!created) {
        data = [1, 2, 3];
        created = true;
      }
      return data;
    }
  };
})();
console.log(instance.init());
console.log(instance.init());`,solution:`const instance = (function() {
  let created = false;
  let data = null;
  return {
    init: () => {
      if (!created) {
        data = [1, 2, 3];
        created = true;
      }
      return data;
    }
  };
})();
console.log(instance.init());
console.log(instance.init());`,tests:[{input:[],expected:`[ 1, 2, 3 ]
[ 1, 2, 3 ]`}],hints:["Singleton pattern","Only creates once"]},{id:"06-functions-closures-iife-25",title:"Closure Factory",starterCode:`function createGreeter(greeting) {
  return (name) => greeting + ', ' + name + '!';
}
const hello = createGreeter('Hello');
const howdy = createGreeter('Howdy');
console.log(hello('World'));
console.log(howdy('Partner'));`,solution:`function createGreeter(greeting) {
  return (name) => greeting + ', ' + name + '!';
}
const hello = createGreeter('Hello');
const howdy = createGreeter('Howdy');
console.log(hello('World'));
console.log(howdy('Partner'));`,tests:[{input:[],expected:`Hello, World!
Howdy, Partner!`}],hints:["Factory returns function","greeting captured"]},{id:"06-functions-closures-iife-26",title:"Private Data",starterCode:`function createUser(name, salary) {
  return {
    getName: () => name,
    getSalary: () => salary,
    raise: (amount) => { salary += amount; }
  };
}
const user = createUser('Alice', 50000);
console.log(user.getName());
user.raise(5000);
console.log(user.getSalary());`,solution:`function createUser(name, salary) {
  return {
    getName: () => name,
    getSalary: () => salary,
    raise: (amount) => { salary += amount; }
  };
}
const user = createUser('Alice', 50000);
console.log(user.getName());
user.raise(5000);
console.log(user.getSalary());`,tests:[{input:[],expected:`Alice
55000`}],hints:["salary is private","Methods access it"]},{id:"06-functions-closures-iife-27",title:"Counter Object Pattern",starterCode:`function createCounterObj() {
  let count = 0;
  return {
    count: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0)
  };
}
const c = createCounterObj();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.count());
c.reset();
console.log(c.count());`,solution:`function createCounterObj() {
  let count = 0;
  return {
    count: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0)
  };
}
const c = createCounterObj();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.count());
c.reset();
console.log(c.count());`,tests:[{input:[],expected:`3
0`}],hints:["Object with methods","Private count"]},{id:"06-functions-closures-iife-28",title:"IIFE Initialization",starterCode:`const config = (function() {
  const settings = { debug: true, env: 'dev' };
  console.log('Config loaded');
  return settings;
})();
console.log(config.env);`,solution:`const config = (function() {
  const settings = { debug: true, env: 'dev' };
  console.log('Config loaded');
  return settings;
})();
console.log(config.env);`,tests:[{input:[],expected:`Config loaded
dev`}],hints:["IIFE runs immediately","Can log during init"]},{id:"06-functions-closures-iife-29",title:"Module Pattern Complete",starterCode:`const TodoList = (function() {
  let todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    getAll: () => [...todos],
    count: () => todos.length
  };
})();
TodoList.add('Buy milk');
TodoList.add('Walk dog');
console.log(TodoList.count());
console.log(TodoList.getAll());`,solution:`const TodoList = (function() {
  let todos = [];
  return {
    add: (todo) => todos.push(todo),
    remove: (index) => todos.splice(index, 1),
    getAll: () => [...todos],
    count: () => todos.length
  };
})();
TodoList.add('Buy milk');
TodoList.add('Walk dog');
console.log(TodoList.count());
console.log(TodoList.getAll());`,tests:[{input:[],expected:`2
[ 'Buy milk', 'Walk dog' ]`}],hints:["Private todos array","Public API methods"]},{id:"06-functions-closures-iife-30",title:"Closure In Callback",starterCode:`function setup() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = setup();
const fn = () => console.log(counter.increment());
fn();
fn();
fn();`,solution:`function setup() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}
const counter = setup();
const fn = () => console.log(counter.increment());
fn();
fn();
fn();`,tests:[{input:[],expected:`1
2
3`}],hints:["Closure persists","Callback uses it"]},{id:"06-functions-closures-iife-31",title:"IIFE With Params",starterCode:`const result = (function(a, b) {
  return a * b;
})(4, 5);
console.log(result);`,solution:`const result = (function(a, b) {
  return a * b;
})(4, 5);
console.log(result);`,tests:[{input:[],expected:"20"}],hints:["Pass arguments","Return value"]},{id:"06-functions-closures-iife-32",title:"Private Array",starterCode:`function createStack() {
  const items = [];
  return {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    size: () => items.length
  };
}
const stack = createStack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.size());`,solution:`function createStack() {
  const items = [];
  return {
    push: (item) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1],
    size: () => items.length
  };
}
const stack = createStack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.size());`,tests:[{input:[],expected:`20
2`}],hints:["Private items array","Public methods only"]},{id:"06-functions-closures-iife-33",title:"Closure Loop Fix Var",starterCode:`const fns = [];
for (var i = 0; i < 3; i++) {
  (function(j) {
    fns.push(() => console.log(j));
  })(i);
}
fns[0]();
fns[1]();
fns[2]();`,solution:`const fns = [];
for (var i = 0; i < 3; i++) {
  (function(j) {
    fns.push(() => console.log(j));
  })(i);
}
fns[0]();
fns[1]();
fns[2]();`,tests:[{input:[],expected:`0
1
2`}],hints:["IIFE captures i","j is local copy"]},{id:"06-functions-closures-iife-34",title:"Memoize Function",starterCode:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,solution:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,tests:[{input:[],expected:`16
16`}],hints:["Cache results","Check cache first"]},{id:"06-functions-closures-iife-35",title:"Debounce Function",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,tests:[{input:[],expected:"c"}],hints:["Reset timer each call","Only last call executes"]},{id:"06-functions-closures-iife-36",title:"Once Function",starterCode:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,solution:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,tests:[{input:[],expected:`Initializing...
42
42`}],hints:["Run only once","Cache result"]},{id:"06-functions-closures-iife-37",title:"Curry Function",starterCode:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,solution:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,tests:[{input:[],expected:"6"}],hints:["Partial application","Collect args until enough"]},{id:"06-functions-closures-iife-38",title:"Partial Application",starterCode:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,solution:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,tests:[{input:[],expected:"8"}],hints:["Fix some args","Add more later"]},{id:"06-functions-closures-iife-39",title:"Pipe Function",starterCode:`const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,solution:`const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,tests:[{input:[],expected:"64"}],hints:["Left to right execution","Reduce to chain"]},{id:"06-functions-closures-iife-40",title:"Retry Pattern",starterCode:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,solution:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,tests:[{input:[],expected:"Success"}],hints:["Try multiple times","Throw on last attempt"]},{id:"06-functions-closures-iife-41",title:"Middleware Pattern",starterCode:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,solution:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,tests:[{input:[],expected:"HELLO, WORLD!"}],hints:["Chain middlewares","Each transforms value"]},{id:"06-functions-closures-iife-42",title:"Decorator Pattern",starterCode:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,solution:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,tests:[{input:[],expected:`Calling add
Result: 5`}],hints:["Wrap function","Add behavior"]},{id:"06-functions-closures-iife-43",title:"Throttle Function",starterCode:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,solution:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,tests:[{input:[],expected:""}],hints:["Limit execution rate","Check time between calls"]},{id:"06-functions-closures-iife-44",title:"Tap Function",starterCode:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,solution:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,tests:[{input:[],expected:`Logged: 42
Result: 42`}],hints:["Side effect then return","Useful for debugging"]},{id:"06-functions-closures-iife-45",title:"Negate Predicate",starterCode:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,solution:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,tests:[{input:[],expected:`true
false`}],hints:["Return opposite result","Use spread args"]},{id:"06-functions-closures-iife-46",title:"Flip Arguments",starterCode:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,solution:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,tests:[{input:[],expected:"-2"}],hints:["Reverse argument order","Then call original"]},{id:"06-functions-closures-iife-47",title:"Conditional Execution",starterCode:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,solution:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,tests:[{input:[],expected:`8
5`}],hints:["Check predicate","Apply or return original"]},{id:"06-functions-closures-iife-48",title:"Mapper Function",starterCode:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,solution:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Return mapper function","Use map inside"]},{id:"06-functions-closures-iife-49",title:"Filter Maker",starterCode:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,solution:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["Return filter function","Use filter inside"]},{id:"06-functions-closures-iife-50",title:"Reducer Pattern",starterCode:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,solution:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,tests:[{input:[],expected:"10"}],hints:["Return reducer function","Use reduce inside"]}],"06-functions-01-function-basics":[{id:"06-functions-function-basics-01",title:"Function Declaration",starterCode:`function greet() {
  console.log('Hello!');
}
greet();`,solution:`function greet() {
  console.log('Hello!');
}
greet();`,tests:[{input:[],expected:"Hello!"}],hints:["Use function keyword","Call function after"]},{id:"06-functions-function-basics-02",title:"Function Expression",starterCode:`const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));`,solution:`const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3));`,tests:[{input:[],expected:"5"}],hints:["Assign function to variable","Use return keyword"]},{id:"06-functions-function-basics-03",title:"Single Parameter",starterCode:`function double(x) {
  return x * 2;
}
console.log(double(5));`,solution:`function double(x) {
  return x * 2;
}
console.log(double(5));`,tests:[{input:[],expected:"10"}],hints:["One parameter","Multiply by 2"]},{id:"06-functions-function-basics-04",title:"Multiple Parameters",starterCode:`function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4));`,solution:`function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(2, 3, 4));`,tests:[{input:[],expected:"24"}],hints:["Three parameters","Multiply all"]},{id:"06-functions-function-basics-05",title:"Default Parameters",starterCode:`function greet(name = 'World') {
  console.log('Hello, ' + name + '!');
}
greet();
greet('Alice');`,solution:`function greet(name = 'World') {
  console.log('Hello, ' + name + '!');
}
greet();
greet('Alice');`,tests:[{input:[],expected:`Hello, World!
Hello, Alice!`}],hints:["Set default value","Use parameter if provided"]},{id:"06-functions-function-basics-06",title:"Rest Parameters",starterCode:`function sum(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));`,solution:`function sum(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));`,tests:[{input:[],expected:"10"}],hints:["...args collects arguments","Use for...of to iterate"]},{id:"06-functions-function-basics-07",title:"Return Statement",starterCode:`function square(n) {
  return n * n;
}
console.log(square(4));`,solution:`function square(n) {
  return n * n;
}
console.log(square(4));`,tests:[{input:[],expected:"16"}],hints:["Return the result","n squared"]},{id:"06-functions-function-basics-08",title:"Void Function",starterCode:`function logMessage(msg) {
  console.log('Log: ' + msg);
}
logMessage('test');`,solution:`function logMessage(msg) {
  console.log('Log: ' + msg);
}
logMessage('test');`,tests:[{input:[],expected:"Log: test"}],hints:["No return needed","Side effect only"]},{id:"06-functions-function-basics-09",title:"Function Hoisting",starterCode:`console.log(add(2, 3));
function add(a, b) {
  return a + b;
}`,solution:`console.log(add(2, 3));
function add(a, b) {
  return a + b;
}`,tests:[{input:[],expected:"5"}],hints:["Declarations are hoisted","Can call before definition"]},{id:"06-functions-function-basics-10",title:"Function Scope",starterCode:`function test() {
  const x = 10;
  console.log(x);
}
test();`,solution:`function test() {
  const x = 10;
  console.log(x);
}
test();`,tests:[{input:[],expected:"10"}],hints:["Variables are local","Accessible inside function"]},{id:"06-functions-function-basics-11",title:"Pure Function",starterCode:`function add(a, b) {
  return a + b;
}
console.log(add(3, 4));`,solution:`function add(a, b) {
  return a + b;
}
console.log(add(3, 4));`,tests:[{input:[],expected:"7"}],hints:["No side effects","Same input = same output"]},{id:"06-functions-function-basics-12",title:"Named Function Expression",starterCode:`const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5));`,solution:`const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5));`,tests:[{input:[],expected:"120"}],hints:["Named for recursion","Base case n <= 1"]},{id:"06-functions-function-basics-13",title:"Anonymous Function Expression",starterCode:`const square = function(n) {
  return n * n;
};
console.log(square(6));`,solution:`const square = function(n) {
  return n * n;
};
console.log(square(6));`,tests:[{input:[],expected:"36"}],hints:["No name after function","Assign to variable"]},{id:"06-functions-function-basics-14",title:"Function .length",starterCode:`function multi(a, b, c) {}
console.log(multi.length);`,solution:`function multi(a, b, c) {}
console.log(multi.length);`,tests:[{input:[],expected:"3"}],hints:[".length returns parameter count","Don't count rest params"]},{id:"06-functions-function-basics-15",title:"Function toString",starterCode:`function hello() { return 'hi'; }
console.log(hello.toString());`,solution:`function hello() { return 'hi'; }
console.log(hello.toString());`,tests:[{input:[],expected:"function hello() { return 'hi'; }"}],hints:[".toString() returns source","Useful for debugging"]},{id:"06-functions-function-basics-16",title:"Call Method",starterCode:`function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const person = {name: 'Bob'};
greet.call(person, 'Hello');`,solution:`function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const person = {name: 'Bob'};
greet.call(person, 'Hello');`,tests:[{input:[],expected:"Hello, Bob"}],hints:["call() sets this","First arg is context"]},{id:"06-functions-function-basics-17",title:"Apply Method",starterCode:`function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [5, 10]));`,solution:`function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [5, 10]));`,tests:[{input:[],expected:"15"}],hints:["apply() takes array","null for no context"]},{id:"06-functions-function-basics-18",title:"Bind Method",starterCode:`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
const person = {name: 'Alice'};
const greetAlice = greet.bind(person);
greetAlice('Hi');`,solution:`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
const person = {name: 'Alice'};
const greetAlice = greet.bind(person);
greetAlice('Hi');`,tests:[{input:[],expected:"Hi Alice"}],hints:["bind() returns new function","Sets this permanently"]},{id:"06-functions-function-basics-19",title:"IIFE",starterCode:`(function() {
  console.log('Immediately invoked!');
})();`,solution:`(function() {
  console.log('Immediately invoked!');
})();`,tests:[{input:[],expected:"Immediately invoked!"}],hints:["Wrap in parentheses","Call immediately ()"]},{id:"06-functions-function-basics-20",title:"Return Object",starterCode:`function createUser(name, age) {
  return { name, age };
}
const user = createUser('Tom', 25);
console.log(user.name + ' is ' + user.age);`,solution:`function createUser(name, age) {
  return { name, age };
}
const user = createUser('Tom', 25);
console.log(user.name + ' is ' + user.age);`,tests:[{input:[],expected:"Tom is 25"}],hints:["Return object literal","Use shorthand properties"]},{id:"06-functions-function-basics-21",title:"Callback Function",starterCode:`function doAction(callback) {
  callback();
}
doAction(function() {
  console.log('Action done!');
});`,solution:`function doAction(callback) {
  callback();
}
doAction(function() {
  console.log('Action done!');
});`,tests:[{input:[],expected:"Action done!"}],hints:["Pass function as argument","Call it inside"]},{id:"06-functions-function-basics-22",title:"Parameter Validation",starterCode:`function divide(a, b) {
  if (b === 0) {
    console.log('Cannot divide by zero');
    return;
  }
  console.log(a / b);
}
divide(10, 0);`,solution:`function divide(a, b) {
  if (b === 0) {
    console.log('Cannot divide by zero');
    return;
  }
  console.log(a / b);
}
divide(10, 0);`,tests:[{input:[],expected:"Cannot divide by zero"}],hints:["Check for zero","Return early"]},{id:"06-functions-function-basics-23",title:"Return Early",starterCode:`function getLength(str) {
  if (!str) return 0;
  return str.length;
}
console.log(getLength('hello'));
console.log(getLength(''));`,solution:`function getLength(str) {
  if (!str) return 0;
  return str.length;
}
console.log(getLength('hello'));
console.log(getLength(''));`,tests:[{input:[],expected:`5
0`}],hints:["Check empty first","Return early if empty"]},{id:"06-functions-function-basics-24",title:"Multiple Return Values",starterCode:`function getStats(arr) {
  let min = arr[0], max = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}
const stats = getStats([3, 1, 4, 1, 5]);
console.log(stats.min + ' ' + stats.max);`,solution:`function getStats(arr) {
  let min = arr[0], max = arr[0];
  for (const n of arr) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}
const stats = getStats([3, 1, 4, 1, 5]);
console.log(stats.min + ' ' + stats.max);`,tests:[{input:[],expected:"1 5"}],hints:["Return object with properties","Find min and max"]},{id:"06-functions-function-basics-25",title:"Side Effects Vs Pure",starterCode:`let counter = 0;
function increment() {
  counter++;
  console.log(counter);
}
increment();
increment();`,solution:`let counter = 0;
function increment() {
  counter++;
  console.log(counter);
}
increment();
increment();`,tests:[{input:[],expected:`1
2`}],hints:["Function modifies external variable","This is a side effect"]},{id:"06-functions-function-basics-26",title:"Purity Test",starterCode:`function add(a, b) {
  return a + b;
}
console.log(add(2, 3) === add(2, 3));`,solution:`function add(a, b) {
  return a + b;
}
console.log(add(2, 3) === add(2, 3));`,tests:[{input:[],expected:"true"}],hints:["Same input gives same output","No side effects"]},{id:"06-functions-function-basics-27",title:"Function As Value",starterCode:`const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
console.log(operations.add(5, 3));
console.log(operations.sub(5, 3));`,solution:`const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
console.log(operations.add(5, 3));
console.log(operations.sub(5, 3));`,tests:[{input:[],expected:`8
2`}],hints:["Functions are values","Store in object"]},{id:"06-functions-function-basics-28",title:"Closure Counter",starterCode:`function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,solution:`function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,tests:[{input:[],expected:`1
2
3`}],hints:["Closure captures count","Increment and return"]},{id:"06-functions-function-basics-29",title:"Recursion Factorial",starterCode:`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`,solution:`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`,tests:[{input:[],expected:"120"}],hints:["Base case: n <= 1","Recursive call"]},{id:"06-functions-function-basics-30",title:"Higher Order Filter",starterCode:`function filterBy(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(filterBy(nums, x => x % 2 === 0));`,solution:`function filterBy(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(filterBy(nums, x => x % 2 === 0));`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Return function parameter","Check predicate"]},{id:"06-functions-function-basics-31",title:"Function Composition",starterCode:`const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,solution:`const compose = (f, g) => x => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,tests:[{input:[],expected:"8"}],hints:["g runs first","f runs on result"]},{id:"06-functions-function-basics-32",title:"Memoization",starterCode:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,solution:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,tests:[{input:[],expected:`16
16`}],hints:["Cache results","Check cache first"]},{id:"06-functions-function-basics-33",title:"Debounce Function",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,tests:[{input:[],expected:"c"}],hints:["Reset timer each call","Only last call executes"]},{id:"06-functions-function-basics-34",title:"Once Function",starterCode:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,solution:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,tests:[{input:[],expected:`Initializing...
42
42`}],hints:["Run only once","Cache result"]},{id:"06-functions-function-basics-35",title:"Curry Function",starterCode:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,solution:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,tests:[{input:[],expected:"6"}],hints:["Partial application","Collect args until enough"]},{id:"06-functions-function-basics-36",title:"Partial Application",starterCode:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,solution:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,tests:[{input:[],expected:"8"}],hints:["Fix some args","Add more later"]},{id:"06-functions-function-basics-37",title:"Pipe Function",starterCode:`const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,solution:`const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,tests:[{input:[],expected:"64"}],hints:["Left to right execution","Reduce to chain"]},{id:"06-functions-function-basics-38",title:"Retry Pattern",starterCode:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,solution:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,tests:[{input:[],expected:"Success"}],hints:["Try multiple times","Throw on last attempt"]},{id:"06-functions-function-basics-39",title:"Middleware Pattern",starterCode:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,solution:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,tests:[{input:[],expected:"HELLO, WORLD!"}],hints:["Chain middlewares","Each transforms value"]},{id:"06-functions-function-basics-40",title:"Decorator Pattern",starterCode:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,solution:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,tests:[{input:[],expected:`Calling add
Result: 5`}],hints:["Wrap function","Add behavior"]},{id:"06-functions-function-basics-41",title:"Throttle Function",starterCode:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,solution:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,tests:[{input:[],expected:""}],hints:["Limit execution rate","Check time between calls"]},{id:"06-functions-function-basics-42",title:"Tap Function",starterCode:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,solution:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,tests:[{input:[],expected:`Logged: 42
Result: 42`}],hints:["Side effect then return","Useful for debugging"]},{id:"06-functions-function-basics-43",title:"Negate Predicate",starterCode:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,solution:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,tests:[{input:[],expected:`true
false`}],hints:["Return opposite result","Use spread args"]},{id:"06-functions-function-basics-44",title:"Flip Arguments",starterCode:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,solution:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,tests:[{input:[],expected:"-2"}],hints:["Reverse argument order","Then call original"]},{id:"06-functions-function-basics-45",title:"Conditional Execution",starterCode:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,solution:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,tests:[{input:[],expected:`8
5`}],hints:["Check predicate","Apply or return original"]},{id:"06-functions-function-basics-46",title:"Mapper Function",starterCode:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,solution:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Return mapper function","Use map inside"]},{id:"06-functions-function-basics-47",title:"Filter Maker",starterCode:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,solution:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["Return filter function","Use filter inside"]},{id:"06-functions-function-basics-48",title:"Reducer Pattern",starterCode:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,solution:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,tests:[{input:[],expected:"10"}],hints:["Return reducer function","Use reduce inside"]},{id:"06-functions-function-basics-49",title:"Chain Functions",starterCode:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,solution:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,tests:[{input:[],expected:"9"}],hints:["Sequential execution","Pass result to next"]},{id:"06-functions-function-basics-50",title:"Accumulator Pattern",starterCode:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,solution:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,tests:[{input:[],expected:"60"}],hints:["Chain methods","Return this"]}],"06-functions-04-higher-order-functions":[{id:"06-functions-higher-order-functions-01",title:"Function As Argument",starterCode:`function doTwice(fn, value) {
  fn(value);
  fn(value);
}
doTwice(console.log, 'Hello');`,solution:`function doTwice(fn, value) {
  fn(value);
  fn(value);
}
doTwice(console.log, 'Hello');`,tests:[{input:[],expected:`Hello
Hello`}],hints:["Pass function as parameter","Call it twice"]},{id:"06-functions-higher-order-functions-02",title:"Function As Return Value",starterCode:`function createMultiplier(n) {
  return (x) => x * n;
}
const triple = createMultiplier(3);
console.log(triple(5));`,solution:`function createMultiplier(n) {
  return (x) => x * n;
}
const triple = createMultiplier(3);
console.log(triple(5));`,tests:[{input:[],expected:"15"}],hints:["Return a function","Closure captures n"]},{id:"06-functions-higher-order-functions-03",title:"Callback Pattern",starterCode:`function fetchData(callback) {
  const data = { name: 'Alice', age: 25 };
  callback(data);
}
fetchData((data) => {
  console.log(data.name + ' is ' + data.age);
});`,solution:`function fetchData(callback) {
  const data = { name: 'Alice', age: 25 };
  callback(data);
}
fetchData((data) => {
  console.log(data.name + ' is ' + data.age);
});`,tests:[{input:[],expected:"Alice is 25"}],hints:["Pass callback function","Call with data"]},{id:"06-functions-higher-order-functions-04",title:"Compose Functions",starterCode:`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,solution:`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,tests:[{input:[],expected:"8"}],hints:["g runs first","f runs on result"]},{id:"06-functions-higher-order-functions-05",title:"Pipe Functions",starterCode:`const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,solution:`const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,tests:[{input:[],expected:"64"}],hints:["Left to right execution","Reduce to chain"]},{id:"06-functions-higher-order-functions-06",title:"Once Wrapper",starterCode:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,solution:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,tests:[{input:[],expected:`Initializing...
42
42`}],hints:["Run only once","Cache result"]},{id:"06-functions-higher-order-functions-07",title:"Debounce Basics",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,tests:[{input:[],expected:"c"}],hints:["Reset timer each call","Only last call executes"]},{id:"06-functions-higher-order-functions-08",title:"Throttle Basics",starterCode:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,solution:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,tests:[{input:[],expected:""}],hints:["Limit execution rate","Check time between calls"]},{id:"06-functions-higher-order-functions-09",title:"Retry Pattern",starterCode:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,solution:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,tests:[{input:[],expected:"Success"}],hints:["Try multiple times","Throw on last attempt"]},{id:"06-functions-higher-order-functions-10",title:"Middleware Pattern",starterCode:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,solution:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,tests:[{input:[],expected:"HELLO, WORLD!"}],hints:["Chain middlewares","Each transforms value"]},{id:"06-functions-higher-order-functions-11",title:"Decorator Pattern",starterCode:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,solution:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,tests:[{input:[],expected:`Calling add
Result: 5`}],hints:["Wrap function","Add behavior"]},{id:"06-functions-higher-order-functions-12",title:"Transformer Function",starterCode:`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,solution:`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,tests:[{input:[],expected:"[ 3, 5, 7 ]"}],hints:["Apply functions to each item","Chain transformations"]},{id:"06-functions-higher-order-functions-13",title:"Chain Functions",starterCode:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,solution:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,tests:[{input:[],expected:"9"}],hints:["Sequential execution","Pass result to next"]},{id:"06-functions-higher-order-functions-14",title:"Accumulator Pattern",starterCode:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,solution:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,tests:[{input:[],expected:"60"}],hints:["Chain methods","Return this"]},{id:"06-functions-higher-order-functions-15",title:"Dispatcher Function",starterCode:`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,solution:`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,tests:[{input:[],expected:`Hello Alice
Goodbye Bob`}],hints:["Map actions to handlers","Call matching handler"]},{id:"06-functions-higher-order-functions-16",title:"Conditional Execution",starterCode:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,solution:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,tests:[{input:[],expected:`8
5`}],hints:["Check predicate","Apply or return original"]},{id:"06-functions-higher-order-functions-17",title:"Mapper Function",starterCode:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,solution:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Return mapper function","Use map inside"]},{id:"06-functions-higher-order-functions-18",title:"Filter Maker",starterCode:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,solution:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["Return filter function","Use filter inside"]},{id:"06-functions-higher-order-functions-19",title:"Reducer Pattern",starterCode:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,solution:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,tests:[{input:[],expected:"10"}],hints:["Return reducer function","Use reduce inside"]},{id:"06-functions-higher-order-functions-20",title:"Tap Function",starterCode:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,solution:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,tests:[{input:[],expected:`Logged: 42
Result: 42`}],hints:["Side effect then return","Useful for debugging"]},{id:"06-functions-higher-order-functions-21",title:"Flow Functions",starterCode:`const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const negate = x => -x;
const process = flow(add1, double, negate);
console.log(process(3));`,solution:`const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const negate = x => -x;
const process = flow(add1, double, negate);
console.log(process(3));`,tests:[{input:[],expected:"-8"}],hints:["Left to right execution","Like pipe"]},{id:"06-functions-higher-order-functions-22",title:"Negate Predicate",starterCode:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,solution:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,tests:[{input:[],expected:`true
false`}],hints:["Return opposite result","Use spread args"]},{id:"06-functions-higher-order-functions-23",title:"Curry Function",starterCode:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,solution:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,tests:[{input:[],expected:"6"}],hints:["Partial application","Collect args until enough"]},{id:"06-functions-higher-order-functions-24",title:"Partial Application",starterCode:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,solution:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,tests:[{input:[],expected:"8"}],hints:["Fix some args","Add more later"]},{id:"06-functions-higher-order-functions-25",title:"Flip Arguments",starterCode:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,solution:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,tests:[{input:[],expected:"-2"}],hints:["Reverse argument order","Then call original"]},{id:"06-functions-higher-order-functions-26",title:"Negate Predicate",starterCode:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,solution:`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,tests:[{input:[],expected:`true
false`}],hints:["Return opposite result","Use spread args"]},{id:"06-functions-higher-order-functions-27",title:"Tap Function",starterCode:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,solution:`function tap(fn) {
  return (value) => {
    fn(value);
    return value;
  };
}
const log = tap(x => console.log('Logged:', x));
const result = log(42);
console.log('Result:', result);`,tests:[{input:[],expected:`Logged: 42
Result: 42`}],hints:["Side effect then return","Useful for debugging"]},{id:"06-functions-higher-order-functions-28",title:"Flow Functions",starterCode:`const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const negate = x => -x;
const process = flow(add1, double, negate);
console.log(process(3));`,solution:`const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const negate = x => -x;
const process = flow(add1, double, negate);
console.log(process(3));`,tests:[{input:[],expected:"-8"}],hints:["Left to right execution","Like pipe"]},{id:"06-functions-higher-order-functions-29",title:"Conditional Execution",starterCode:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,solution:`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,tests:[{input:[],expected:`8
5`}],hints:["Check predicate","Apply or return original"]},{id:"06-functions-higher-order-functions-30",title:"Mapper Function",starterCode:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,solution:`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["Return mapper function","Use map inside"]},{id:"06-functions-higher-order-functions-31",title:"Filter Maker",starterCode:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,solution:`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["Return filter function","Use filter inside"]},{id:"06-functions-higher-order-functions-32",title:"Reducer Pattern",starterCode:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,solution:`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,tests:[{input:[],expected:"10"}],hints:["Return reducer function","Use reduce inside"]},{id:"06-functions-higher-order-functions-33",title:"Compose Functions",starterCode:`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,solution:`const compose = (f, g) => (x) => f(g(x));
const add1 = x => x + 1;
const double = x => x * 2;
const add1ThenDouble = compose(double, add1);
console.log(add1ThenDouble(3));`,tests:[{input:[],expected:"8"}],hints:["g runs first","f runs on result"]},{id:"06-functions-higher-order-functions-34",title:"Pipe Functions",starterCode:`const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,solution:`const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;
const transform = pipe(add1, double, square);
console.log(transform(3));`,tests:[{input:[],expected:"64"}],hints:["Left to right execution","Reduce to chain"]},{id:"06-functions-higher-order-functions-35",title:"Once Wrapper",starterCode:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,solution:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,tests:[{input:[],expected:`Initializing...
42
42`}],hints:["Run only once","Cache result"]},{id:"06-functions-higher-order-functions-36",title:"Debounce Basics",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,tests:[{input:[],expected:"c"}],hints:["Reset timer each call","Only last call executes"]},{id:"06-functions-higher-order-functions-37",title:"Throttle Basics",starterCode:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,solution:`function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,tests:[{input:[],expected:""}],hints:["Limit execution rate","Check time between calls"]},{id:"06-functions-higher-order-functions-38",title:"Retry Pattern",starterCode:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,solution:`function retry(fn, attempts) {
  return function(...args) {
    for (let i = 0; i < attempts; i++) {
      try {
        return fn(...args);
      } catch (e) {
        if (i === attempts - 1) throw e;
      }
    }
  };
}
let count = 0;
const unstable = () => {
  count++;
  if (count < 3) throw new Error('Fail');
  return 'Success';
};
const reliable = retry(unstable, 3);
console.log(reliable());`,tests:[{input:[],expected:"Success"}],hints:["Try multiple times","Throw on last attempt"]},{id:"06-functions-higher-order-functions-39",title:"Middleware Pattern",starterCode:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,solution:`function createPipeline(...middlewares) {
  return (data) => {
    return middlewares.reduce((value, middleware) => middleware(value), data);
  };
}
const addPrefix = (s) => 'Hello, ' + s;
const toUpper = (s) => s.toUpperCase();
const addExclaim = (s) => s + '!';
const greet = createPipeline(addPrefix, toUpper, addExclaim);
console.log(greet('world'));`,tests:[{input:[],expected:"HELLO, WORLD!"}],hints:["Chain middlewares","Each transforms value"]},{id:"06-functions-higher-order-functions-40",title:"Decorator Pattern",starterCode:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,solution:`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,tests:[{input:[],expected:`Calling add
Result: 5`}],hints:["Wrap function","Add behavior"]},{id:"06-functions-higher-order-functions-41",title:"Transformer Function",starterCode:`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,solution:`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,tests:[{input:[],expected:"[ 3, 5, 7 ]"}],hints:["Apply functions to each item","Chain transformations"]},{id:"06-functions-higher-order-functions-42",title:"Chain Functions",starterCode:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,solution:`function chain(...fns) {
  return (initial) => {
    let result = initial;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}
const process = chain(
  x => x + 1,
  x => x * 2,
  x => x - 3
);
console.log(process(5));`,tests:[{input:[],expected:"9"}],hints:["Sequential execution","Pass result to next"]},{id:"06-functions-higher-order-functions-43",title:"Accumulator Pattern",starterCode:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,solution:`function accumulator() {
  let total = 0;
  return {
    add: (n) => { total += n; return this; },
    value: () => total
  };
}
const acc = accumulator();
acc.add(10).add(20).add(30);
console.log(acc.value());`,tests:[{input:[],expected:"60"}],hints:["Chain methods","Return this"]},{id:"06-functions-higher-order-functions-44",title:"Dispatcher Function",starterCode:`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,solution:`function createDispatcher(handlers) {
  return (action, payload) => {
    if (handlers[action]) {
      handlers[action](payload);
    }
  };
}
const dispatch = createDispatcher({
  greet: (name) => console.log('Hello ' + name),
  farewell: (name) => console.log('Goodbye ' + name)
});
dispatch('greet', 'Alice');
dispatch('farewell', 'Bob');`,tests:[{input:[],expected:`Hello Alice
Goodbye Bob`}],hints:["Map actions to handlers","Call matching handler"]},{id:"06-functions-higher-order-functions-45",title:"Curry Function",starterCode:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,solution:`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));`,tests:[{input:[],expected:"6"}],hints:["Partial application","Collect args until enough"]},{id:"06-functions-higher-order-functions-46",title:"Partial Application",starterCode:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,solution:`function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add5 = partial((a, b) => a + b, 5);
console.log(add5(3));`,tests:[{input:[],expected:"8"}],hints:["Fix some args","Add more later"]},{id:"06-functions-higher-order-functions-47",title:"Flip Arguments",starterCode:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,solution:`function flip(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}
const subtract = flip((a, b) => a - b);
console.log(subtract(5, 3));`,tests:[{input:[],expected:"-2"}],hints:["Reverse argument order","Then call original"]},{id:"06-functions-higher-order-functions-48",title:"Memoize Basics",starterCode:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,solution:`function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const square = memoize(x => x * x);
console.log(square(4));
console.log(square(4));`,tests:[{input:[],expected:`16
16`}],hints:["Cache results","Check cache first"]},{id:"06-functions-higher-order-functions-49",title:"Once Function",starterCode:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,solution:`function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 42;
});
console.log(init());
console.log(init());`,tests:[{input:[],expected:`Initializing...
42
42`}],hints:["Run only once","Cache result"]},{id:"06-functions-higher-order-functions-50",title:"Debounce Basics",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce(console.log, 100);
log('a');
log('b');
log('c');`,tests:[{input:[],expected:"c"}],hints:["Reset timer each call","Only last call executes"]}],"07-arrays-01-array-methods":[{id:"07-arrays-array-methods-01",title:"Push Element",starterCode:`const arr = [1, 2, 3];
arr.____(4);
console.log(arr);`,solution:`const arr = [1, 2, 3];
arr.push(4);
console.log(arr);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["push adds to end","Mutates original array"]},{id:"07-arrays-array-methods-02",title:"Pop Element",starterCode:`const arr = [1, 2, 3];
const last = arr.____();
console.log(last);
console.log(arr);`,solution:`const arr = [1, 2, 3];
const last = arr.pop();
console.log(last);
console.log(arr);`,tests:[{input:[],expected:`3
[ 1, 2 ]`}],hints:["pop removes last element","Returns removed element"]},{id:"07-arrays-array-methods-03",title:"Shift Element",starterCode:`const arr = [1, 2, 3];
const first = arr.____();
console.log(first);
console.log(arr);`,solution:`const arr = [1, 2, 3];
const first = arr.shift();
console.log(first);
console.log(arr);`,tests:[{input:[],expected:`1
[ 2, 3 ]`}],hints:["shift removes first element","Returns removed element"]},{id:"07-arrays-array-methods-04",title:"Unshift Element",starterCode:`const arr = [2, 3, 4];
arr.____(1);
console.log(arr);`,solution:`const arr = [2, 3, 4];
arr.unshift(1);
console.log(arr);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["unshift adds to beginning","Mutates original array"]},{id:"07-arrays-array-methods-05",title:"Splice Remove",starterCode:`const arr = ['a', 'b', 'c', 'd'];
arr.____(1, 2);
console.log(arr);`,solution:`const arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2);
console.log(arr);`,tests:[{input:[],expected:"[ 'a', 'd' ]"}],hints:["splice(index, count) removes","Start at index 1, remove 2"]},{id:"07-arrays-array-methods-06",title:"Splice Insert",starterCode:`const arr = ['a', 'c', 'd'];
arr.____(1, 0, 'b');
console.log(arr);`,solution:`const arr = ['a', 'c', 'd'];
arr.splice(1, 0, 'b');
console.log(arr);`,tests:[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],hints:["splice(index, 0, item) inserts","No elements removed"]},{id:"07-arrays-array-methods-07",title:"Splice Replace",starterCode:`const arr = [1, 2, 3, 4];
arr.____(1, 2, 20, 30);
console.log(arr);`,solution:`const arr = [1, 2, 3, 4];
arr.splice(1, 2, 20, 30);
console.log(arr);`,tests:[{input:[],expected:"[ 1, 20, 30, 4 ]"}],hints:["splice replaces elements","Remove 2, insert 2"]},{id:"07-arrays-array-methods-08",title:"Slice Copy",starterCode:`const arr = [1, 2, 3, 4, 5];
const copy = arr.____();
console.log(copy);`,solution:`const arr = [1, 2, 3, 4, 5];
const copy = arr.slice();
console.log(copy);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["slice with no args copies","Does not mutate"]},{id:"07-arrays-array-methods-09",title:"Slice Subarray",starterCode:`const arr = [1, 2, 3, 4, 5];
const sub = arr.____(1, 4);
console.log(sub);`,solution:`const arr = [1, 2, 3, 4, 5];
const sub = arr.slice(1, 4);
console.log(sub);`,tests:[{input:[],expected:"[ 2, 3, 4 ]"}],hints:["slice(start, end)","End index exclusive"]},{id:"07-arrays-array-methods-10",title:"IndexOf",starterCode:`const arr = ['a', 'b', 'c', 'b'];
console.log(arr.____('b'));`,solution:`const arr = ['a', 'b', 'c', 'b'];
console.log(arr.indexOf('b'));`,tests:[{input:[],expected:"1"}],hints:["indexOf returns first match","Returns -1 if not found"]},{id:"07-arrays-array-methods-11",title:"Includes",starterCode:`const arr = [1, 2, 3, 4, 5];
console.log(arr.____(3));`,solution:`const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3));`,tests:[{input:[],expected:"true"}],hints:["includes returns boolean","Checks if element exists"]},{id:"07-arrays-array-methods-12",title:"Find",starterCode:`const nums = [1, 2, 3, 4, 5];
const found = nums.____(x => x > 3);
console.log(found);`,solution:`const nums = [1, 2, 3, 4, 5];
const found = nums.find(x => x > 3);
console.log(found);`,tests:[{input:[],expected:"4"}],hints:["find returns first match","Returns undefined if none"]},{id:"07-arrays-array-methods-13",title:"FindIndex",starterCode:`const nums = [10, 20, 30, 40];
const idx = nums.____(x => x === 30);
console.log(idx);`,solution:`const nums = [10, 20, 30, 40];
const idx = nums.findIndex(x => x === 30);
console.log(idx);`,tests:[{input:[],expected:"2"}],hints:["findIndex returns index","Returns -1 if not found"]},{id:"07-arrays-array-methods-14",title:"Some",starterCode:`const nums = [1, 2, 3, 4, 5];
console.log(nums.____(x => x > 3));`,solution:`const nums = [1, 2, 3, 4, 5];
console.log(nums.some(x => x > 3));`,tests:[{input:[],expected:"true"}],hints:["some checks if any match","Returns boolean"]},{id:"07-arrays-array-methods-15",title:"Every",starterCode:`const nums = [2, 4, 6, 8];
console.log(nums.____(x => x % 2 === 0));`,solution:`const nums = [2, 4, 6, 8];
console.log(nums.every(x => x % 2 === 0));`,tests:[{input:[],expected:"true"}],hints:["every checks if all match","Returns boolean"]},{id:"07-arrays-array-methods-16",title:"Flat",starterCode:`const arr = [[1, 2], [3, 4], [5]];
console.log(arr.____());`,solution:`const arr = [[1, 2], [3, 4], [5]];
console.log(arr.flat());`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["flat flattens one level","Default depth is 1"]},{id:"07-arrays-array-methods-17",title:"FlatMap",starterCode:`const arr = [1, 2, 3];
console.log(arr.____(x => [x, x * 2]));`,solution:`const arr = [1, 2, 3];
console.log(arr.flatMap(x => [x, x * 2]));`,tests:[{input:[],expected:"[ 1, 2, 2, 4, 3, 6 ]"}],hints:["flatMap maps then flattens","Callback returns array"]},{id:"07-arrays-array-methods-18",title:"Join",starterCode:`const arr = ['hello', 'world'];
console.log(arr.____(' '));`,solution:`const arr = ['hello', 'world'];
console.log(arr.join(' '));`,tests:[{input:[],expected:"hello world"}],hints:["join concatenates elements","Separator between items"]},{id:"07-arrays-array-methods-19",title:"Reverse",starterCode:`const arr = [1, 2, 3, 4];
arr.____();
console.log(arr);`,solution:`const arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);`,tests:[{input:[],expected:"[ 4, 3, 2, 1 ]"}],hints:["reverse mutates array","Reverses in place"]},{id:"07-arrays-array-methods-20",title:"Sort Numbers",starterCode:`const arr = [3, 1, 4, 1, 5];
arr.____((a, b) => a - b);
console.log(arr);`,solution:`const arr = [3, 1, 4, 1, 5];
arr.sort((a, b) => a - b);
console.log(arr);`,tests:[{input:[],expected:"[ 1, 1, 3, 4, 5 ]"}],hints:["Sort needs compare function","a - b for ascending"]},{id:"07-arrays-array-methods-21",title:"Sort Strings",starterCode:`const arr = ['banana', 'apple', 'cherry'];
arr.____();
console.log(arr);`,solution:`const arr = ['banana', 'apple', 'cherry'];
arr.sort();
console.log(arr);`,tests:[{input:[],expected:"[ 'apple', 'banana', 'cherry' ]"}],hints:["Default sort is lexicographic","No compare needed for strings"]},{id:"07-arrays-array-methods-22",title:"Fill",starterCode:`const arr = [1, 2, 3, 4, 5];
arr.____(0, 1, 4);
console.log(arr);`,solution:`const arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr);`,tests:[{input:[],expected:"[ 1, 0, 0, 0, 5 ]"}],hints:["fill(value, start, end)","Fills range with value"]},{id:"07-arrays-array-methods-23",title:"At Method",starterCode:`const arr = [10, 20, 30, 40, 50];
console.log(arr.____(-1));`,solution:`const arr = [10, 20, 30, 40, 50];
console.log(arr.at(-1));`,tests:[{input:[],expected:"50"}],hints:["at() supports negative index","-1 is last element"]},{id:"07-arrays-array-methods-24",title:"At Positive",starterCode:`const arr = ['a', 'b', 'c', 'd'];
console.log(arr.____(2));`,solution:`const arr = ['a', 'b', 'c', 'd'];
console.log(arr.at(2));`,tests:[{input:[],expected:"c"}],hints:["at() with positive index","Same as bracket access"]},{id:"07-arrays-array-methods-25",title:"Concat",starterCode:`const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.____(arr2);
console.log(result);`,solution:`const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["concat merges arrays","Does not mutate originals"]},{id:"07-arrays-array-methods-26",title:"Keys",starterCode:`const arr = ['a', 'b', 'c'];
const keys = arr.____();
console.log([...keys]);`,solution:`const arr = ['a', 'b', 'c'];
const keys = arr.keys();
console.log([...keys]);`,tests:[{input:[],expected:"[ 0, 1, 2 ]"}],hints:["keys() returns iterator","Spread to see values"]},{id:"07-arrays-array-methods-27",title:"Values",starterCode:`const arr = [10, 20, 30];
const vals = arr.____();
console.log([...vals]);`,solution:`const arr = [10, 20, 30];
const vals = arr.values();
console.log([...vals]);`,tests:[{input:[],expected:"[ 10, 20, 30 ]"}],hints:["values() returns iterator","Spread to see values"]},{id:"07-arrays-array-methods-28",title:"Entries",starterCode:`const arr = ['x', 'y', 'z'];
const entries = arr.____();
console.log([...entries]);`,solution:`const arr = ['x', 'y', 'z'];
const entries = arr.entries();
console.log([...entries]);`,tests:[{input:[],expected:"[ [ 0, 'x' ], [ 1, 'y' ], [ 2, 'z' ] ]"}],hints:["entries() returns [index, value]","Spread to see pairs"]},{id:"07-arrays-array-methods-29",title:"CopyWithin",starterCode:`const arr = [1, 2, 3, 4, 5];
arr.____(0, 3);
console.log(arr);`,solution:`const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr);`,tests:[{input:[],expected:"[ 4, 5, 3, 4, 5 ]"}],hints:["copyWithin(target, start)","Copies within array"]},{id:"07-arrays-array-methods-30",title:"Flat Depth 2",starterCode:`const arr = [[1, [2]], [3, [4, [5]]]];
console.log(arr.____(2));`,solution:`const arr = [[1, [2]], [3, [4, [5]]]];
console.log(arr.flat(2));`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["Pass depth to flat()","Depth 2 flattens two levels"]},{id:"07-arrays-array-methods-31",title:"Splice Insert Multiple",starterCode:`const arr = ['a', 'd'];
arr.____(1, 0, 'b', 'c');
console.log(arr);`,solution:`const arr = ['a', 'd'];
arr.splice(1, 0, 'b', 'c');
console.log(arr);`,tests:[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],hints:["Insert multiple items","Count is 0 for insert"]},{id:"07-arrays-array-methods-32",title:"Slice Negative",starterCode:`const arr = [1, 2, 3, 4, 5];
console.log(arr.____(-3));`,solution:`const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-3));`,tests:[{input:[],expected:"[ 3, 4, 5 ]"}],hints:["Negative index from end","-3 starts 3 from end"]},{id:"07-arrays-array-methods-33",title:"IndexOf From Index",starterCode:`const arr = [1, 2, 3, 2, 1];
console.log(arr.____(2, 2));`,solution:`const arr = [1, 2, 3, 2, 1];
console.log(arr.indexOf(2, 2));`,tests:[{input:[],expected:"3"}],hints:["indexOf(value, fromIndex)","Start searching from index 2"]},{id:"07-arrays-array-methods-34",title:"Find Callback",starterCode:`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const person = people.____(p => p.age > 28);
console.log(person.name);`,solution:`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const person = people.find(p => p.age > 28);
console.log(person.name);`,tests:[{input:[],expected:"Bob"}],hints:["Find first matching object","Access property"]},{id:"07-arrays-array-methods-35",title:"Every Predicate",starterCode:`const nums = [2, 4, 6, 8, 10];
console.log(nums.____(n => n % 2 === 0));`,solution:`const nums = [2, 4, 6, 8, 10];
console.log(nums.every(n => n % 2 === 0));`,tests:[{input:[],expected:"true"}],hints:["Every element must pass","All even"]},{id:"07-arrays-array-methods-36",title:"Some Condition",starterCode:`const nums = [1, 3, 5, 8, 9];
console.log(nums.____(n => n % 2 === 0));`,solution:`const nums = [1, 3, 5, 8, 9];
console.log(nums.some(n => n % 2 === 0));`,tests:[{input:[],expected:"true"}],hints:["Some means at least one","8 is even"]},{id:"07-arrays-array-methods-37",title:"Flat Reduce",starterCode:`const arr = [[1, 2], [3], [4, 5, 6]];
console.log(arr.____().length);`,solution:`const arr = [[1, 2], [3], [4, 5, 6]];
console.log(arr.flat().length);`,tests:[{input:[],expected:"6"}],hints:["Flat first, then get length","Count all elements"]},{id:"07-arrays-array-methods-38",title:"Join Separator",starterCode:`const arr = ['2024', '01', '15'];
console.log(arr.____('-'));`,solution:`const arr = ['2024', '01', '15'];
console.log(arr.join('-'));`,tests:[{input:[],expected:"2024-01-15"}],hints:["Join with dash separator","Creates date string"]},{id:"07-arrays-array-methods-39",title:"Sort Descending",starterCode:`const arr = [5, 2, 8, 1, 9];
arr.____((a, b) => b - a);
console.log(arr);`,solution:`const arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => b - a);
console.log(arr);`,tests:[{input:[],expected:"[ 9, 8, 5, 2, 1 ]"}],hints:["b - a for descending","Reverse compare order"]},{id:"07-arrays-array-methods-40",title:"Fill Start End",starterCode:`const arr = [0, 0, 0, 0, 0];
arr.____(7, 2, 4);
console.log(arr);`,solution:`const arr = [0, 0, 0, 0, 0];
arr.fill(7, 2, 4);
console.log(arr);`,tests:[{input:[],expected:"[ 0, 0, 7, 7, 0 ]"}],hints:["Fill from index 2 to 4","End index exclusive"]},{id:"07-arrays-array-methods-41",title:"Chaining Methods",starterCode:`const arr = [1, 2, 3, 4, 5, 6];
const result = arr.____(x => x % 2 === 0).map(x => x * 10);
console.log(result);`,solution:`const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(x => x % 2 === 0).map(x => x * 10);
console.log(result);`,tests:[{input:[],expected:"[ 20, 40, 60 ]"}],hints:["Filter then map","Chain array methods"]},{id:"07-arrays-array-methods-42",title:"Mutable vs Immutable",starterCode:`const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.____(4);
console.log(arr1 === arr2);`,solution:`const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1 === arr2);`,tests:[{input:[],expected:"true"}],hints:["Assignment copies reference","Same array in memory"]},{id:"07-arrays-array-methods-43",title:"Method Return Values",starterCode:`const arr = [1, 2, 3];
const popped = arr.pop();
const pushed = arr.____(4);
console.log(popped);
console.log(pushed);`,solution:`const arr = [1, 2, 3];
const popped = arr.pop();
const pushed = arr.push(4);
console.log(popped);
console.log(pushed);`,tests:[{input:[],expected:`3
4`}],hints:["pop returns removed","push returns new length"]},{id:"07-arrays-array-methods-44",title:"Map Iteration",starterCode:`const arr = [1, 2, 3];
arr.____(x => console.log(x));`,solution:`const arr = [1, 2, 3];
arr.forEach(x => console.log(x));`,tests:[{input:[],expected:`1
2
3`}],hints:["forEach for side effects","No return value"]},{id:"07-arrays-array-methods-45",title:"Flat Depth Infinity",starterCode:`const arr = [[1, [2, [3, [4]]]]];
console.log(arr.____(Infinity));`,solution:`const arr = [[1, [2, [3, [4]]]]];
console.log(arr.flat(Infinity));`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Infinity flattens all levels","Fully flattens nested"]},{id:"07-arrays-array-methods-46",title:"Splice Return",starterCode:`const arr = ['a', 'b', 'c', 'd'];
const removed = arr.____(1, 2);
console.log(removed);
console.log(arr);`,solution:`const arr = ['a', 'b', 'c', 'd'];
const removed = arr.splice(1, 2);
console.log(removed);
console.log(arr);`,tests:[{input:[],expected:`[ 'b', 'c' ]
[ 'a', 'd' ]`}],hints:["splice returns removed items","Array with removed elements"]},{id:"07-arrays-array-methods-47",title:"Slice No Mutation",starterCode:`const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
arr.____(0);
console.log(sliced);`,solution:`const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
arr.push(0);
console.log(sliced);`,tests:[{input:[],expected:"[ 2, 3 ]"}],hints:["slice creates new array","Changes to original don't affect copy"]},{id:"07-arrays-array-methods-48",title:"Find Object",starterCode:`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const user = users.find(u => u.age > 28);
console.log(user.name);`,solution:`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const user = users.find(u => u.age > 28);
console.log(user.name);`,tests:[{input:[],expected:"Bob"}],hints:["find returns matching object","Access property"]},{id:"07-arrays-array-methods-49",title:"Some Check",starterCode:`const arr = [1, 3, 5, 7, 8];
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven);`,solution:`const arr = [1, 3, 5, 7, 8];
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven);`,tests:[{input:[],expected:"true"}],hints:["some checks if any match","Returns boolean"]},{id:"07-arrays-array-methods-50",title:"Every Check",starterCode:`const arr = [2, 4, 6, 8];
const allEven = arr.every(x => x % 2 === 0);
console.log(allEven);`,solution:`const arr = [2, 4, 6, 8];
const allEven = arr.every(x => x % 2 === 0);
console.log(allEven);`,tests:[{input:[],expected:"true"}],hints:["every checks if all match","Returns boolean"]}],"07-arrays-03-array-patterns":[{id:"07-arrays-array-patterns-01",title:"Flatten Array",starterCode:`const arr = [[1, 2], [3, 4], [5]];
const flat = arr.____();
console.log(flat);`,solution:`const arr = [[1, 2], [3, 4], [5]];
const flat = arr.flat();
console.log(flat);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["flat() flattens one level","Default depth is 1"]},{id:"07-arrays-array-patterns-02",title:"Chunk Array",starterCode:`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));`,solution:`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));`,tests:[{input:[],expected:"[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]"}],hints:["Slice into chunks","Step by size"]},{id:"07-arrays-array-patterns-03",title:"Unique Array",starterCode:`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);`,solution:`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Set removes duplicates","Spread back to array"]},{id:"07-arrays-array-patterns-04",title:"Intersection",starterCode:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => arr2.includes(x));
console.log(result);`,solution:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => arr2.includes(x));
console.log(result);`,tests:[{input:[],expected:"[ 3, 4 ]"}],hints:["filter with includes","Common elements"]},{id:"07-arrays-array-patterns-05",title:"Difference",starterCode:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => !arr2.includes(x));
console.log(result);`,solution:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const result = arr1.filter(x => !arr2.includes(x));
console.log(result);`,tests:[{input:[],expected:"[ 1, 2 ]"}],hints:["filter with !includes","Elements in arr1 not in arr2"]},{id:"07-arrays-array-patterns-06",title:"Zip Arrays",starterCode:`const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const result = arr1.map((x, i) => [x, arr2[i]]);
console.log(result);`,solution:`const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const result = arr1.map((x, i) => [x, arr2[i]]);
console.log(result);`,tests:[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ]"}],hints:["Map with index","Pair elements"]},{id:"07-arrays-array-patterns-07",title:"Rotate Left",starterCode:`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(1).concat(arr.slice(0, 1));
console.log(rotated);`,solution:`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(1).concat(arr.slice(0, 1));
console.log(rotated);`,tests:[{input:[],expected:"[ 2, 3, 4, 5, 1 ]"}],hints:["Slice from index 1","Concat first element"]},{id:"07-arrays-array-patterns-08",title:"Rotate Right",starterCode:`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(-1).concat(arr.slice(0, -1));
console.log(rotated);`,solution:`const arr = [1, 2, 3, 4, 5];
const rotated = arr.slice(-1).concat(arr.slice(0, -1));
console.log(rotated);`,tests:[{input:[],expected:"[ 5, 1, 2, 3, 4 ]"}],hints:["Slice last element","Concat with rest"]},{id:"07-arrays-array-patterns-09",title:"Compact Array",starterCode:`const arr = [0, 1, false, 2, '', 3, null, 4];
const compact = arr.filter(Boolean);
console.log(compact);`,solution:`const arr = [0, 1, false, 2, '', 3, null, 4];
const compact = arr.filter(Boolean);
console.log(compact);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Boolean as callback","Remove falsy values"]},{id:"07-arrays-array-patterns-10",title:"Group By Property",starterCode:`const people = [
  {name: 'Alice', dept: 'eng'},
  {name: 'Bob', dept: 'sales'},
  {name: 'Charlie', dept: 'eng'}
];
const grouped = people.reduce((acc, p) => {
  acc[p.dept] = acc[p.dept] || [];
  acc[p.dept].push(p.name);
  return acc;
}, {});
console.log(grouped);`,solution:`const people = [
  {name: 'Alice', dept: 'eng'},
  {name: 'Bob', dept: 'sales'},
  {name: 'Charlie', dept: 'eng'}
];
const grouped = people.reduce((acc, p) => {
  acc[p.dept] = acc[p.dept] || [];
  acc[p.dept].push(p.name);
  return acc;
}, {});
console.log(grouped);`,tests:[{input:[],expected:"{ eng: [ 'Alice', 'Charlie' ], sales: [ 'Bob' ] }"}],hints:["Group by dept","Reduce to object"]},{id:"07-arrays-array-patterns-11",title:"Sort Objects",starterCode:`const people = [{name: 'Bob', age: 30}, {name: 'Alice', age: 25}, {name: 'Charlie', age: 35}];
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name));`,solution:`const people = [{name: 'Bob', age: 30}, {name: 'Alice', age: 25}, {name: 'Charlie', age: 35}];
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name));`,tests:[{input:[],expected:"[ 'Alice', 'Bob', 'Charlie' ]"}],hints:["Sort by age property","Map to names after"]},{id:"07-arrays-array-patterns-12",title:"Deep Flatten",starterCode:`function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
}
console.log(deepFlatten([1, [2, [3, [4]]]]));`,solution:`function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
}
console.log(deepFlatten([1, [2, [3, [4]]]]));`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Recursive flatten","Check Array.isArray"]},{id:"07-arrays-array-patterns-13",title:"Partition",starterCode:`function partition(arr, predicate) {
  return arr.reduce((acc, x) => {
    acc[predicate(x) ? 0 : 1].push(x);
    return acc;
}, [[], []]);
}
console.log(partition([1,2,3,4,5], x => x > 3));`,solution:`function partition(arr, predicate) {
  return arr.reduce((acc, x) => {
    acc[predicate(x) ? 0 : 1].push(x);
    return acc;
  }, [[], []]);
}
console.log(partition([1,2,3,4,5], x => x > 3));`,tests:[{input:[],expected:"[ [ 4, 5 ], [ 1, 2, 3 ] ]"}],hints:["Two buckets","true goes first"]},{id:"07-arrays-array-patterns-14",title:"Sliding Window",starterCode:`function slidingWindow(arr, size) {
  return arr.slice(0, arr.length - size + 1).map((_, i) => arr.slice(i, i + size));
}
console.log(slidingWindow([1,2,3,4,5], 3));`,solution:`function slidingWindow(arr, size) {
  return arr.slice(0, arr.length - size + 1).map((_, i) => arr.slice(i, i + size));
}
console.log(slidingWindow([1,2,3,4,5], 3));`,tests:[{input:[],expected:"[ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]"}],hints:["Slice windows of size","Map with slice"]},{id:"07-arrays-array-patterns-15",title:"Deduplicate",starterCode:`const arr = [1, 1, 2, 3, 3, 3, 4, 4];
const deduped = [...new Set(arr)];
console.log(deduped);`,solution:`const arr = [1, 1, 2, 3, 3, 3, 4, 4];
const deduped = [...new Set(arr)];
console.log(deduped);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Set for unique values","Spread to array"]},{id:"07-arrays-array-patterns-16",title:"Merge Sorted",starterCode:`function mergeSorted(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,solution:`function mergeSorted(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["Concat then sort","Use compare function"]},{id:"07-arrays-array-patterns-17",title:"Interleave",starterCode:`const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const result = arr1.flatMap((x, i) => [x, arr2[i]]);
console.log(result);`,solution:`const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const result = arr1.flatMap((x, i) => [x, arr2[i]]);
console.log(result);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["flatMap returns pairs","Interleave elements"]},{id:"07-arrays-array-patterns-18",title:"Circular Shift",starterCode:`function circularShift(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(circularShift([1,2,3,4,5], 2));`,solution:`function circularShift(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(circularShift([1,2,3,4,5], 2));`,tests:[{input:[],expected:"[ 3, 4, 5, 1, 2 ]"}],hints:["Modulo for wrap around","Slice and concat"]},{id:"07-arrays-array-patterns-19",title:"Matrix Flatten",starterCode:`const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix.flat());`,solution:`const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix.flat());`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]"}],hints:["flat() on 2D array","One level flatten"]},{id:"07-arrays-array-patterns-20",title:"Chunking Practice",starterCode:`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk(['a','b','c','d','e'], 3));`,solution:`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk(['a','b','c','d','e'], 3));`,tests:[{input:[],expected:"[ [ 'a', 'b', 'c' ], [ 'd', 'e' ] ]"}],hints:["Loop with step size","Slice chunks"]},{id:"07-arrays-array-patterns-21",title:"Frequency Count",starterCode:`function frequency(arr) {
  return arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
}
console.log(frequency(['a','b','a','c','b','a']));`,solution:`function frequency(arr) {
  return arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
}
console.log(frequency(['a','b','a','c','b','a']));`,tests:[{input:[],expected:"{ a: 3, b: 2, c: 1 }"}],hints:["Count occurrences","Use reduce"]},{id:"07-arrays-array-patterns-22",title:"Unique Filter",starterCode:`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,solution:`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Check first occurrence","indexOf equals index"]},{id:"07-arrays-array-patterns-23",title:"Intersection Filter",starterCode:`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const common = arr1.filter(x => arr2.includes(x));
console.log(common);`,solution:`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const common = arr1.filter(x => arr2.includes(x));
console.log(common);`,tests:[{input:[],expected:"[ 3, 4, 5 ]"}],hints:["Filter with includes","Common elements"]},{id:"07-arrays-array-patterns-24",title:"Difference Filter",starterCode:`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5];
const diff = arr1.filter(x => !arr2.includes(x));
console.log(diff);`,solution:`const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5];
const diff = arr1.filter(x => !arr2.includes(x));
console.log(diff);`,tests:[{input:[],expected:"[ 1, 2 ]"}],hints:["Filter with !includes","Not in second array"]},{id:"07-arrays-array-patterns-25",title:"Zip Longest",starterCode:`function zipLongest(a, b) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] || null, b[i] || null]);
}
console.log(zipLongest([1,2], ['a','b','c']));`,solution:`function zipLongest(a, b) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] || null, b[i] || null]);
}
console.log(zipLongest([1,2], ['a','b','c']));`,tests:[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ null, 'c' ] ]"}],hints:["Array.from with length","Pad with null"]},{id:"07-arrays-array-patterns-26",title:"Rotate Left N",starterCode:`function rotateLeft(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(rotateLeft([1,2,3,4,5], 3));`,solution:`function rotateLeft(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(rotateLeft([1,2,3,4,5], 3));`,tests:[{input:[],expected:"[ 4, 5, 1, 2, 3 ]"}],hints:["Modulo for wrap","Slice then concat"]},{id:"07-arrays-array-patterns-27",title:"Rotate Right N",starterCode:`function rotateRight(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}
console.log(rotateRight([1,2,3,4,5], 2));`,solution:`function rotateRight(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}
console.log(rotateRight([1,2,3,4,5], 2));`,tests:[{input:[],expected:"[ 4, 5, 1, 2, 3 ]"}],hints:["Slice from end","Concat with start"]},{id:"07-arrays-array-patterns-28",title:"Compact Filter",starterCode:`const arr = [0, 1, 2, null, 3, undefined, 4, ''];
const compact = arr.filter(x => x !== 0 && x !== null && x !== undefined && x !== '');
console.log(compact);`,solution:`const arr = [0, 1, 2, null, 3, undefined, 4, ''];
const compact = arr.filter(x => x !== 0 && x !== null && x !== undefined && x !== '');
console.log(compact);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Filter out falsy","Explicit checks"]},{id:"07-arrays-array-patterns-29",title:"Group Reduce",starterCode:`const items = [
  {type: 'fruit', name: 'apple'},
  {type: 'veggie', name: 'carrot'},
  {type: 'fruit', name: 'banana'}
];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,solution:`const items = [
  {type: 'fruit', name: 'apple'},
  {type: 'veggie', name: 'carrot'},
  {type: 'fruit', name: 'banana'}
];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,tests:[{input:[],expected:"{ fruit: [ 'apple', 'banana' ], veggie: [ 'carrot' ] }"}],hints:["Group by type","Reduce to object"]},{id:"07-arrays-array-patterns-30",title:"Sort Custom",starterCode:`const words = ['banana', 'apple', 'cherry'];
words.sort((a, b) => a.length - b.length);
console.log(words);`,solution:`const words = ['banana', 'apple', 'cherry'];
words.sort((a, b) => a.length - b.length);
console.log(words);`,tests:[{input:[],expected:"[ 'apple', 'banana', 'cherry' ]"}],hints:["Sort by length","Shorter first"]},{id:"07-arrays-array-patterns-31",title:"Flatten Deep",starterCode:`function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));`,solution:`function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["Recursive flatten","Check Array.isArray"]},{id:"07-arrays-array-patterns-32",title:"Chunk Size",starterCode:`function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunk([1,2,3,4,5,6,7], 3));`,solution:`function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunk([1,2,3,4,5,6,7], 3));`,tests:[{input:[],expected:"[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]"}],hints:["Step by size","Last chunk may be smaller"]},{id:"07-arrays-array-patterns-33",title:"Unique Sorted",starterCode:`const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
console.log(uniqueSorted);`,solution:`const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
console.log(uniqueSorted);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6, 9 ]"}],hints:["Set for unique","Then sort"]},{id:"07-arrays-array-patterns-34",title:"Intersection Multiple",starterCode:`const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
const common = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
console.log(common);`,solution:`const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
const common = arr1.filter(x => arr2.includes(x) && arr3.includes(x));
console.log(common);`,tests:[{input:[],expected:"[ 3, 4 ]"}],hints:["Filter with multiple includes","Must be in all arrays"]},{id:"07-arrays-array-patterns-35",title:"Difference Symmetric",starterCode:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log(diff);`,solution:`const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const diff = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log(diff);`,tests:[{input:[],expected:"[ 1, 2, 5, 6 ]"}],hints:["Symmetric difference","Elements in either but not both"]},{id:"07-arrays-array-patterns-36",title:"Zip Objects",starterCode:`const keys = ['name', 'age', 'city'];
const vals = ['Alice', 25, 'NYC'];
const obj = keys.reduce((acc, key, i) => ({ ...acc, [key]: vals[i] }), {});
console.log(obj);`,solution:`const keys = ['name', 'age', 'city'];
const vals = ['Alice', 25, 'NYC'];
const obj = keys.reduce((acc, key, i) => ({ ...acc, [key]: vals[i] }), {});
console.log(obj);`,tests:[{input:[],expected:"{ name: 'Alice', age: 25, city: 'NYC' }"}],hints:["Reduce to object","Pair keys with values"]},{id:"07-arrays-array-patterns-37",title:"Rotate Matrix 90",starterCode:`function rotate90(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}
console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]));`,solution:`function rotate90(matrix) {
  return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
}
console.log(rotate90([[1,2,3],[4,5,6],[7,8,9]]));`,tests:[{input:[],expected:"[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]"}],hints:["Map columns as rows","Reverse each"]},{id:"07-arrays-array-patterns-38",title:"Compact Undefined",starterCode:`const arr = [1, undefined, 2, undefined, 3];
const compact = arr.filter(x => x !== undefined);
console.log(compact);`,solution:`const arr = [1, undefined, 2, undefined, 3];
const compact = arr.filter(x => x !== undefined);
console.log(compact);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Filter out undefined","Explicit check"]},{id:"07-arrays-array-patterns-39",title:"Group By Function",starterCode:`const nums = [1, 2, 3, 4, 5, 6];
const grouped = nums.reduce((acc, n) => {
  const key = n % 2 === 0 ? 'even' : 'odd';
  acc[key] = acc[key] || [];
  acc[key].push(n);
  return acc;
}, {});
console.log(grouped);`,solution:`const nums = [1, 2, 3, 4, 5, 6];
const grouped = nums.reduce((acc, n) => {
  const key = n % 2 === 0 ? 'even' : 'odd';
  acc[key] = acc[key] || [];
  acc[key].push(n);
  return acc;
}, {});
console.log(grouped);`,tests:[{input:[],expected:"{ odd: [ 1, 3, 5 ], even: [ 2, 4, 6 ] }"}],hints:["Group by odd/even","Use ternary for key"]},{id:"07-arrays-array-patterns-40",title:"Sort Stable",starterCode:`const arr = [{id: 1, val: 'b'}, {id: 2, val: 'a'}, {id: 3, val: 'a'}];
arr.sort((a, b) => a.val.localeCompare(b.val) || a.id - b.id);
console.log(arr.map(x => x.id));`,solution:`const arr = [{id: 1, val: 'b'}, {id: 2, val: 'a'}, {id: 3, val: 'a'}];
arr.sort((a, b) => a.val.localeCompare(b.val) || a.id - b.id);
console.log(arr.map(x => x.id));`,tests:[{input:[],expected:"[ 2, 3, 1 ]"}],hints:["Sort by val, then id","Use || for tiebreak"]},{id:"07-arrays-array-patterns-41",title:"Flatten Reduce",starterCode:`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);`,solution:`const arr = [[1, 2], [3, 4], [5, 6]];
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["Reduce with concat","Flatten one level"]},{id:"07-arrays-array-patterns-42",title:"Chunk Consecutive",starterCode:`function chunkConsecutive(arr, predicate) {
  return arr.reduce((acc, x) => {
    const last = acc[acc.length - 1];
    if (last && last[last.length - 1] < x) {
      last.push(x);
    } else {
      acc.push([x]);
    }
    return acc;
  }, []);
}
console.log(chunkConsecutive([1,2,3,1,2,3,4,1,2]));`,solution:`function chunkConsecutive(arr, predicate) {
  return arr.reduce((acc, x) => {
    const last = acc[acc.length - 1];
    if (last && last[last.length - 1] < x) {
      last.push(x);
    } else {
      acc.push([x]);
    }
    return acc;
  }, []);
}
console.log(chunkConsecutive([1,2,3,1,2,3,4,1,2]));`,tests:[{input:[],expected:"[ [ 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 1, 2 ] ]"}],hints:["Group consecutive increasing","Check last element"]},{id:"07-arrays-array-patterns-43",title:"Unique Preserving Order",starterCode:`const arr = ['b', 'a', 'b', 'c', 'a', 'd'];
const unique = arr.reduce((acc, x) => acc.includes(x) ? acc : [...acc, x], []);
console.log(unique);`,solution:`const arr = ['b', 'a', 'b', 'c', 'a', 'd'];
const unique = arr.reduce((acc, x) => acc.includes(x) ? acc : [...acc, x], []);
console.log(unique);`,tests:[{input:[],expected:"[ 'b', 'a', 'c', 'd' ]"}],hints:["Reduce with includes","Preserve first occurrence"]},{id:"07-arrays-array-patterns-44",title:"Intersection Three Arrays",starterCode:`const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5];
const c = [3, 4, 5, 6];
const common = a.filter(x => b.includes(x) && c.includes(x));
console.log(common);`,solution:`const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5];
const c = [3, 4, 5, 6];
const common = a.filter(x => b.includes(x) && c.includes(x));
console.log(common);`,tests:[{input:[],expected:"[ 3, 4 ]"}],hints:["Filter with two includes","Must be in all three"]},{id:"07-arrays-array-patterns-45",title:"Difference Symmetric Two",starterCode:`const a = [1, 2, 3];
const b = [2, 3, 4];
const symmetric = [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
console.log(symmetric);`,solution:`const a = [1, 2, 3];
const b = [2, 3, 4];
const symmetric = [...a.filter(x => !b.includes(x)), ...b.filter(x => !a.includes(x))];
console.log(symmetric);`,tests:[{input:[],expected:"[ 1, 4 ]"}],hints:["Symmetric difference","Unique to each array"]},{id:"07-arrays-array-patterns-46",title:"Zip Longest Fill",starterCode:`function zipLongestFill(a, b, fill = null) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] ?? fill, b[i] ?? fill]);
}
console.log(zipLongestFill([1,2], ['a','b','c','d']));`,solution:`function zipLongestFill(a, b, fill = null) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] ?? fill, b[i] ?? fill]);
}
console.log(zipLongestFill([1,2], ['a','b','c','d']));`,tests:[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ null, 'c' ], [ null, 'd' ] ]"}],hints:["Nullish coalescing ??","Array.from with map"]},{id:"07-arrays-array-patterns-47",title:"Rotate In Place",starterCode:`function rotateInPlace(arr, n) {
  const len = arr.length;
  n = ((n % len) + len) % len;
  return [...arr.slice(n), ...arr.slice(0, n)];
}
console.log(rotateInPlace([1,2,3,4,5], -1));`,solution:`function rotateInPlace(arr, n) {
  const len = arr.length;
  n = ((n % len) + len) % len;
  return [...arr.slice(n), ...arr.slice(0, n)];
}
console.log(rotateInPlace([1,2,3,4,5], -1));`,tests:[{input:[],expected:"[ 5, 1, 2, 3, 4 ]"}],hints:["Handle negative rotation","Modulo for wrap"]},{id:"07-arrays-array-patterns-48",title:"Compact Falsy",starterCode:`const arr = [0, 1, false, 2, NaN, 3, '', 4];
const compact = arr.filter(Boolean);
console.log(compact);`,solution:`const arr = [0, 1, false, 2, NaN, 3, '', 4];
const compact = arr.filter(Boolean);
console.log(compact);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Boolean removes falsy","Keep truthy values"]},{id:"07-arrays-array-patterns-49",title:"Group By Multiple",starterCode:`const people = [
  {name: 'Alice', dept: 'eng', level: 'senior'},
  {name: 'Bob', dept: 'sales', level: 'junior'},
  {name: 'Charlie', dept: 'eng', level: 'junior'},
  {name: 'Diana', dept: 'sales', level: 'senior'}
];
const grouped = people.reduce((acc, p) => {
  const key = p.dept + '-' + p.level;
  acc[key] = acc[key] || [];
  acc[key].push(p.name);
  return acc;
}, {});
console.log(grouped);`,solution:`const people = [
  {name: 'Alice', dept: 'eng', level: 'senior'},
  {name: 'Bob', dept: 'sales', level: 'junior'},
  {name: 'Charlie', dept: 'eng', level: 'junior'},
  {name: 'Diana', dept: 'sales', level: 'senior'}
];
const grouped = people.reduce((acc, p) => {
  const key = p.dept + '-' + p.level;
  acc[key] = acc[key] || [];
  acc[key].push(p.name);
  return acc;
}, {});
console.log(grouped);`,tests:[{input:[],expected:"{ 'eng-senior': [ 'Alice' ], 'sales-junior': [ 'Bob' ], 'eng-junior': [ 'Charlie' ], 'sales-senior': [ 'Diana' ] }"}],hints:["Composite key","Reduce to grouped object"]},{id:"07-arrays-array-patterns-50",title:"Sort Merge",starterCode:`function mergeSorted(a, b) {
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
  }
  return merged.concat(a.slice(i), b.slice(j));
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,solution:`function mergeSorted(a, b) {
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
  }
  return merged.concat(a.slice(i), b.slice(j));
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["Two pointer merge","Efficient merge"]}],"07-arrays-02-map-filter-reduce":[{id:"07-arrays-map-filter-reduce-01",title:"Map Transform",starterCode:`const nums = [1, 2, 3];
const doubled = nums.____(x => x * 2);
console.log(doubled);`,solution:`const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
console.log(doubled);`,tests:[{input:[],expected:"[ 2, 4, 6 ]"}],hints:["map transforms each element","Return new value"]},{id:"07-arrays-map-filter-reduce-02",title:"Filter Elements",starterCode:`const nums = [1, 2, 3, 4, 5];
const evens = nums.____(x => x % 2 === 0);
console.log(evens);`,solution:`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,tests:[{input:[],expected:"[ 2, 4 ]"}],hints:["filter keeps elements","Return true to include"]},{id:"07-arrays-map-filter-reduce-03",title:"Reduce Sum",starterCode:`const nums = [1, 2, 3, 4];
const sum = nums.____((acc, x) => acc + x, 0);
console.log(sum);`,solution:`const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, x) => acc + x, 0);
console.log(sum);`,tests:[{input:[],expected:"10"}],hints:["reduce accumulates value","Start at 0"]},{id:"07-arrays-map-filter-reduce-04",title:"Chaining",starterCode:`const nums = [1, 2, 3, 4, 5];
const result = nums.____(x => x > 2).map(x => x * 10);
console.log(result);`,solution:`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x > 2).map(x => x * 10);
console.log(result);`,tests:[{input:[],expected:"[ 30, 40, 50 ]"}],hints:["Filter first then map","Chain array methods"]},{id:"07-arrays-map-filter-reduce-05",title:"Map with Index",starterCode:`const arr = ['a', 'b', 'c'];
const indexed = arr.____((val, idx) => idx + ':' + val);
console.log(indexed);`,solution:`const arr = ['a', 'b', 'c'];
const indexed = arr.map((val, idx) => idx + ':' + val);
console.log(indexed);`,tests:[{input:[],expected:"[ '0:a', '1:b', '2:c' ]"}],hints:["map callback gets index","Combine index and value"]},{id:"07-arrays-map-filter-reduce-06",title:"Filter Condition",starterCode:`const words = ['hello', 'hi', 'hey', 'world'];
const hWords = words.____(w => w.startsWith('h'));
console.log(hWords);`,solution:`const words = ['hello', 'hi', 'hey', 'world'];
const hWords = words.filter(w => w.startsWith('h'));
console.log(hWords);`,tests:[{input:[],expected:"[ 'hello', 'hi', 'hey' ]"}],hints:["startsWith checks prefix","Filter keeps matching"]},{id:"07-arrays-map-filter-reduce-07",title:"Reduce to Object",starterCode:`const arr = [['a', 1], ['b', 2], ['c', 3]];
const obj = arr.____((o, [k, v]) => ({ ...o, [k]: v }), {});
console.log(obj);`,solution:`const arr = [['a', 1], ['b', 2], ['c', 3]];
const obj = arr.reduce((o, [k, v]) => ({ ...o, [k]: v }), {});
console.log(obj);`,tests:[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],hints:["Spread accumulator","Create object from pairs"]},{id:"07-arrays-map-filter-reduce-08",title:"Reduce to String",starterCode:`const arr = ['Hello', ' ', 'World', '!'];
const str = arr.____((acc, s) => acc + s, '');
console.log(str);`,solution:`const arr = ['Hello', ' ', 'World', '!'];
const str = arr.reduce((acc, s) => acc + s, '');
console.log(str);`,tests:[{input:[],expected:"Hello World!"}],hints:["Concatenate strings","Start with empty string"]},{id:"07-arrays-map-filter-reduce-09",title:"Map Filter Combo",starterCode:`const nums = [1, 2, 3, 4, 5, 6];
const result = nums.____(x => x % 2 === 0).map(x => x * x);
console.log(result);`,solution:`const nums = [1, 2, 3, 4, 5, 6];
const result = nums.filter(x => x % 2 === 0).map(x => x * x);
console.log(result);`,tests:[{input:[],expected:"[ 4, 16, 36 ]"}],hints:["Filter evens then square","Chain filter and map"]},{id:"07-arrays-map-filter-reduce-10",title:"Complex Reduce",starterCode:`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}, {type: 'fruit', name: 'banana'}];
const grouped = items.____((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,solution:`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}, {type: 'fruit', name: 'banana'}];
const grouped = items.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || [];
  acc[item.type].push(item.name);
  return acc;
}, {});
console.log(grouped);`,tests:[{input:[],expected:"{ fruit: [ 'apple', 'banana' ], veggie: [ 'carrot' ] }"}],hints:["Group by type","Initialize array if needed"]},{id:"07-arrays-map-filter-reduce-11",title:"Map Callback",starterCode:`const nums = [10, 20, 30];
const halved = nums.____(x => x / 2);
console.log(halved);`,solution:`const nums = [10, 20, 30];
const halved = nums.map(x => x / 2);
console.log(halved);`,tests:[{input:[],expected:"[ 5, 10, 15 ]"}],hints:["Map transforms each","Divide by 2"]},{id:"07-arrays-map-filter-reduce-12",title:"Filter Callback",starterCode:`const arr = [1, 2, 3, 4, 5, 6];
const odds = arr.____(x => x % 2 !== 0);
console.log(odds);`,solution:`const arr = [1, 2, 3, 4, 5, 6];
const odds = arr.filter(x => x % 2 !== 0);
console.log(odds);`,tests:[{input:[],expected:"[ 1, 3, 5 ]"}],hints:["Filter keeps odd numbers","Check remainder"]},{id:"07-arrays-map-filter-reduce-13",title:"Reduce Initial Value",starterCode:`const nums = [1, 2, 3];
const sum = nums.____((acc, x) => acc + x, 10);
console.log(sum);`,solution:`const nums = [1, 2, 3];
const sum = nums.reduce((acc, x) => acc + x, 10);
console.log(sum);`,tests:[{input:[],expected:"16"}],hints:["Initial value is 10","Add to accumulator"]},{id:"07-arrays-map-filter-reduce-14",title:"Map String",starterCode:`const words = ['hello', 'world'];
const upper = words.____(w => w.toUpperCase());
console.log(upper);`,solution:`const words = ['hello', 'world'];
const upper = words.map(w => w.toUpperCase());
console.log(upper);`,tests:[{input:[],expected:"[ 'HELLO', 'WORLD' ]"}],hints:["toUpperCase converts","Map each word"]},{id:"07-arrays-map-filter-reduce-15",title:"Filter Number",starterCode:`const arr = [1, 'two', 3, 'four', 5];
const nums = arr.____(x => typeof x === 'number');
console.log(nums);`,solution:`const arr = [1, 'two', 3, 'four', 5];
const nums = arr.filter(x => typeof x === 'number');
console.log(nums);`,tests:[{input:[],expected:"[ 1, 3, 5 ]"}],hints:["Check typeof","Keep only numbers"]},{id:"07-arrays-map-filter-reduce-16",title:"Reduce Sum",starterCode:`const arr = [5, 10, 15];
const total = arr.____((acc, x) => acc + x, 0);
console.log(total);`,solution:`const arr = [5, 10, 15];
const total = arr.reduce((acc, x) => acc + x, 0);
console.log(total);`,tests:[{input:[],expected:"30"}],hints:["Sum all elements","Start at 0"]},{id:"07-arrays-map-filter-reduce-17",title:"Chained Pipeline",starterCode:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 5).map(x => x * 2).reduce((a, b) => a + b, 0);
console.log(result);`,solution:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 5).map(x => x * 2).reduce((a, b) => a + b, 0);
console.log(result);`,tests:[{input:[],expected:"60"}],hints:["Filter, map, then reduce","Full pipeline"]},{id:"07-arrays-map-filter-reduce-18",title:"Map Flatten",starterCode:`const arr = [[1, 2], [3, 4]];
const flat = arr.____(x => x);
console.log(flat);`,solution:`const arr = [[1, 2], [3, 4]];
const flat = arr.flatMap(x => x);
console.log(flat);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["flatMap flattens result","Return inner array"]},{id:"07-arrays-map-filter-reduce-19",title:"Filter Undefined",starterCode:`const arr = [1, undefined, 3, undefined, 5];
const filtered = arr.____(x => x !== undefined);
console.log(filtered);`,solution:`const arr = [1, undefined, 3, undefined, 5];
const filtered = arr.filter(x => x !== undefined);
console.log(filtered);`,tests:[{input:[],expected:"[ 1, 3, 5 ]"}],hints:["Filter out undefined","Check equality"]},{id:"07-arrays-map-filter-reduce-20",title:"Reduce Group",starterCode:`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}];
const byAge = people.____((acc, p) => {
  acc[p.age] = acc[p.age] || [];
  acc[p.age].push(p.name);
  return acc;
}, {});
console.log(byAge);`,solution:`const people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}];
const byAge = people.reduce((acc, p) => {
  acc[p.age] = acc[p.age] || [];
  acc[p.age].push(p.name);
  return acc;
}, {});
console.log(byAge);`,tests:[{input:[],expected:"{ '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob' ] }"}],hints:["Group by age property","Initialize array"]},{id:"07-arrays-map-filter-reduce-21",title:"Map Property",starterCode:`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const names = users.____(u => u.name);
console.log(names);`,solution:`const users = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const names = users.map(u => u.name);
console.log(names);`,tests:[{input:[],expected:"[ 'Alice', 'Bob' ]"}],hints:["Extract name property","Map returns array"]},{id:"07-arrays-map-filter-reduce-22",title:"Filter Range",starterCode:`const nums = [1, 5, 10, 15, 20];
const inRange = nums.____(x => x >= 5 && x <= 15);
console.log(inRange);`,solution:`const nums = [1, 5, 10, 15, 20];
const inRange = nums.filter(x => x >= 5 && x <= 15);
console.log(inRange);`,tests:[{input:[],expected:"[ 5, 10, 15 ]"}],hints:["Check range with &&","Filter keeps in range"]},{id:"07-arrays-map-filter-reduce-23",title:"Reduce Flatten",starterCode:`const arr = [[1, 2], [3, [4, 5]]];
const flat = arr.____((acc, x) => acc.concat(x), []);
console.log(flat);`,solution:`const arr = [[1, 2], [3, [4, 5]]];
const flat = arr.reduce((acc, x) => acc.concat(x), []);
console.log(flat);`,tests:[{input:[],expected:"[ 1, 2, 3, [ 4, 5 ] ]"}],hints:["Concat to accumulator","One level flatten"]},{id:"07-arrays-map-filter-reduce-24",title:"Map Capitalize",starterCode:`const words = ['hello', 'world'];
const capitalized = words.____(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,solution:`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,tests:[{input:[],expected:"[ 'Hello', 'World' ]"}],hints:["Capitalize first letter","Concat rest of string"]},{id:"07-arrays-map-filter-reduce-25",title:"Filter Unique",starterCode:`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.____((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,solution:`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Check first occurrence","indexOf equals current index"]},{id:"07-arrays-map-filter-reduce-26",title:"Reduce Frequency",starterCode:`const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = arr.____((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
console.log(freq);`,solution:`const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const freq = arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {});
console.log(freq);`,tests:[{input:[],expected:"{ a: 3, b: 2, c: 1 }"}],hints:["Count occurrences","Increment count"]},{id:"07-arrays-map-filter-reduce-27",title:"Map Parse",starterCode:`const strs = ['1', '2', '3', '4'];
const nums = strs.____(s => parseInt(s));
console.log(nums);`,solution:`const strs = ['1', '2', '3', '4'];
const nums = strs.map(s => parseInt(s));
console.log(nums);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Parse string to number","Use parseInt"]},{id:"07-arrays-map-filter-reduce-28",title:"Filter Truthy",starterCode:`const arr = [0, 1, false, 2, '', 3];
const truthy = arr.____(Boolean);
console.log(truthy);`,solution:`const arr = [0, 1, false, 2, '', 3];
const truthy = arr.filter(Boolean);
console.log(truthy);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Boolean as callback","Filters falsy values"]},{id:"07-arrays-map-filter-reduce-29",title:"Reduce Max",starterCode:`const nums = [3, 7, 2, 9, 4];
const max = nums.____((a, b) => Math.max(a, b), -Infinity);
console.log(max);`,solution:`const nums = [3, 7, 2, 9, 4];
const max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);`,tests:[{input:[],expected:"9"}],hints:["Use Math.max","Start with -Infinity"]},{id:"07-arrays-map-filter-reduce-30",title:"Map Filter Reduce Pipeline",starterCode:`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x % 2 !== 0).map(x => x * x).reduce((a, b) => a + b, 0);
console.log(result);`,solution:`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x % 2 !== 0).map(x => x * x).reduce((a, b) => a + b, 0);
console.log(result);`,tests:[{input:[],expected:"35"}],hints:["Filter odds, square, sum","Complete pipeline"]},{id:"07-arrays-map-filter-reduce-31",title:"Map Array Flat",starterCode:`const arr = [[1, 2], [3, 4], [5]];
const result = arr.____((x, i) => [...x, i]);
console.log(result.flat());`,solution:`const arr = [[1, 2], [3, 4], [5]];
const result = arr.map((x, i) => [...x, i]);
console.log(result.flat());`,tests:[{input:[],expected:"[ 1, 2, 0, 3, 4, 1, 5, 2 ]"}],hints:["Map adds index to each","Then flatten"]},{id:"07-arrays-map-filter-reduce-32",title:"Filter Strict",starterCode:`const arr = [1, 2, '2', 3];
const nums = arr.____(x => x === 2);
console.log(nums);`,solution:`const arr = [1, 2, '2', 3];
const nums = arr.filter(x => x === 2);
console.log(nums);`,tests:[{input:[],expected:"[ 2 ]"}],hints:["Strict equality ===","Type matters"]},{id:"07-arrays-map-filter-reduce-33",title:"Reduce Sum Squares",starterCode:`const nums = [1, 2, 3, 4];
const sumSq = nums.____((acc, x) => acc + x * x, 0);
console.log(sumSq);`,solution:`const nums = [1, 2, 3, 4];
const sumSq = nums.reduce((acc, x) => acc + x * x, 0);
console.log(sumSq);`,tests:[{input:[],expected:"30"}],hints:["Square each then sum","Accumulate squares"]},{id:"07-arrays-map-filter-reduce-34",title:"Map Template",starterCode:"const names = ['Alice', 'Bob'];\nconst greetings = names.____(n => `Hello, ${n}!`);\nconsole.log(greetings);",solution:"const names = ['Alice', 'Bob'];\nconst greetings = names.map(n => `Hello, ${n}!`);\nconsole.log(greetings);",tests:[{input:[],expected:"[ 'Hello, Alice!', 'Hello, Bob!' ]"}],hints:["Template literal","Map each name"]},{id:"07-arrays-map-filter-reduce-35",title:"Filter Includes",starterCode:`const arr = ['apple', 'banana', 'avocado', 'cherry'];
const withA = arr.____(w => w.includes('a'));
console.log(withA);`,solution:`const arr = ['apple', 'banana', 'avocado', 'cherry'];
const withA = arr.filter(w => w.includes('a'));
console.log(withA);`,tests:[{input:[],expected:"[ 'apple', 'banana', 'avocado' ]"}],hints:["includes checks substring","Filter words with 'a'"]},{id:"07-arrays-map-filter-reduce-36",title:"Reduce Join",starterCode:`const arr = ['a', 'b', 'c', 'd'];
const str = arr.____((acc, x) => acc + x, '');
console.log(str);`,solution:`const arr = ['a', 'b', 'c', 'd'];
const str = arr.reduce((acc, x) => acc + x, '');
console.log(str);`,tests:[{input:[],expected:"abcd"}],hints:["Concatenate all","Start empty"]},{id:"07-arrays-map-filter-reduce-37",title:"Map Math",starterCode:`const nums = [1, 4, 9, 16];
const roots = nums.____(x => Math.sqrt(x));
console.log(roots);`,solution:`const nums = [1, 4, 9, 16];
const roots = nums.map(x => Math.sqrt(x));
console.log(roots);`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Math.sqrt for square root","Map each number"]},{id:"07-arrays-map-filter-reduce-38",title:"Filter Divisible",starterCode:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div3 = nums.____(x => x % 3 === 0);
console.log(div3);`,solution:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div3 = nums.filter(x => x % 3 === 0);
console.log(div3);`,tests:[{input:[],expected:"[ 3, 6, 9 ]"}],hints:["Check divisibility by 3","Remainder is 0"]},{id:"07-arrays-map-filter-reduce-39",title:"Reduce Product",starterCode:`const nums = [2, 3, 4];
const product = nums.____((acc, x) => acc * x, 1);
console.log(product);`,solution:`const nums = [2, 3, 4];
const product = nums.reduce((acc, x) => acc * x, 1);
console.log(product);`,tests:[{input:[],expected:"24"}],hints:["Multiply all elements","Start at 1"]},{id:"07-arrays-map-filter-reduce-40",title:"Map Absolute",starterCode:`const nums = [-1, 2, -3, 4, -5];
const abs = nums.____(x => Math.abs(x));
console.log(abs);`,solution:`const nums = [-1, 2, -3, 4, -5];
const abs = nums.map(x => Math.abs(x));
console.log(abs);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],hints:["Math.abs for absolute","Remove negatives"]},{id:"07-arrays-map-filter-reduce-41",title:"Filter Length",starterCode:`const words = ['hi', 'hello', 'hey', 'world'];
const long = words.____(w => w.length > 3);
console.log(long);`,solution:`const words = ['hi', 'hello', 'hey', 'world'];
const long = words.filter(w => w.length > 3);
console.log(long);`,tests:[{input:[],expected:"[ 'hello', 'world' ]"}],hints:["Check string length","Keep long words"]},{id:"07-arrays-map-filter-reduce-42",title:"Reduce Concat",starterCode:`const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const result = [arr1, arr2, arr3].____((acc, arr) => acc.concat(arr), []);
console.log(result);`,solution:`const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const result = [arr1, arr2, arr3].reduce((acc, arr) => acc.concat(arr), []);
console.log(result);`,tests:[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],hints:["Concat each sub-array","Flatten arrays"]},{id:"07-arrays-map-filter-reduce-43",title:"Map Boolean",starterCode:`const arr = [0, 1, 2, 3, 4];
const bools = arr.____(x => x > 2);
console.log(bools);`,solution:`const arr = [0, 1, 2, 3, 4];
const bools = arr.map(x => x > 2);
console.log(bools);`,tests:[{input:[],expected:"[ false, false, false, true, true ]"}],hints:["Compare returns boolean","Map to true/false"]},{id:"07-arrays-map-filter-reduce-44",title:"Filter Range Inclusive",starterCode:`const nums = [1, 5, 10, 15, 20];
const range = nums.____(x => x >= 10 && x <= 20);
console.log(range);`,solution:`const nums = [1, 5, 10, 15, 20];
const range = nums.filter(x => x >= 10 && x <= 20);
console.log(range);`,tests:[{input:[],expected:"[ 10, 15, 20 ]"}],hints:["Inclusive range","Both bounds included"]},{id:"07-arrays-map-filter-reduce-45",title:"Reduce Object Accumulator",starterCode:`const arr = [1, 2, 3, 4, 5];
const result = arr.____((acc, x) => ({
  sum: acc.sum + x,
  count: acc.count + 1
}), { sum: 0, count: 0 });
console.log(result);`,solution:`const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, x) => ({
  sum: acc.sum + x,
  count: acc.count + 1
}), { sum: 0, count: 0 });
console.log(result);`,tests:[{input:[],expected:"{ sum: 15, count: 5 }"}],hints:["Object as accumulator","Track sum and count"]},{id:"07-arrays-map-filter-reduce-46",title:"Map Index",starterCode:`const arr = ['a', 'b', 'c'];
const indexed = arr.____((_, i) => i);
console.log(indexed);`,solution:`const arr = ['a', 'b', 'c'];
const indexed = arr.map((_, i) => i);
console.log(indexed);`,tests:[{input:[],expected:"[ 0, 1, 2 ]"}],hints:["Return only index","Ignore value"]},{id:"07-arrays-map-filter-reduce-47",title:"Filter Duplicate",starterCode:`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
const filtered = arr.____((v, i) => arr.indexOf(v) === i);
console.log(JSON.stringify(filtered) === JSON.stringify(unique));`,solution:`const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];
const filtered = arr.filter((v, i) => arr.indexOf(v) === i);
console.log(JSON.stringify(filtered) === JSON.stringify(unique));`,tests:[{input:[],expected:"true"}],hints:["filter with indexOf","Check first occurrence"]},{id:"07-arrays-map-filter-reduce-48",title:"Reduce Deep Flatten",starterCode:`const arr = [1, [2, [3, [4]]]];
function deepFlatten(arr) {
  return arr.____((acc, val) =>
    acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
console.log(deepFlatten(arr));`,solution:`const arr = [1, [2, [3, [4]]]];
function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
console.log(deepFlatten(arr));`,tests:[{input:[],expected:"[ 1, 2, 3, 4 ]"}],hints:["Recursive flatten","Check Array.isArray"]},{id:"07-arrays-map-filter-reduce-49",title:"Map String Length",starterCode:`const words = ['hello', 'hi', 'hey'];
const lengths = words.____(w => w.length);
console.log(lengths);`,solution:`const words = ['hello', 'hi', 'hey'];
const lengths = words.map(w => w.length);
console.log(lengths);`,tests:[{input:[],expected:"[ 5, 2, 3 ]"}],hints:["Map to string length","Return length property"]},{id:"07-arrays-map-filter-reduce-50",title:"Map Filter Reduce Complete",starterCode:`const products = [
  {name: 'apple', price: 1.5, inStock: true},
  {name: 'banana', price: 0.5, inStock: true},
  {name: 'cherry', price: 3, inStock: false}
];
const totalInStock = products.filter(p => p.inStock).map(p => p.price).reduce((a, b) => a + b, 0);
console.log(totalInStock);`,solution:`const products = [
  {name: 'apple', price: 1.5, inStock: true},
  {name: 'banana', price: 0.5, inStock: true},
  {name: 'cherry', price: 3, inStock: false}
];
const totalInStock = products.filter(p => p.inStock).map(p => p.price).reduce((a, b) => a + b, 0);
console.log(totalInStock);`,tests:[{input:[],expected:"2"}],hints:["Filter in stock, map price","Sum prices"]}],"08-objects-03-advanced-objects":[{id:"08-objects-advanced-objects-01",title:"Computed Keys",starterCode:`const key = 'age';
const obj = {[key]: 25};
console.log(obj.age);`,solution:`const key = 'age';
const obj = {[key]: 25};
console.log(obj.age);`,tests:[{input:[],expected:"25"}],hints:["Computed property name","Expression in brackets"]},{id:"08-objects-advanced-objects-02",title:"Symbol Key",starterCode:`const sym = Symbol('id');
const obj = {[sym]: 123};
console.log(obj[sym]);`,solution:`const sym = Symbol('id');
const obj = {[sym]: 123};
console.log(obj[sym]);`,tests:[{input:[],expected:"123"}],hints:["Symbol as key","Access with symbol"]},{id:"08-objects-advanced-objects-03",title:"Getter Setter",starterCode:`const obj = {
  _name: 'Alice',
  get name() { return this._name; },
  set name(val) { this._name = val; }
};
console.log(obj.name);
obj.name = 'Bob';
console.log(obj.name);`,solution:`const obj = {
  _name: 'Alice',
  get name() { return this._name; },
  set name(val) { this._name = val; }
};
console.log(obj.name);
obj.name = 'Bob';
console.log(obj.name);`,tests:[{input:[],expected:`Alice
Bob`}],hints:["get/set accessors","Encapsulate property"]},{id:"08-objects-advanced-objects-04",title:"Object Keys Enumeration",starterCode:`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3, enumerable: false});
console.log(Object.keys(obj));`,solution:`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3, enumerable: false});
console.log(Object.keys(obj));`,tests:[{input:[],expected:"[ 'a', 'b' ]"}],hints:["enumerable false hides","Not in keys"]},{id:"08-objects-advanced-objects-05",title:"Property Descriptors",starterCode:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, writable: false});
obj.x = 20;
console.log(obj.x);`,solution:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, writable: false});
obj.x = 20;
console.log(obj.x);`,tests:[{input:[],expected:"10"}],hints:["writable prevents change","Assignment fails"]},{id:"08-objects-advanced-objects-06",title:"Prototype",starterCode:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,solution:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,tests:[{input:[],expected:"Hello"}],hints:["Object.create with prototype","Inherit methods"]},{id:"08-objects-advanced-objects-07",title:"Object Create with Prototype",starterCode:`const animal = {speak() { return this.name + ' speaks'; }};
const dog = Object.create(animal);
dog.name = 'Rex';
console.log(dog.speak());`,solution:`const animal = {speak() { return this.name + ' speaks'; }};
const dog = Object.create(animal);
dog.name = 'Rex';
console.log(dog.speak());`,tests:[{input:[],expected:"Rex speaks"}],hints:["Inherit speak method","Set name property"]},{id:"08-objects-advanced-objects-08",title:"Object Assign Deep",starterCode:`function deepAssign(target, ...sources) {
  sources.forEach(source => {
    Object.entries(source).forEach(([k, v]) => {
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        target[k] = target[k] || {};
        deepAssign(target[k], v);
      } else {
        target[k] = v;
      }
    });
  });
  return target;
}
console.log(deepAssign({}, {a: {b: 1}}, {a: {c: 2}}));`,solution:`function deepAssign(target, ...sources) {
  sources.forEach(source => {
    Object.entries(source).forEach(([k, v]) => {
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        target[k] = target[k] || {};
        deepAssign(target[k], v);
      } else {
        target[k] = v;
      }
    });
  });
  return target;
}
console.log(deepAssign({}, {a: {b: 1}}, {a: {c: 2}}));`,tests:[{input:[],expected:"{ a: { b: 1, c: 2 } }"}],hints:["Recursive merge","Deep assign pattern"]},{id:"08-objects-advanced-objects-09",title:"Immutable Object",starterCode:`const obj = Object.freeze({a: 1, b: {c: 2}});
obj.a = 10;
console.log(obj.a);`,solution:`const obj = Object.freeze({a: 1, b: {c: 2}});
obj.a = 10;
console.log(obj.a);`,tests:[{input:[],expected:"1"}],hints:["Freeze prevents mutation","Top level only"]},{id:"08-objects-advanced-objects-10",title:"Frozen vs Sealed",starterCode:`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.c = 3;
console.log(obj.a);
console.log(obj.c);`,solution:`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.c = 3;
console.log(obj.a);
console.log(obj.c);`,tests:[{input:[],expected:`10
undefined`}],hints:["Seal allows changes","Cannot add properties"]},{id:"08-objects-advanced-objects-11",title:"Object DefineProperty",starterCode:`const obj = {};
Object.defineProperty(obj, 'x', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.x);`,solution:`const obj = {};
Object.defineProperty(obj, 'x', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.x);`,tests:[{input:[],expected:"42"}],hints:["Full descriptor","All flags true"]},{id:"08-objects-advanced-objects-12",title:"Enumerable Configurable",starterCode:`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false, configurable: false});
console.log(Object.keys(obj));
console.log(obj.hidden);`,solution:`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false, configurable: false});
console.log(Object.keys(obj));
console.log(obj.hidden);`,tests:[{input:[],expected:`[]
42`}],hints:["Not enumerable","Still accessible"]},{id:"08-objects-advanced-objects-13",title:"Writable Property",starterCode:`const obj = {x: 10};
Object.defineProperty(obj, 'x', {writable: false});
obj.x = 20;
console.log(obj.x);`,solution:`const obj = {x: 10};
Object.defineProperty(obj, 'x', {writable: false});
obj.x = 20;
console.log(obj.x);`,tests:[{input:[],expected:"10"}],hints:["writable: false","Assignment fails silently"]},{id:"08-objects-advanced-objects-14",title:"Get Set Accessor",starterCode:`const obj = {
  _temp: 0,
  get celsius() { return this._temp; },
  set celsius(val) { this._temp = val; },
  get fahrenheit() { return this._temp * 9/5 + 32; }
};
obj.celsius = 100;
console.log(obj.fahrenheit);`,solution:`const obj = {
  _temp: 0,
  get celsius() { return this._temp; },
  set celsius(val) { this._temp = val; },
  get fahrenheit() { return this._temp * 9/5 + 32; }
};
obj.celsius = 100;
console.log(obj.fahrenheit);`,tests:[{input:[],expected:"212"}],hints:["Computed getter","Convert temperature"]},{id:"08-objects-advanced-objects-15",title:"Symbol Key Access",starterCode:`const id = Symbol('id');
const obj = {[id]: 123, name: 'Alice'};
console.log(obj[id]);
console.log(Object.getOwnPropertySymbols(obj).length);`,solution:`const id = Symbol('id');
const obj = {[id]: 123, name: 'Alice'};
console.log(obj[id]);
console.log(Object.getOwnPropertySymbols(obj).length);`,tests:[{input:[],expected:`123
1`}],hints:["Access with symbol","Count symbol keys"]},{id:"08-objects-advanced-objects-16",title:"Computed Getter",starterCode:`const obj = {
  items: [1, 2, 3, 4, 5],
  get sum() { return this.items.reduce((a, b) => a + b, 0); }
};
console.log(obj.sum);`,solution:`const obj = {
  items: [1, 2, 3, 4, 5],
  get sum() { return this.items.reduce((a, b) => a + b, 0); }
};
console.log(obj.sum);`,tests:[{input:[],expected:"15"}],hints:["Getter computes value","Dynamic property"]},{id:"08-objects-advanced-objects-17",title:"Iterate Properties",starterCode:`const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}`,solution:`const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}`,tests:[{input:[],expected:`a: 1
b: 2
c: 3`}],hints:["for-in loops keys","Check hasOwnProperty"]},{id:"08-objects-advanced-objects-18",title:"Seal",starterCode:`const obj = Object.seal({a: 1, b: 2});
del obj.a;
console.log(obj.a);
obj.c = 3;
console.log(Object.keys(obj));`,solution:`const obj = Object.seal({a: 1, b: 2});
del obj.a;
console.log(obj.a);
obj.c = 3;
console.log(Object.keys(obj));`,tests:[{input:[],expected:`1
[ 'a', 'b' ]`}],hints:["Seal prevents delete","Cannot add properties"]},{id:"08-objects-advanced-objects-19",title:"Prevent Extensions",starterCode:`const obj = Object.preventExtensions({a: 1});
obj.b = 2;
console.log(obj.b);
console.log(Object.isExtensible(obj));`,solution:`const obj = Object.preventExtensions({a: 1});
obj.b = 2;
console.log(obj.b);
console.log(Object.isExtensible(obj));`,tests:[{input:[],expected:`undefined
false`}],hints:["Cannot add properties","isExtensible returns false"]},{id:"08-objects-advanced-objects-20",title:"IsFrozen",starterCode:`const obj1 = {a: 1};
const obj2 = Object.freeze({a: 1});
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));`,solution:`const obj1 = {a: 1};
const obj2 = Object.freeze({a: 1});
console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));`,tests:[{input:[],expected:`false
true`}],hints:["isFrozen checks","Frozen objects"]},{id:"08-objects-advanced-objects-21",title:"Descriptor Enumerate",starterCode:`const obj = {};
Object.defineProperty(obj, 'a', {value: 1, enumerable: true});
Object.defineProperty(obj, 'b', {value: 2, enumerable: false});
console.log(Object.keys(obj));
console.log(obj.b);`,solution:`const obj = {};
Object.defineProperty(obj, 'a', {value: 1, enumerable: true});
Object.defineProperty(obj, 'b', {value: 2, enumerable: false});
console.log(Object.keys(obj));
console.log(obj.b);`,tests:[{input:[],expected:`[ 'a' ]
2`}],hints:["Enumerable affects keys","Still accessible"]},{id:"08-objects-advanced-objects-22",title:"Symbol.toPrimitive",starterCode:`const obj = {
  val: 42,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.val : String(this.val);
  }
};
console.log(+obj);
console.log(\`\${obj}\`);`,solution:`const obj = {
  val: 42,
  [Symbol.toPrimitive](hint) {
    return hint === 'number' ? this.val : String(this.val);
  }
};
console.log(+obj);
console.log(\`\${obj}\`);`,tests:[{input:[],expected:`42
42`}],hints:["Symbol.toPrimitive controls","Conversion behavior"]},{id:"08-objects-advanced-objects-23",title:"ToString Override",starterCode:`const obj = {
  name: 'Alice',
  toString() { return this.name; }
};
console.log(String(obj));`,solution:`const obj = {
  name: 'Alice',
  toString() { return this.name; }
};
console.log(String(obj));`,tests:[{input:[],expected:"Alice"}],hints:["Override toString","String conversion"]},{id:"08-objects-advanced-objects-24",title:"ValueOf",starterCode:`const obj = {
  val: 10,
  valueOf() { return this.val; }
};
console.log(obj + 5);`,solution:`const obj = {
  val: 10,
  valueOf() { return this.val; }
};
console.log(obj + 5);`,tests:[{input:[],expected:"15"}],hints:["valueOf for primitives","Used in arithmetic"]},{id:"08-objects-advanced-objects-25",title:"FromEntries Practice",starterCode:`const entries = [['x', 10], ['y', 20], ['z', 30]];
const obj = Object.fromEntries(entries);
console.log(obj.x + obj.y + obj.z);`,solution:`const entries = [['x', 10], ['y', 20], ['z', 30]];
const obj = Object.fromEntries(entries);
console.log(obj.x + obj.y + obj.z);`,tests:[{input:[],expected:"60"}],hints:["fromEntries converts","Sum values"]},{id:"08-objects-advanced-objects-26",title:"structuredClone Advanced",starterCode:`const obj = {date: new Date(), regexp: /test/g, data: [1, 2, 3]};
const copy = structuredClone(obj);
copy.data.push(4);
console.log(obj.data);`,solution:`const obj = {date: new Date(), regexp: /test/g, data: [1, 2, 3]};
const copy = structuredClone(obj);
copy.data.push(4);
console.log(obj.data);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["structuredClone deep copies","Original untouched"]},{id:"08-objects-advanced-objects-27",title:"Immutable Pattern",starterCode:`const state = Object.freeze({
  user: Object.freeze({name: 'Alice', age: 25}),
  items: Object.freeze([1, 2, 3])
});
state.user.age = 30;
console.log(state.user.age);`,solution:`const state = Object.freeze({
  user: Object.freeze({name: 'Alice', age: 25}),
  items: Object.freeze([1, 2, 3])
});
state.user.age = 30;
console.log(state.user.age);`,tests:[{input:[],expected:"25"}],hints:["Deep freeze pattern","Nested freeze"]},{id:"08-objects-advanced-objects-28",title:"Seal vs Freeze",starterCode:`const sealed = Object.seal({a: 1});
const frozen = Object.freeze({b: 2});
sealed.a = 10;
frozen.b = 20;
console.log(sealed.a, frozen.b);`,solution:`const sealed = Object.seal({a: 1});
const frozen = Object.freeze({b: 2});
sealed.a = 10;
frozen.b = 20;
console.log(sealed.a, frozen.b);`,tests:[{input:[],expected:"10 2"}],hints:["Seal allows changes","Freeze prevents"]},{id:"08-objects-advanced-objects-29",title:"Property Practice",starterCode:`const obj = {name: 'Alice', age: 25};
Object.defineProperty(obj, 'greeting', {
  get() { return \`Hi, \${this.name}\`; },
  enumerable: true
});
console.log(obj.greeting);`,solution:`const obj = {name: 'Alice', age: 25};
Object.defineProperty(obj, 'greeting', {
  get() { return \`Hi, \${this.name}\`; },
  enumerable: true
});
console.log(obj.greeting);`,tests:[{input:[],expected:"Hi, Alice"}],hints:["Define getter","Dynamic greeting"]},{id:"08-objects-advanced-objects-30",title:"Advanced Complete",starterCode:`const obj = {a: 1, b: 2};
const sym = Symbol('key');
obj[sym] = 3;
console.log(Object.keys(obj).length);
console.log(Object.getOwnPropertySymbols(obj).length);`,solution:`const obj = {a: 1, b: 2};
const sym = Symbol('key');
obj[sym] = 3;
console.log(Object.keys(obj).length);
console.log(Object.getOwnPropertySymbols(obj).length);`,tests:[{input:[],expected:`2
1`}],hints:["Regular vs symbol keys","Count each"]},{id:"08-objects-advanced-objects-31",title:"DefineProperty Writable",starterCode:`const obj = {};
Object.defineProperty(obj, 'x', {value: 5, writable: true});
obj.x = 10;
console.log(obj.x);`,solution:`const obj = {};
Object.defineProperty(obj, 'x', {value: 5, writable: true});
obj.x = 10;
console.log(obj.x);`,tests:[{input:[],expected:"10"}],hints:["writable: true allows","Assignment works"]},{id:"08-objects-advanced-objects-32",title:"DefineProperty Enumerable",starterCode:`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false});
console.log(Object.keys(obj));
console.log('hidden' in obj);`,solution:`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false});
console.log(Object.keys(obj));
console.log('hidden' in obj);`,tests:[{input:[],expected:`[]
true`}],hints:["Not in keys","But exists"]},{id:"08-objects-advanced-objects-33",title:"DefineProperty Configurable",starterCode:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, configurable: false});
try {
  delete obj.x;
} catch(e) {}
console.log(obj.x);`,solution:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, configurable: false});
try {
  delete obj.x;
} catch(e) {}
console.log(obj.x);`,tests:[{input:[],expected:"10"}],hints:["configurable: false","Cannot delete"]},{id:"08-objects-advanced-objects-34",title:"Get Set Lifecycle",starterCode:`const obj = {
  _val: 0,
  get val() {
    console.log('getting');
    return this._val;
  },
  set val(v) {
    console.log('setting');
    this._val = v;
  }
};
obj.val = 5;
console.log(obj.val);`,solution:`const obj = {
  _val: 0,
  get val() {
    console.log('getting');
    return this._val;
  },
  set val(v) {
    console.log('setting');
    this._val = v;
  }
};
obj.val = 5;
console.log(obj.val);`,tests:[{input:[],expected:`setting
getting
5`}],hints:["Setter called on assignment","Getter on access"]},{id:"08-objects-advanced-objects-35",title:"Symbol Iterator",starterCode:`const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last ? {value: current++, done: false} : {done: true};
      }
    };
  }
};
console.log([...range]);`,solution:`const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last ? {value: current++, done: false} : {done: true};
      }
    };
  }
};
console.log([...range]);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Implement iterator","next() returns value/done"]},{id:"08-objects-advanced-objects-36",title:"Symbol Species",starterCode:`class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const arr = new MyArray(1, 2, 3);
const mapped = arr.map(x => x * 2);
console.log(mapped instanceof MyArray);`,solution:`class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
const arr = new MyArray(1, 2, 3);
const mapped = arr.map(x => x * 2);
console.log(mapped instanceof MyArray);`,tests:[{input:[],expected:"false"}],hints:["Symbol.species controls","Constructor for derived objects"]},{id:"08-objects-advanced-objects-37",title:"Symbol ToPrimitive",starterCode:`const money = {
  amount: 100,
  currency: 'USD',
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return \`\${this.amount} \${this.currency}\`;
    return this.amount;
  }
};
console.log(money + 50);
console.log(String(money));`,solution:`const money = {
  amount: 100,
  currency: 'USD',
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') return \`\${this.amount} \${this.currency}\`;
    return this.amount;
  }
};
console.log(money + 50);
console.log(String(money));`,tests:[{input:[],expected:`150
100 USD`}],hints:["Hint determines format","Number or string"]},{id:"08-objects-advanced-objects-38",title:"Descriptor Get Set",starterCode:`const obj = {};
let _val = 0;
Object.defineProperty(obj, 'val', {
  get() { return _val; },
  set(v) { _val = v; },
  enumerable: true
});
obj.val = 42;
console.log(obj.val);`,solution:`const obj = {};
let _val = 0;
Object.defineProperty(obj, 'val', {
  get() { return _val; },
  set(v) { _val = v; },
  enumerable: true
});
obj.val = 42;
console.log(obj.val);`,tests:[{input:[],expected:"42"}],hints:["Define getter/setter","External variable"]},{id:"08-objects-advanced-objects-39",title:"Seal Practice",starterCode:`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.b = 20;
obj.c = 30;
console.log(obj.a, obj.b, obj.c);`,solution:`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.b = 20;
obj.c = 30;
console.log(obj.a, obj.b, obj.c);`,tests:[{input:[],expected:"10 20 undefined"}],hints:["Seal allows changes","Cannot add c"]},{id:"08-objects-advanced-objects-40",title:"Freeze Practice",starterCode:`const obj = Object.freeze({a: 1, b: 2});
obj.a = 10;
console.log(obj.a);
console.log(Object.isFrozen(obj));`,solution:`const obj = Object.freeze({a: 1, b: 2});
obj.a = 10;
console.log(obj.a);
console.log(Object.isFrozen(obj));`,tests:[{input:[],expected:`1
true`}],hints:["Freeze prevents change","isFrozen check"]},{id:"08-objects-advanced-objects-41",title:"PreventExtensions Check",starterCode:`const obj = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj));
obj.b = 2;
console.log(obj.b);`,solution:`const obj = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj));
obj.b = 2;
console.log(obj.b);`,tests:[{input:[],expected:`false
undefined`}],hints:["Not extensible","Cannot add properties"]},{id:"08-objects-advanced-objects-42",title:"IsSealed",starterCode:`const obj1 = {a: 1};
const obj2 = Object.seal({a: 1});
console.log(Object.isSealed(obj1));
console.log(Object.isSealed(obj2));`,solution:`const obj1 = {a: 1};
const obj2 = Object.seal({a: 1});
console.log(Object.isSealed(obj1));
console.log(Object.isSealed(obj2));`,tests:[{input:[],expected:`false
true`}],hints:["isSealed check","Sealed objects"]},{id:"08-objects-advanced-objects-43",title:"IsExtensible",starterCode:`const obj1 = {a: 1};
const obj2 = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj1));
console.log(Object.isExtensible(obj2));`,solution:`const obj1 = {a: 1};
const obj2 = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj1));
console.log(Object.isExtensible(obj2));`,tests:[{input:[],expected:`true
false`}],hints:["isExtensible check","Normal vs prevented"]},{id:"08-objects-advanced-objects-44",title:"DefineProperties",starterCode:`const obj = {};
Object.defineProperties(obj, {
  x: {value: 1, writable: true},
  y: {value: 2, writable: true}
});
console.log(obj.x + obj.y);`,solution:`const obj = {};
Object.defineProperties(obj, {
  x: {value: 1, writable: true},
  y: {value: 2, writable: true}
});
console.log(obj.x + obj.y);`,tests:[{input:[],expected:"3"}],hints:["defineProperties multiple","Set at once"]},{id:"08-objects-advanced-objects-45",title:"Property in Operator",starterCode:`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,solution:`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,tests:[{input:[],expected:`true
false`}],hints:["in operator checks","Returns boolean"]},{id:"08-objects-advanced-objects-46",title:"Delete Operator",starterCode:`const obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(Object.keys(obj));`,solution:`const obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(Object.keys(obj));`,tests:[{input:[],expected:"[ 'a', 'c' ]"}],hints:["delete removes property","From object"]},{id:"08-objects-advanced-objects-47",title:"HasOwnProperty Chain",starterCode:`const proto = {x: 1};
const obj = Object.create(proto);
obj.y = 2;
console.log(obj.hasOwnProperty('x'));
console.log(obj.hasOwnProperty('y'));`,solution:`const proto = {x: 1};
const obj = Object.create(proto);
obj.y = 2;
console.log(obj.hasOwnProperty('x'));
console.log(obj.hasOwnProperty('y'));`,tests:[{input:[],expected:`false
true`}],hints:["hasOwnProperty own only","Inherited not counted"]},{id:"08-objects-advanced-objects-48",title:"Prototype Access",starterCode:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.__proto__ === proto);`,solution:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.__proto__ === proto);`,tests:[{input:[],expected:"true"}],hints:["__proto__ reference","Check equality"]},{id:"08-objects-advanced-objects-49",title:"Constructor Property",starterCode:`const obj = {};
console.log(obj.constructor === Object);`,solution:`const obj = {};
console.log(obj.constructor === Object);`,tests:[{input:[],expected:"true"}],hints:["constructor property","Points to constructor"]},{id:"08-objects-advanced-objects-50",title:"Instanceof Practice",starterCode:`const arr = [1, 2, 3];
const obj = {a: 1};
console.log(arr instanceof Array);
console.log(obj instanceof Object);`,solution:`const arr = [1, 2, 3];
const obj = {a: 1};
console.log(arr instanceof Array);
console.log(obj instanceof Object);`,tests:[{input:[],expected:`true
true`}],hints:["instanceof checks prototype","Returns boolean"]}],"08-objects-02-destructuring-copying":[{id:"08-objects-destructuring-copying-01",title:"Object Destructuring",starterCode:`const obj = {name: 'Alice', age: 25};
const {name, age} = obj;
console.log(name, age);`,solution:`const obj = {name: 'Alice', age: 25};
const {name, age} = obj;
console.log(name, age);`,tests:[{input:[],expected:"Alice 25"}],hints:["Destructure with curly braces","Extract properties"]},{id:"08-objects-destructuring-copying-02",title:"Array Destructuring",starterCode:`const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);`,solution:`const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);`,tests:[{input:[],expected:"1 2 3"}],hints:["Destructure with brackets","Order matters"]},{id:"08-objects-destructuring-copying-03",title:"Default Values",starterCode:`const obj = {name: 'Alice'};
const {name, age = 30} = obj;
console.log(age);`,solution:`const obj = {name: 'Alice'};
const {name, age = 30} = obj;
console.log(age);`,tests:[{input:[],expected:"30"}],hints:["Default value with =","Used when undefined"]},{id:"08-objects-destructuring-copying-04",title:"Rename Variables",starterCode:`const obj = {name: 'Alice'};
const {name: userName} = obj;
console.log(userName);`,solution:`const obj = {name: 'Alice'};
const {name: userName} = obj;
console.log(userName);`,tests:[{input:[],expected:"Alice"}],hints:["Rename with colon","New variable name"]},{id:"08-objects-destructuring-copying-05",title:"Nested Destructuring",starterCode:`const obj = {user: {name: 'Alice', age: 25}};
const {user: {name, age}} = obj;
console.log(name, age);`,solution:`const obj = {user: {name: 'Alice', age: 25}};
const {user: {name, age}} = obj;
console.log(name, age);`,tests:[{input:[],expected:"Alice 25"}],hints:["Nested object destructuring","Drill down properties"]},{id:"08-objects-destructuring-copying-06",title:"Rest in Destructuring",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, b, ...rest} = obj;
console.log(rest);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, b, ...rest} = obj;
console.log(rest);`,tests:[{input:[],expected:"{ c: 3, d: 4 }"}],hints:["Rest collects remaining","Spread into rest"]},{id:"08-objects-destructuring-copying-07",title:"Shallow Copy Spread",starterCode:`const original = {a: 1, b: {c: 2}};
const copy = {...original};
copy.a = 10;
console.log(original.a);
console.log(copy.a);`,solution:`const original = {a: 1, b: {c: 2}};
const copy = {...original};
copy.a = 10;
console.log(original.a);
console.log(copy.a);`,tests:[{input:[],expected:`1
10`}],hints:["Spread creates shallow clone","Top level copied"]},{id:"08-objects-destructuring-copying-08",title:"Deep Copy structuredClone",starterCode:`const original = {a: 1, b: {c: 2}};
const copy = structuredClone(original);
copy.b.c = 99;
console.log(original.b.c);
console.log(copy.b.c);`,solution:`const original = {a: 1, b: {c: 2}};
const copy = structuredClone(original);
copy.b.c = 99;
console.log(original.b.c);
console.log(copy.b.c);`,tests:[{input:[],expected:`2
99`}],hints:["structuredClone deep copies","Nested objects independent"]},{id:"08-objects-destructuring-copying-09",title:"structuredClone Demo",starterCode:`const original = {arr: [1, 2, 3], nested: {x: 10}};
const copy = structuredClone(original);
copy.arr.push(4);
copy.nested.x = 99;
console.log(original.arr);
console.log(original.nested.x);`,solution:`const original = {arr: [1, 2, 3], nested: {x: 10}};
const copy = structuredClone(original);
copy.arr.push(4);
copy.nested.x = 99;
console.log(original.arr);
console.log(original.nested.x);`,tests:[{input:[],expected:`[ 1, 2, 3 ]
10`}],hints:["Deep clone","Original unchanged"]},{id:"08-objects-destructuring-copying-10",title:"Merge Spread",starterCode:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,solution:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,tests:[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],hints:["Spread merge objects","Later wins"]},{id:"08-objects-destructuring-copying-11",title:"Destructuring Function Params",starterCode:"function greet({name, age}) {\n  console.log(`${name} is ${age}`);\n}\ngreet({name: 'Alice', age: 25});",solution:"function greet({name, age}) {\n  console.log(`${name} is ${age}`);\n}\ngreet({name: 'Alice', age: 25});",tests:[{input:[],expected:"Alice is 25"}],hints:["Destructure in params","Extract properties"]},{id:"08-objects-destructuring-copying-12",title:"Default Parameter",starterCode:"function greet({name = 'World', age = 0} = {}) {\n  console.log(`${name}: ${age}`);\n}\ngreet();\ngreet({name: 'Alice'});",solution:"function greet({name = 'World', age = 0} = {}) {\n  console.log(`${name}: ${age}`);\n}\ngreet();\ngreet({name: 'Alice'});",tests:[{input:[],expected:`World: 0
Alice: 0`}],hints:["Default param values","Default whole object"]},{id:"08-objects-destructuring-copying-13",title:"Rename Param",starterCode:"function greet({name: n, age: a}) {\n  console.log(`${n} is ${a}`);\n}\ngreet({name: 'Alice', age: 25});",solution:"function greet({name: n, age: a}) {\n  console.log(`${n} is ${a}`);\n}\ngreet({name: 'Alice', age: 25});",tests:[{input:[],expected:"Alice is 25"}],hints:["Rename in destructuring","Use new names"]},{id:"08-objects-destructuring-copying-14",title:"Nested Param",starterCode:"function greet({user: {name, age}}) {\n  console.log(`${name} is ${age}`);\n}\ngreet({user: {name: 'Alice', age: 25}});",solution:"function greet({user: {name, age}}) {\n  console.log(`${name} is ${age}`);\n}\ngreet({user: {name: 'Alice', age: 25}});",tests:[{input:[],expected:"Alice is 25"}],hints:["Nested destructuring in params","Drill down"]},{id:"08-objects-destructuring-copying-15",title:"Rest Pattern",starterCode:`function log({first, ...others}) {
  console.log(first);
  console.log(others);
}
log({first: 1, second: 2, third: 3});`,solution:`function log({first, ...others}) {
  console.log(first);
  console.log(others);
}
log({first: 1, second: 2, third: 3});`,tests:[{input:[],expected:`1
{ second: 2, third: 3 }`}],hints:["Rest collects rest","Log both parts"]},{id:"08-objects-destructuring-copying-16",title:"Shallow Demo",starterCode:`const obj = {a: 1, b: {c: 2}};
const copy = {...obj};
copy.b.c = 99;
console.log(obj.b.c);`,solution:`const obj = {a: 1, b: {c: 2}};
const copy = {...obj};
copy.b.c = 99;
console.log(obj.b.c);`,tests:[{input:[],expected:"99"}],hints:["Shallow copy shares nested","Reference copied"]},{id:"08-objects-destructuring-copying-17",title:"Deep Copy Pattern",starterCode:`const obj = {arr: [1, 2], nested: {x: 10}};
const copy = structuredClone(obj);
copy.arr.push(3);
copy.nested.x = 99;
console.log(obj.arr);
console.log(obj.nested.x);`,solution:`const obj = {arr: [1, 2], nested: {x: 10}};
const copy = structuredClone(obj);
copy.arr.push(3);
copy.nested.x = 99;
console.log(obj.arr);
console.log(obj.nested.x);`,tests:[{input:[],expected:`[ 1, 2 ]
10`}],hints:["Deep copy independent","Original untouched"]},{id:"08-objects-destructuring-copying-18",title:"Merge Practice",starterCode:`const defaults = {color: 'red', size: 'medium', weight: 'light'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,solution:`const defaults = {color: 'red', size: 'medium', weight: 'light'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,tests:[{input:[],expected:"{ color: 'red', size: 'large', weight: 'heavy' }"}],hints:["Override specific keys","Spread merge"]},{id:"08-objects-destructuring-copying-19",title:"Copy Practice",starterCode:`const obj = {a: 1, b: 2};
const copy1 = {...obj};
const copy2 = Object.assign({}, obj);
console.log(copy1.a === copy2.a);`,solution:`const obj = {a: 1, b: 2};
const copy1 = {...obj};
const copy2 = Object.assign({}, obj);
console.log(copy1.a === copy2.a);`,tests:[{input:[],expected:"true"}],hints:["Both create shallow copy","Same result"]},{id:"08-objects-destructuring-copying-20",title:"Destructuring Practice",starterCode:`const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second, rest);`,solution:`const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second, rest);`,tests:[{input:[],expected:"1 2 [ 3, 4, 5 ]"}],hints:["Array destructuring rest","Collects remainder"]},{id:"08-objects-destructuring-copying-21",title:"Swap Variables",starterCode:`let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);`,solution:`let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);`,tests:[{input:[],expected:"2 1"}],hints:["Array destructuring swap","Temp-free swap"]},{id:"08-objects-destructuring-copying-22",title:"Skip Elements",starterCode:`const arr = [1, 2, 3, 4, 5];
const [, , third] = arr;
console.log(third);`,solution:`const arr = [1, 2, 3, 4, 5];
const [, , third] = arr;
console.log(third);`,tests:[{input:[],expected:"3"}],hints:["Skip with empty slots","Get third element"]},{id:"08-objects-destructuring-copying-23",title:"Rest Array",starterCode:`const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;
console.log(head);
console.log(tail);`,solution:`const arr = [1, 2, 3, 4];
const [head, ...tail] = arr;
console.log(head);
console.log(tail);`,tests:[{input:[],expected:`1
[ 2, 3, 4 ]`}],hints:["First element separate","Rest collects rest"]},{id:"08-objects-destructuring-copying-24",title:"Default Object",starterCode:`const {name = 'World', age = 0} = {};
console.log(name, age);`,solution:`const {name = 'World', age = 0} = {};
console.log(name, age);`,tests:[{input:[],expected:"World 0"}],hints:["Defaults for missing props","Empty object"]},{id:"08-objects-destructuring-copying-25",title:"Nested Array Destruct",starterCode:`const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);`,solution:`const arr = [1, [2, 3], 4];
const [a, [b, c], d] = arr;
console.log(a, b, c, d);`,tests:[{input:[],expected:"1 2 3 4"}],hints:["Nested array destructuring","Match structure"]},{id:"08-objects-destructuring-copying-26",title:"Rename Nested",starterCode:`const obj = {user: {name: 'Alice', address: {city: 'NYC'}}};
const {user: {name, address: {city: location}} = {}} = obj;
console.log(name, location);`,solution:`const obj = {user: {name: 'Alice', address: {city: 'NYC'}}};
const {user: {name, address: {city: location}} = {}} = obj;
console.log(name, location);`,tests:[{input:[],expected:"Alice NYC"}],hints:["Nested rename","Drill down deep"]},{id:"08-objects-destructuring-copying-27",title:"Rest Nested",starterCode:`const obj = {a: 1, b: {c: 2, d: 3}, e: 4};
const {a, b: {c, ...restB}, ...rest} = obj;
console.log(restB);
console.log(rest);`,solution:`const obj = {a: 1, b: {c: 2, d: 3}, e: 4};
const {a, b: {c, ...restB}, ...rest} = obj;
console.log(restB);
console.log(rest);`,tests:[{input:[],expected:`{ d: 3 }
{ e: 4 }`}],hints:["Rest at multiple levels","Collect remaining"]},{id:"08-objects-destructuring-copying-28",title:"Default Function",starterCode:`function createUser({name = 'Anonymous', age = 0} = {}) {
  return {name, age};
}
console.log(createUser());
console.log(createUser({name: 'Alice'}));`,solution:`function createUser({name = 'Anonymous', age = 0} = {}) {
  return {name, age};
}
console.log(createUser());
console.log(createUser({name: 'Alice'}));`,tests:[{input:[],expected:`{ name: 'Anonymous', age: 0 }
{ name: 'Alice', age: 0 }`}],hints:["Default param and object","Handle no args"]},{id:"08-objects-destructuring-copying-29",title:"structuredClone Advanced",starterCode:`const obj = {arr: [1, [2, 3]], date: new Date('2024-01-01'), regex: /test/gi};
const copy = structuredClone(obj);
copy.arr[1].push(4);
console.log(obj.arr[1]);`,solution:`const obj = {arr: [1, [2, 3]], date: new Date('2024-01-01'), regex: /test/gi};
const copy = structuredClone(obj);
copy.arr[1].push(4);
console.log(obj.arr[1]);`,tests:[{input:[],expected:"[ 2, 3 ]"}],hints:["Deep clone even nested arrays","Original untouched"]},{id:"08-objects-destructuring-copying-30",title:"Spread Merge Multiple",starterCode:`const a = {x: 1};
const b = {y: 2};
const c = {z: 3};
const merged = {...a, ...b, ...c};
console.log(merged);`,solution:`const a = {x: 1};
const b = {y: 2};
const c = {z: 3};
const merged = {...a, ...b, ...c};
console.log(merged);`,tests:[{input:[],expected:"{ x: 1, y: 2, z: 3 }"}],hints:["Multiple spread merges","Combine all"]},{id:"08-objects-destructuring-copying-31",title:"Copy with Assign",starterCode:`const obj = {a: 1, b: 2};
const copy = Object.assign({}, obj);
copy.a = 10;
console.log(obj.a);
console.log(copy.a);`,solution:`const obj = {a: 1, b: 2};
const copy = Object.assign({}, obj);
copy.a = 10;
console.log(obj.a);
console.log(copy.a);`,tests:[{input:[],expected:`1
10`}],hints:["Object.assign creates clone","Independent copy"]},{id:"08-objects-destructuring-copying-32",title:"Destructuring Return",starterCode:`function getCoords() {
  return {x: 10, y: 20};
}
const {x, y} = getCoords();
console.log(x, y);`,solution:`function getCoords() {
  return {x: 10, y: 20};
}
const {x, y} = getCoords();
console.log(x, y);`,tests:[{input:[],expected:"10 20"}],hints:["Destructure return value","Extract x and y"]},{id:"08-objects-destructuring-copying-33",title:"Default Value Types",starterCode:`const {a = 1, b = 'hello', c = [1, 2], d = {x: 1}} = {};
console.log(a, b, c.length, d.x);`,solution:`const {a = 1, b = 'hello', c = [1, 2], d = {x: 1}} = {};
console.log(a, b, c.length, d.x);`,tests:[{input:[],expected:"1 hello 2 1"}],hints:["Different default types","All work as defaults"]},{id:"08-objects-destructuring-copying-34",title:"Rename in Loop",starterCode:"const arr = [{n: 'Alice', a: 25}, {n: 'Bob', a: 30}];\nfor (const {n: name, a: age} of arr) {\n  console.log(`${name}: ${age}`);\n}",solution:"const arr = [{n: 'Alice', a: 25}, {n: 'Bob', a: 30}];\nfor (const {n: name, a: age} of arr) {\n  console.log(`${name}: ${age}`);\n}",tests:[{input:[],expected:`Alice: 25
Bob: 30`}],hints:["Destructure in for-of","Rename during iteration"]},{id:"08-objects-destructuring-copying-35",title:"Rest in for-of",starterCode:`const arr = [{type: 'a', val: 1, extra: 'x'}, {type: 'b', val: 2, extra: 'y'}];
for (const {type, ...rest} of arr) {
  console.log(type, rest);
}`,solution:`const arr = [{type: 'a', val: 1, extra: 'x'}, {type: 'b', val: 2, extra: 'y'}];
for (const {type, ...rest} of arr) {
  console.log(type, rest);
}`,tests:[{input:[],expected:`a { val: 1, extra: 'x' }
b { val: 2, extra: 'y' }`}],hints:["Rest in loop destructuring","Collect remaining props"]},{id:"08-objects-destructuring-copying-36",title:"Shallow Copy Demo",starterCode:`const original = {arr: [1, 2], nested: {a: 1}};
const shallow = {...original};
shallow.arr.push(3);
console.log(original.arr);`,solution:`const original = {arr: [1, 2], nested: {a: 1}};
const shallow = {...original};
shallow.arr.push(3);
console.log(original.arr);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Shallow copy shares arrays","Reference to nested"]},{id:"08-objects-destructuring-copying-37",title:"Deep Copy Array",starterCode:`const arr = [[1, 2], [3, 4]];
const copy = structuredClone(arr);
copy[0].push(5);
console.log(arr[0]);`,solution:`const arr = [[1, 2], [3, 4]];
const copy = structuredClone(arr);
copy[0].push(5);
console.log(arr[0]);`,tests:[{input:[],expected:"[ 1, 2 ]"}],hints:["structuredClone deep copies","Nested arrays independent"]},{id:"08-objects-destructuring-copying-38",title:"Merge Objects",starterCode:`const obj = {};
Object.assign(obj, {a: 1}, {b: 2}, {a: 3});
console.log(obj);`,solution:`const obj = {};
Object.assign(obj, {a: 1}, {b: 2}, {a: 3});
console.log(obj);`,tests:[{input:[],expected:"{ a: 3, b: 2 }"}],hints:["Object.assign with multiple","Later overrides"]},{id:"08-objects-destructuring-copying-39",title:"Copy Nested",starterCode:`const obj = {a: 1, b: {c: 2}};
const copy = JSON.parse(JSON.stringify(obj));
copy.b.c = 99;
console.log(obj.b.c);`,solution:`const obj = {a: 1, b: 2, c: {d: 2}};
const copy = JSON.parse(JSON.stringify(obj));
copy.c.d = 99;
console.log(obj.c.d);`,tests:[{input:[],expected:"2"}],hints:["JSON deep copy pattern","Original untouched"]},{id:"08-objects-destructuring-copying-40",title:"Destructuring Condition",starterCode:`const obj = {name: 'Alice', active: true};
const {name, active = false} = obj;
console.log(active);`,solution:`const obj = {name: 'Alice', active: true};
const {name, active = false} = obj;
console.log(active);`,tests:[{input:[],expected:"true"}],hints:["Default only if undefined","Existing value kept"]},{id:"08-objects-destructuring-copying-41",title:"Default Condition",starterCode:`const obj = {};
const {name = 'Unknown', age = 0} = obj;
console.log(name, age);`,solution:`const obj = {};
const {name = 'Unknown', age = 0} = obj;
console.log(name, age);`,tests:[{input:[],expected:"Unknown 0"}],hints:["All defaults applied","Missing properties"]},{id:"08-objects-destructuring-copying-42",title:"Rename Import",starterCode:"const obj = {name: 'Alice', years: 25};\nconst {name: userName, years: age} = obj;\nconsole.log(`${userName} is ${age}`);",solution:"const obj = {name: 'Alice', years: 25};\nconst {name: userName, years: age} = obj;\nconsole.log(`${userName} is ${age}`);",tests:[{input:[],expected:"Alice is 25"}],hints:["Rename during destructuring","Map to new names"]},{id:"08-objects-destructuring-copying-43",title:"Rest Params",starterCode:`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,solution:`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,tests:[{input:[],expected:"10"}],hints:["Rest params collect args","Use reduce"]},{id:"08-objects-destructuring-copying-44",title:"Shallow Clone",starterCode:`const obj = {a: 1, b: [2, 3]};
const clone = {...obj};
clone.b.push(4);
console.log(obj.b);`,solution:`const obj = {a: 1, b: [2, 3]};
const clone = {...obj};
clone.b.push(4);
console.log(obj.b);`,tests:[{input:[],expected:"[ 2, 3, 4 ]"}],hints:["Shallow clone shares arrays","Same reference"]},{id:"08-objects-destructuring-copying-45",title:"Deep Freeze",starterCode:`function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).filter(v => typeof v === 'object' && v !== null).forEach(deepFreeze);
  return obj;
}
const obj = deepFreeze({a: 1, b: {c: 2}});
obj.b.c = 99;
console.log(obj.b.c);`,solution:`function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).filter(v => typeof v === 'object' && v !== null).forEach(deepFreeze);
  return obj;
}
const obj = deepFreeze({a: 1, b: {c: 2}});
obj.b.c = 99;
console.log(obj.b.c);`,tests:[{input:[],expected:"2"}],hints:["Recursive freeze","Deep immutability"]},{id:"08-objects-destructuring-copying-46",title:"Merge Assign",starterCode:`const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);`,solution:`const target = {a: 1};
const source1 = {b: 2};
const source2 = {c: 3};
Object.assign(target, source1, source2);
console.log(target);`,tests:[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],hints:["Multiple sources","Merge into target"]},{id:"08-objects-destructuring-copying-47",title:"Copy Date",starterCode:`const original = new Date('2024-01-01');
const copy = new Date(original);
copy.setFullYear(2025);
console.log(original.getFullYear());
console.log(copy.getFullYear());`,solution:`const original = new Date('2024-01-01');
const copy = new Date(original);
copy.setFullYear(2025);
console.log(original.getFullYear());
console.log(copy.getFullYear());`,tests:[{input:[],expected:`2024
2025`}],hints:["Date constructor copies","Independent dates"]},{id:"08-objects-destructuring-copying-48",title:"Destructuring Regex",starterCode:`const match = 'hello world'.match(/(\\w+)\\s(\\w+)/);
const [, first, second] = match;
console.log(first, second);`,solution:`const match = 'hello world'.match(/(\\w+)\\s(\\w+)/);
const [, first, second] = match;
console.log(first, second);`,tests:[{input:[],expected:"hello world"}],hints:["Destructure match result","Skip full match"]},{id:"08-objects-destructuring-copying-49",title:"Default Regex",starterCode:`const obj = {};
const {pattern = /test/, flags = 'g'} = obj;
console.log(pattern.flags);`,solution:`const obj = {};
const {pattern = /test/, flags = 'g'} = obj;
console.log(pattern.flags);`,tests:[{input:[],expected:"g"}],hints:["Default regex value","Access flags property"]},{id:"08-objects-destructuring-copying-50",title:"Rename Class",starterCode:`const config = {url: 'http://example.com', maxRetries: 3};
const {url: endpoint, maxRetries: retries} = config;
console.log(endpoint, retries);`,solution:`const config = {url: 'http://example.com', maxRetries: 3};
const {url: endpoint, maxRetries: retries} = config;
console.log(endpoint, retries);`,tests:[{input:[],expected:"http://example.com 3"}],hints:["Rename to meaningful names","Clean API"]}],"08-objects-01-object-basics":[{id:"08-objects-object-basics-01",title:"Object Literal",starterCode:`const person = {____: 'Alice', ____: 25};
console.log(person.name);`,solution:`const person = {name: 'Alice', age: 25};
console.log(person.name);`,tests:[{input:[],expected:"Alice"}],hints:["Key-value pairs","Curly braces syntax"]},{id:"08-objects-object-basics-02",title:"Dot Notation",starterCode:`const car = {brand: 'Toyota', model: 'Camry'};
console.log(car.____);`,solution:`const car = {brand: 'Toyota', model: 'Camry'};
console.log(car.brand);`,tests:[{input:[],expected:"Toyota"}],hints:["Use dot followed by key","Simple property access"]},{id:"08-objects-object-basics-03",title:"Bracket Notation",starterCode:`const obj = {name: 'Alice'};
const key = 'name';
console.log(obj[____]);`,solution:`const obj = {name: 'Alice'};
const key = 'name';
console.log(obj[key]);`,tests:[{input:[],expected:"Alice"}],hints:["Use brackets with variable","Dynamic property access"]},{id:"08-objects-object-basics-04",title:"Computed Property",starterCode:`const key = 'age';
const person = {[key]: 25};
console.log(person.age);`,solution:`const key = 'age';
const person = {[key]: 25};
console.log(person.age);`,tests:[{input:[],expected:"25"}],hints:["Computed property name","Wrap key in brackets"]},{id:"08-objects-object-basics-05",title:"Object Keys",starterCode:`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(____);
console.log(keys);`,solution:`const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
console.log(keys);`,tests:[{input:[],expected:"[ 'a', 'b', 'c' ]"}],hints:["Object.keys returns array","Of property names"]},{id:"08-objects-object-basics-06",title:"Object Values",starterCode:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(____);
console.log(values);`,solution:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(values);`,tests:[{input:[],expected:"[ 1, 2, 3 ]"}],hints:["Object.values returns array","Of property values"]},{id:"08-objects-object-basics-07",title:"Object Entries",starterCode:`const obj = {x: 10, y: 20};
const entries = Object.entries(____);
console.log(entries);`,solution:`const obj = {x: 10, y: 20};
const entries = Object.entries(obj);
console.log(entries);`,tests:[{input:[],expected:"[ [ 'x', 10 ], [ 'y', 20 ] ]"}],hints:["Object.entries returns","Array of [key, value] pairs"]},{id:"08-objects-object-basics-08",title:"Spread Objects",starterCode:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,solution:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,tests:[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],hints:["Spread merges objects","Later overrides earlier"]},{id:"08-objects-object-basics-09",title:"Object Assign",starterCode:`const target = {a: 1};
const source = {b: 2, c: 3};
Object.assign(target, source);
console.log(target);`,solution:`const target = {a: 1};
const source = {b: 2, c: 3};
Object.assign(target, source);
console.log(target);`,tests:[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],hints:["Object.assign mutates target","Copies properties"]},{id:"08-objects-object-basics-10",title:"Object Freeze",starterCode:`const obj = {name: 'Alice'};
Object.freeze(obj);
obj.name = 'Bob';
console.log(obj.name);`,solution:`const obj = {name: 'Alice'};
Object.freeze(obj);
obj.name = 'Bob';
console.log(obj.name);`,tests:[{input:[],expected:"Alice"}],hints:["Freeze prevents changes","Assignment fails silently"]},{id:"08-objects-object-basics-11",title:"Object FromEntries",starterCode:`const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(____);
console.log(obj);`,solution:`const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(entries);
console.log(obj);`,tests:[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],hints:["fromEntries converts pairs","To object"]},{id:"08-objects-object-basics-12",title:"Object Create",starterCode:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,solution:`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,tests:[{input:[],expected:"Hello"}],hints:["Object.create with prototype","Inherits methods"]},{id:"08-objects-object-basics-13",title:"Define Property",starterCode:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10});
console.log(obj.x);`,solution:`const obj = {};
Object.defineProperty(obj, 'x', {value: 10});
console.log(obj.x);`,tests:[{input:[],expected:"10"}],hints:["defineProperty adds property","With descriptor"]},{id:"08-objects-object-basics-14",title:"Has Own Property",starterCode:`const obj = {name: 'Alice', age: 25};
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('email'));`,solution:`const obj = {name: 'Alice', age: 25};
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('email'));`,tests:[{input:[],expected:`true
false`}],hints:["hasOwnProperty checks","Returns boolean"]},{id:"08-objects-object-basics-15",title:"Object Is",starterCode:`console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));`,solution:`console.log(Object.is(25, 25));
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));`,tests:[{input:[],expected:`true
true
false`}],hints:["Object.is strict equality","NaN === NaN in Object.is"]},{id:"08-objects-object-basics-16",title:"Object GroupBy",starterCode:`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}];
const grouped = Object.groupBy(items, item => item.type);
console.log(grouped);`,solution:`const items = [{type: 'fruit', name: 'apple'}, {type: 'veggie', name: 'carrot'}];
const grouped = Object.groupBy(items, item => item.type);
console.log(grouped);`,tests:[{input:[],expected:"{ fruit: [ { type: 'fruit', name: 'apple' } ], veggie: [ { type: 'veggie', name: 'carrot' } ] }"}],hints:["Object.groupBy groups","By callback result"]},{id:"08-objects-object-basics-17",title:"Keys Sort",starterCode:`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort().reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
console.log(sorted);`,solution:`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort().reduce((acc, key) => ({...acc, [key]: obj[key]}), {});
console.log(sorted);`,tests:[{input:[],expected:"{ a: 1, b: 2, c: 3 }"}],hints:["Sort keys alphabetically","Rebuild object"]},{id:"08-objects-object-basics-18",title:"Values Transform",starterCode:`const obj = {a: 1, b: 2, c: 3};
const doubled = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]));
console.log(doubled);`,solution:`const obj = {a: 1, b: 2, c: 3};
const doubled = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]));
console.log(doubled);`,tests:[{input:[],expected:"{ a: 2, b: 4, c: 6 }"}],hints:["entries then map","fromEntries back to object"]},{id:"08-objects-object-basics-19",title:"Entries Filter",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
const filtered = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 2));
console.log(filtered);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
const filtered = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 2));
console.log(filtered);`,tests:[{input:[],expected:"{ c: 3, d: 4 }"}],hints:["Filter entries by value","fromEntries back"]},{id:"08-objects-object-basics-20",title:"Merge Objects",starterCode:`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,solution:`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large', weight: 'heavy'};
const result = {...defaults, ...custom};
console.log(result);`,tests:[{input:[],expected:"{ color: 'red', size: 'large', weight: 'heavy' }"}],hints:["Spread merge","Custom overrides defaults"]},{id:"08-objects-object-basics-21",title:"Clone Object",starterCode:`const original = {a: 1, b: 2};
const clone = {...original};
clone.a = 10;
console.log(original.a);
console.log(clone.a);`,solution:`const original = {a: 1, b: 2};
const clone = {...original};
clone.a = 10;
console.log(original.a);
console.log(clone.a);`,tests:[{input:[],expected:`1
10`}],hints:["Spread creates shallow clone","Changes don't affect original"]},{id:"08-objects-object-basics-22",title:"Compare Objects",starterCode:`const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));`,solution:`const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));`,tests:[{input:[],expected:"true"}],hints:["JSON stringify for comparison","Compare strings"]},{id:"08-objects-object-basics-23",title:"Flatten Object",starterCode:`function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? prefix + '.' + k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return {...acc, ...flatten(v, key)};
    }
    return {...acc, [key]: v};
  }, {});
}
console.log(flatten({a: {b: 1, c: {d: 2}}}));`,solution:`function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? prefix + '.' + k : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      return {...acc, ...flatten(v, key)};
    }
    return {...acc, [key]: v};
  }, {});
}
console.log(flatten({a: {b: 1, c: {d: 2}}}));`,tests:[{input:[],expected:"{ 'a.b': 1, 'a.c.d': 2 }"}],hints:["Recursive flatten","Dot notation keys"]},{id:"08-objects-object-basics-24",title:"Invert Object",starterCode:`const obj = {a: 1, b: 2, c: 3};
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
console.log(inverted);`,solution:`const obj = {a: 1, b: 2, c: 3};
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
console.log(inverted);`,tests:[{input:[],expected:"{ '1': 'a', '2': 'b', '3': 'c' }"}],hints:["Swap keys and values","Map entries"]},{id:"08-objects-object-basics-25",title:"Pick",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
const picked = Object.fromEntries(Object.entries(obj).filter(([k]) => ['a', 'c'].includes(k)));
console.log(picked);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
const picked = Object.fromEntries(Object.entries(obj).filter(([k]) => ['a', 'c'].includes(k)));
console.log(picked);`,tests:[{input:[],expected:"{ a: 1, c: 3 }"}],hints:["Filter by keys","Pick specific properties"]},{id:"08-objects-object-basics-26",title:"Omit",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
const omitted = Object.fromEntries(Object.entries(obj).filter(([k]) => !['b', 'd'].includes(k)));
console.log(omitted);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
const omitted = Object.fromEntries(Object.entries(obj).filter(([k]) => !['b', 'd'].includes(k)));
console.log(omitted);`,tests:[{input:[],expected:"{ a: 1, c: 3 }"}],hints:["Exclude specific keys","Omit properties"]},{id:"08-objects-object-basics-27",title:"Map Values",starterCode:`const obj = {a: 1, b: 2, c: 3};
const doubled = {};
for (const [k, v] of Object.entries(obj)) {
  doubled[k] = v * 2;
}
console.log(doubled);`,solution:`const obj = {a: 1, b: 2, c: 3};
const doubled = {};
for (const [k, v] of Object.entries(obj)) {
  doubled[k] = v * 2;
}
console.log(doubled);`,tests:[{input:[],expected:"{ a: 2, b: 4, c: 6 }"}],hints:["Loop entries","Double each value"]},{id:"08-objects-object-basics-28",title:"Filter Entries",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4};
const result = {};
for (const [k, v] of Object.entries(obj)) {
  if (v % 2 === 0) result[k] = v;
}
console.log(result);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4};
const result = {};
for (const [k, v] of Object.entries(obj)) {
  if (v % 2 === 0) result[k] = v;
}
console.log(result);`,tests:[{input:[],expected:"{ b: 2, d: 4 }"}],hints:["Loop and check condition","Keep even values"]},{id:"08-objects-object-basics-29",title:"Reduce Object",starterCode:`const obj = {a: 1, b: 2, c: 3};
const sum = Object.values(obj).reduce((acc, v) => acc + v, 0);
console.log(sum);`,solution:`const obj = {a: 1, b: 2, c: 3};
const sum = Object.values(obj).reduce((acc, v) => acc + v, 0);
console.log(sum);`,tests:[{input:[],expected:"6"}],hints:["Object.values then reduce","Sum all values"]},{id:"08-objects-object-basics-30",title:"Practice 1",starterCode:`const user = {name: 'Alice', age: 25, active: true};
console.log(user.hasOwnProperty('name'));
console.log(user.age);`,solution:`const user = {name: 'Alice', age: 25, active: true};
console.log(user.hasOwnProperty('name'));
console.log(user.age);`,tests:[{input:[],expected:`true
25`}],hints:["hasOwnProperty check","Dot notation access"]},{id:"08-objects-object-basics-31",title:"Practice 2",starterCode:`const obj = {x: 10, y: 20, z: 30};
const entries = Object.entries(obj);
console.log(entries.length);`,solution:`const obj = {x: 10, y: 20, z: 30};
const entries = Object.entries(obj);
console.log(entries.length);`,tests:[{input:[],expected:"3"}],hints:["Object.entries returns array","Check length"]},{id:"08-objects-object-basics-32",title:"Practice 3",starterCode:`const obj1 = {a: 1};
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
console.log(obj2.a);`,solution:`const obj1 = {a: 1};
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
console.log(obj2.a);`,tests:[{input:[],expected:`1
2`}],hints:["Object.assign creates clone","Changes don't affect original"]},{id:"08-objects-object-basics-33",title:"Practice 4",starterCode:`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3});
console.log(Object.keys(obj));`,solution:`const obj = {a: 1, b: 2};
Object.defineProperty(obj, 'c', {value: 3});
console.log(Object.keys(obj));`,tests:[{input:[],expected:"[ 'a', 'b', 'c' ]"}],hints:["defineProperty adds new","Keys includes it"]},{id:"08-objects-object-basics-34",title:"Practice 5",starterCode:`const obj = {a: 1, b: 2, c: 3};
const hasC = 'c' in obj;
const hasD = 'd' in obj;
console.log(hasC, hasD);`,solution:`const obj = {a: 1, b: 2, c: 3};
const hasC = 'c' in obj;
const hasD = 'd' in obj;
console.log(hasC, hasD);`,tests:[{input:[],expected:"true false"}],hints:["in operator checks keys","Returns boolean"]},{id:"08-objects-object-basics-35",title:"Practice 6",starterCode:`const obj = {};
obj[Symbol('id')] = 123;
console.log(Object.getOwnPropertySymbols(obj).length);`,solution:`const obj = {};
obj[Symbol('id')] = 123;
console.log(Object.getOwnPropertySymbols(obj).length);`,tests:[{input:[],expected:"1"}],hints:["Symbol keys","getOwnPropertySymbols"]},{id:"08-objects-object-basics-36",title:"Practice 7",starterCode:`const obj = {a: 1, b: 2, c: 3};
const result = {};
for (const key of Object.keys(obj)) {
  result[key] = obj[key] * 10;
}
console.log(result);`,solution:`const obj = {a: 1, b: 2, c: 3};
const result = {};
for (const key of Object.keys(obj)) {
  result[key] = obj[key] * 10;
}
console.log(result);`,tests:[{input:[],expected:"{ a: 10, b: 20, c: 30 }"}],hints:["Loop keys","Transform values"]},{id:"08-objects-object-basics-37",title:"Practice 8",starterCode:`const obj1 = {a: 1, b: {c: 2}};
const obj2 = {...obj1};
obj2.b.c = 99;
console.log(obj1.b.c);`,solution:`const obj1 = {a: 1, b: {c: 2}};
const obj2 = {...obj1};
obj2.b.c = 99;
console.log(obj1.b.c);`,tests:[{input:[],expected:"99"}],hints:["Shallow clone only","Nested objects shared"]},{id:"08-objects-object-basics-38",title:"Complete 1",starterCode:`const arr = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const obj = Object.fromEntries(arr.map(p => [p.name, p.age]));
console.log(obj);`,solution:`const arr = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const obj = Object.fromEntries(arr.map(p => [p.name, p.age]));
console.log(obj);`,tests:[{input:[],expected:"{ Alice: 25, Bob: 30 }"}],hints:["Map to entries","fromEntries to object"]},{id:"08-objects-object-basics-39",title:"Complete 2",starterCode:`const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const half = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v % 2 === 0));
console.log(half);`,solution:`const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const half = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v % 2 === 0));
console.log(half);`,tests:[{input:[],expected:"{ b: 2, d: 4 }"}],hints:["Filter even values","fromEntries back"]},{id:"08-objects-object-basics-40",title:"Complete 3",starterCode:`const obj = {name: 'Alice', age: 25, city: 'NYC'};
const {name, ...rest} = obj;
console.log(name);
console.log(rest);`,solution:`const obj = {name: 'Alice', age: 25, city: 'NYC'};
const {name, ...rest} = obj;
console.log(name);
console.log(rest);`,tests:[{input:[],expected:`Alice
{ age: 25, city: 'NYC' }`}],hints:["Rest in destructuring","Collects remaining"]},{id:"08-objects-object-basics-41",title:"Complete 4",starterCode:`const obj = {a: 1, b: 2};
const result = Object.keys(obj).reduce((acc, key) => {
  acc[key.toUpperCase()] = obj[key];
  return acc;
}, {});
console.log(result);`,solution:`const obj = {a: 1, b: 2};
const result = Object.keys(obj).reduce((acc, key) => {
  acc[key.toUpperCase()] = obj[key];
  return acc;
}, {});
console.log(result);`,tests:[{input:[],expected:"{ A: 1, B: 2 }"}],hints:["Uppercase keys","Reduce to new object"]},{id:"08-objects-object-basics-42",title:"Complete 5",starterCode:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = Object.assign({}, obj1, obj2);
console.log(merged);`,solution:`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = Object.assign({}, obj1, obj2);
console.log(merged);`,tests:[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],hints:["Object.assign merge","Later overrides"]},{id:"08-objects-object-basics-43",title:"Complete 6",starterCode:`const obj = {a: 1, b: 2, c: 3};
const entries = Object.entries(obj);
const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
console.log(max);`,solution:`const obj = {a: 1, b: 2, c: 3};
const entries = Object.entries(obj);
const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
console.log(max);`,tests:[{input:[],expected:"[ 'c', 3 ]"}],hints:["Find max value entry","Compare values"]},{id:"08-objects-object-basics-44",title:"Complete 7",starterCode:`const obj = {x: 10, y: 20};
console.log(JSON.stringify(obj));`,solution:`const obj = {x: 10, y: 20};
console.log(JSON.stringify(obj));`,tests:[{input:[],expected:'{"x":10,"y":20}'}],hints:["JSON.stringify serializes","Returns string"]},{id:"08-objects-object-basics-45",title:"Complete 8",starterCode:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(Math.max(...values));`,solution:`const obj = {a: 1, b: 2, c: 3};
const values = Object.values(obj);
console.log(Math.max(...values));`,tests:[{input:[],expected:"3"}],hints:["Object.values gets values","Spread for Math.max"]},{id:"08-objects-object-basics-46",title:"Entries to Map",starterCode:`const entries = [['a', 1], ['b', 2]];
const map = new Map(entries);
console.log(map.get('a'));`,solution:`const entries = [['a', 1], ['b', 2]];
const map = new Map(entries);
console.log(map.get('a'));`,tests:[{input:[],expected:"1"}],hints:["Map from entries","get method"]},{id:"08-objects-object-basics-47",title:"Object Keys Length",starterCode:`const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj).length);`,solution:`const obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj).length);`,tests:[{input:[],expected:"3"}],hints:["Count properties","Length of keys array"]},{id:"08-objects-object-basics-48",title:"Nested Access",starterCode:`const obj = {a: {b: {c: 42}}};
console.log(obj.a.b.c);`,solution:`const obj = {a: {b: {c: 42}}};
console.log(obj.a.b.c);`,tests:[{input:[],expected:"42"}],hints:["Dot notation chain","Access nested value"]},{id:"08-objects-object-basics-49",title:"Object Entries Loop",starterCode:`const obj = {x: 10, y: 20};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + '=' + v);
}`,solution:`const obj = {x: 10, y: 20};
for (const [k, v] of Object.entries(obj)) {
  console.log(k + '=' + v);
}`,tests:[{input:[],expected:`x=10
y=20`}],hints:["Destructure in loop","Log key=value"]},{id:"08-objects-object-basics-50",title:"Spread Override",starterCode:`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large'};
const result = {...defaults, ...custom};
console.log(result.color, result.size);`,solution:`const defaults = {color: 'red', size: 'medium'};
const custom = {size: 'large'};
const result = {...defaults, ...custom};
console.log(result.color, result.size);`,tests:[{input:[],expected:"red large"}],hints:["Spread merge","Override specific"]}],"09-strings-01-string-basics":[{id:"09-strings-string-basics-01",title:"String Literal",starterCode:`const str = ____;
console.log(typeof str);`,solution:`const str = 'hello';
console.log(typeof str);`,tests:[{input:[],expected:"string"}],hints:["Use quotes","String primitive"]},{id:"09-strings-string-basics-02",title:"String Constructor",starterCode:`const str = String(42);
console.log(typeof str, str);`,solution:`const str = String(42);
console.log(typeof str, str);`,tests:[{input:[],expected:"string 42"}],hints:["String() converts to string","Returns string type"]},{id:"09-strings-string-basics-03",title:"Template Literals",starterCode:`const name = 'Alice';
const msg = ____;
console.log(msg);`,solution:"const name = 'Alice';\nconst msg = `Hello, ${name}!`;\nconsole.log(msg);",tests:[{input:[],expected:"Hello, Alice!"}],hints:["Use backticks","Interpolate with ${}"]},{id:"09-strings-string-basics-04",title:"Multi-line",starterCode:`const str = ____;
console.log(str);`,solution:"const str = `line1\nline2`;\nconsole.log(str);",tests:[{input:[],expected:`line1
line2`}],hints:["Backticks for multi-line","Newlines preserved"]},{id:"09-strings-string-basics-05",title:"String Length",starterCode:`const str = 'hello';
console.log(str.____);`,solution:`const str = 'hello';
console.log(str.length);`,tests:[{input:[],expected:"5"}],hints:["length property","Count of characters"]},{id:"09-strings-string-basics-06",title:"Index Access",starterCode:`const str = 'hello';
console.log(str[1]);`,solution:`const str = 'hello';
console.log(str[1]);`,tests:[{input:[],expected:"e"}],hints:["Zero-based indexing","Bracket notation"]},{id:"09-strings-string-basics-07",title:"Immutability",starterCode:`const str = 'hello';
str[0] = 'H';
console.log(str);`,solution:`const str = 'hello';
str[0] = 'H';
console.log(str);`,tests:[{input:[],expected:"hello"}],hints:["Strings are immutable","Assignment fails"]},{id:"09-strings-string-basics-08",title:"Comparison",starterCode:`console.log('abc' < 'abd');
console.log('abc' === 'abc');`,solution:`console.log('abc' < 'abd');
console.log('abc' === 'abc');`,tests:[{input:[],expected:`true
true`}],hints:["Lexicographic comparison","Strict equality"]},{id:"09-strings-string-basics-09",title:"Repeat",starterCode:`const str = 'ha';
console.log(str.____(3));`,solution:`const str = 'ha';
console.log(str.repeat(3));`,tests:[{input:[],expected:"hahaha"}],hints:["repeat(n) repeats n times","Returns new string"]},{id:"09-strings-string-basics-10",title:"Trim",starterCode:`const str = '  hello  ';
console.log(str.trim());`,solution:`const str = '  hello  ';
console.log(str.trim());`,tests:[{input:[],expected:"hello"}],hints:["trim removes whitespace","Both ends"]},{id:"09-strings-string-basics-11",title:"ValueOf",starterCode:`const str = 'hello';
console.log(str.valueOf() === str);`,solution:`const str = 'hello';
console.log(str.valueOf() === str);`,tests:[{input:[],expected:"true"}],hints:["valueOf returns primitive","Same string"]},{id:"09-strings-string-basics-12",title:"ToString",starterCode:`const str = 'hello';
console.log(str.toString() === str);`,solution:`const str = 'hello';
console.log(str.toString() === str);`,tests:[{input:[],expected:"true"}],hints:["toString returns string","Same value"]},{id:"09-strings-string-basics-13",title:"At Method",starterCode:`const str = 'hello';
console.log(str.at(-1));`,solution:`const str = 'hello';
console.log(str.at(-1));`,tests:[{input:[],expected:"o"}],hints:["at() supports negative","-1 is last char"]},{id:"09-strings-string-basics-14",title:"CharAt",starterCode:`const str = 'hello';
console.log(str.charAt(2));`,solution:`const str = 'hello';
console.log(str.charAt(2));`,tests:[{input:[],expected:"l"}],hints:["charAt returns char","At index"]},{id:"09-strings-string-basics-15",title:"CharCodeAt",starterCode:`const str = 'A';
console.log(str.charCodeAt(0));`,solution:`const str = 'A';
console.log(str.charCodeAt(0));`,tests:[{input:[],expected:"65"}],hints:["Unicode code point","A is 65"]},{id:"09-strings-string-basics-16",title:"FromCharCode",starterCode:"console.log(String.fromCharCode(72, 101, 108, 108, 111));",solution:"console.log(String.fromCharCode(72, 101, 108, 108, 111));",tests:[{input:[],expected:"Hello"}],hints:["Static method","Convert codes to string"]},{id:"09-strings-string-basics-17",title:"Raw String",starterCode:"console.log(String.raw`Hello\\nWorld`);",solution:"console.log(String.raw`Hello\\nWorld`);",tests:[{input:[],expected:"Hello\\nWorld"}],hints:["raw preserves escapes","No processing"]},{id:"09-strings-string-basics-18",title:"Normalize",starterCode:`const str = 'caf\\u00E9';
console.log(str.normalize('NFC').length);`,solution:`const str = 'caf\\u00E9';
console.log(str.normalize('NFC').length);`,tests:[{input:[],expected:"4"}],hints:["normalize for unicode","NFC form"]},{id:"09-strings-string-basics-19",title:"LocaleCompare",starterCode:"console.log('apple'.localeCompare('banana'));",solution:"console.log('apple'.localeCompare('banana'));",tests:[{input:[],expected:"-1"}],hints:["Negative if before","Locale-aware sort"]},{id:"09-strings-string-basics-20",title:"Match",starterCode:`const str = 'hello world';
const result = str.match(/\\w+/g);
console.log(result);`,solution:`const str = 'hello world';
const result = str.match(/\\w+/g);
console.log(result);`,tests:[{input:[],expected:"[ 'hello', 'world' ]"}],hints:["match with regex","Global flag for all"]},{id:"09-strings-string-basics-21",title:"Search",starterCode:`const str = 'hello world';
console.log(str.search(/world/));`,solution:`const str = 'hello world';
console.log(str.search(/world/));`,tests:[{input:[],expected:"6"}],hints:["search returns index","-1 if not found"]},{id:"09-strings-string-basics-22",title:"Slice",starterCode:`const str = 'hello world';
console.log(str.slice(0, 5));`,solution:`const str = 'hello world';
console.log(str.slice(0, 5));`,tests:[{input:[],expected:"hello"}],hints:["slice(start, end)","End exclusive"]},{id:"09-strings-string-basics-23",title:"Split",starterCode:`const str = 'a,b,c,d';
console.log(str.split(','));`,solution:`const str = 'a,b,c,d';
console.log(str.split(','));`,tests:[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],hints:["split by delimiter","Returns array"]},{id:"09-strings-string-basics-24",title:"Substring",starterCode:`const str = 'hello world';
console.log(str.substring(6));`,solution:`const str = 'hello world';
console.log(str.substring(6));`,tests:[{input:[],expected:"world"}],hints:["substring from index","To end"]},{id:"09-strings-string-basics-25",title:"ToLowerCase",starterCode:"console.log('HELLO'.toLowerCase());",solution:"console.log('HELLO'.toLowerCase());",tests:[{input:[],expected:"hello"}],hints:["toLowerCase converts","All lowercase"]},{id:"09-strings-string-basics-26",title:"ToUpperCase",starterCode:"console.log('hello'.toUpperCase());",solution:"console.log('hello'.toUpperCase());",tests:[{input:[],expected:"HELLO"}],hints:["toUpperCase converts","All uppercase"]},{id:"09-strings-string-basics-27",title:"PadStart",starterCode:"console.log('42'.padStart(5, '0'));",solution:"console.log('42'.padStart(5, '0'));",tests:[{input:[],expected:"00042"}],hints:["padStart adds padding","At beginning"]},{id:"09-strings-string-basics-28",title:"PadEnd",starterCode:"console.log('hi'.padEnd(10, '.'));",solution:"console.log('hi'.padEnd(10, '.'));",tests:[{input:[],expected:"hi........"}],hints:["padEnd adds padding","At end"]},{id:"09-strings-string-basics-29",title:"Includes",starterCode:"console.log('hello world'.includes('world'));",solution:"console.log('hello world'.includes('world'));",tests:[{input:[],expected:"true"}],hints:["includes checks substring","Returns boolean"]},{id:"09-strings-string-basics-30",title:"StartsWith",starterCode:"console.log('hello world'.startsWith('hello'));",solution:"console.log('hello world'.startsWith('hello'));",tests:[{input:[],expected:"true"}],hints:["startsWith checks prefix","At beginning"]},{id:"09-strings-string-basics-31",title:"EndsWith",starterCode:"console.log('hello world'.endsWith('world'));",solution:"console.log('hello world'.endsWith('world'));",tests:[{input:[],expected:"true"}],hints:["endsWith checks suffix","At end"]},{id:"09-strings-string-basics-32",title:"IndexOf",starterCode:"console.log('hello world'.indexOf('world'));",solution:"console.log('hello world'.indexOf('world'));",tests:[{input:[],expected:"6"}],hints:["indexOf returns index","-1 if not found"]},{id:"09-strings-string-basics-33",title:"LastIndexOf",starterCode:"console.log('abcabc'.lastIndexOf('b'));",solution:"console.log('abcabc'.lastIndexOf('b'));",tests:[{input:[],expected:"4"}],hints:["lastIndexOf from end","Last occurrence"]},{id:"09-strings-string-basics-34",title:"Replace",starterCode:`const str = 'hello world';
console.log(str.replace('world', 'JS'));`,solution:`const str = 'hello world';
console.log(str.replace('world', 'JS'));`,tests:[{input:[],expected:"hello JS"}],hints:["replace first match","Returns new string"]},{id:"09-strings-string-basics-35",title:"ReplaceAll",starterCode:`const str = 'aaa';
console.log(str.replaceAll('a', 'b'));`,solution:`const str = 'aaa';
console.log(str.replaceAll('a', 'b'));`,tests:[{input:[],expected:"bbb"}],hints:["replaceAll all matches","Global replace"]},{id:"09-strings-string-basics-36",title:"EndsWith Position",starterCode:"console.log('hello world'.endsWith('world', 11));",solution:"console.log('hello world'.endsWith('world', 11));",tests:[{input:[],expected:"true"}],hints:["endsWith with position","Check at length"]},{id:"09-strings-string-basics-37",title:"CharAt Practice",starterCode:`const str = 'JavaScript';
console.log(str.charAt(0) + str.charAt(str.length - 1));`,solution:`const str = 'JavaScript';
console.log(str.charAt(0) + str.charAt(str.length - 1));`,tests:[{input:[],expected:"Jt"}],hints:["First and last char","Concat them"]},{id:"09-strings-string-basics-38",title:"Template Practice",starterCode:"const x = 10, y = 20;\nconsole.log(`Sum: ${x + y}`);",solution:"const x = 10, y = 20;\nconsole.log(`Sum: ${x + y}`);",tests:[{input:[],expected:"Sum: 30"}],hints:["Expression in template","Calculate inline"]},{id:"09-strings-string-basics-39",title:"Split Practice",starterCode:`const str = 'hello world';
const words = str.split(' ');
console.log(words.length);`,solution:`const str = 'hello world';
const words = str.split(' ');
console.log(words.length);`,tests:[{input:[],expected:"2"}],hints:["Split by space","Count words"]},{id:"09-strings-string-basics-40",title:"Join Practice",starterCode:`const arr = ['hello', 'world'];
console.log(arr.join(' '));`,solution:`const arr = ['hello', 'world'];
console.log(arr.join(' '));`,tests:[{input:[],expected:"hello world"}],hints:["join concatenates","With separator"]},{id:"09-strings-string-basics-41",title:"Slice Practice",starterCode:`const str = 'abcdef';
console.log(str.slice(-3));`,solution:`const str = 'abcdef';
console.log(str.slice(-3));`,tests:[{input:[],expected:"def"}],hints:["Negative index","From end"]},{id:"09-strings-string-basics-42",title:"Substring Practice",starterCode:`const str = 'hello world';
console.log(str.substring(6, 11));`,solution:`const str = 'hello world';
console.log(str.substring(6, 11));`,tests:[{input:[],expected:"world"}],hints:["substring(start, end)","Characters between"]},{id:"09-strings-string-basics-43",title:"Trim Practice",starterCode:`console.log('  hello  '.trim());
console.log('  hello  '.trimStart());
console.log('  hello  '.trimEnd());`,solution:`console.log('  hello  '.trim());
console.log('  hello  '.trimStart());
console.log('  hello  '.trimEnd());`,tests:[{input:[],expected:`hello
hello  
  hello`}],hints:["trim all, start, end","Remove whitespace"]},{id:"09-strings-string-basics-44",title:"Pad Practice",starterCode:`console.log('5'.padStart(3));
console.log('hi'.padEnd(5, '!'));`,solution:`console.log('5'.padStart(3));
console.log('hi'.padEnd(5, '!'));`,tests:[{input:[],expected:`  5
hi!!!`}],hints:["padStart default space","padEnd custom char"]},{id:"09-strings-string-basics-45",title:"Repeat Practice",starterCode:`console.log('ab'.repeat(0));
console.log('x'.repeat(5));`,solution:`console.log('ab'.repeat(0));
console.log('x'.repeat(5));`,tests:[{input:[],expected:`
xxxxx`}],hints:["repeat(0) empty","repeat(5) five times"]},{id:"09-strings-string-basics-46",title:"CharCode Practice",starterCode:`const code = 'Z'.charCodeAt(0);
console.log(code);
console.log(String.fromCharCode(code));`,solution:`const code = 'Z'.charCodeAt(0);
console.log(code);
console.log(String.fromCharCode(code));`,tests:[{input:[],expected:`90
Z`}],hints:["Z is code 90","Convert back"]},{id:"09-strings-string-basics-47",title:"Raw Practice",starterCode:"console.log(String.raw`First line\\nSecond line`);",solution:"console.log(String.raw`First line\\nSecond line`);",tests:[{input:[],expected:"First line\\nSecond line"}],hints:["raw preserves backslash","No escape processing"]},{id:"09-strings-string-basics-48",title:"Normalize Practice",starterCode:`const str = 'caf\\u00E9';
console.log(str.length);
console.log(str.normalize().length);`,solution:`const str = 'caf\\u00E9';
console.log(str.length);
console.log(str.normalize().length);`,tests:[{input:[],expected:`4
4`}],hints:["Normalize may change length","Unicode normalization"]},{id:"09-strings-string-basics-49",title:"Locale Practice",starterCode:`const arr = ['banana', 'apple', 'cherry'];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);`,solution:`const arr = ['banana', 'apple', 'cherry'];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);`,tests:[{input:[],expected:"[ 'apple', 'banana', 'cherry' ]"}],hints:["localeCompare for sort","Alphabetical order"]},{id:"09-strings-string-basics-50",title:"Match Practice",starterCode:`const str = '2024-01-15';
const match = str.match(/\\d+/g);
console.log(match);`,solution:`const str = '2024-01-15';
const match = str.match(/\\d+/g);
console.log(match);`,tests:[{input:[],expected:"[ '2024', '01', '15' ]"}],hints:["Match digits globally","Returns array"]}],"09-strings-02-string-methods":[{id:"09-strings-string-methods-01",title:"CharAt",starterCode:`const str = 'hello';
console.log(str.charAt(0));`,solution:`const str = 'hello';
console.log(str.charAt(0));`,tests:[{input:[],expected:"h"}],hints:["charAt returns character","At index"]},{id:"09-strings-string-methods-02",title:"At Negative",starterCode:`const str = 'hello';
console.log(str.at(-1));`,solution:`const str = 'hello';
console.log(str.at(-1));`,tests:[{input:[],expected:"o"}],hints:["at() supports negative","Last character"]},{id:"09-strings-string-methods-03",title:"Includes",starterCode:"console.log('hello world'.includes('world'));",solution:"console.log('hello world'.includes('world'));",tests:[{input:[],expected:"true"}],hints:["includes checks substring","Returns boolean"]},{id:"09-strings-string-methods-04",title:"Includes Empty",starterCode:"console.log('hello'.includes(''));",solution:"console.log('hello'.includes(''));",tests:[{input:[],expected:"true"}],hints:["Empty string always included","Edge case"]},{id:"09-strings-string-methods-05",title:"StartsWith",starterCode:"console.log('hello world'.startsWith('hello'));",solution:"console.log('hello world'.startsWith('hello'));",tests:[{input:[],expected:"true"}],hints:["startsWith checks prefix","At beginning"]},{id:"09-strings-string-methods-06",title:"EndsWith",starterCode:"console.log('hello world'.endsWith('world'));",solution:"console.log('hello world'.endsWith('world'));",tests:[{input:[],expected:"true"}],hints:["endsWith checks suffix","At end"]},{id:"09-strings-string-methods-07",title:"IndexOf",starterCode:"console.log('hello world'.indexOf('world'));",solution:"console.log('hello world'.indexOf('world'));",tests:[{input:[],expected:"6"}],hints:["indexOf returns index","Position of substring"]},{id:"09-strings-string-methods-08",title:"IndexOf Not Found",starterCode:"console.log('hello'.indexOf('xyz'));",solution:"console.log('hello'.indexOf('xyz'));",tests:[{input:[],expected:"-1"}],hints:["-1 when not found","No match"]},{id:"09-strings-string-methods-09",title:"LastIndexOf",starterCode:"console.log('abcabc'.lastIndexOf('b'));",solution:"console.log('abcabc'.lastIndexOf('b'));",tests:[{input:[],expected:"4"}],hints:["Last occurrence","Searches from end"]},{id:"09-strings-string-methods-10",title:"Slice",starterCode:`const str = 'hello world';
console.log(str.slice(0, 5));`,solution:`const str = 'hello world';
console.log(str.slice(0, 5));`,tests:[{input:[],expected:"hello"}],hints:["slice(start, end)","End exclusive"]},{id:"09-strings-string-methods-11",title:"Slice Negative",starterCode:`const str = 'hello';
console.log(str.slice(-3));`,solution:`const str = 'hello';
console.log(str.slice(-3));`,tests:[{input:[],expected:"llo"}],hints:["Negative from end","Last 3 chars"]},{id:"09-strings-string-methods-12",title:"Slice Wrap",starterCode:"console.log('hello'.slice(1, 10));",solution:"console.log('hello'.slice(1, 10));",tests:[{input:[],expected:"ello"}],hints:["End beyond length ok","Clamps to end"]},{id:"09-strings-string-methods-13",title:"Substring",starterCode:`const str = 'hello world';
console.log(str.substring(6));`,solution:`const str = 'hello world';
console.log(str.substring(6));`,tests:[{input:[],expected:"world"}],hints:["substring from index","To end of string"]},{id:"09-strings-string-methods-14",title:"Replace",starterCode:`const str = 'hello world';
console.log(str.replace('world', 'JS'));`,solution:`const str = 'hello world';
console.log(str.replace('world', 'JS'));`,tests:[{input:[],expected:"hello JS"}],hints:["Replace first match","Returns new string"]},{id:"09-strings-string-methods-15",title:"Replace Regex",starterCode:`const str = 'hello world';
console.log(str.replace(/o/g, '0'));`,solution:`const str = 'hello world';
console.log(str.replace(/o/g, '0'));`,tests:[{input:[],expected:"hell0 w0rld"}],hints:["Regex global replace","All matches"]},{id:"09-strings-string-methods-16",title:"Replace Multiple",starterCode:`const str = 'aabbcc';
console.log(str.replace(/b/g, 'X'));`,solution:`const str = 'aabbcc';
console.log(str.replace(/b/g, 'X'));`,tests:[{input:[],expected:"aaXXcc"}],hints:["Replace all b","Global flag"]},{id:"09-strings-string-methods-17",title:"ReplaceAll",starterCode:`const str = 'aaa';
console.log(str.replaceAll('a', 'b'));`,solution:`const str = 'aaa';
console.log(str.replaceAll('a', 'b'));`,tests:[{input:[],expected:"bbb"}],hints:["replaceAll replaces all","No regex needed"]},{id:"09-strings-string-methods-18",title:"Replace Callback",starterCode:`const str = 'hello world';
console.log(str.replace(/\\w+/g, w => w.toUpperCase()));`,solution:`const str = 'hello world';
console.log(str.replace(/\\w+/g, w => w.toUpperCase()));`,tests:[{input:[],expected:"HELLO WORLD"}],hints:["Callback transforms","Capitalize words"]},{id:"09-strings-string-methods-19",title:"Split",starterCode:`const str = 'a,b,c,d';
console.log(str.split(','));`,solution:`const str = 'a,b,c,d';
console.log(str.split(','));`,tests:[{input:[],expected:"[ 'a', 'b', 'c', 'd' ]"}],hints:["Split by delimiter","Returns array"]},{id:"09-strings-string-methods-20",title:"Split Empty",starterCode:"console.log(''.split(','));",solution:"console.log(''.split(','));",tests:[{input:[],expected:"[ '' ]"}],hints:["Empty string split","Returns array with empty"]},{id:"09-strings-string-methods-21",title:"Split Limit",starterCode:`const str = 'a,b,c,d';
console.log(str.split(',', 2));`,solution:`const str = 'a,b,c,d';
console.log(str.split(',', 2));`,tests:[{input:[],expected:"[ 'a', 'b' ]"}],hints:["Limit splits","Max 2 elements"]},{id:"09-strings-string-methods-22",title:"Split Regex",starterCode:`const str = 'hello world 123';
console.log(str.split(/\\s+/));`,solution:`const str = 'hello world 123';
console.log(str.split(/\\s+/));`,tests:[{input:[],expected:"[ 'hello', 'world', '123' ]"}],hints:["Regex split","Split on whitespace"]},{id:"09-strings-string-methods-23",title:"Join Practice",starterCode:`const arr = ['hello', 'world'];
console.log(arr.join(' '));`,solution:`const arr = ['hello', 'world'];
console.log(arr.join(' '));`,tests:[{input:[],expected:"hello world"}],hints:["Join with space","Concat array"]},{id:"09-strings-string-methods-24",title:"Split Join Roundtrip",starterCode:`const str = 'hello world';
const result = str.split(' ').join('-');
console.log(result);`,solution:`const str = 'hello world';
const result = str.split(' ').join('-');
console.log(result);`,tests:[{input:[],expected:"hello-world"}],hints:["Split then join","Change separator"]},{id:"09-strings-string-methods-25",title:"ToUpperCase",starterCode:"console.log('hello'.toUpperCase());",solution:"console.log('hello'.toUpperCase());",tests:[{input:[],expected:"HELLO"}],hints:["All uppercase","New string"]},{id:"09-strings-string-methods-26",title:"ToLowerCase",starterCode:"console.log('HELLO'.toLowerCase());",solution:"console.log('HELLO'.toLowerCase());",tests:[{input:[],expected:"hello"}],hints:["All lowercase","New string"]},{id:"09-strings-string-methods-27",title:"ToCase Edge",starterCode:`console.log(''.toUpperCase());
console.log('123'.toLowerCase());`,solution:`console.log(''.toUpperCase());
console.log('123'.toLowerCase());`,tests:[{input:[],expected:`
123`}],hints:["Empty string","Numbers unchanged"]},{id:"09-strings-string-methods-28",title:"PadStart",starterCode:"console.log('42'.padStart(5, '0'));",solution:"console.log('42'.padStart(5, '0'));",tests:[{input:[],expected:"00042"}],hints:["Pad with zeros","To length 5"]},{id:"09-strings-string-methods-29",title:"PadEnd",starterCode:"console.log('hi'.padEnd(10, '.'));",solution:"console.log('hi'.padEnd(10, '.'));",tests:[{input:[],expected:"hi........"}],hints:["Pad with dots","At end"]},{id:"09-strings-string-methods-30",title:"Pad Short",starterCode:"console.log('hello'.padStart(3));",solution:"console.log('hello'.padStart(3));",tests:[{input:[],expected:"hello"}],hints:["Already longer","No padding"]},{id:"09-strings-string-methods-31",title:"Pad Fill",starterCode:`console.log('5'.padStart(5, '0'));
console.log('5'.padEnd(5, '0'));`,solution:`console.log('5'.padStart(5, '0'));
console.log('5'.padEnd(5, '0'));`,tests:[{input:[],expected:`00005
50000`}],hints:["Pad start and end","Different positions"]},{id:"09-strings-string-methods-32",title:"Match",starterCode:`const str = 'hello world';
const result = str.match(/\\w+/);
console.log(result[0]);`,solution:`const str = 'hello world';
const result = str.match(/\\w+/);
console.log(result[0]);`,tests:[{input:[],expected:"hello"}],hints:["First match","Returns array"]},{id:"09-strings-string-methods-33",title:"Match All",starterCode:`const str = 'a1b2c3';
const result = str.matchAll(/[a-z]/g);
console.log([...result].map(m => m[0]));`,solution:`const str = 'a1b2c3';
const result = str.matchAll(/[a-z]/g);
console.log([...result].map(m => m[0]));`,tests:[{input:[],expected:"[ 'a', 'b', 'c' ]"}],hints:["matchAll iterator","All matches"]},{id:"09-strings-string-methods-34",title:"Match Groups",starterCode:`const str = '2024-01-15';
const result = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result[1], result[2], result[3]);`,solution:`const str = '2024-01-15';
const result = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result[1], result[2], result[3]);`,tests:[{input:[],expected:"2024 01 15"}],hints:["Capture groups","Access by index"]},{id:"09-strings-string-methods-35",title:"Match Null",starterCode:`const result = 'hello'.match(/xyz/);
console.log(result);`,solution:`const result = 'hello'.match(/xyz/);
console.log(result);`,tests:[{input:[],expected:"null"}],hints:["No match returns null","Check result"]},{id:"09-strings-string-methods-36",title:"Search Regex",starterCode:"console.log('hello world'.search(/world/));",solution:"console.log('hello world'.search(/world/));",tests:[{input:[],expected:"6"}],hints:["search returns index","Like indexOf with regex"]},{id:"09-strings-string-methods-37",title:"Search Not Found",starterCode:"console.log('hello'.search(/xyz/));",solution:"console.log('hello'.search(/xyz/));",tests:[{input:[],expected:"-1"}],hints:["-1 when not found","No match"]},{id:"09-strings-string-methods-38",title:"Search Pattern",starterCode:`const str = 'abc123def';
console.log(str.search(/\\d/));`,solution:`const str = 'abc123def';
console.log(str.search(/\\d/));`,tests:[{input:[],expected:"3"}],hints:["Find first digit","Returns index"]},{id:"09-strings-string-methods-39",title:"Repeat Edge",starterCode:`console.log('a'.repeat(0));
console.log(''.repeat(5));`,solution:`console.log('a'.repeat(0));
console.log(''.repeat(5));`,tests:[{input:[],expected:`
`}],hints:["repeat(0) empty","Empty repeated"]},{id:"09-strings-string-methods-40",title:"Repeat Large",starterCode:"console.log('ab'.repeat(3));",solution:"console.log('ab'.repeat(3));",tests:[{input:[],expected:"ababab"}],hints:["Repeat string","Concatenate"]},{id:"09-strings-string-methods-41",title:"Trim Start",starterCode:"console.log('  hello  '.trimStart());",solution:"console.log('  hello  '.trimStart());",tests:[{input:[],expected:"hello  "}],hints:["Remove leading whitespace","Keep trailing"]},{id:"09-strings-string-methods-42",title:"Trim End",starterCode:"console.log('  hello  '.trimEnd());",solution:"console.log('  hello  '.trimEnd());",tests:[{input:[],expected:"  hello"}],hints:["Remove trailing whitespace","Keep leading"]},{id:"09-strings-string-methods-43",title:"Trim Only Spaces",starterCode:"console.log('\\t hello \\t'.trim());",solution:"console.log('\\t hello \\t'.trim());",tests:[{input:[],expected:"hello"}],hints:["Trim removes all whitespace","Tabs too"]},{id:"09-strings-string-methods-44",title:"Trim Unicode",starterCode:"console.log('\\u00A0hello\\u00A0'.trim());",solution:"console.log('\\u00A0hello\\u00A0'.trim());",tests:[{input:[],expected:"hello"}],hints:["Unicode whitespace","Non-breaking space"]},{id:"09-strings-string-methods-45",title:"Pad Custom Char",starterCode:`console.log('hello'.padStart(10, '-'));
console.log('hello'.padEnd(10, '-'));`,solution:`console.log('hello'.padStart(10, '-'));
console.log('hello'.padEnd(10, '-'));`,tests:[{input:[],expected:`-----hello
hello-----`}],hints:["Custom pad character","Dash"]},{id:"09-strings-string-methods-46",title:"Pad End Start",starterCode:"console.log('hi'.padStart(5).padEnd(8));",solution:"console.log('hi'.padStart(5).padEnd(8));",tests:[{input:[],expected:"   hi    "}],hints:["Chain pad methods","Pad both ends"]},{id:"09-strings-string-methods-47",title:"Includes From",starterCode:"console.log('hello world'.includes('world', 6));",solution:"console.log('hello world'.includes('world', 6));",tests:[{input:[],expected:"true"}],hints:["includes with fromIndex","Start search at 6"]},{id:"09-strings-string-methods-48",title:"IndexOf From",starterCode:"console.log('abcabc'.indexOf('b', 2));",solution:"console.log('abcabc'.indexOf('b', 2));",tests:[{input:[],expected:"4"}],hints:["indexOf from index","Skip first match"]},{id:"09-strings-string-methods-49",title:"Iteration",starterCode:`const str = 'abc';
for (const char of str) {
  console.log(char);
}`,solution:`const str = 'abc';
for (const char of str) {
  console.log(char);
}`,tests:[{input:[],expected:`a
b
c`}],hints:["for...of iterates chars","Each character"]},{id:"09-strings-string-methods-50",title:"Spread String",starterCode:`const str = 'hello';
const arr = [...str];
console.log(arr);`,solution:`const str = 'hello';
const arr = [...str];
console.log(arr);`,tests:[{input:[],expected:"[ 'h', 'e', 'l', 'l', 'o' ]"}],hints:["Spread to array","Each char"]}],"09-strings-03-string-patterns":[{id:"09-strings-string-patterns-01",title:"Reverse String",starterCode:`function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('hello'));`,solution:`function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('hello'));`,tests:[{input:[],expected:"olleh"}],hints:["Split to array, reverse, join","Classic pattern"]},{id:"09-strings-string-patterns-02",title:"Count Vowels",starterCode:`function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world'));`,solution:`function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world'));`,tests:[{input:[],expected:"3"}],hints:["Match vowels globally","Case-insensitive"]},{id:"09-strings-string-patterns-03",title:"Capitalize First",starterCode:`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello'));`,solution:`function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello'));`,tests:[{input:[],expected:"Hello"}],hints:["First char uppercase","Concat rest"]},{id:"09-strings-string-patterns-04",title:"Title Case",starterCode:`function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase('hello world'));`,solution:`function titleCase(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
console.log(titleCase('hello world'));`,tests:[{input:[],expected:"Hello World"}],hints:["Capitalize each word","Split, map, join"]},{id:"09-strings-string-patterns-05",title:"Truncate String",starterCode:`function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}
console.log(truncate('hello world', 5));`,solution:`function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}
console.log(truncate('hello world', 5));`,tests:[{input:[],expected:"hello..."}],hints:["Check length","Add ellipsis"]},{id:"09-strings-string-patterns-06",title:"Palindrome Check",starterCode:`function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));`,solution:`function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));`,tests:[{input:[],expected:`true
false`}],hints:["Clean string first","Compare to reverse"]},{id:"09-strings-string-patterns-07",title:"Anagram Check",starterCode:`function isAnagram(a, b) {
  const sort = s => s.toLowerCase().split('').sort().join('');
  return sort(a) === sort(b);
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));`,solution:`function isAnagram(a, b) {
  const sort = s => s.toLowerCase().split('').sort().join('');
  return sort(a) === sort(b);
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));`,tests:[{input:[],expected:`true
false`}],hints:["Sort characters","Compare sorted"]},{id:"09-strings-string-patterns-08",title:"Count Words",starterCode:`function countWords(str) {
  return str.trim().split(/\\s+/).length;
}
console.log(countWords('hello world'));
console.log(countWords('  hello   world  '));`,solution:`function countWords(str) {
  return str.trim().split(/\\s+/).length;
}
console.log(countWords('hello world'));
console.log(countWords('  hello   world  '));`,tests:[{input:[],expected:`2
2`}],hints:["Trim then split","Count array length"]},{id:"09-strings-string-patterns-09",title:"Extract Numbers",starterCode:`function extractNumbers(str) {
  return str.match(/\\d+/g).map(Number);
}
console.log(extractNumbers('abc123def456'));`,solution:`function extractNumbers(str) {
  return str.match(/\\d+/g).map(Number);
}
console.log(extractNumbers('abc123def456'));`,tests:[{input:[],expected:"[ 123, 456 ]"}],hints:["Match digits","Convert to numbers"]},{id:"09-strings-string-patterns-10",title:"Slugify String",starterCode:`function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
console.log(slugify('Hello World!'));`,solution:`function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
console.log(slugify('Hello World!'));`,tests:[{input:[],expected:"hello-world"}],hints:["Lowercase, replace spaces","Remove leading/trailing dashes"]},{id:"09-strings-string-patterns-11",title:"Count Consonants",starterCode:`function countConsonants(str) {
  return (str.match(/[^aeiou\\W\\d]/gi) || []).length;
}
console.log(countConsonants('hello world'));`,solution:`function countConsonants(str) {
  return (str.match(/[^aeiou\\W\\d]/gi) || []).length;
}
console.log(countConsonants('hello world'));`,tests:[{input:[],expected:"7"}],hints:["Non-vowel letters","Match consonants"]},{id:"09-strings-string-patterns-12",title:"CamelCase",starterCode:`function camelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}
console.log(camelCase('hello world'));`,solution:`function camelCase(str) {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
}
console.log(camelCase('hello world'));`,tests:[{input:[],expected:"helloWorld"}],hints:["Replace separator + char","Capitalize after sep"]},{id:"09-strings-string-patterns-13",title:"Snake Case",starterCode:`function snakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
console.log(snakeCase('helloWorld'));`,solution:`function snakeCase(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
console.log(snakeCase('helloWorld'));`,tests:[{input:[],expected:"hello_world"}],hints:["Add underscore before caps","Lowercase all"]},{id:"09-strings-string-patterns-14",title:"Kebab Case",starterCode:`function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
console.log(kebabCase('helloWorld'));`,solution:`function kebabCase(str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
console.log(kebabCase('helloWorld'));`,tests:[{input:[],expected:"hello-world"}],hints:["Dash before caps","Lowercase all"]},{id:"09-strings-string-patterns-15",title:"Run-Length Compression",starterCode:`function compress(str) {
  return str.replace(/(.)\\1+/g, (match) => match[0] + match.length);
}
console.log(compress('aaabbbccc'));`,solution:`function compress(str) {
  return str.replace(/(.)\\1+/g, (match) => match[0] + match.length);
}
console.log(compress('aaabbbccc'));`,tests:[{input:[],expected:"a3b3c3"}],hints:["Count consecutive","Replace with count"]},{id:"09-strings-string-patterns-16",title:"Longest Word",starterCode:`function longestWord(str) {
  return str.split(/\\s+/).reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestWord('hello beautiful world'));`,solution:`function longestWord(str) {
  return str.split(/\\s+/).reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestWord('hello beautiful world'));`,tests:[{input:[],expected:"beautiful"}],hints:["Split by spaces","Find longest"]},{id:"09-strings-string-patterns-17",title:"Word Frequency",starterCode:`function wordFreq(str) {
  return str.split(/\\s+/).reduce((acc, w) => ({...acc, [w]: (acc[w] || 0) + 1}), {});
}
console.log(wordFreq('hello world hello'));`,solution:`function wordFreq(str) {
  return str.split(/\\s+/).reduce((acc, w) => ({...acc, [w]: (acc[w] || 0) + 1}), {});
}
console.log(wordFreq('hello world hello'));`,tests:[{input:[],expected:"{ hello: 2, world: 1 }"}],hints:["Count word occurrences","Reduce to object"]},{id:"09-strings-string-patterns-18",title:"Remove Duplicate Chars",starterCode:`function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
console.log(removeDuplicates('hello'));`,solution:`function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
console.log(removeDuplicates('hello'));`,tests:[{input:[],expected:"helo"}],hints:["Set removes duplicates","Spread and join"]},{id:"09-strings-string-patterns-19",title:"Is Rotation",starterCode:`function isRotation(a, b) {
  return a.length === b.length && (a + a).includes(b);
}
console.log(isRotation('hello', 'llohe'));
console.log(isRotation('hello', 'helloo'));`,solution:`function isRotation(a, b) {
  return a.length === b.length && (a + a).includes(b);
}
console.log(isRotation('hello', 'llohe'));
console.log(isRotation('hello', 'helloo'));`,tests:[{input:[],expected:`true
false`}],hints:["Concat string with itself","Check inclusion"]},{id:"09-strings-string-patterns-20",title:"Common Prefix",starterCode:`function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(commonPrefix(['flower', 'flow', 'flight']));`,solution:`function commonPrefix(arr) {
  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}
console.log(commonPrefix(['flower', 'flow', 'flight']));`,tests:[{input:[],expected:"fl"}],hints:["Start with first word","Trim until match"]},{id:"09-strings-string-patterns-21",title:"Common Suffix",starterCode:`function commonSuffix(str1, str2) {
  let i = str1.length, j = str2.length, count = 0;
  while (i > 0 && j > 0 && str1[--i] === str2[--j]) count++;
  return str1.slice(-count);
}
console.log(commonSuffix('testing', 'running'));`,solution:`function commonSuffix(str1, str2) {
  let i = str1.length, j = str2.length, count = 0;
  while (i > 0 && j > 0 && str1[--i] === str2[--j]) count++;
  return str1.slice(-count);
}
console.log(commonSuffix('testing', 'running'));`,tests:[{input:[],expected:"ing"}],hints:["Compare from end","Count matching suffix"]},{id:"09-strings-string-patterns-22",title:"Mask Email",starterCode:`function maskEmail(email) {
  const [name, domain] = email.split('@');
  const masked = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  return masked + '@' + domain;
}
console.log(maskEmail('alice@example.com'));`,solution:`function maskEmail(email) {
  const [name, domain] = email.split('@');
  const masked = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  return masked + '@' + domain;
}
console.log(maskEmail('alice@example.com'));`,tests:[{input:[],expected:"a*****e@example.com"}],hints:["Keep first and last","Mask middle with *"]},{id:"09-strings-string-patterns-23",title:"String to Array",starterCode:`const str = 'hello';
const arr = [...str];
console.log(arr);`,solution:`const str = 'hello';
const arr = [...str];
console.log(arr);`,tests:[{input:[],expected:"[ 'h', 'e', 'l', 'l', 'o' ]"}],hints:["Spread string","Each character"]},{id:"09-strings-string-patterns-24",title:"Array to String",starterCode:`const arr = ['h', 'e', 'l', 'l', 'o'];
const str = arr.join('');
console.log(str);`,solution:`const arr = ['h', 'e', 'l', 'l', 'o'];
const str = arr.join('');
console.log(str);`,tests:[{input:[],expected:"hello"}],hints:["Join without separator","Concat all"]},{id:"09-strings-string-patterns-25",title:"Isomorphic Strings",starterCode:`function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = {}, mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) return false;
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) return false;
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));`,solution:`function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = {}, mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) return false;
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) return false;
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));`,tests:[{input:[],expected:`true
false`}],hints:["Two-way mapping","Check consistency"]},{id:"09-strings-string-patterns-26",title:"First Unique Char",starterCode:`function firstUniqueChar(str) {
  for (const c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c;
  }
  return null;
}
console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('aabb'));`,solution:`function firstUniqueChar(str) {
  for (const c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c;
  }
  return null;
}
console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('aabb'));`,tests:[{input:[],expected:`l
null`}],hints:["Check first and last same","Unique character"]},{id:"09-strings-string-patterns-27",title:"Longest Substring No Repeat",starterCode:`function longestSubstring(str) {
  let max = 0, start = 0;
  const seen = new Map();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i]) && seen.get(str[i]) >= start) {
      start = seen.get(str[i]) + 1;
    }
    seen.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(longestSubstring('abcabcbb'));`,solution:`function longestSubstring(str) {
  let max = 0, start = 0;
  const seen = new Map();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i]) && seen.get(str[i]) >= start) {
      start = seen.get(str[i]) + 1;
    }
    seen.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(longestSubstring('abcabcbb'));`,tests:[{input:[],expected:"3"}],hints:["Sliding window","Track seen characters"]},{id:"09-strings-string-patterns-28",title:"Valid Parentheses",starterCode:`function isValid(s) {
  const stack = [];
  const map = {')': '(', ']': '[', '}': '{'};
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
console.log(isValid('()[]{}'));
console.log(isValid('(]'));`,solution:`function isValid(s) {
  const stack = [];
  const map = {')': '(', ']': '[', '}': '{'};
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
console.log(isValid('()[]{}'));
console.log(isValid('(]'));`,tests:[{input:[],expected:`true
false`}],hints:["Stack for matching","Pop and compare"]},{id:"09-strings-string-patterns-29",title:"Group Anagrams",starterCode:`function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(s);
  }
  return Object.values(map);
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));`,solution:`function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(s);
  }
  return Object.values(map);
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));`,tests:[{input:[],expected:"[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]"}],hints:["Sort chars as key","Group by anagram"]},{id:"09-strings-string-patterns-30",title:"Reverse Words",starterCode:`function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world foo'));`,solution:`function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('hello world foo'));`,tests:[{input:[],expected:"foo world hello"}],hints:["Split by space","Reverse array"]},{id:"09-strings-string-patterns-31",title:"Count Letters",starterCode:`function countLetters(str) {
  return str.split('').reduce((acc, c) => ({...acc, [c]: (acc[c] || 0) + 1}), {});
}
console.log(countLetters('hello'));`,solution:`function countLetters(str) {
  return str.split('').reduce((acc, c) => ({...acc, [c]: (acc[c] || 0) + 1}), {});
}
console.log(countLetters('hello'));`,tests:[{input:[],expected:"{ h: 1, e: 1, l: 2, o: 1 }"}],hints:["Reduce to frequency","Count each letter"]},{id:"09-strings-string-patterns-32",title:"Is Pangram",starterCode:`function isPangram(str) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => str.toLowerCase().includes(c));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello'));`,solution:`function isPangram(str) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => str.toLowerCase().includes(c));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello'));`,tests:[{input:[],expected:`true
false`}],hints:["Check all 26 letters","every with includes"]},{id:"09-strings-string-patterns-33",title:"Caesar Cipher",starterCode:`function caesar(str, shift) {
  return str.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}
console.log(caesar('Hello', 3));`,solution:`function caesar(str, shift) {
  return str.replace(/[a-z]/gi, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
  });
}
console.log(caesar('Hello', 3));`,tests:[{input:[],expected:"Khoor"}],hints:["Shift each letter","Wrap around alphabet"]},{id:"09-strings-string-patterns-34",title:"Run Length Decode",starterCode:`function decode(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, char, count) => char.repeat(Number(count)));
}
console.log(decode('a3b2c1'));`,solution:`function decode(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, char, count) => char.repeat(Number(count)));
}
console.log(decode('a3b2c1'));`,tests:[{input:[],expected:"aaabbc"}],hints:["Match char + digits","Repeat char by count"]},{id:"09-strings-string-patterns-35",title:"Longest Common Subsequence",starterCode:`function lcs(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}
console.log(lcs('abcde', 'ace'));`,solution:`function lcs(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}
console.log(lcs('abcde', 'ace'));`,tests:[{input:[],expected:"3"}],hints:["Dynamic programming","Build table"]},{id:"09-strings-string-patterns-36",title:"Edit Distance",starterCode:`function editDistance(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
    }
  }
  return dp[a.length][b.length];
}
console.log(editDistance('kitten', 'sitting'));`,solution:`function editDistance(a, b) {
  const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
    }
  }
  return dp[a.length][b.length];
}
console.log(editDistance('kitten', 'sitting'));`,tests:[{input:[],expected:"3"}],hints:["DP grid","Min of three ops"]},{id:"09-strings-string-patterns-37",title:"String Shuffle",starterCode:`function shuffle(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
console.log(shuffle('abc').split('').sort().join(''));`,solution:`function shuffle(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}
console.log(shuffle('abc').split('').sort().join(''));`,tests:[{input:[],expected:"abc"}],hints:["Fisher-Yates shuffle","Same chars, different order"]},{id:"09-strings-string-patterns-38",title:"Is Unique Chars",starterCode:`function isUnique(str) {
  return new Set(str).size === str.length;
}
console.log(isUnique('abcde'));
console.log(isUnique('abcda'));`,solution:`function isUnique(str) {
  return new Set(str).size === str.length;
}
console.log(isUnique('abcde'));
console.log(isUnique('abcda'));`,tests:[{input:[],expected:`true
false`}],hints:["Set removes duplicates","Compare sizes"]},{id:"09-strings-string-patterns-39",title:"Rotate String",starterCode:`function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));`,solution:`function rotateString(s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
}
console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));`,tests:[{input:[],expected:`true
false`}],hints:["Concat with itself","Check rotation"]},{id:"09-strings-string-patterns-40",title:"Reverse Vowels",starterCode:`function reverseVowels(str) {
  const arr = str.split('');
  let l = 0, r = arr.length - 1;
  const vowels = 'aeiouAEIOU';
  while (l < r) {
    while (l < r && !vowels.includes(arr[l])) l++;
    while (l < r && !vowels.includes(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}
console.log(reverseVowels('hello'));`,solution:`function reverseVowels(str) {
  const arr = str.split('');
  let l = 0, r = arr.length - 1;
  const vowels = 'aeiouAEIOU';
  while (l < r) {
    while (l < r && !vowels.includes(arr[l])) l++;
    while (l < r && !vowels.includes(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}
console.log(reverseVowels('hello'));`,tests:[{input:[],expected:"holle"}],hints:["Two pointer swap","Only swap vowels"]},{id:"09-strings-string-patterns-41",title:"Reverse Words Order",starterCode:`function reverseWordsOrder(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWordsOrder('I love JavaScript'));`,solution:`function reverseWordsOrder(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWordsOrder('I love JavaScript'));`,tests:[{input:[],expected:"JavaScript love I"}],hints:["Split, reverse, join","Word order reversed"]},{id:"09-strings-string-patterns-42",title:"Compress String",starterCode:`function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i-1]) count++;
    else { result += str[i-1] + (count > 1 ? count : ''); count = 1; }
  }
  return result;
}
console.log(compress('aaabbbcc'));`,solution:`function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i-1]) count++;
    else { result += str[i-1] + (count > 1 ? count : ''); count = 1; }
  }
  return result;
}
console.log(compress('aaabbbcc'));`,tests:[{input:[],expected:"a3b3c2"}],hints:["Count consecutive","Skip count if 1"]},{id:"09-strings-string-patterns-43",title:"Decompress String",starterCode:`function decompress(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, c, n) => c.repeat(Number(n)));
}
console.log(decompress('a3b2c4'));`,solution:`function decompress(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, c, n) => c.repeat(Number(n)));
}
console.log(decompress('a3b2c4'));`,tests:[{input:[],expected:"aaabbbbcccc"}],hints:["Match char + count","Repeat char"]},{id:"09-strings-string-patterns-44",title:"Count Palindromes",starterCode:`function countPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('')) count++;
    }
  }
  return count;
}
console.log(countPalindromes('aaa'));`,solution:`function countPalindromes(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('')) count++;
    }
  }
  return count;
}
console.log(countPalindromes('aaa'));`,tests:[{input:[],expected:"6"}],hints:["Check all substrings","Count palindromic"]},{id:"09-strings-string-patterns-45",title:"Is Balanced Brackets",starterCode:`function isBalanced(str) {
  const stack = [];
  const pairs = {')': '(', ']': '[', '}': '{'};
  for (const c of str) {
    if ('([{'.includes(c)) stack.push(c);
    else if (')]}'.includes(c)) {
      if (stack.pop() !== pairs[c]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));`,solution:`function isBalanced(str) {
  const stack = [];
  const pairs = {')': '(', ']': '[', '}': '{'};
  for (const c of str) {
    if ('([{'.includes(c)) stack.push(c);
    else if (')]}'.includes(c)) {
      if (stack.pop() !== pairs[c]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[(])}'));`,tests:[{input:[],expected:`true
false`}],hints:["Stack for brackets","Match pairs"]},{id:"09-strings-string-patterns-46",title:"Generate Parentheses",starterCode:`function generate(n) {
  const result = [];
  function backtrack(s, open, close) {
    if (s.length === 2 * n) { result.push(s); return; }
    if (open < n) backtrack(s + '(', open + 1, close);
    if (close < open) backtrack(s + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}
console.log(generate(3));`,solution:`function generate(n) {
  const result = [];
  function backtrack(s, open, close) {
    if (s.length === 2 * n) { result.push(s); return; }
    if (open < n) backtrack(s + '(', open + 1, close);
    if (close < open) backtrack(s + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}
console.log(generate(3));`,tests:[{input:[],expected:"[ '((()))', '(()())', '(())()', '()(())', '()()()' ]"}],hints:["Backtracking","Valid combinations"]},{id:"09-strings-string-patterns-47",title:"Decode String",starterCode:`function decodeString(str) {
  const stack = [];
  let current = '', num = 0;
  for (const c of str) {
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    else if (c === '[') { stack.push([current, num]); current = ''; num = 0; }
    else if (c === ']') { const [prev, n] = stack.pop(); current = prev + current.repeat(n); }
    else current += c;
  }
  return current;
}
console.log(decodeString('3[a2[c]]'));`,solution:`function decodeString(str) {
  const stack = [];
  let current = '', num = 0;
  for (const c of str) {
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    else if (c === '[') { stack.push([current, num]); current = ''; num = 0; }
    else if (c === ']') { const [prev, n] = stack.pop(); current = prev + current.repeat(n); }
    else current += c;
  }
  return current;
}
console.log(decodeString('3[a2[c]]'));`,tests:[{input:[],expected:"accaccacc"}],hints:["Stack for nesting","Repeat pattern"]},{id:"09-strings-string-patterns-48",title:"Zigzag Convert",starterCode:`function zigzag(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill('');
  let idx = 0, dir = 1;
  for (const c of s) {
    rows[idx] += c;
    if (idx === 0) dir = 1;
    else if (idx === numRows - 1) dir = -1;
    idx += dir;
  }
  return rows.join('');
}
console.log(zigzag('PAYPALISHIRING', 3));`,solution:`function zigzag(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill('');
  let idx = 0, dir = 1;
  for (const c of s) {
    rows[idx] += c;
    if (idx === 0) dir = 1;
    else if (idx === numRows - 1) dir = -1;
    idx += dir;
  }
  return rows.join('');
}
console.log(zigzag('PAYPALISHIRING', 3));`,tests:[{input:[],expected:"PAHNAPLSIIGYIR"}],hints:["Fill rows zigzag","Direction changes"]},{id:"09-strings-string-patterns-49",title:"Longest Palindrome Substring",starterCode:`function longestPalindrome(str) {
  let best = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('') && sub.length > best.length) best = sub;
    }
  }
  return best;
}
console.log(longestPalindrome('babad'));`,solution:`function longestPalindrome(str) {
  let best = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('') && sub.length > best.length) best = sub;
    }
  }
  return best;
}
console.log(longestPalindrome('babad'));`,tests:[{input:[],expected:"bab"}],hints:["Check all substrings","Track longest palin"]},{id:"09-strings-string-patterns-50",title:"Count Substrings",starterCode:`function countSubstrings(s, t) {
  let count = 0;
  for (let i = 0; i <= s.length - t.length; i++) {
    if (s.substring(i, i + t.length) === t) count++;
  }
  return count;
}
console.log(countSubstrings('abcabc', 'abc'));`,solution:`function countSubstrings(s, t) {
  let count = 0;
  for (let i = 0; i <= s.length - t.length; i++) {
    if (s.substring(i, i + t.length) === t) count++;
  }
  return count;
}
console.log(countSubstrings('abcabc', 'abc'));`,tests:[{input:[],expected:"2"}],hints:["Slide window over string","Count exact matches"]}],"10-dom-03-dom-create-delete":[{id:"10-dom-dom-create-delete-01",title:"createElement Basics",starterCode:`const div = document.createElement('div');
console.log(div.tagName);`,solution:`const div = document.createElement('div');
console.log(div.tagName);`,tests:[{input:[],expected:"DIV"}],hints:["createElement takes a tag name","tagName returns uppercase tag"]},{id:"10-dom-dom-create-delete-02",title:"createTextNode",starterCode:`const text = document.createTextNode('Hello');
console.log(text.textContent);`,solution:`const text = document.createTextNode('Hello');
console.log(text.textContent);`,tests:[{input:[],expected:"Hello"}],hints:["createTextNode creates a text node","textContent reads the text"]},{id:"10-dom-dom-create-delete-03",title:"appendChild",starterCode:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
console.log(parent.children.length);`,solution:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
console.log(parent.children.length);`,tests:[{input:[],expected:"1"}],hints:["appendChild adds child to parent","Check children length"]},{id:"10-dom-dom-create-delete-04",title:"insertBefore",starterCode:`const list = document.createElement('ul');
const item1 = document.createElement('li');
list.appendChild(item1);
const item2 = document.createElement('li');
list.insertBefore(item2, item1);
console.log(list.children[0] === item2);`,solution:`const list = document.createElement('ul');
const item1 = document.createElement('li');
list.appendChild(item1);
const item2 = document.createElement('li');
list.insertBefore(item2, item1);
console.log(list.children[0] === item2);`,tests:[{input:[],expected:"true"}],hints:["insertBefore(newNode, referenceNode)","New node is placed before reference"]},{id:"10-dom-dom-create-delete-05",title:"append Method",starterCode:`const el = document.createElement('div');
el.append('Text', document.createElement('span'));
console.log(el.childNodes.length);`,solution:`const el = document.createElement('div');
el.append('Text', document.createElement('span'));
console.log(el.childNodes.length);`,tests:[{input:[],expected:"2"}],hints:["append adds multiple items at end","Counts text nodes and elements"]},{id:"10-dom-dom-create-delete-06",title:"prepend Method",starterCode:`const el = document.createElement('div');
el.append(document.createElement('span'));
el.prepend('First');
console.log(el.firstChild.textContent);`,solution:`const el = document.createElement('div');
el.append(document.createElement('span'));
el.prepend('First');
console.log(el.firstChild.textContent);`,tests:[{input:[],expected:"First"}],hints:["prepend adds items at beginning","firstChild gets the first node"]},{id:"10-dom-dom-create-delete-07",title:"after Method",starterCode:`const container = document.createElement('div');
const first = document.createElement('p');
container.appendChild(first);
first.after('After');
console.log(container.childNodes.length);`,solution:`const container = document.createElement('div');
const first = document.createElement('p');
container.appendChild(first);
first.after('After');
console.log(container.childNodes.length);`,tests:[{input:[],expected:"2"}],hints:["after inserts after the element","Adds as a sibling"]},{id:"10-dom-dom-create-delete-08",title:"before Method",starterCode:`const container = document.createElement('div');
const last = document.createElement('p');
container.appendChild(last);
last.before('Before');
console.log(container.childNodes.length);`,solution:`const container = document.createElement('div');
const last = document.createElement('p');
container.appendChild(last);
last.before('Before');
console.log(container.childNodes.length);`,tests:[{input:[],expected:"2"}],hints:["before inserts before the element","Adds as a sibling"]},{id:"10-dom-dom-create-delete-09",title:"remove Method",starterCode:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
child.remove();
console.log(parent.children.length);`,solution:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
child.remove();
console.log(parent.children.length);`,tests:[{input:[],expected:"0"}],hints:["remove() removes element from parent","Parent has no children after"]},{id:"10-dom-dom-create-delete-10",title:"removeChild",starterCode:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed === child);`,solution:`const parent = document.createElement('div');
const child = document.createElement('p');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed === child);`,tests:[{input:[],expected:"true"}],hints:["removeChild returns the removed node","Compare reference with original"]},{id:"10-dom-dom-create-delete-11",title:"cloneNode Shallow",starterCode:`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(false);
console.log(clone.children.length);`,solution:`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(false);
console.log(clone.children.length);`,tests:[{input:[],expected:"0"}],hints:["cloneNode(false) does shallow clone","Does not copy children"]},{id:"10-dom-dom-create-delete-12",title:"cloneNode Deep",starterCode:`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(true);
console.log(clone.children.length);`,solution:`const original = document.createElement('div');
const child = document.createElement('p');
original.appendChild(child);
const clone = original.cloneNode(true);
console.log(clone.children.length);`,tests:[{input:[],expected:"1"}],hints:["cloneNode(true) does deep clone","Copies all children"]},{id:"10-dom-dom-create-delete-13",title:"replaceChild",starterCode:`const parent = document.createElement('div');
const old = document.createElement('p');
parent.appendChild(old);
const newEl = document.createElement('span');
parent.replaceChild(newEl, old);
console.log(parent.children[0].tagName);`,solution:`const parent = document.createElement('div');
const old = document.createElement('p');
parent.appendChild(old);
const newEl = document.createElement('span');
parent.replaceChild(newEl, old);
console.log(parent.children[0].tagName);`,tests:[{input:[],expected:"SPAN"}],hints:["replaceChild(newNode, oldNode)","Check the tag of remaining child"]},{id:"10-dom-dom-create-delete-14",title:"createDocumentFragment",starterCode:`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType);`,solution:`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType);`,tests:[{input:[],expected:"11"}],hints:["DocumentFragment has nodeType 11","It's a lightweight container"]},{id:"10-dom-dom-create-delete-15",title:"innerHTML Create",starterCode:`const el = document.createElement('div');
el.innerHTML = '<span>Hi</span>';
console.log(el.children.length);`,solution:`const el = document.createElement('div');
el.innerHTML = '<span>Hi</span>';
console.log(el.children.length);`,tests:[{input:[],expected:"1"}],hints:["innerHTML creates DOM elements","Parse HTML into elements"]},{id:"10-dom-dom-create-delete-16",title:"insertAdjacentHTML",starterCode:`const el = document.createElement('div');
el.insertAdjacentHTML('beforeend', '<p>Para</p>');
console.log(el.innerHTML);`,solution:`const el = document.createElement('div');
el.insertAdjacentHTML('beforeend', '<p>Para</p>');
console.log(el.innerHTML);`,tests:[{input:[],expected:"<p>Para</p>"}],hints:["insertAdjacentHTML inserts at position","beforeend puts inside at end"]},{id:"10-dom-dom-create-delete-17",title:"insertAdjacentElement",starterCode:`const parent = document.createElement('div');
const child = document.createElement('span');
parent.insertAdjacentElement('afterbegin', child);
console.log(parent.children[0] === child);`,solution:`const parent = document.createElement('div');
const child = document.createElement('span');
parent.insertAdjacentElement('afterbegin', child);
console.log(parent.children[0] === child);`,tests:[{input:[],expected:"true"}],hints:["insertAdjacentElement inserts an element","afterbegin places at start"]},{id:"10-dom-dom-create-delete-18",title:"insertAdjacentText",starterCode:`const el = document.createElement('div');
el.insertAdjacentText('beforeend', 'Hello');
console.log(el.textContent);`,solution:`const el = document.createElement('div');
el.insertAdjacentText('beforeend', 'Hello');
console.log(el.textContent);`,tests:[{input:[],expected:"Hello"}],hints:["insertAdjacentText inserts text node","beforeend puts inside at end"]},{id:"10-dom-dom-create-delete-19",title:"adoptNode",starterCode:`const doc = document;
const div = document.createElement('div');
const adopted = doc.adoptNode(div);
console.log(adopted.ownerDocument === doc);`,solution:`const doc = document;
const div = document.createElement('div');
const adopted = doc.adoptNode(div);
console.log(adopted.ownerDocument === doc);`,tests:[{input:[],expected:"true"}],hints:["adoptNode adopts node from another document","Sets ownerDocument"]},{id:"10-dom-dom-create-delete-20",title:"importNode",starterCode:`const doc = document;
const div = document.createElement('div');
const imported = doc.importNode(div, false);
console.log(imported.ownerDocument === doc);`,solution:`const doc = document;
const div = document.createElement('div');
const imported = doc.importNode(div, false);
console.log(imported.ownerDocument === doc);`,tests:[{input:[],expected:"true"}],hints:["importNode copies node from another document","Does not add to DOM"]},{id:"10-dom-dom-create-delete-21",title:"create Text Node",starterCode:`const parent = document.createElement('div');
const textNode = document.createTextNode('Hello');
parent.appendChild(textNode);
console.log(parent.textContent);`,solution:`const parent = document.createElement('div');
const textNode = document.createTextNode('Hello');
parent.appendChild(textNode);
console.log(parent.textContent);`,tests:[{input:[],expected:"Hello"}],hints:["createTextNode creates a text node","appendChild adds it to parent"]},{id:"10-dom-dom-create-delete-22",title:"appendChild Return",starterCode:`const parent = document.createElement('div');
const child = document.createElement('span');
const returned = parent.appendChild(child);
console.log(returned === child);`,solution:`const parent = document.createElement('div');
const child = document.createElement('span');
const returned = parent.appendChild(child);
console.log(returned === child);`,tests:[{input:[],expected:"true"}],hints:["appendChild returns the appended child","Same reference is returned"]},{id:"10-dom-dom-create-delete-23",title:"insertBefore Reference",starterCode:`const list = document.createElement('ul');
const item1 = document.createElement('li');
list.appendChild(item1);
const item2 = document.createElement('li');
list.insertBefore(item2, item1);
console.log(list.children[1] === item1);`,solution:`const list = document.createElement('ul');
const item1 = document.createElement('li');
list.appendChild(item1);
const item2 = document.createElement('li');
list.insertBefore(item2, item1);
console.log(list.children[1] === item1);`,tests:[{input:[],expected:"true"}],hints:["insertBefore inserts before reference","Reference becomes next sibling"]},{id:"10-dom-dom-create-delete-24",title:"append Multiple",starterCode:`const el = document.createElement('div');
el.append('A', 'B', 'C');
console.log(el.textContent);`,solution:`const el = document.createElement('div');
el.append('A', 'B', 'C');
console.log(el.textContent);`,tests:[{input:[],expected:"ABC"}],hints:["append takes multiple arguments","All are added in order"]},{id:"10-dom-dom-create-delete-25",title:"prepend Multiple",starterCode:`const el = document.createElement('div');
el.append('B', 'C');
el.prepend('A');
console.log(el.textContent);`,solution:`const el = document.createElement('div');
el.append('B', 'C');
el.prepend('A');
console.log(el.textContent);`,tests:[{input:[],expected:"ABC"}],hints:["prepend adds at beginning","Order is preserved"]},{id:"10-dom-dom-create-delete-26",title:"after Multiple",starterCode:`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.after('A', 'B');
console.log(container.childNodes.length);`,solution:`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.after('A', 'B');
console.log(container.childNodes.length);`,tests:[{input:[],expected:"3"}],hints:["after can take multiple arguments","Adds all after reference"]},{id:"10-dom-dom-create-delete-27",title:"before Multiple",starterCode:`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.before('X', 'Y');
console.log(container.childNodes.length);`,solution:`const container = document.createElement('div');
const ref = document.createElement('p');
container.appendChild(ref);
ref.before('X', 'Y');
console.log(container.childNodes.length);`,tests:[{input:[],expected:"3"}],hints:["before can take multiple arguments","Adds all before reference"]},{id:"10-dom-dom-create-delete-28",title:"remove All Children",starterCode:`const parent = document.createElement('div');
parent.innerHTML = '<p>A</p><p>B</p><p>C</p>';
while (parent.firstChild) parent.removeChild(parent.firstChild);
console.log(parent.children.length);`,solution:`const parent = document.createElement('div');
parent.innerHTML = '<p>A</p><p>B</p><p>C</p>';
while (parent.firstChild) parent.removeChild(parent.firstChild);
console.log(parent.children.length);`,tests:[{input:[],expected:"0"}],hints:["Loop while firstChild exists","Remove each child"]},{id:"10-dom-dom-create-delete-29",title:"cloneNode Deep Copy",starterCode:`const original = document.createElement('div');
original.innerHTML = '<span>Hi</span>';
const clone = original.cloneNode(true);
console.log(clone.innerHTML);`,solution:`const original = document.createElement('div');
original.innerHTML = '<span>Hi</span>';
const clone = original.cloneNode(true);
console.log(clone.innerHTML);`,tests:[{input:[],expected:"<span>Hi</span>"}],hints:["deep clone copies innerHTML","Same structure as original"]},{id:"10-dom-dom-create-delete-30",title:"replace All",starterCode:`const parent = document.createElement('div');
parent.innerHTML = '<p>Old</p>';
const newChild = document.createElement('span');
parent.replaceChild(newChild, parent.firstChild);
console.log(parent.innerHTML);`,solution:`const parent = document.createElement('div');
parent.innerHTML = '<p>Old</p>';
const newChild = document.createElement('span');
parent.replaceChild(newChild, parent.firstChild);
console.log(parent.innerHTML);`,tests:[{input:[],expected:"<span></span>"}],hints:["replaceChild swaps nodes","Check innerHTML after replacement"]},{id:"10-dom-dom-create-delete-31",title:"fragment Append",starterCode:`const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  fragment.appendChild(li);
}
const list = document.createElement('ul');
list.appendChild(fragment);
console.log(list.children.length);`,solution:`const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const li = document.createElement('li');
  li.textContent = i;
  fragment.appendChild(li);
}
const list = document.createElement('ul');
list.appendChild(fragment);
console.log(list.children.length);`,tests:[{input:[],expected:"5"}],hints:["Fragment is efficient for batch inserts","All children move to list"]},{id:"10-dom-dom-create-delete-32",title:"Create from HTML String",starterCode:`function htmlToElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
const el = htmlToElement('<p>Hello</p>');
console.log(el.tagName);`,solution:`function htmlToElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
}
const el = htmlToElement('<p>Hello</p>');
console.log(el.tagName);`,tests:[{input:[],expected:"P"}],hints:["template element holds content","firstChild gets the element"]},{id:"10-dom-dom-create-delete-33",title:"Delete Practice",starterCode:`const list = document.createElement('ul');
['A', 'B', 'C'].forEach(t => {
  const li = document.createElement('li');
  li.textContent = t;
  list.appendChild(li);
});
list.lastElementChild.remove();
console.log(list.innerHTML);`,solution:`const list = document.createElement('ul');
['A', 'B', 'C'].forEach(t => {
  const li = document.createElement('li');
  li.textContent = t;
  list.appendChild(li);
});
list.lastElementChild.remove();
console.log(list.innerHTML);`,tests:[{input:[],expected:"<li>A</li><li>B</li>"}],hints:["Remove last child with remove()","Check innerHTML"]},{id:"10-dom-dom-create-delete-34",title:"Fragment Efficiency",starterCode:`// DocumentFragment avoids reflows during batch operations
console.log("fragment is efficient");`,solution:`// DocumentFragment avoids reflows during batch operations
console.log("fragment is efficient");`,tests:[{input:[],expected:"fragment is efficient"}],hints:["Fragments don't trigger layout","Single reflow when appended"]},{id:"10-dom-dom-create-delete-35",title:"innerHTML Clear",starterCode:`const el = document.createElement('div');
el.innerHTML = '<p>Content</p>';
el.innerHTML = '';
console.log(el.children.length);`,solution:`const el = document.createElement('div');
el.innerHTML = '<p>Content</p>';
el.innerHTML = '';
console.log(el.children.length);`,tests:[{input:[],expected:"0"}],hints:["Setting innerHTML to '' clears children","Simple way to empty element"]},{id:"10-dom-dom-create-delete-36",title:"cloneNode Separate",starterCode:`const original = document.createElement('div');
const clone = original.cloneNode(true);
original.textContent = 'Changed';
console.log(clone.textContent);`,solution:`const original = document.createElement('div');
const clone = original.cloneNode(true);
original.textContent = 'Changed';
console.log(clone.textContent);`,tests:[{input:[],expected:""}],hints:["Clone is a separate node","Changes to original don't affect clone"]},{id:"10-dom-dom-create-delete-37",title:"Template Element",starterCode:`const template = document.createElement('template');
template.innerHTML = '<p>Inside template</p>';
console.log(template.content.children.length);`,solution:`const template = document.createElement('template');
template.innerHTML = '<p>Inside template</p>';
console.log(template.content.children.length);`,tests:[{input:[],expected:"1"}],hints:["template.content is a DocumentFragment","Children are inside the fragment"]},{id:"10-dom-dom-create-delete-38",title:"prepend to Empty",starterCode:`const el = document.createElement('div');
el.prepend('First');
console.log(el.textContent);`,solution:`const el = document.createElement('div');
el.prepend('First');
console.log(el.textContent);`,tests:[{input:[],expected:"First"}],hints:["prepend works on empty elements","Adds as first child"]},{id:"10-dom-dom-create-delete-39",title:"append to Empty",starterCode:`const el = document.createElement('div');
el.append('First');
console.log(el.textContent);`,solution:`const el = document.createElement('div');
el.append('First');
console.log(el.textContent);`,tests:[{input:[],expected:"First"}],hints:["append adds to end","Same as prepend on empty element"]},{id:"10-dom-dom-create-delete-40",title:"replaceChild Return",starterCode:`const parent = document.createElement('div');
const old = document.createElement('p');
parent.appendChild(old);
const newEl = document.createElement('span');
const removed = parent.replaceChild(newEl, old);
console.log(removed === old);`,solution:`const parent = document.createElement('div');
const old = document.createElement('p');
parent.appendChild(old);
const newEl = document.createElement('span');
const removed = parent.replaceChild(newEl, old);
console.log(removed === old);`,tests:[{input:[],expected:"true"}],hints:["replaceChild returns the old node","Compare reference"]},{id:"10-dom-dom-create-delete-41",title:"adoptNode vs importNode",starterCode:`// adoptNode moves node, importNode copies it
console.log("adopt moves, import copies");`,solution:`// adoptNode moves node, importNode copies it
console.log("adopt moves, import copies");`,tests:[{input:[],expected:"adopt moves, import copies"}],hints:["adoptNode transfers ownership","importNode creates a copy"]},{id:"10-dom-dom-create-delete-42",title:"insertAdjacent Positions",starterCode:`// Positions: beforebegin, afterbegin, beforeend, afterend
console.log("4 positions available");`,solution:`// Positions: beforebegin, afterbegin, beforeend, afterend
console.log("4 positions available");`,tests:[{input:[],expected:"4 positions available"}],hints:["Before/after the element","Inside at beginning/end"]},{id:"10-dom-dom-create-delete-43",title:"Fragment Node Type",starterCode:`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType + ' ' + fragment.nodeName);`,solution:`const fragment = document.createDocumentFragment();
console.log(fragment.nodeType + ' ' + fragment.nodeName);`,tests:[{input:[],expected:"11 #document-fragment"}],hints:["nodeType 11 for DocumentFragment","nodeName is #document-fragment"]},{id:"10-dom-dom-create-delete-44",title:"create Element Attribute",starterCode:`const el = document.createElement('button');
el.setAttribute('type', 'submit');
console.log(el.getAttribute('type'));`,solution:`const el = document.createElement('button');
el.setAttribute('type', 'submit');
console.log(el.getAttribute('type'));`,tests:[{input:[],expected:"submit"}],hints:["Set attributes after creation","Use setAttribute"]},{id:"10-dom-dom-create-delete-45",title:"textContent vs createTextNode",starterCode:`const el = document.createElement('p');
el.textContent = 'Hello';
console.log(el.childNodes.length);`,solution:`const el = document.createElement('p');
el.textContent = 'Hello';
console.log(el.childNodes.length);`,tests:[{input:[],expected:"1"}],hints:["textContent creates a text node internally","One child node created"]},{id:"10-dom-dom-create-delete-46",title:"remove Child Return",starterCode:`const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed.parentNode);`,solution:`const parent = document.createElement('div');
const child = document.createElement('span');
parent.appendChild(child);
const removed = parent.removeChild(child);
console.log(removed.parentNode);`,tests:[{input:[],expected:"null"}],hints:["Removed node has no parent","parentNode is null"]},{id:"10-dom-dom-create-delete-47",title:"Fragment Batch Insert",starterCode:`const frag = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  frag.appendChild(document.createElement('div'));
}
const container = document.createElement('div');
container.appendChild(frag);
console.log(container.children.length);`,solution:`const frag = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
  frag.appendChild(document.createElement('div'));
}
const container = document.createElement('div');
container.appendChild(frag);
console.log(container.children.length);`,tests:[{input:[],expected:"3"}],hints:["Fragment children move to container","Efficient batch operation"]},{id:"10-dom-dom-create-delete-48",title:"Create Complete Practice",starterCode:`function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}
const list = createList(['A', 'B', 'C']);
console.log(list.children.length);`,solution:`function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}
const list = createList(['A', 'B', 'C']);
console.log(list.children.length);`,tests:[{input:[],expected:"3"}],hints:["Create elements in a loop","Append each to parent"]},{id:"10-dom-dom-create-delete-49",title:"createElement Tag",starterCode:`const el = document.createElement('input');
console.log(el.tagName);`,solution:`const el = document.createElement('input');
console.log(el.tagName);`,tests:[{input:[],expected:"INPUT"}],hints:["createElement takes tag name","Returns uppercase tagName"]},{id:"10-dom-dom-create-delete-50",title:"DocumentFragment Append",starterCode:`const frag = document.createDocumentFragment();
const div = document.createElement('div');
frag.appendChild(div);
console.log(frag.children.length);`,solution:`const frag = document.createDocumentFragment();
const div = document.createElement('div');
frag.appendChild(div);
console.log(frag.children.length);`,tests:[{input:[],expected:"1"}],hints:["Fragment holds children temporarily","Count children before append"]}],"10-dom-02-dom-modify":[{id:"10-dom-dom-modify-01",title:"textContent Property",starterCode:`const el = document.querySelector('p');
el.textContent = 'Hello';
console.log(el.textContent);`,solution:`const el = document.querySelector('p');
el.textContent = 'Hello';
console.log(el.textContent);`,tests:[{input:[],expected:"Hello"}],hints:["textContent sets text content","Returns the text content"]},{id:"10-dom-dom-modify-02",title:"innerHTML Property",starterCode:`const el = document.querySelector('div');
el.innerHTML = '<b>Bold</b>';
console.log(el.innerHTML);`,solution:`const el = document.querySelector('div');
el.innerHTML = '<b>Bold</b>';
console.log(el.innerHTML);`,tests:[{input:[],expected:"<b>Bold</b>"}],hints:["innerHTML sets HTML content","Parses HTML tags"]},{id:"10-dom-dom-modify-03",title:"setAttribute Method",starterCode:`const el = document.querySelector('a');
el.setAttribute('href', 'https://example.com');
console.log(el.getAttribute('href'));`,solution:`const el = document.querySelector('a');
el.setAttribute('href', 'https://example.com');
console.log(el.getAttribute('href'));`,tests:[{input:[],expected:"https://example.com"}],hints:["setAttribute takes attribute name and value","Use getAttribute to read"]},{id:"10-dom-dom-modify-04",title:"removeAttribute Method",starterCode:`const el = document.querySelector('[disabled]');
el.removeAttribute('disabled');
console.log(el.hasAttribute('disabled'));`,solution:`const el = document.querySelector('[disabled]');
el.removeAttribute('disabled');
console.log(el.hasAttribute('disabled'));`,tests:[{input:[],expected:"false"}],hints:["removeAttribute removes an attribute","hasAttribute checks existence"]},{id:"10-dom-dom-modify-05",title:"classList add",starterCode:`const el = document.querySelector('.box');
el.classList.add('highlight');
console.log(el.classList.contains('highlight'));`,solution:`const el = document.querySelector('.box');
el.classList.add('highlight');
console.log(el.classList.contains('highlight'));`,tests:[{input:[],expected:"true"}],hints:["classList.add adds a class","classList.contains checks membership"]},{id:"10-dom-dom-modify-06",title:"classList remove",starterCode:`const el = document.querySelector('.box');
el.classList.remove('active');
console.log(el.classList.contains('active'));`,solution:`const el = document.querySelector('.box');
el.classList.remove('active');
console.log(el.classList.contains('active'));`,tests:[{input:[],expected:"false"}],hints:["classList.remove removes a class","Returns false if not present"]},{id:"10-dom-dom-modify-07",title:"style Property",starterCode:`const el = document.querySelector('.box');
el.style.color = 'red';
console.log(el.style.color);`,solution:`const el = document.querySelector('.box');
el.style.color = 'red';
console.log(el.style.color);`,tests:[{input:[],expected:"red"}],hints:["style property sets inline styles","Use camelCase for property names"]},{id:"10-dom-dom-modify-08",title:"cssText Property",starterCode:`const el = document.querySelector('.box');
el.style.cssText = 'color: blue; font-size: 16px';
console.log(el.style.cssText);`,solution:`const el = document.querySelector('.box');
el.style.cssText = 'color: blue; font-size: 16px';
console.log(el.style.cssText);`,tests:[{input:[],expected:"color: blue; font-size: 16px"}],hints:["cssText sets multiple styles at once","Use CSS syntax in string"]},{id:"10-dom-dom-modify-09",title:"getComputedStyle",starterCode:`const el = document.querySelector('.box');
const computed = window.getComputedStyle(el);
console.log(typeof computed);`,solution:`const el = document.querySelector('.box');
const computed = window.getComputedStyle(el);
console.log(typeof computed);`,tests:[{input:[],expected:"object"}],hints:["getComputedStyle returns CSSStyleDeclaration","Shows computed (final) styles"]},{id:"10-dom-dom-modify-10",title:"dataset Property",starterCode:`const el = document.querySelector('[data-id]');
el.dataset.id = '123';
console.log(el.dataset.id);`,solution:`const el = document.querySelector('[data-id]');
el.dataset.id = '123';
console.log(el.dataset.id);`,tests:[{input:[],expected:"123"}],hints:["dataset maps data-* attributes","Use camelCase for multi-word attrs"]},{id:"10-dom-dom-modify-11",title:"className Replace",starterCode:`const el = document.querySelector('.box');
el.className = 'new-class';
console.log(el.className);`,solution:`const el = document.querySelector('.box');
el.className = 'new-class';
console.log(el.className);`,tests:[{input:[],expected:"new-class"}],hints:["className replaces all classes","Use classList for individual changes"]},{id:"10-dom-dom-modify-12",title:"textContent vs innerHTML",starterCode:`// textContent escapes HTML, innerHTML does not
const el = document.querySelector('p');
el.textContent = '<b>Bold</b>';
console.log(el.innerHTML);`,solution:`// textContent escapes HTML, innerHTML does not
const el = document.querySelector('p');
el.textContent = '<b>Bold</b>';
console.log(el.innerHTML);`,tests:[{input:[],expected:"&lt;b&gt;Bold&lt;/b&gt;"}],hints:["textContent escapes HTML entities","innerHTML interprets HTML"]},{id:"10-dom-dom-modify-13",title:"setAttribute Boolean",starterCode:`const el = document.querySelector('input');
el.setAttribute('disabled', '');
console.log(el.disabled);`,solution:`const el = document.querySelector('input');
el.setAttribute('disabled', '');
console.log(el.disabled);`,tests:[{input:[],expected:"true"}],hints:["Empty string enables boolean attribute","Check the property directly"]},{id:"10-dom-dom-modify-14",title:"classList toggle",starterCode:`const el = document.querySelector('.box');
el.classList.toggle('active');
console.log(el.classList.contains('active'));`,solution:`const el = document.querySelector('.box');
el.classList.toggle('active');
console.log(el.classList.contains('active'));`,tests:[{input:[],expected:"true"}],hints:["toggle adds if not present, removes if present","Returns true if added"]},{id:"10-dom-dom-modify-15",title:"classList contains",starterCode:`const el = document.querySelector('.box');
console.log(el.classList.contains('box'));`,solution:`const el = document.querySelector('.box');
console.log(el.classList.contains('box'));`,tests:[{input:[],expected:"true"}],hints:["contains checks if class exists","Returns boolean"]},{id:"10-dom-dom-modify-16",title:"camelCase Style",starterCode:`const el = document.querySelector('.box');
el.style.backgroundColor = 'green';
console.log(el.style.backgroundColor);`,solution:`const el = document.querySelector('.box');
el.style.backgroundColor = 'green';
console.log(el.style.backgroundColor);`,tests:[{input:[],expected:"green"}],hints:["Use camelCase for multi-word properties","background-color becomes backgroundColor"]},{id:"10-dom-dom-modify-17",title:"cssText Append",starterCode:`const el = document.querySelector('.box');
el.style.cssText += '; margin: 10px';
console.log(el.style.margin);`,solution:`const el = document.querySelector('.box');
el.style.cssText += '; margin: 10px';
console.log(el.style.margin);`,tests:[{input:[],expected:"10px"}],hints:["Use += to append to cssText","Separate properties with semicolons"]},{id:"10-dom-dom-modify-18",title:"Computed Style Reading",starterCode:`const el = document.querySelector('.box');
const style = window.getComputedStyle(el);
console.log(style.display);`,solution:`const el = document.querySelector('.box');
const style = window.getComputedStyle(el);
console.log(style.display);`,tests:[{input:[],expected:"block"}],hints:["getComputedStyle reads final computed styles","Default display for div is block"]},{id:"10-dom-dom-modify-19",title:"dataset Set",starterCode:`const el = document.querySelector('.item');
el.dataset.userId = '42';
console.log(el.getAttribute('data-user-id'));`,solution:`const el = document.querySelector('.item');
el.dataset.userId = '42';
console.log(el.getAttribute('data-user-id'));`,tests:[{input:[],expected:"42"}],hints:["dataset camelCase maps to data-kebab-case","userId becomes data-user-id"]},{id:"10-dom-dom-modify-20",title:"classList add Multiple",starterCode:`const el = document.querySelector('.box');
el.classList.add('active', 'highlight', 'selected');
console.log(el.classList.length);`,solution:`const el = document.querySelector('.box');
el.classList.add('active', 'highlight', 'selected');
console.log(el.classList.length);`,tests:[{input:[],expected:"4"}],hints:["classList.add can take multiple arguments","Original class plus 3 new ones"]},{id:"10-dom-dom-modify-21",title:"removeAttribute Check",starterCode:`const el = document.querySelector('button');
el.removeAttribute('type');
console.log(el.hasAttribute('type'));`,solution:`const el = document.querySelector('button');
el.removeAttribute('type');
console.log(el.hasAttribute('type'));`,tests:[{input:[],expected:"false"}],hints:["removeAttribute removes the attribute","hasAttribute returns false"]},{id:"10-dom-dom-modify-22",title:"conditional setAttribute",starterCode:`const el = document.querySelector('.box');
const isActive = true;
if (isActive) el.setAttribute('data-active', 'true');
console.log(el.dataset.active);`,solution:`const el = document.querySelector('.box');
const isActive = true;
if (isActive) el.setAttribute('data-active', 'true');
console.log(el.dataset.active);`,tests:[{input:[],expected:"true"}],hints:["Use conditional logic before setAttribute","dataset reads the value"]},{id:"10-dom-dom-modify-23",title:"style Assign",starterCode:`const el = document.querySelector('.box');
Object.assign(el.style, { color: 'red', fontSize: '20px' });
console.log(el.style.color + ' ' + el.style.fontSize);`,solution:`const el = document.querySelector('.box');
Object.assign(el.style, { color: 'red', fontSize: '20px' });
console.log(el.style.color + ' ' + el.style.fontSize);`,tests:[{input:[],expected:"red 20px"}],hints:["Object.assign can set multiple properties","Use camelCase keys"]},{id:"10-dom-dom-modify-24",title:"classList remove Multiple",starterCode:`const el = document.querySelector('.box');
el.classList.remove('active', 'highlight');
console.log(el.classList.toString());`,solution:`const el = document.querySelector('.box');
el.classList.remove('active', 'highlight');
console.log(el.classList.toString());`,tests:[{input:[],expected:"box"}],hints:["classList.remove takes multiple args","toString returns remaining classes"]},{id:"10-dom-dom-modify-25",title:"textContent String",starterCode:`const el = document.querySelector('.box');
const text = el.textContent;
console.log(typeof text);`,solution:`const el = document.querySelector('.box');
const text = el.textContent;
console.log(typeof text);`,tests:[{input:[],expected:"string"}],hints:["textContent always returns a string","Use typeof to verify"]},{id:"10-dom-dom-modify-26",title:"innerHTML Create Elements",starterCode:`const el = document.querySelector('.container');
el.innerHTML = '<p>Para 1</p><p>Para 2</p>';
console.log(el.children.length);`,solution:`const el = document.querySelector('.container');
el.innerHTML = '<p>Para 1</p><p>Para 2</p>';
console.log(el.children.length);`,tests:[{input:[],expected:"2"}],hints:["innerHTML creates DOM elements","Check children length"]},{id:"10-dom-dom-modify-27",title:"dataset Delete",starterCode:`const el = document.querySelector('.item');
el.dataset.id = '100';
delete el.dataset.id;
console.log(el.dataset.id);`,solution:`const el = document.querySelector('.item');
el.dataset.id = '100';
delete el.dataset.id;
console.log(el.dataset.id);`,tests:[{input:[],expected:"undefined"}],hints:["delete removes dataset property","Returns undefined when deleted"]},{id:"10-dom-dom-modify-28",title:"style removeProperty",starterCode:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.removeProperty('color');
console.log(el.style.color);`,solution:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.removeProperty('color');
console.log(el.style.color);`,tests:[{input:[],expected:""}],hints:["removeProperty removes an inline style","Returns empty string after removal"]},{id:"10-dom-dom-modify-29",title:"classList replace",starterCode:`const el = document.querySelector('.box');
el.classList.replace('old-class', 'new-class');
console.log(el.classList.contains('new-class'));`,solution:`const el = document.querySelector('.box');
el.classList.replace('old-class', 'new-class');
console.log(el.classList.contains('new-class'));`,tests:[{input:[],expected:"false"}],hints:["classList.replace swaps classes","Returns false if old class not found"]},{id:"10-dom-dom-modify-30",title:"attribute Check",starterCode:`const el = document.querySelector('input');
console.log(el.hasAttribute('type'));`,solution:`const el = document.querySelector('input');
console.log(el.hasAttribute('type'));`,tests:[{input:[],expected:"false"}],hints:["hasAttribute checks attribute existence","Returns true or false"]},{id:"10-dom-dom-modify-31",title:"Modify Practice",starterCode:`const el = document.querySelector('.item');
el.textContent = 'Updated';
console.log(el.textContent);`,solution:`const el = document.querySelector('.item');
el.textContent = 'Updated';
console.log(el.textContent);`,tests:[{input:[],expected:"Updated"}],hints:["Use textContent to change text","Read it back to verify"]},{id:"10-dom-dom-modify-32",title:"innerHTML vs textContent",starterCode:`// innerHTML parses HTML tags, textContent does not
console.log("innerHTML parses, textContent does not");`,solution:`// innerHTML parses HTML tags, textContent does not
console.log("innerHTML parses, textContent does not");`,tests:[{input:[],expected:"innerHTML parses, textContent does not"}],hints:["innerHTML creates DOM nodes","textContent treats everything as text"]},{id:"10-dom-dom-modify-33",title:"style Priority",starterCode:`// Inline styles have highest priority
console.log("inline styles have highest priority");`,solution:`// Inline styles have highest priority
console.log("inline styles have highest priority");`,tests:[{input:[],expected:"inline styles have highest priority"}],hints:["Inline styles override stylesheet","Unless !important is used"]},{id:"10-dom-dom-modify-34",title:"classList Length",starterCode:`const el = document.querySelector('.box');
console.log(el.classList.length);`,solution:`const el = document.querySelector('.box');
console.log(el.classList.length);`,tests:[{input:[],expected:"1"}],hints:["classList.length gives number of classes","Box has one class"]},{id:"10-dom-dom-modify-35",title:"dataset Keys",starterCode:`const el = document.querySelector('[data-id]');
console.log(Object.keys(el.dataset).length);`,solution:`const el = document.querySelector('[data-id]');
console.log(Object.keys(el.dataset).length);`,tests:[{input:[],expected:"1"}],hints:["dataset is an object","Object.keys returns property names"]},{id:"10-dom-dom-modify-36",title:"style Property Check",starterCode:`const el = document.querySelector('.box');
console.log(el.style.hasOwnProperty('color'));`,solution:`const el = document.querySelector('.box');
console.log(el.style.hasOwnProperty('color'));`,tests:[{input:[],expected:"false"}],hints:["style only includes inline styles","Check with hasOwnProperty"]},{id:"10-dom-dom-modify-37",title:"setAttribute vs Property",starterCode:`// setAttribute affects HTML attribute, not JS property
console.log("attribute vs property");`,solution:`// setAttribute affects HTML attribute, not JS property
console.log("attribute vs property");`,tests:[{input:[],expected:"attribute vs property"}],hints:["Attributes are in HTML","Properties are on the DOM object"]},{id:"10-dom-dom-modify-38",title:"classList Value",starterCode:`const el = document.querySelector('.box');
console.log(el.classList.value);`,solution:`const el = document.querySelector('.box');
console.log(el.classList.value);`,tests:[{input:[],expected:"box"}],hints:["classList.value returns all classes as string","Same as className"]},{id:"10-dom-dom-modify-39",title:"innerHTML Security",starterCode:`// Never use innerHTML with user input - XSS risk
console.log("innerHTML XSS warning");`,solution:`// Never use innerHTML with user input - XSS risk
console.log("innerHTML XSS warning");`,tests:[{input:[],expected:"innerHTML XSS warning"}],hints:["innerHTML can execute scripts","Use textContent for user input"]},{id:"10-dom-dom-modify-40",title:"style Object Keys",starterCode:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.margin = '10px';
console.log(Object.keys(el.style).length);`,solution:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.margin = '10px';
console.log(Object.keys(el.style).length);`,tests:[{input:[],expected:"2"}],hints:["Each inline style is a key","Count the keys with Object.keys"]},{id:"10-dom-dom-modify-41",title:"classList Entries",starterCode:`const el = document.querySelector('.box');
const entries = [...el.classList.entries()];
console.log(entries.length);`,solution:`const el = document.querySelector('.box');
const entries = [...el.classList.entries()];
console.log(entries.length);`,tests:[{input:[],expected:"1"}],hints:["entries returns index-class pairs","Spread to array to get length"]},{id:"10-dom-dom-modify-42",title:"textContent Empty",starterCode:`const el = document.querySelector('.box');
el.textContent = '';
console.log(el.textContent.length);`,solution:`const el = document.querySelector('.box');
el.textContent = '';
console.log(el.textContent.length);`,tests:[{input:[],expected:"0"}],hints:["Empty string has length 0","textContent removes all children"]},{id:"10-dom-dom-modify-43",title:"innerHTML Sanitize",starterCode:`// Use DOMPurify or textContent to sanitize
console.log("sanitize before setting innerHTML");`,solution:`// Use DOMPurify or textContent to sanitize
console.log("sanitize before setting innerHTML");`,tests:[{input:[],expected:"sanitize before setting innerHTML"}],hints:["Never trust user input","Use libraries or textContent"]},{id:"10-dom-dom-modify-44",title:"getAttribute Default",starterCode:`const el = document.querySelector('div');
const role = el.getAttribute('role');
console.log(role);`,solution:`const el = document.querySelector('div');
const role = el.getAttribute('role');
console.log(role);`,tests:[{input:[],expected:"null"}],hints:["getAttribute returns null if not set","Does not throw error"]},{id:"10-dom-dom-modify-45",title:"style.cssText Reset",starterCode:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.cssText = '';
console.log(el.style.color);`,solution:`const el = document.querySelector('.box');
el.style.color = 'red';
el.style.cssText = '';
console.log(el.style.color);`,tests:[{input:[],expected:""}],hints:["Setting cssText to empty clears all","Individual properties are removed"]},{id:"10-dom-dom-modify-46",title:"classList ForEach",starterCode:`const el = document.querySelector('.box');
let classes = [];
el.classList.forEach(c => classes.push(c));
console.log(classes.join(','));`,solution:`const el = document.querySelector('.box');
let classes = [];
el.classList.forEach(c => classes.push(c));
console.log(classes.join(','));`,tests:[{input:[],expected:"box"}],hints:["forEach iterates over each class","Join array to see all classes"]},{id:"10-dom-dom-modify-47",title:"dataset Read All",starterCode:`const el = document.querySelector('[data-name="test"]');
console.log(JSON.stringify(el.dataset));`,solution:`const el = document.querySelector('[data-name="test"]');
console.log(JSON.stringify(el.dataset));`,tests:[{input:[],expected:'{"name":"test"}'}],hints:["dataset contains all data-* attributes","JSON.stringify to see all"]},{id:"10-dom-dom-modify-48",title:"textContent Preserve Tags",starterCode:`const el = document.querySelector('div');
el.textContent = '<p>Text</p>';
console.log(el.querySelector('p'));`,solution:`const el = document.querySelector('div');
el.textContent = '<p>Text</p>';
console.log(el.querySelector('p'));`,tests:[{input:[],expected:"null"}],hints:["textContent does not create DOM nodes","Use innerHTML for that"]},{id:"10-dom-dom-modify-49",title:"style Display Toggle",starterCode:`const el = document.querySelector('.box');
el.style.display = 'none';
console.log(el.style.display);`,solution:`const el = document.querySelector('.box');
el.style.display = 'none';
console.log(el.style.display);`,tests:[{input:[],expected:"none"}],hints:["display: none hides element","Inline style hides it"]},{id:"10-dom-dom-modify-50",title:"setAttribute Checked",starterCode:`const el = document.querySelector('input[type="checkbox"]');
el.setAttribute('checked', '');
console.log(el.checked);`,solution:`const el = document.querySelector('input[type="checkbox"]');
el.setAttribute('checked', '');
console.log(el.checked);`,tests:[{input:[],expected:"true"}],hints:["setAttribute for checked state","checked is a boolean property"]}],"10-dom-01-dom-selectors":[{id:"10-dom-dom-selectors-01",title:"getElementById Basics",starterCode:`const el = document.getElementById(???);
console.log(el);`,solution:`const el = document.getElementById('app');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Pass a string with the element's id","Remove the # prefix if present"]},{id:"10-dom-dom-selectors-02",title:"querySelector Single Element",starterCode:`const el = document.querySelector(???);
console.log(el);`,solution:`const el = document.querySelector('.box');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["querySelector takes a CSS selector string","Use class selector with . prefix"]},{id:"10-dom-dom-selectors-03",title:"querySelectorAll Returns",starterCode:`const els = document.querySelectorAll('.item');
console.log(typeof els);`,solution:`const els = document.querySelectorAll('.item');
console.log(typeof els);`,tests:[{input:[],expected:"object"}],hints:["querySelectorAll returns a collection","Check the type of the result"]},{id:"10-dom-dom-selectors-04",title:"querySelectorAll Length",starterCode:`const els = document.querySelectorAll('.item');
console.log(els.length);`,solution:`const els = document.querySelectorAll('.item');
console.log(els.length);`,tests:[{input:[],expected:"0"}],hints:["The length property gives count","No elements match in this context"]},{id:"10-dom-dom-selectors-05",title:"getElementsByClassName Type",starterCode:`const els = document.getElementsByClassName('box');
console.log(typeof els);`,solution:`const els = document.getElementsByClassName('box');
console.log(typeof els);`,tests:[{input:[],expected:"object"}],hints:["Returns an HTMLCollection","HTMLCollection is an object type"]},{id:"10-dom-dom-selectors-06",title:"getElementsByTagName Type",starterCode:`const els = document.getElementsByTagName('div');
console.log(typeof els);`,solution:`const els = document.getElementsByTagName('div');
console.log(typeof els);`,tests:[{input:[],expected:"object"}],hints:["Returns an HTMLCollection","Not an array but array-like"]},{id:"10-dom-dom-selectors-07",title:"closest Traversal",starterCode:`const el = document.querySelector('.child');
const ancestor = el.closest(???);
console.log(ancestor);`,solution:`const el = document.querySelector('.child');
const ancestor = el.closest('.parent');
console.log(ancestor);`,tests:[{input:[],expected:"null"}],hints:["closest travels UP the DOM tree","Takes a CSS selector string"]},{id:"10-dom-dom-selectors-08",title:"matches Check",starterCode:`const el = document.querySelector('div');
const doesMatch = el.matches(???);
console.log(doesMatch);`,solution:`const el = document.querySelector('div');
const doesMatch = el.matches('div');
console.log(doesMatch);`,tests:[{input:[],expected:"false"}],hints:["matches checks if element matches a selector","Returns a boolean"]},{id:"10-dom-dom-selectors-09",title:"parentElement Property",starterCode:`const el = document.querySelector('.child');
console.log(el.parentElement);`,solution:`const el = document.querySelector('.child');
console.log(el.parentElement);`,tests:[{input:[],expected:"null"}],hints:["parentElement returns the parent node","Returns null if no parent exists"]},{id:"10-dom-dom-selectors-10",title:"children Property",starterCode:`const el = document.querySelector('ul');
console.log(el.children.length);`,solution:`const el = document.querySelector('ul');
console.log(el.children.length);`,tests:[{input:[],expected:"0"}],hints:["children returns only element nodes","Check the length property"]},{id:"10-dom-dom-selectors-11",title:"nextElementSibling",starterCode:`const el = document.querySelector('.first');
console.log(el.nextElementSibling);`,solution:`const el = document.querySelector('.first');
console.log(el.nextElementSibling);`,tests:[{input:[],expected:"null"}],hints:["Returns the next sibling element","Skips text nodes"]},{id:"10-dom-dom-selectors-12",title:"previousElementSibling",starterCode:`const el = document.querySelector('.last');
console.log(el.previousElementSibling);`,solution:`const el = document.querySelector('.last');
console.log(el.previousElementSibling);`,tests:[{input:[],expected:"null"}],hints:["Returns the previous sibling element","Returns null if first child"]},{id:"10-dom-dom-selectors-13",title:"firstElementChild",starterCode:`const el = document.querySelector('.parent');
console.log(el.firstElementChild);`,solution:`const el = document.querySelector('.parent');
console.log(el.firstElementChild);`,tests:[{input:[],expected:"null"}],hints:["Returns first child that is an element","Skips text nodes"]},{id:"10-dom-dom-selectors-14",title:"lastElementChild",starterCode:`const el = document.querySelector('.parent');
console.log(el.lastElementChild);`,solution:`const el = document.querySelector('.parent');
console.log(el.lastElementChild);`,tests:[{input:[],expected:"null"}],hints:["Returns last child that is an element","Opposite of firstElementChild"]},{id:"10-dom-dom-selectors-15",title:"childNodes Type",starterCode:`const el = document.querySelector('div');
const nodes = el.childNodes;
console.log(nodes.length);`,solution:`const el = document.querySelector('div');
const nodes = el.childNodes;
console.log(nodes.length);`,tests:[{input:[],expected:"0"}],hints:["childNodes includes all node types","Includes text and comment nodes"]},{id:"10-dom-dom-selectors-16",title:"parentNode Property",starterCode:`const el = document.querySelector('span');
console.log(el.parentNode);`,solution:`const el = document.querySelector('span');
console.log(el.parentNode);`,tests:[{input:[],expected:"null"}],hints:["parentNode returns the parent node","Similar to parentElement"]},{id:"10-dom-dom-selectors-17",title:"Attribute Selector",starterCode:`const el = document.querySelector('[data-id]');
console.log(el);`,solution:`const el = document.querySelector('[data-id]');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use square brackets for attribute selectors","Selects elements with attribute"]},{id:"10-dom-dom-selectors-18",title:"nth-child Selector",starterCode:`const el = document.querySelector('li:nth-child(2)');
console.log(el);`,solution:`const el = document.querySelector('li:nth-child(2)');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["nth-child selects by position","Counts from 1, not 0"]},{id:"10-dom-dom-selectors-19",title:"forEach on NodeList",starterCode:`const items = document.querySelectorAll('.item');
let count = 0;
items.forEach(() => count++);
console.log(count);`,solution:`const items = document.querySelectorAll('.item');
let count = 0;
items.forEach(() => count++);
console.log(count);`,tests:[{input:[],expected:"0"}],hints:["NodeList supports forEach","Count iterations in the callback"]},{id:"10-dom-dom-selectors-20",title:"Null Handling",starterCode:`const el = document.querySelector('.nonexistent');
console.log(el === null);`,solution:`const el = document.querySelector('.nonexistent');
console.log(el === null);`,tests:[{input:[],expected:"true"}],hints:["querySelector returns null when no match","Compare with strict equality"]},{id:"10-dom-dom-selectors-21",title:"Closest Polyfill Concept",starterCode:`function closestPolyfill(el, selector) {
  // TODO: implement traversal up
  return null;
}
console.log(typeof closestPolyfill);`,solution:`function closestPolyfill(el, selector) {
  let current = el;
  while (current) {
    if (current.matches(selector)) return current;
    current = current.parentElement;
  }
  return null;
}
console.log(typeof closestPolyfill);`,tests:[{input:[],expected:"function"}],hints:["Traverse up using parentElement","Check matches at each step"]},{id:"10-dom-dom-selectors-22",title:"Selector Performance",starterCode:`// querySelector vs getElementById
console.log("getElementById is faster than querySelector");`,solution:`// getElementById is faster than querySelector
console.log("getElementById is faster than querySelector");`,tests:[{input:[],expected:"getElementById is faster than querySelector"}],hints:["getElementById uses direct lookup","querySelector parses CSS selectors"]},{id:"10-dom-dom-selectors-23",title:"Complex Selector",starterCode:`const el = document.querySelector('div > p:first-child');
console.log(el);`,solution:`const el = document.querySelector('div > p:first-child');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["> selects direct children","first-child selects first element"]},{id:"10-dom-dom-selectors-24",title:"querySelectorAll to Array",starterCode:`const items = document.querySelectorAll('.item');
const arr = Array.from(items);
console.log(Array.isArray(arr));`,solution:`const items = document.querySelectorAll('.item');
const arr = Array.from(items);
console.log(Array.isArray(arr));`,tests:[{input:[],expected:"true"}],hints:["Array.from converts array-like to array","Check with Array.isArray"]},{id:"10-dom-dom-selectors-25",title:"classList Property",starterCode:`const el = document.querySelector('.box');
console.log(typeof el.classList);`,solution:`const el = document.querySelector('.box');
console.log(typeof el.classList);`,tests:[{input:[],expected:"object"}],hints:["classList returns a DOMTokenList","DOMTokenList is an object"]},{id:"10-dom-dom-selectors-26",title:"dataset Property",starterCode:`const el = document.querySelector('[data-name]');
console.log(typeof el.dataset);`,solution:`const el = document.querySelector('[data-name]');
console.log(typeof el.dataset);`,tests:[{input:[],expected:"object"}],hints:["dataset returns a DOMStringMap","It's an object mapping data attributes"]},{id:"10-dom-dom-selectors-27",title:"getAttribute Method",starterCode:`const el = document.querySelector('a');
const href = el.getAttribute('href');
console.log(typeof href);`,solution:`const el = document.querySelector('a');
const href = el.getAttribute('href');
console.log(typeof href);`,tests:[{input:[],expected:"string"}],hints:["getAttribute returns attribute value","Always returns a string or null"]},{id:"10-dom-dom-selectors-28",title:"querySelector ID Selector",starterCode:`const el = document.querySelector('#header');
console.log(el);`,solution:`const el = document.querySelector('#header');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use # prefix for ID selectors","Same as getElementById"]},{id:"10-dom-dom-selectors-29",title:"querySelector Class Selector",starterCode:`const els = document.querySelectorAll('.active');
console.log(els.length);`,solution:`const els = document.querySelectorAll('.active');
console.log(els.length);`,tests:[{input:[],expected:"0"}],hints:["Use . prefix for class selectors","Check length of the result"]},{id:"10-dom-dom-selectors-30",title:"querySelector Tag Selector",starterCode:`const el = document.querySelector('input');
console.log(el);`,solution:`const el = document.querySelector('input');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use tag name directly for tag selectors","Returns first matching element"]},{id:"10-dom-dom-selectors-31",title:"querySelector Attribute Value",starterCode:`const el = document.querySelector('input[type="text"]');
console.log(el);`,solution:`const el = document.querySelector('input[type="text"]');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use [attribute=value] syntax","Combines tag and attribute selectors"]},{id:"10-dom-dom-selectors-32",title:"querySelector Pseudo Class",starterCode:`const el = document.querySelector('li:first-child');
console.log(el);`,solution:`const el = document.querySelector('li:first-child');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use : for pseudo-classes","first-child selects first li"]},{id:"10-dom-dom-selectors-33",title:"querySelectorAll vs querySelector",starterCode:`// What's the difference?
console.log("querySelector returns one, querySelectorAll returns all");`,solution:`// What's the difference?
console.log("querySelector returns one, querySelectorAll returns all");`,tests:[{input:[],expected:"querySelector returns one, querySelectorAll returns all"}],hints:["querySelector returns first match","querySelectorAll returns all matches"]},{id:"10-dom-dom-selectors-34",title:"HTMLCollection to Array",starterCode:`const els = document.getElementsByTagName('div');
const arr = [...els];
console.log(Array.isArray(arr));`,solution:`const els = document.getElementsByTagName('div');
const arr = [...els];
console.log(Array.isArray(arr));`,tests:[{input:[],expected:"true"}],hints:["Spread operator can convert array-like","Creates a true array"]},{id:"10-dom-dom-selectors-35",title:"closest Returns Element",starterCode:`const el = document.querySelector('.deep');
const found = el.closest('.ancestor');
console.log(found === null || found instanceof Element);`,solution:`const el = document.querySelector('.deep');
const found = el.closest('.ancestor');
console.log(found === null || found instanceof Element);`,tests:[{input:[],expected:"true"}],hints:["closest returns Element or null","Check with instanceof"]},{id:"10-dom-dom-selectors-36",title:"matches Returns Boolean",starterCode:`const el = document.querySelector('div');
const result = el.matches('div');
console.log(typeof result);`,solution:`const el = document.querySelector('div');
const result = el.matches('div');
console.log(typeof result);`,tests:[{input:[],expected:"boolean"}],hints:["matches always returns true or false","Use typeof to check"]},{id:"10-dom-dom-selectors-37",title:"querySelector Chaining",starterCode:`const inner = document.querySelector('.outer .inner');
console.log(inner);`,solution:`const inner = document.querySelector('.outer .inner');
console.log(inner);`,tests:[{input:[],expected:"null"}],hints:["Space means descendant selector","Finds .inner inside .outer"]},{id:"10-dom-dom-selectors-38",title:"querySelectorAll Chaining",starterCode:`const items = document.querySelectorAll('.list .item');
console.log(items.length);`,solution:`const items = document.querySelectorAll('.list .item');
console.log(items.length);`,tests:[{input:[],expected:"0"}],hints:["Space means descendant selector","Check the length property"]},{id:"10-dom-dom-selectors-39",title:"getElementById Null",starterCode:`const el = document.getElementById('nonexistent');
console.log(el);`,solution:`const el = document.getElementById('nonexistent');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Returns null if element not found","No error is thrown"]},{id:"10-dom-dom-selectors-40",title:"getElementsByClassName Live",starterCode:`// getElementsByClassName returns a live collection
console.log("live");`,solution:`// getElementsByClassName returns a live collection
console.log("live");`,tests:[{input:[],expected:"live"}],hints:["Live collections update automatically","Unlike querySelectorAll"]},{id:"10-dom-dom-selectors-41",title:"getElementsByTagName Live",starterCode:`// getElementsByTagName returns a live collection
console.log("live");`,solution:`// getElementsByTagName returns a live collection
console.log("live");`,tests:[{input:[],expected:"live"}],hints:["Live collections auto-update","Same as getElementsByClassName"]},{id:"10-dom-dom-selectors-42",title:"closest with ID Selector",starterCode:`const el = document.querySelector('.nested');
const found = el.closest('#container');
console.log(found);`,solution:`const el = document.querySelector('.nested');
const found = el.closest('#container');
console.log(found);`,tests:[{input:[],expected:"null"}],hints:["closest works with any CSS selector","Including ID selectors"]},{id:"10-dom-dom-selectors-43",title:"matches Complex Selector",starterCode:`const el = document.querySelector('a');
const result = el.matches('a[href^="https"]');
console.log(typeof result);`,solution:`const el = document.querySelector('a');
const result = el.matches('a[href^="https"]');
console.log(typeof result);`,tests:[{input:[],expected:"boolean"}],hints:["^= means starts with","matches always returns boolean"]},{id:"10-dom-dom-selectors-44",title:"querySelector Limitations",starterCode:`// querySelectorAll returns static NodeList
console.log("static");`,solution:`// querySelectorAll returns static NodeList
console.log("static");`,tests:[{input:[],expected:"static"}],hints:["Static means it doesn't auto-update","Unlike HTMLCollection"]},{id:"10-dom-dom-selectors-45",title:"closest Self Match",starterCode:`const el = document.querySelector('.target');
const found = el.closest('.target');
console.log(found === el);`,solution:`const el = document.querySelector('.target');
const found = el.closest('.target');
console.log(found === el);`,tests:[{input:[],expected:"false"}],hints:["closest can match the element itself","Starts checking from the element"]},{id:"10-dom-dom-selectors-46",title:"querySelector First Match",starterCode:`const el = document.querySelector('.many');
console.log(el);`,solution:`const el = document.querySelector('.many');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["querySelector returns only the first match","Use querySelectorAll for all"]},{id:"10-dom-dom-selectors-47",title:"querySelectorAll Spread",starterCode:`const items = document.querySelectorAll('span');
const arr = [...items];
console.log(arr.length);`,solution:`const items = document.querySelectorAll('span');
const arr = [...items];
console.log(arr.length);`,tests:[{input:[],expected:"0"}],hints:["Spread converts NodeList to array","Check the array length"]},{id:"10-dom-dom-selectors-48",title:"closest Upward Traversal",starterCode:`// closest traverses upward from element
console.log("upward");`,solution:`// closest traverses upward from element
console.log("upward");`,tests:[{input:[],expected:"upward"}],hints:["closest goes up the DOM tree","From element to root"]},{id:"10-dom-dom-selectors-49",title:"querySelector Context",starterCode:`// You can pass context as second argument
console.log("context parameter");`,solution:`// You can pass context as second argument
console.log("context parameter");`,tests:[{input:[],expected:"context parameter"}],hints:["querySelector accepts optional context","Limits search to subtree"]},{id:"10-dom-dom-selectors-50",title:"Selector Practice",starterCode:`const el = document.querySelector('input[type="email"]');
console.log(el);`,solution:`const el = document.querySelector('input[type="email"]');
console.log(el);`,tests:[{input:[],expected:"null"}],hints:["Use attribute selector with value","Combines tag and attribute"]}],"11-events-01-event-basics":[{id:"11-events-event-basics-01",title:"addEventListener Basics",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('clicked');
});
console.log('listener added');`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  console.log('clicked');
});
console.log('listener added');`,tests:[{input:[],expected:"listener added"}],hints:["addEventListener takes event type and callback","Does not fire until event occurs"]},{id:"11-events-event-basics-02",title:"removeEventListener",starterCode:`function handleClick() { console.log('clicked'); }
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);
console.log('removed');`,solution:`function handleClick() { console.log('clicked'); }
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);
console.log('removed');`,tests:[{input:[],expected:"removed"}],hints:["Must pass same function reference","Anonymous functions can't be removed"]},{id:"11-events-event-basics-03",title:"Click Event",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.type);
});`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.type);
});`,tests:[{input:[],expected:"click"}],hints:["Event object has type property","click event type is 'click'"]},{id:"11-events-event-basics-04",title:"Input Event",starterCode:`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.type);
});`,solution:`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.type);
});`,tests:[{input:[],expected:"input"}],hints:["Fires on every input change","Event type is 'input'"]},{id:"11-events-event-basics-05",title:"Submit Event",starterCode:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,solution:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,tests:[{input:[],expected:"submitted"}],hints:["Use preventDefault to stop form submission","Event type is 'submit'"]},{id:"11-events-event-basics-06",title:"Keydown Event",starterCode:`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,solution:`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,tests:[{input:[],expected:"a"}],hints:["key property has the key value","Fires when key is pressed down"]},{id:"11-events-event-basics-07",title:"Keyup Event",starterCode:`document.addEventListener('keyup', function(e) {
  console.log(e.type);
});`,solution:`document.addEventListener('keyup', function(e) {
  console.log(e.type);
});`,tests:[{input:[],expected:"keyup"}],hints:["Fires when key is released","Event type is 'keyup'"]},{id:"11-events-event-basics-08",title:"Mouseenter Event",starterCode:`const box = document.querySelector('.box');
box.addEventListener('mouseenter', function(e) {
  console.log('entered');
});`,solution:`const box = document.querySelector('.box');
box.addEventListener('mouseenter', function(e) {
  console.log('entered');
});`,tests:[{input:[],expected:"entered"}],hints:["Fires when mouse enters element","Does not bubble"]},{id:"11-events-event-basics-09",title:"Mouseleave Event",starterCode:`const box = document.querySelector('.box');
box.addEventListener('mouseleave', function(e) {
  console.log('left');
});`,solution:`const box = document.querySelector('.box');
box.addEventListener('mouseleave', function(e) {
  console.log('left');
});`,tests:[{input:[],expected:"left"}],hints:["Fires when mouse leaves element","Opposite of mouseenter"]},{id:"11-events-event-basics-10",title:"Scroll Event",starterCode:`window.addEventListener('scroll', function(e) {
  console.log('scrolled');
});`,solution:`window.addEventListener('scroll', function(e) {
  console.log('scrolled');
});`,tests:[{input:[],expected:"scrolled"}],hints:["Fires on window scroll","Can fire many times per second"]},{id:"11-events-event-basics-11",title:"Load Event",starterCode:`window.addEventListener('load', function() {
  console.log('loaded');
});`,solution:`window.addEventListener('load', function() {
  console.log('loaded');
});`,tests:[{input:[],expected:"loaded"}],hints:["Fires when page fully loads","Includes images and resources"]},{id:"11-events-event-basics-12",title:"Event Object",starterCode:`document.addEventListener('click', function(e) {
  console.log(typeof e);
});`,solution:`document.addEventListener('click', function(e) {
  console.log(typeof e);
});`,tests:[{input:[],expected:"object"}],hints:["Event handler receives Event object","e is an object"]},{id:"11-events-event-basics-13",title:"Dblclick Event",starterCode:`const box = document.querySelector('.box');
box.addEventListener('dblclick', function(e) {
  console.log('double clicked');
});`,solution:`const box = document.querySelector('.box');
box.addEventListener('dblclick', function(e) {
  console.log('double clicked');
});`,tests:[{input:[],expected:"double clicked"}],hints:["dblclick fires on double click","Must click twice quickly"]},{id:"11-events-event-basics-14",title:"Focus Event",starterCode:`const input = document.querySelector('input');
input.addEventListener('focus', function(e) {
  console.log('focused');
});`,solution:`const input = document.querySelector('input');
input.addEventListener('focus', function(e) {
  console.log('focused');
});`,tests:[{input:[],expected:"focused"}],hints:["Fires when element gains focus","Use for input highlighting"]},{id:"11-events-event-basics-15",title:"Blur Event",starterCode:`const input = document.querySelector('input');
input.addEventListener('blur', function(e) {
  console.log('blurred');
});`,solution:`const input = document.querySelector('input');
input.addEventListener('blur', function(e) {
  console.log('blurred');
});`,tests:[{input:[],expected:"blurred"}],hints:["Fires when element loses focus","Opposite of focus"]},{id:"11-events-event-basics-16",title:"Change Event",starterCode:`const input = document.querySelector('input');
input.addEventListener('change', function(e) {
  console.log('changed');
});`,solution:`const input = document.querySelector('input');
input.addEventListener('change', function(e) {
  console.log('changed');
});`,tests:[{input:[],expected:"changed"}],hints:["Fires when value changes and loses focus","Unlike input, fires once"]},{id:"11-events-event-basics-17",title:"Resize Event",starterCode:`window.addEventListener('resize', function(e) {
  console.log('resized');
});`,solution:`window.addEventListener('resize', function(e) {
  console.log('resized');
});`,tests:[{input:[],expected:"resized"}],hints:["Fires on window resize","Use with debounce for performance"]},{id:"11-events-event-basics-18",title:"Contextmenu Event",starterCode:`document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('right clicked');
});`,solution:`document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log('right clicked');
});`,tests:[{input:[],expected:"right clicked"}],hints:["Fires on right-click","Use preventDefault to block menu"]},{id:"11-events-event-basics-19",title:"Copy Event",starterCode:`document.addEventListener('copy', function(e) {
  console.log('copied');
});`,solution:`document.addEventListener('copy', function(e) {
  console.log('copied');
});`,tests:[{input:[],expected:"copied"}],hints:["Fires when user copies content","Can modify clipboard data"]},{id:"11-events-event-basics-20",title:"Paste Event",starterCode:`document.addEventListener('paste', function(e) {
  console.log('pasted');
});`,solution:`document.addEventListener('paste', function(e) {
  console.log('pasted');
});`,tests:[{input:[],expected:"pasted"}],hints:["Fires when user pastes content","Can access pasted data"]},{id:"11-events-event-basics-21",title:"Drag Event",starterCode:`const el = document.querySelector('.draggable');
el.addEventListener('dragstart', function(e) {
  console.log('dragging');
});`,solution:`const el = document.querySelector('.draggable');
el.addEventListener('dragstart', function(e) {
  console.log('dragging');
});`,tests:[{input:[],expected:"dragging"}],hints:["dragstart fires when drag begins","Set dataTransfer in handler"]},{id:"11-events-event-basics-22",title:"Touch Events",starterCode:`const el = document.querySelector('.touchable');
el.addEventListener('touchstart', function(e) {
  console.log('touched');
});`,solution:`const el = document.querySelector('.touchable');
el.addEventListener('touchstart', function(e) {
  console.log('touched');
});`,tests:[{input:[],expected:"touched"}],hints:["touchstart fires on touch","First of touch events"]},{id:"11-events-event-basics-23",title:"Pointer Events",starterCode:`const el = document.querySelector('.pointer');
el.addEventListener('pointerdown', function(e) {
  console.log('pointer down');
});`,solution:`const el = document.querySelector('.pointer');
el.addEventListener('pointerdown', function(e) {
  console.log('pointer down');
});`,tests:[{input:[],expected:"pointer down"}],hints:["Pointer events unify mouse and touch","pointerdown is like mousedown"]},{id:"11-events-event-basics-24",title:"Once Option",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('clicked once');
}, { once: true });
console.log('listener with once option');`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  console.log('clicked once');
}, { once: true });
console.log('listener with once option');`,tests:[{input:[],expected:"listener with once option"}],hints:["once: true removes listener after first call","Third argument is options object"]},{id:"11-events-event-basics-25",title:"Passive Option",starterCode:`window.addEventListener('scroll', function() {}, { passive: true });
console.log('passive listener');`,solution:`window.addEventListener('scroll', function() {}, { passive: true });
console.log('passive listener');`,tests:[{input:[],expected:"passive listener"}],hints:["passive: true tells browser not to wait","Improves scroll performance"]},{id:"11-events-event-basics-26",title:"Capture Option",starterCode:`document.addEventListener('click', function() {
  console.log('capture');
}, { capture: true });
console.log('capture listener');`,solution:`document.addEventListener('click', function() {
  console.log('capture');
}, { capture: true });
console.log('capture listener');`,tests:[{input:[],expected:"capture listener"}],hints:["capture: true fires during capture phase","Before bubbling phase"]},{id:"11-events-event-basics-27",title:"Event Timestamp",starterCode:`document.addEventListener('click', function(e) {
  console.log(typeof e.timeStamp);
});`,solution:`document.addEventListener('click', function(e) {
  console.log(typeof e.timeStamp);
});`,tests:[{input:[],expected:"number"}],hints:["timeStamp is when event occurred","Returns milliseconds"]},{id:"11-events-event-basics-28",title:"preventDefault",starterCode:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('prevented');
});`,solution:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('prevented');
});`,tests:[{input:[],expected:"prevented"}],hints:["preventDefault stops default behavior","Form won't submit/reload"]},{id:"11-events-event-basics-29",title:"stopPropagation",starterCode:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('stopped');
});`,solution:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('stopped');
});`,tests:[{input:[],expected:"stopped"}],hints:["stopPropagation prevents bubbling","Event won't reach parent elements"]},{id:"11-events-event-basics-30",title:"Event Delegation Concept",starterCode:`// Handle events on parent, check event.target
console.log("event delegation pattern");`,solution:`// Handle events on parent, check event.target
console.log("event delegation pattern");`,tests:[{input:[],expected:"event delegation pattern"}],hints:["Attach listener to parent element","Check event.target for actual element"]},{id:"11-events-event-basics-31",title:"event.target vs currentTarget",starterCode:`const parent = document.querySelector('.parent');
parent.addEventListener('click', function(e) {
  console.log(e.target === e.currentTarget);
});`,solution:`const parent = document.querySelector('.parent');
parent.addEventListener('click', function(e) {
  console.log(e.target === e.currentTarget);
});`,tests:[{input:[],expected:"true"}],hints:["target is clicked element","currentTarget is element with listener"]},{id:"11-events-event-basics-32",title:"Event Phase",starterCode:`document.addEventListener('click', function(e) {
  console.log(e.eventPhase);
}, { capture: true });`,solution:`document.addEventListener('click', function(e) {
  console.log(e.eventPhase);
}, { capture: true });`,tests:[{input:[],expected:"1"}],hints:["Phase 1 is capture, 2 is target, 3 is bubble","capture phase is 1"]},{id:"11-events-event-basics-33",title:"Multiple Listeners",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log('first'));
btn.addEventListener('click', () => console.log('second'));
console.log('two listeners');`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', () => console.log('first'));
btn.addEventListener('click', () => console.log('second'));
console.log('two listeners');`,tests:[{input:[],expected:"two listeners"}],hints:["Multiple listeners can be added","All fire in order added"]},{id:"11-events-event-basics-34",title:"Event Listener Options",starterCode:`// Options: { capture, once, passive, signal }
console.log("options object");`,solution:`// Options: { capture, once, passive, signal }
console.log("options object");`,tests:[{input:[],expected:"options object"}],hints:["Third argument can be options object","Can also be boolean for capture"]},{id:"11-events-event-basics-35",title:"AbortController Signal",starterCode:`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,solution:`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,tests:[{input:[],expected:"aborted"}],hints:["AbortController can remove listeners","Pass signal option to addEventListener"]},{id:"11-events-event-basics-36",title:"Key Event Properties",starterCode:`document.addEventListener('keydown', function(e) {
  console.log(e.key + ' ' + e.code);
});`,solution:`document.addEventListener('keydown', function(e) {
  console.log(e.key + ' ' + e.code);
});`,tests:[{input:[],expected:"a KeyA"}],hints:["key is the key value","code is physical key code"]},{id:"11-events-event-basics-37",title:"Mouse Event Properties",starterCode:`document.addEventListener('click', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,solution:`document.addEventListener('click', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,tests:[{input:[],expected:"0,0"}],hints:["clientX/Y is viewport coordinates","pageX/Y includes scroll"]},{id:"11-events-event-basics-38",title:"Event Type Check",starterCode:`document.addEventListener('click', function(e) {
  console.log(e instanceof Event);
});`,solution:`document.addEventListener('click', function(e) {
  console.log(e instanceof Event);
});`,tests:[{input:[],expected:"true"}],hints:["Event handler receives Event instance","Use instanceof to verify"]},{id:"11-events-event-basics-39",title:"addEventListener Return",starterCode:`const btn = document.querySelector('button');
const result = btn.addEventListener('click', () => {});
console.log(result);`,solution:`const btn = document.querySelector('button');
const result = btn.addEventListener('click', () => {});
console.log(result);`,tests:[{input:[],expected:"undefined"}],hints:["addEventListener returns undefined","Unlike jQuery which returns element"]},{id:"11-events-event-basics-40",title:"Event Bubbling",starterCode:`// Events bubble up from target to document
console.log("events bubble up");`,solution:`// Events bubble up from target to document
console.log("events bubble up");`,tests:[{input:[],expected:"events bubble up"}],hints:["Default phase is bubbling","Goes from target to root"]},{id:"11-events-event-basics-41",title:"Event Capturing",starterCode:`// Capture phase goes from document to target
console.log("capture phase first");`,solution:`// Capture phase goes from document to target
console.log("capture phase first");`,tests:[{input:[],expected:"capture phase first"}],hints:["Capture happens before bubbling","Use capture: true option"]},{id:"11-events-event-basics-42",title:"Input Value Event",starterCode:`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.target.value);
});`,solution:`const input = document.querySelector('input');
input.addEventListener('input', function(e) {
  console.log(e.target.value);
});`,tests:[{input:[],expected:"hello"}],hints:["e.target.value has current input value","Fires on every keystroke"]},{id:"11-events-event-basics-43",title:"Submit Prevent",starterCode:`function handleSubmit(e) {
  e.preventDefault();
  console.log('no reload');
}
document.querySelector('form').addEventListener('submit', handleSubmit);`,solution:`function handleSubmit(e) {
  e.preventDefault();
  console.log('no reload');
}
document.querySelector('form').addEventListener('submit', handleSubmit);`,tests:[{input:[],expected:"no reload"}],hints:["preventDefault stops form submission","Prevents page reload"]},{id:"11-events-event-basics-44",title:"Key Code",starterCode:`document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
});`,solution:`document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
});`,tests:[{input:[],expected:"65"}],hints:["keyCode is numeric key code","65 is 'A' key"]},{id:"11-events-event-basics-45",title:"Event Prevent Default Check",starterCode:`const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  const prevented = e.defaultPrevented;
  console.log(prevented);
});`,solution:`const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  const prevented = e.defaultPrevented;
  console.log(prevented);
});`,tests:[{input:[],expected:"false"}],hints:["defaultPrevented checks if prevented","False until preventDefault called"]},{id:"11-events-event-basics-46",title:"Event Stop Propagation Check",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.cancelBubble);
});`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.cancelBubble);
});`,tests:[{input:[],expected:"false"}],hints:["cancelBubble is legacy stopPropagation","False by default"]},{id:"11-events-event-basics-47",title:"Event Target ID",starterCode:`const btn = document.querySelector('#myButton');
btn.addEventListener('click', function(e) {
  console.log(e.target.id);
});`,solution:`const btn = document.querySelector('#myButton');
btn.addEventListener('click', function(e) {
  console.log(e.target.id);
});`,tests:[{input:[],expected:"myButton"}],hints:["target.id gives the element's id","Same as element's id attribute"]},{id:"11-events-event-basics-48",title:"Event Complete Practice",starterCode:`// Events: add/remove, types, options, phases
console.log("events basics complete");`,solution:`// Events: add/remove, types, options, phases
console.log("events basics complete");`,tests:[{input:[],expected:"events basics complete"}],hints:["Review all event concepts","Practice with different event types"]},{id:"11-events-event-basics-49",title:"EventListener Options",starterCode:`// Options: capture, once, passive, signal
console.log("4 options available");`,solution:`// Options: capture, once, passive, signal
console.log("4 options available");`,tests:[{input:[],expected:"4 options available"}],hints:["Third argument can be options object","capture, once, passive, signal"]},{id:"11-events-event-basics-50",title:"Event Type String",starterCode:`// Common types: click, input, submit, keydown
console.log("events have type strings");`,solution:`// Common types: click, input, submit, keydown
console.log("events have type strings");`,tests:[{input:[],expected:"events have type strings"}],hints:["Event type identifies the event","Passed as first argument to addEventListener"]}],"11-events-02-event-delegation":[{id:"11-events-event-delegation-01",title:"Delegation Concept",starterCode:`// Attach listener to parent, check event.target
console.log("delegation attaches to parent");`,solution:`// Attach listener to parent, check event.target
console.log("delegation attaches to parent");`,tests:[{input:[],expected:"delegation attaches to parent"}],hints:["Single listener on parent element","Check which child was clicked"]},{id:"11-events-event-delegation-02",title:"event.target Property",starterCode:`document.querySelector('ul').addEventListener('click', function(e) {
  console.log(e.target.tagName);
});`,solution:`document.querySelector('ul').addEventListener('click', function(e) {
  console.log(e.target.tagName);
});`,tests:[{input:[],expected:"LI"}],hints:["target is the actual clicked element","tagName gives element type"]},{id:"11-events-event-delegation-03",title:"currentTarget Property",starterCode:`const ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
  console.log(e.currentTarget.tagName);
});`,solution:`const ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
  console.log(e.currentTarget.tagName);
});`,tests:[{input:[],expected:"UL"}],hints:["currentTarget is element with listener","Always the parent in delegation"]},{id:"11-events-event-delegation-04",title:"Bubbling Phase",starterCode:`// Events bubble from target up to document
console.log("target → parent → ... → document");`,solution:`// Events bubble from target up to document
console.log("target → parent → ... → document");`,tests:[{input:[],expected:"target → parent → ... → document"}],hints:["Default behavior is bubbling","Goes up the DOM tree"]},{id:"11-events-event-delegation-05",title:"Capturing Phase",starterCode:`// Capture goes document → parent → target
console.log("document → ... → parent → target");`,solution:`// Capture goes document → parent → target
console.log("document → ... → parent → target");`,tests:[{input:[],expected:"document → ... → parent → target"}],hints:["Capture happens before bubbling","Use capture: true option"]},{id:"11-events-event-delegation-06",title:"stopPropagation Effect",starterCode:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('inner only');
});`,solution:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('inner only');
});`,tests:[{input:[],expected:"inner only"}],hints:["stopPropagation stops event bubbling","Parent handlers won't fire"]},{id:"11-events-event-delegation-07",title:"preventDefault Delegated",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    console.log('link blocked');
  }
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    console.log('link blocked');
  }
});`,tests:[{input:[],expected:"link blocked"}],hints:["Check target to conditionally prevent","Links won't navigate"]},{id:"11-events-event-delegation-08",title:"Dynamic Elements",starterCode:`// Delegation works for elements added later
console.log("dynamic elements handled");`,solution:`// Delegation works for elements added later
console.log("dynamic elements handled");`,tests:[{input:[],expected:"dynamic elements handled"}],hints:["Listener on parent catches new children","No need to reattach listeners"]},{id:"11-events-event-delegation-09",title:"Data Attribute Delegation",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  console.log(id);
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  console.log(id);
});`,tests:[{input:[],expected:"123"}],hints:["Use data-* attributes for identification","Read with dataset property"]},{id:"11-events-event-delegation-10",title:"Delegation Performance",starterCode:`// One listener vs many listeners
console.log("delegation uses fewer listeners");`,solution:`// One listener vs many listeners
console.log("delegation uses fewer listeners");`,tests:[{input:[],expected:"delegation uses fewer listeners"}],hints:["Single listener on parent","Better memory usage"]},{id:"11-events-event-delegation-11",title:"Cleanup Pattern",starterCode:`function handleClick(e) {
  console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleClick);
list.removeEventListener('click', handleClick);
console.log('cleaned up');`,solution:`function handleClick(e) {
  console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleClick);
list.removeEventListener('click', handleClick);
console.log('cleaned up');`,tests:[{input:[],expected:"cleaned up"}],hints:["Named function can be removed","Same reference must be passed"]},{id:"11-events-event-delegation-12",title:"Once Delegation",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  console.log('clicked once');
}, { once: true });
console.log('once option');`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  console.log('clicked once');
}, { once: true });
console.log('once option');`,tests:[{input:[],expected:"once option"}],hints:["once: true auto-removes after first fire","Works with delegation"]},{id:"11-events-event-delegation-13",title:"Passive Scroll",starterCode:`window.addEventListener('scroll', function() {
  console.log('scrolling');
}, { passive: true });
console.log('passive scroll');`,solution:`window.addEventListener('scroll', function() {
  console.log('scrolling');
}, { passive: true });
console.log('passive scroll');`,tests:[{input:[],expected:"passive scroll"}],hints:["passive: true for scroll performance","Browser doesn't wait for preventDefault"]},{id:"11-events-event-delegation-14",title:"Capture Demo",starterCode:`document.addEventListener('click', function() {
  console.log('capture');
}, true);
console.log('capture phase listener');`,solution:`document.addEventListener('click', function() {
  console.log('capture');
}, true);
console.log('capture phase listener');`,tests:[{input:[],expected:"capture phase listener"}],hints:["true as third arg means capture","Fires before bubble phase"]},{id:"11-events-event-delegation-15",title:"stopImmediatePropagation",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  e.stopImmediatePropagation();
  console.log('first');
});
btn.addEventListener('click', function() {
  console.log('second');
});`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  e.stopImmediatePropagation();
  console.log('first');
});
btn.addEventListener('click', function() {
  console.log('second');
});`,tests:[{input:[],expected:"first"}],hints:["stopImmediatePropagation stops all handlers","Even on same element"]},{id:"11-events-event-delegation-16",title:"Custom Events",starterCode:`const event = new CustomEvent('userLogin', { detail: { name: 'John' } });
document.addEventListener('userLogin', function(e) {
  console.log(e.detail.name);
});
document.dispatchEvent(event);`,solution:`const event = new CustomEvent('userLogin', { detail: { name: 'John' } });
document.addEventListener('userLogin', function(e) {
  console.log(e.detail.name);
});
document.dispatchEvent(event);`,tests:[{input:[],expected:"John"}],hints:["CustomEvent creates custom events","detail carries custom data"]},{id:"11-events-event-delegation-17",title:"CustomEvent Detail",starterCode:`const event = new CustomEvent('update', { detail: 42 });
document.addEventListener('update', function(e) {
  console.log(e.detail);
});
document.dispatchEvent(event);`,solution:`const event = new CustomEvent('update', { detail: 42 });
document.addEventListener('update', function(e) {
  console.log(e.detail);
});
document.dispatchEvent(event);`,tests:[{input:[],expected:"42"}],hints:["detail property holds custom data","Can be any type"]},{id:"11-events-event-delegation-18",title:"dispatchEvent",starterCode:`const el = document.querySelector('.box');
const event = new Event('build');
el.addEventListener('build', () => console.log('built'));
el.dispatchEvent(event);`,solution:`const el = document.querySelector('.box');
const event = new Event('build');
el.addEventListener('build', () => console.log('built'));
el.dispatchEvent(event);`,tests:[{input:[],expected:"built"}],hints:["dispatchEvent triggers the event","Must add listener first"]},{id:"11-events-event-delegation-19",title:"addEventListener Options",starterCode:`// Options: capture, once, passive, signal
console.log("4 options available");`,solution:`// Options: capture, once, passive, signal
console.log("4 options available");`,tests:[{input:[],expected:"4 options available"}],hints:["capture for capture phase","once auto-removes listener"]},{id:"11-events-event-delegation-20",title:"removeEventListener Match",starterCode:`function handler() { console.log('done'); }
const el = document.querySelector('.box');
el.addEventListener('click', handler);
el.removeEventListener('click', handler);
console.log('matching required');`,solution:`function handler() { console.log('done'); }
const el = document.querySelector('.box');
el.addEventListener('click', handler);
el.removeEventListener('click', handler);
console.log('matching required');`,tests:[{input:[],expected:"matching required"}],hints:["Same function reference needed","Anonymous functions can't be removed"]},{id:"11-events-event-delegation-21",title:"Event Emitter Pattern",starterCode:`class EventEmitter {
  constructor() { this.events = {}; }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('test', (d) => console.log(d));
emitter.emit('test', 'emitted');`,solution:`class EventEmitter {
  constructor() { this.events = {}; }
  on(event, fn) {
    (this.events[event] = this.events[event] || []).push(fn);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('test', (d) => console.log(d));
emitter.emit('test', 'emitted');`,tests:[{input:[],expected:"emitted"}],hints:["Store callbacks in object","Emit calls all registered callbacks"]},{id:"11-events-event-delegation-22",title:"Event Bus",starterCode:`const bus = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
bus.on('message', (m) => console.log(m));
bus.emit('message', 'hello');`,solution:`const bus = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
bus.on('message', (m) => console.log(m));
bus.emit('message', 'hello');`,tests:[{input:[],expected:"hello"}],hints:["Simple pub/sub object","on registers, emit triggers"]},{id:"11-events-event-delegation-23",title:"Keyboard Shortcuts",starterCode:`document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('save');
  }
});`,solution:`document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('save');
  }
});`,tests:[{input:[],expected:"save"}],hints:["Check ctrlKey, shiftKey, altKey","Use preventDefault for browser shortcuts"]},{id:"11-events-event-delegation-24",title:"Mouse Delegation",starterCode:`const list = document.querySelector('ul');
list.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('hovered');
  }
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('hovered');
  }
});`,tests:[{input:[],expected:"hovered"}],hints:["Use mouseover/mouseenter for hover","Check target.tagName"]},{id:"11-events-event-delegation-25",title:"Touch Delegation",starterCode:`const list = document.querySelector('ul');
list.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('touched');
  }
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('touchstart', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('touched');
  }
});`,tests:[{input:[],expected:"touched"}],hints:["Touch events delegate like mouse","Use e.touches for position"]},{id:"11-events-event-delegation-26",title:"Pointer Delegation",starterCode:`const list = document.querySelector('ul');
list.addEventListener('pointerdown', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('pointer');
  }
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('pointerdown', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('pointer');
  }
});`,tests:[{input:[],expected:"pointer"}],hints:["Pointer events unify input types","Same delegation pattern"]},{id:"11-events-event-delegation-27",title:"Event Pooling",starterCode:`// Synthetic events may be reused (older React)
console.log("event pooling in old React");`,solution:`// Synthetic events may be reused (older React)
console.log("event pooling in old React");`,tests:[{input:[],expected:"event pooling in old React"}],hints:["React 17+ doesn't pool events","Older versions reused event objects"]},{id:"11-events-event-delegation-28",title:"Delegation Pattern Complete",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,tests:[{input:[],expected:"Item 1"}],hints:["Use closest to find parent element","Works even with nested elements"]},{id:"11-events-event-delegation-29",title:"Delegation vs Direct",starterCode:`// Direct: listener on each element
// Delegation: one listener on parent
console.log("delegation is more efficient");`,solution:`// Direct: listener on each element
// Delegation: one listener on parent
console.log("delegation is more efficient");`,tests:[{input:[],expected:"delegation is more efficient"}],hints:["Fewer listeners = less memory","Works with dynamic elements"]},{id:"11-events-event-delegation-30",title:"Dynamic Content Handling",starterCode:`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.matches('.dynamic-btn')) {
    console.log('dynamic button clicked');
  }
});`,solution:`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.matches('.dynamic-btn')) {
    console.log('dynamic button clicked');
  }
});`,tests:[{input:[],expected:"dynamic button clicked"}],hints:["matches checks if element matches selector","Works for future elements"]},{id:"11-events-event-delegation-31",title:"Nested Delegation",starterCode:`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  const td = e.target.closest('td');
  if (td) console.log(td.textContent);
});`,solution:`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  const td = e.target.closest('td');
  if (td) console.log(td.textContent);
});`,tests:[{input:[],expected:"Cell"}],hints:["closest traverses up","Works with nested elements"]},{id:"11-events-event-delegation-32",title:"Delegation with Data Attributes",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const action = e.target.dataset.action;
  if (action) console.log(action);
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const action = e.target.dataset.action;
  if (action) console.log(action);
});`,tests:[{input:[],expected:"delete"}],hints:["data-action attribute holds action name","Check if action exists"]},{id:"11-events-event-delegation-33",title:"Event Listener Count",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', () => {});
btn.addEventListener('click', () => {});
console.log('2 listeners added');`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', () => {});
btn.addEventListener('click', () => {});
console.log('2 listeners added');`,tests:[{input:[],expected:"2 listeners added"}],hints:["Multiple listeners can be added","All fire on event"]},{id:"11-events-event-delegation-34",title:"Delegation Selector Check",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.closest('li')) console.log('li found');
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.closest('li')) console.log('li found');
});`,tests:[{input:[],expected:"li found"}],hints:["closest checks ancestors","Returns element or null"]},{id:"11-events-event-delegation-35",title:"Event Bubbling Order",starterCode:`// Child handler fires before parent handler
console.log("child fires first, then parent");`,solution:`// Child handler fires before parent handler
console.log("child fires first, then parent");`,tests:[{input:[],expected:"child fires first, then parent"}],hints:["Bubbling goes from target up","Inner handlers fire first"]},{id:"11-events-event-delegation-36",title:"Capture vs Bubble",starterCode:`// Capture: document → target
// Bubble: target → document
console.log("capture first, bubble second");`,solution:`// Capture: document → target
// Bubble: target → document
console.log("capture first, bubble second");`,tests:[{input:[],expected:"capture first, bubble second"}],hints:["Capture phase goes down","Bubble phase goes up"]},{id:"11-events-event-delegation-37",title:"Delegation Efficiency",starterCode:`// 100 list items: 1 listener vs 100 listeners
console.log("delegation: 1 vs 100 listeners");`,solution:`// 100 list items: 1 listener vs 100 listeners
console.log("delegation: 1 vs 100 listeners");`,tests:[{input:[],expected:"delegation: 1 vs 100 listeners"}],hints:["Much less memory with delegation","Easier to manage"]},{id:"11-events-event-delegation-38",title:"Delegation Maintenance",starterCode:`// Easy to add new items without new listeners
console.log("no need to rebind events");`,solution:`// Easy to add new items without new listeners
console.log("no need to rebind events");`,tests:[{input:[],expected:"no need to rebind events"}],hints:["New elements automatically handled","Parent listener catches all"]},{id:"11-events-event-delegation-39",title:"Custom Event Delegation",starterCode:`const el = document.querySelector('.box');
const event = new CustomEvent('select', { detail: 'item1' });
el.addEventListener('select', (e) => console.log(e.detail));
el.dispatchEvent(event);`,solution:`const el = document.querySelector('.box');
const event = new CustomEvent('select', { detail: 'item1' });
el.addEventListener('select', (e) => console.log(e.detail));
el.dispatchEvent(event);`,tests:[{input:[],expected:"item1"}],hints:["Custom events work with delegation","Use detail for data"]},{id:"11-events-event-delegation-40",title:"Event Delegation Complete",starterCode:`// Delegation: parent listener + event.target
console.log("delegation pattern complete");`,solution:`// Delegation: parent listener + event.target
console.log("delegation pattern complete");`,tests:[{input:[],expected:"delegation pattern complete"}],hints:["Key pattern for dynamic content","Efficient event handling"]},{id:"11-events-event-delegation-41",title:"Matches Method",starterCode:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.target.matches('button'));
});`,solution:`const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
  console.log(e.target.matches('button'));
});`,tests:[{input:[],expected:"true"}],hints:["matches checks selector match","Returns boolean"]},{id:"11-events-event-delegation-42",title:"Closest Method",starterCode:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  const parent = e.target.closest('.parent');
  console.log(parent ? 'found' : 'not found');
});`,solution:`const inner = document.querySelector('.inner');
inner.addEventListener('click', function(e) {
  const parent = e.target.closest('.parent');
  console.log(parent ? 'found' : 'not found');
});`,tests:[{input:[],expected:"found"}],hints:["closest finds ancestor matching selector","Returns element or null"]},{id:"11-events-event-delegation-43",title:"Delegation with Class",starterCode:`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    console.log('button class found');
  }
});`,solution:`const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn')) {
    console.log('button class found');
  }
});`,tests:[{input:[],expected:"button class found"}],hints:["classList.contains checks class","Use for class-based delegation"]},{id:"11-events-event-delegation-44",title:"Delegation Tag Check",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('list item');
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('list item');
});`,tests:[{input:[],expected:"list item"}],hints:["Check tagName for element type","Use uppercase tag name"]},{id:"11-events-event-delegation-45",title:"Delegation Multiple Levels",starterCode:`const nav = document.querySelector('nav');
nav.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link) console.log('link clicked');
});`,solution:`const nav = document.querySelector('nav');
nav.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link) console.log('link clicked');
});`,tests:[{input:[],expected:"link clicked"}],hints:["closest traverses up multiple levels","Works with nested structures"]},{id:"11-events-event-delegation-46",title:"Delegation Event Phase",starterCode:`// Delegation uses bubbling phase by default
console.log("bubbling phase for delegation");`,solution:`// Delegation uses bubbling phase by default
console.log("bubbling phase for delegation");`,tests:[{input:[],expected:"bubbling phase for delegation"}],hints:["Default is bubbling phase","Capture phase also works"]},{id:"11-events-event-delegation-47",title:"Delegation Selector Complexity",starterCode:`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  if (e.target.closest('td.active')) console.log('active cell');
});`,solution:`const table = document.querySelector('table');
table.addEventListener('click', function(e) {
  if (e.target.closest('td.active')) console.log('active cell');
});`,tests:[{input:[],expected:"active cell"}],hints:["Complex selectors work with closest","Combine class and tag"]},{id:"11-events-event-delegation-48",title:"Delegation Cleanup Pattern",starterCode:`function handleListClick(e) {
  if (e.target.tagName === 'LI') console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleListClick);
list.removeEventListener('click', handleListClick);
console.log('cleaned up');`,solution:`function handleListClick(e) {
  if (e.target.tagName === 'LI') console.log(e.target.textContent);
}
const list = document.querySelector('ul');
list.addEventListener('click', handleListClick);
list.removeEventListener('click', handleListClick);
console.log('cleaned up');`,tests:[{input:[],expected:"cleaned up"}],hints:["Named function can be removed","Same reference needed"]},{id:"11-events-event-delegation-49",title:"Delegation Once Option",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('once');
}, { once: true });
console.log('once option');`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') console.log('once');
}, { once: true });
console.log('once option');`,tests:[{input:[],expected:"once option"}],hints:["once: true removes after first fire","Works with delegation"]},{id:"11-events-event-delegation-50",title:"Delegation Performance Count",starterCode:`// 1 delegation listener vs N direct listeners
// Memory: O(1) vs O(N)
console.log("delegation is O(1)");`,solution:`// 1 delegation listener vs N direct listeners
// Memory: O(1) vs O(N)
console.log("delegation is O(1)");`,tests:[{input:[],expected:"delegation is O(1)"}],hints:["Constant memory with delegation","Linear with direct listeners"]}],"11-events-03-event-practice":[{id:"11-events-event-practice-01",title:"Todo List Events",starterCode:`// Adding items, toggling complete, deleting
console.log("todo list with events");`,solution:`// Adding items, toggling complete, deleting
console.log("todo list with events");`,tests:[{input:[],expected:"todo list with events"}],hints:["Use addEventListener for interactions","Event delegation for dynamic items"]},{id:"11-events-event-practice-02",title:"Modal Events",starterCode:`// Open/close modal with click events
console.log("modal toggle pattern");`,solution:`// Open/close modal with click events
console.log("modal toggle pattern");`,tests:[{input:[],expected:"modal toggle pattern"}],hints:["Toggle display on button click","Close on backdrop click"]},{id:"11-events-event-practice-03",title:"Accordion Events",starterCode:`// Click to expand/collapse sections
console.log("accordion pattern");`,solution:`// Click to expand/collapse sections
console.log("accordion pattern");`,tests:[{input:[],expected:"accordion pattern"}],hints:["Toggle active class on click","Show/hide panel content"]},{id:"11-events-event-practice-04",title:"Tab Switcher",starterCode:`// Click tabs to show different content
console.log("tab switching pattern");`,solution:`// Click tabs to show different content
console.log("tab switching pattern");`,tests:[{input:[],expected:"tab switching pattern"}],hints:["Add active class to clicked tab","Show corresponding content"]},{id:"11-events-event-practice-05",title:"Form Validation",starterCode:`// Validate on submit and input events
console.log("form validation events");`,solution:`// Validate on submit and input events
console.log("form validation events");`,tests:[{input:[],expected:"form validation events"}],hints:["Use submit to prevent invalid data","Input events for real-time feedback"]},{id:"11-events-event-practice-06",title:"Drag and Drop",starterCode:`// dragstart, dragover, drop events
console.log("drag and drop pattern");`,solution:`// dragstart, dragover, drop events
console.log("drag and drop pattern");`,tests:[{input:[],expected:"drag and drop pattern"}],hints:["Set dataTransfer in dragstart","preventDefault in dragover"]},{id:"11-events-event-practice-07",title:"Infinite Scroll",starterCode:`// Scroll event to load more content
console.log("infinite scroll pattern");`,solution:`// Scroll event to load more content
console.log("infinite scroll pattern");`,tests:[{input:[],expected:"infinite scroll pattern"}],hints:["Check scroll position near bottom","Debounce scroll handler"]},{id:"11-events-event-practice-08",title:"Keyboard Shortcuts",starterCode:`// Keydown for keyboard shortcuts
console.log("keyboard shortcut pattern");`,solution:`// Keydown for keyboard shortcuts
console.log("keyboard shortcut pattern");`,tests:[{input:[],expected:"keyboard shortcut pattern"}],hints:["Check e.key and modifier keys","Use preventDefault for defaults"]},{id:"11-events-event-practice-09",title:"Context Menu",starterCode:`// Custom right-click menu
console.log("context menu pattern");`,solution:`// Custom right-click menu
console.log("context menu pattern");`,tests:[{input:[],expected:"context menu pattern"}],hints:["Use contextmenu event","preventDefault to hide default menu"]},{id:"11-events-event-practice-10",title:"Resize Handler",starterCode:`// Window resize for responsive behavior
console.log("resize handler pattern");`,solution:`// Window resize for responsive behavior
console.log("resize handler pattern");`,tests:[{input:[],expected:"resize handler pattern"}],hints:["Debounce resize events","Check window.innerWidth"]},{id:"11-events-event-practice-11",title:"Double Click Edit",starterCode:`// dblclick to enter edit mode
console.log("double click edit pattern");`,solution:`// dblclick to enter edit mode
console.log("double click edit pattern");`,tests:[{input:[],expected:"double click edit pattern"}],hints:["dblclick event on element","Replace with input on double click"]},{id:"11-events-event-practice-12",title:"Hover Tooltip",starterCode:`// mouseenter/mouseleave for tooltips
console.log("hover tooltip pattern");`,solution:`// mouseenter/mouseleave for tooltips
console.log("hover tooltip pattern");`,tests:[{input:[],expected:"hover tooltip pattern"}],hints:["Show tooltip on mouseenter","Hide on mouseleave"]},{id:"11-events-event-practice-13",title:"Scroll Spy",starterCode:`// Scroll event to highlight nav items
console.log("scroll spy pattern");`,solution:`// Scroll event to highlight nav items
console.log("scroll spy pattern");`,tests:[{input:[],expected:"scroll spy pattern"}],hints:["Check section positions on scroll","Update active nav link"]},{id:"11-events-event-practice-14",title:"Sticky Header",starterCode:`// Scroll to add fixed class to header
console.log("sticky header pattern");`,solution:`// Scroll to add fixed class to header
console.log("sticky header pattern");`,tests:[{input:[],expected:"sticky header pattern"}],hints:["Check scroll position","Add/remove fixed class"]},{id:"11-events-event-practice-15",title:"Dropdown Menu",starterCode:`// Click to toggle dropdown visibility
console.log("dropdown toggle pattern");`,solution:`// Click to toggle dropdown visibility
console.log("dropdown toggle pattern");`,tests:[{input:[],expected:"dropdown toggle pattern"}],hints:["Toggle open class on click","Close on outside click"]},{id:"11-events-event-practice-16",title:"Carousel",starterCode:`// Click arrows to change slides
console.log("carousel navigation pattern");`,solution:`// Click arrows to change slides
console.log("carousel navigation pattern");`,tests:[{input:[],expected:"carousel navigation pattern"}],hints:["Track current slide index","Update on arrow click"]},{id:"11-events-event-practice-17",title:"Toast Notification",starterCode:`// Show temporary notification
console.log("toast notification pattern");`,solution:`// Show temporary notification
console.log("toast notification pattern");`,tests:[{input:[],expected:"toast notification pattern"}],hints:["Create element and append","Remove after timeout"]},{id:"11-events-event-practice-18",title:"Copy to Clipboard",starterCode:`// Copy text on button click
console.log("copy to clipboard pattern");`,solution:`// Copy text on button click
console.log("copy to clipboard pattern");`,tests:[{input:[],expected:"copy to clipboard pattern"}],hints:["Use navigator.clipboard API","Show success message"]},{id:"11-events-event-practice-19",title:"Color Picker",starterCode:`// Input event for color changes
console.log("color picker pattern");`,solution:`// Input event for color changes
console.log("color picker pattern");`,tests:[{input:[],expected:"color picker pattern"}],hints:["Use input type='color'","Update background on input"]},{id:"11-events-event-practice-20",title:"Search Filter Debounce",starterCode:`// Debounce search input
console.log("debounced search pattern");`,solution:`// Debounce search input
console.log("debounced search pattern");`,tests:[{input:[],expected:"debounced search pattern"}],hints:["Wait before filtering","Use setTimeout/clearTimeout"]},{id:"11-events-event-practice-21",title:"Pagination",starterCode:`// Click page numbers to navigate
console.log("pagination pattern");`,solution:`// Click page numbers to navigate
console.log("pagination pattern");`,tests:[{input:[],expected:"pagination pattern"}],hints:["Track current page","Update content on page click"]},{id:"11-events-event-practice-22",title:"Sortable List",starterCode:`// Drag to reorder items
console.log("sortable list pattern");`,solution:`// Drag to reorder items
console.log("sortable list pattern");`,tests:[{input:[],expected:"sortable list pattern"}],hints:["Use dragstart/dragover/drop","Reorder array on drop"]},{id:"11-events-event-practice-23",title:"Resizable Panel",starterCode:`// Mouse events for resizing
console.log("resizable panel pattern");`,solution:`// Mouse events for resizing
console.log("resizable panel pattern");`,tests:[{input:[],expected:"resizable panel pattern"}],hints:["mousedown on divider","mousemove to resize"]},{id:"11-events-event-practice-24",title:"Zoom Image",starterCode:`// Click to zoom image
console.log("image zoom pattern");`,solution:`// Click to zoom image
console.log("image zoom pattern");`,tests:[{input:[],expected:"image zoom pattern"}],hints:["Toggle zoom class on click","CSS transform: scale"]},{id:"11-events-event-practice-25",title:"Canvas Basics",starterCode:`// Mouse events for canvas drawing
console.log("canvas drawing pattern");`,solution:`// Mouse events for canvas drawing
console.log("canvas drawing pattern");`,tests:[{input:[],expected:"canvas drawing pattern"}],hints:["mousedown to start, mousemove to draw","mouseup to stop"]},{id:"11-events-event-practice-26",title:"Animation Trigger",starterCode:`// Scroll to trigger animation
console.log("scroll animation trigger");`,solution:`// Scroll to trigger animation
console.log("scroll animation trigger");`,tests:[{input:[],expected:"scroll animation trigger"}],hints:["Check element position","Add animate class when visible"]},{id:"11-events-event-practice-27",title:"Lazy Load",starterCode:`// Intersection Observer for lazy loading
console.log("lazy load pattern");`,solution:`// Intersection Observer for lazy loading
console.log("lazy load pattern");`,tests:[{input:[],expected:"lazy load pattern"}],hints:["Use IntersectionObserver","Load when element enters viewport"]},{id:"11-events-event-practice-28",title:"Virtual Scroll",starterCode:`// Only render visible items
console.log("virtual scroll pattern");`,solution:`// Only render visible items
console.log("virtual scroll pattern");`,tests:[{input:[],expected:"virtual scroll pattern"}],hints:["Calculate visible range","Render only visible items"]},{id:"11-events-event-practice-29",title:"Debounce Implementation",starterCode:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce((x) => console.log(x), 100);
log('test');`,solution:`function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const log = debounce((x) => console.log(x), 100);
log('test');`,tests:[{input:[],expected:"test"}],hints:["Clear previous timer","Set new timer each call"]},{id:"11-events-event-practice-30",title:"Throttle Implementation",starterCode:`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const log = throttle((x) => console.log(x), 100);
log('test');`,solution:`function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const log = throttle((x) => console.log(x), 100);
log('test');`,tests:[{input:[],expected:"test"}],hints:["Use flag to limit execution","Only run once per limit period"]},{id:"11-events-event-practice-31",title:"Event Practice Complete",starterCode:`// UI patterns: todo, modal, tabs, forms, etc.
console.log("event practice complete");`,solution:`// UI patterns: todo, modal, tabs, forms, etc.
console.log("event practice complete");`,tests:[{input:[],expected:"event practice complete"}],hints:["Review all UI patterns","Practice combining events"]},{id:"11-events-event-practice-32",title:"Click Counter",starterCode:`const btn = document.querySelector('button');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  console.log(count);
});`,solution:`const btn = document.querySelector('button');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  console.log(count);
});`,tests:[{input:[],expected:"1"}],hints:["Increment count on each click","Display updated count"]},{id:"11-events-event-practice-33",title:"Key Press Tracker",starterCode:`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,solution:`document.addEventListener('keydown', function(e) {
  console.log(e.key);
});`,tests:[{input:[],expected:"a"}],hints:["Track each key press","Display the key pressed"]},{id:"11-events-event-practice-34",title:"Form Submit Handler",starterCode:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,solution:`const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submitted');
});`,tests:[{input:[],expected:"submitted"}],hints:["Use preventDefault","Handle form data"]},{id:"11-events-event-practice-35",title:"Toggle Class on Click",starterCode:`const box = document.querySelector('.box');
box.addEventListener('click', function() {
  this.classList.toggle('active');
  console.log(this.classList.contains('active'));
});`,solution:`const box = document.querySelector('.box');
box.addEventListener('click', function() {
  this.classList.toggle('active');
  console.log(this.classList.contains('active'));
});`,tests:[{input:[],expected:"true"}],hints:["classList.toggle adds/removes class","Check if active after toggle"]},{id:"11-events-event-practice-36",title:"Input Value Change",starterCode:`const input = document.querySelector('input');
input.addEventListener('input', function() {
  console.log(this.value);
});`,solution:`const input = document.querySelector('input');
input.addEventListener('input', function() {
  console.log(this.value);
});`,tests:[{input:[],expected:"hello"}],hints:["Fires on every input change","this.value has current value"]},{id:"11-events-event-practice-37",title:"Mouse Position",starterCode:`document.addEventListener('mousemove', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,solution:`document.addEventListener('mousemove', function(e) {
  console.log(e.clientX + ',' + e.clientY);
});`,tests:[{input:[],expected:"100,200"}],hints:["clientX/Y gives viewport coordinates","Fires on every mouse move"]},{id:"11-events-event-practice-38",title:"Scroll Position",starterCode:`window.addEventListener('scroll', function() {
  console.log(window.scrollY);
});`,solution:`window.addEventListener('scroll', function() {
  console.log(window.scrollY);
});`,tests:[{input:[],expected:"0"}],hints:["scrollY gives vertical scroll position","scrollX for horizontal"]},{id:"11-events-event-practice-39",title:"Event Target Closest",starterCode:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,solution:`const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  const item = e.target.closest('li');
  if (item) console.log(item.textContent);
});`,tests:[{input:[],expected:"Item 1"}],hints:["closest finds matching ancestor","Works with nested elements"]},{id:"11-events-event-practice-40",title:"Custom Event Dispatch",starterCode:`const el = document.querySelector('.box');
const event = new CustomEvent('alert', { detail: 'warning' });
el.addEventListener('alert', (e) => console.log(e.detail));
el.dispatchEvent(event);`,solution:`const el = document.querySelector('.box');
const event = new CustomEvent('alert', { detail: 'warning' });
el.addEventListener('alert', (e) => console.log(e.detail));
el.dispatchEvent(event);`,tests:[{input:[],expected:"warning"}],hints:["Create CustomEvent with detail","dispatchEvent triggers it"]},{id:"11-events-event-practice-41",title:"Event Options",starterCode:`// once: auto-remove, passive: no preventDefault
console.log("once and passive options");`,solution:`// once: auto-remove, passive: no preventDefault
console.log("once and passive options");`,tests:[{input:[],expected:"once and passive options"}],hints:["once removes listener after first fire","passive for scroll performance"]},{id:"11-events-event-practice-42",title:"AbortController Events",starterCode:`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,solution:`const controller = new AbortController();
document.addEventListener('click', () => {}, { signal: controller.signal });
controller.abort();
console.log('aborted');`,tests:[{input:[],expected:"aborted"}],hints:["AbortController removes signal listeners","Pass signal option"]},{id:"11-events-event-practice-43",title:"Event Bubbling Control",starterCode:`// stopPropagation: stops bubbling
// stopImmediatePropagation: stops all handlers
console.log("propagation control");`,solution:`// stopPropagation: stops bubbling
// stopImmediatePropagation: stops all handlers
console.log("propagation control");`,tests:[{input:[],expected:"propagation control"}],hints:["stopPropagation for bubbling","stopImmediatePropagation for all"]},{id:"11-events-event-practice-44",title:"Practice Complete",starterCode:`// All event patterns practiced
console.log("all patterns complete");`,solution:`// All event patterns practiced
console.log("all patterns complete");`,tests:[{input:[],expected:"all patterns complete"}],hints:["Review all UI patterns","Build real projects"]},{id:"11-events-event-practice-45",title:"Click Outside",starterCode:`// Close modal when clicking outside
console.log("click outside pattern");`,solution:`// Close modal when clicking outside
console.log("click outside pattern");`,tests:[{input:[],expected:"click outside pattern"}],hints:["Check if target is modal itself","Close on backdrop click"]},{id:"11-events-event-practice-46",title:"Long Press",starterCode:`// mousedown timer + mouseup clear
console.log("long press detection");`,solution:`// mousedown timer + mouseup clear
console.log("long press detection");`,tests:[{input:[],expected:"long press detection"}],hints:["Start timer on mousedown","Clear on mouseup"]},{id:"11-events-event-practice-47",title:"Swipe Detection",starterCode:`// touchstart + touchmove for swipe
console.log("swipe gesture pattern");`,solution:`// touchstart + touchmove for swipe
console.log("swipe gesture pattern");`,tests:[{input:[],expected:"swipe gesture pattern"}],hints:["Track touch positions","Calculate distance and direction"]},{id:"11-events-event-practice-48",title:"Pinch Zoom",starterCode:`// Two finger touch for pinch
console.log("pinch zoom pattern");`,solution:`// Two finger touch for pinch
console.log("pinch zoom pattern");`,tests:[{input:[],expected:"pinch zoom pattern"}],hints:["Use two touch points","Calculate distance change"]},{id:"11-events-event-practice-49",title:"Double Tap",starterCode:`// Detect two quick taps
console.log("double tap pattern");`,solution:`// Detect two quick taps
console.log("double tap pattern");`,tests:[{input:[],expected:"double tap pattern"}],hints:["Track tap timing","Check interval between taps"]},{id:"11-events-event-practice-50",title:"Event Practice Final",starterCode:`// All UI patterns mastered
console.log("event practice final");`,solution:`// All UI patterns mastered
console.log("event practice final");`,tests:[{input:[],expected:"event practice final"}],hints:["Review all patterns","Build complete applications"]}],"12-async-02-async-await":[{id:"12-async-async-await-01",title:"Async Function",starterCode:`async function greet() {
  return 'Hello';
}
greet().then(msg => console.log(msg));`,solution:`async function greet() {
  return 'Hello';
}
greet().then(msg => console.log(msg));`,tests:[{input:[],expected:"Hello"}],hints:["async function returns a promise","Use then to get the value"]},{id:"12-async-async-await-02",title:"Await Expression",starterCode:`async function getValue() {
  const promise = Promise.resolve(42);
  const value = await promise;
  console.log(value);
}
getValue();`,solution:`async function getValue() {
  const promise = Promise.resolve(42);
  const value = await promise;
  console.log(value);
}
getValue();`,tests:[{input:[],expected:"42"}],hints:["await pauses until promise resolves","Returns the resolved value"]},{id:"12-async-async-await-03",title:"Try/Catch Async",starterCode:`async function risky() {
  try {
    await Promise.reject('error');
  } catch (err) {
    console.log(err);
  }
}
risky();`,solution:`async function risky() {
  try {
    await Promise.reject('error');
  } catch (err) {
    console.log(err);
  }
}
risky();`,tests:[{input:[],expected:"error"}],hints:["Use try/catch with await","catch handles rejected promise"]},{id:"12-async-async-await-04",title:"Parallel Await",starterCode:`async function parallel() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  console.log(a + b + c);
}
parallel();`,solution:`async function parallel() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  console.log(a + b + c);
}
parallel();`,tests:[{input:[],expected:"6"}],hints:["Promise.all runs in parallel","Destructure results"]},{id:"12-async-async-await-05",title:"Sequential Await",starterCode:`async function sequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 1);
  const c = await Promise.resolve(b + 1);
  console.log(c);
}
sequential();`,solution:`async function sequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 1);
  const c = await Promise.resolve(b + 1);
  console.log(c);
}
sequential();`,tests:[{input:[],expected:"3"}],hints:["Each await waits for previous","Sequential execution"]},{id:"12-async-async-await-06",title:"Async Arrow Function",starterCode:`const getData = async () => {
  return 'data';
};
getData().then(d => console.log(d));`,solution:`const getData = async () => {
  return 'data';
};
getData().then(d => console.log(d));`,tests:[{input:[],expected:"data"}],hints:["Arrow functions can be async","Return value is a promise"]},{id:"12-async-async-await-07",title:"Return from Async",starterCode:`async function getValue() {
  return 'result';
}
async function caller() {
  const val = await getValue();
  console.log(val);
}
caller();`,solution:`async function getValue() {
  return 'result';
}
async function caller() {
  const val = await getValue();
  console.log(val);
}
caller();`,tests:[{input:[],expected:"result"}],hints:["Return value is wrapped in promise","Await to get actual value"]},{id:"12-async-async-await-08",title:"Await in Loop",starterCode:`async function loop() {
  const results = [];
  for (let i = 0; i < 3; i++) {
    const val = await Promise.resolve(i);
    results.push(val);
  }
  console.log(results);
}
loop();`,solution:`async function loop() {
  const results = [];
  for (let i = 0; i < 3; i++) {
    const val = await Promise.resolve(i);
    results.push(val);
  }
  console.log(results);
}
loop();`,tests:[{input:[],expected:"0,1,2"}],hints:["Await pauses loop","Sequential execution in loop"]},{id:"12-async-async-await-09",title:"Error Propagation",starterCode:`async function fail() {
  throw new Error('boom');
}
async function caller() {
  try {
    await fail();
  } catch (e) {
    console.log(e.message);
  }
}
caller();`,solution:`async function fail() {
  throw new Error('boom');
}
async function caller() {
  try {
    await fail();
  } catch (e) {
    console.log(e.message);
  }
}
caller();`,tests:[{input:[],expected:"boom"}],hints:["Errors propagate up the chain","Catch with try/catch"]},{id:"12-async-async-await-10",title:"Async Iteration",starterCode:`async function iterate() {
  const items = [1, 2, 3];
  for (const item of items) {
    const val = await Promise.resolve(item * 10);
    console.log(val);
  }
}
iterate();`,solution:`async function iterate() {
  const items = [1, 2, 3];
  for (const item of items) {
    const val = await Promise.resolve(item * 10);
    console.log(val);
  }
}
iterate();`,tests:[{input:[],expected:`10
20
30`}],hints:["Use for...of with await","Each iteration waits"]},{id:"12-async-async-await-11",title:"Async Map",starterCode:`async function mapAsync(items) {
  return Promise.all(items.map(async item => {
    return await Promise.resolve(item * 2);
  }));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,solution:`async function mapAsync(items) {
  return Promise.all(items.map(async item => {
    return await Promise.resolve(item * 2);
  }));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,tests:[{input:[],expected:"2,4,6"}],hints:["Map with async callback","Use Promise.all for parallel"]},{id:"12-async-async-await-12",title:"Async Filter",starterCode:`async function filterAsync(items) {
  const results = await Promise.all(items.map(async item => {
    return { item, keep: await Promise.resolve(item > 2) };
  }));
  return results.filter(r => r.keep).map(r => r.item);
}
filterAsync([1, 2, 3, 4]).then(r => console.log(r));`,solution:`async function filterAsync(items) {
  const results = await Promise.all(items.map(async item => {
    return { item, keep: await Promise.resolve(item > 2) };
  }));
  return results.filter(r => r.keep).map(r => r.item);
}
filterAsync([1, 2, 3, 4]).then(r => console.log(r));`,tests:[{input:[],expected:"3,4"}],hints:["Map to check condition","Filter by keep property"]},{id:"12-async-async-await-13",title:"Async Reduce",starterCode:`async function reduceAsync(items) {
  let acc = 0;
  for (const item of items) {
    acc += await Promise.resolve(item);
  }
  return acc;
}
reduceAsync([1, 2, 3]).then(r => console.log(r));`,solution:`async function reduceAsync(items) {
  let acc = 0;
  for (const item of items) {
    acc += await Promise.resolve(item);
  }
  return acc;
}
reduceAsync([1, 2, 3]).then(r => console.log(r));`,tests:[{input:[],expected:"6"}],hints:["Accumulate in loop","Await each addition"]},{id:"12-async-async-await-14",title:"Await Promise.all",starterCode:`async function fetchAll() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b')
  ]);
  console.log(results);
}
fetchAll();`,solution:`async function fetchAll() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b')
  ]);
  console.log(results);
}
fetchAll();`,tests:[{input:[],expected:"a,b"}],hints:["Promise.all returns array","Await the combined promise"]},{id:"12-async-async-await-15",title:"Await Promise.race",starterCode:`async function first() {
  const winner = await Promise.race([
    new Promise(r => setTimeout(() => r('slow'), 50)),
    new Promise(r => setTimeout(() => r('fast'), 10))
  ]);
  console.log(winner);
}
first();`,solution:`async function first() {
  const winner = await Promise.race([
    new Promise(r => setTimeout(() => r('slow'), 50)),
    new Promise(r => setTimeout(() => r('fast'), 10))
  ]);
  console.log(winner);
}
first();`,tests:[{input:[],expected:"fast"}],hints:["race returns first settled","Fastest promise wins"]},{id:"12-async-async-await-16",title:"Async Generator",starterCode:`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();`,solution:`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();`,tests:[{input:[],expected:`1
2
3`}],hints:["async function* creates async generator","for await...of iterates"]},{id:"12-async-async-await-17",title:"Top-Level Await",starterCode:`// In ES modules, top-level await is allowed
const data = await Promise.resolve('top level');
console.log(data);`,solution:`// In ES modules, top-level await is allowed
const data = await Promise.resolve('top level');
console.log(data);`,tests:[{input:[],expected:"top level"}],hints:["await at module top level","Module pauses until resolved"]},{id:"12-async-async-await-18",title:"Error Pattern",starterCode:`async function safe(fn) {
  try {
    return await fn();
  } catch (err) {
    return 'fallback';
  }
}
safe(() => Promise.reject('err')).then(r => console.log(r));`,solution:`async function safe(fn) {
  try {
    return await fn();
  } catch (err) {
    return 'fallback';
  }
}
safe(() => Promise.reject('err')).then(r => console.log(r));`,tests:[{input:[],expected:"fallback"}],hints:["Wrap in try/catch","Return fallback on error"]},{id:"12-async-async-await-19",title:"Async Class Method",starterCode:`class API {
  async fetchData() {
    return 'data';
  }
}
new API().fetchData().then(d => console.log(d));`,solution:`class API {
  async fetchData() {
    return 'data';
  }
}
new API().fetchData().then(d => console.log(d));`,tests:[{input:[],expected:"data"}],hints:["Methods can be async","Returns promise"]},{id:"12-async-async-await-20",title:"Async Event Handler",starterCode:`async function handleClick() {
  const result = await Promise.resolve('clicked');
  console.log(result);
}
console.log('handler defined');`,solution:`async function handleClick() {
  const result = await Promise.resolve('clicked');
  console.log(result);
}
console.log('handler defined');`,tests:[{input:[],expected:"handler defined"}],hints:["Event handlers can be async","Define as async function"]},{id:"12-async-async-await-21",title:"Sequential Array",starterCode:`async function processSequentially() {
  const items = [1, 2, 3];
  const results = [];
  for (const item of items) {
    results.push(await Promise.resolve(item * 10));
  }
  console.log(results);
}
processSequentially();`,solution:`async function processSequentially() {
  const items = [1, 2, 3];
  const results = [];
  for (const item of items) {
    results.push(await Promise.resolve(item * 10));
  }
  console.log(results);
}
processSequentially();`,tests:[{input:[],expected:"10,20,30"}],hints:["Use for loop with await","Sequential processing"]},{id:"12-async-async-await-22",title:"Parallel Promises",starterCode:`async function parallel() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  ]);
  console.log(results.join(''));
}
parallel();`,solution:`async function parallel() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  ]);
  console.log(results.join(''));
}
parallel();`,tests:[{input:[],expected:"abc"}],hints:["Promise.all for parallel","Join results"]},{id:"12-async-async-await-23",title:"Async Waterfall",starterCode:`async function waterfall() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 10);
  const c = await Promise.resolve(b + 100);
  console.log(c);
}
waterfall();`,solution:`async function waterfall() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 10);
  const c = await Promise.resolve(b + 100);
  console.log(c);
}
waterfall();`,tests:[{input:[],expected:"111"}],hints:["Each step depends on previous","1 + 10 = 11, 11 + 100 = 111"]},{id:"12-async-async-await-24",title:"Try/Catch/Finally",starterCode:`async function withFinally() {
  try {
    await Promise.resolve('ok');
  } catch (e) {
    console.log('error');
  } finally {
    console.log('done');
  }
}
withFinally();`,solution:`async function withFinally() {
  try {
    await Promise.resolve('ok');
  } catch (e) {
    console.log('error');
  } finally {
    console.log('done');
  }
}
withFinally();`,tests:[{input:[],expected:"done"}],hints:["finally always runs","Even without error"]},{id:"12-async-async-await-25",title:"Await Timeout",starterCode:`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function wait() {
  await delay(10);
  console.log('waited');
}
wait();`,solution:`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function wait() {
  await delay(10);
  console.log('waited');
}
wait();`,tests:[{input:[],expected:"waited"}],hints:["Create delay function","Await the delay"]},{id:"12-async-async-await-26",title:"Async Retry",starterCode:`async function retry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}
let count = 0;
retry(async () => {
  count++;
  if (count < 3) throw new Error('fail');
  return 'success';
}, 3).then(r => console.log(r));`,solution:`async function retry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}
let count = 0;
retry(async () => {
  count++;
  if (count < 3) throw new Error('fail');
  return 'success';
}, 3).then(r => console.log(r));`,tests:[{input:[],expected:"success"}],hints:["Try/catch with retry logic","Recursive retry on failure"]},{id:"12-async-async-await-27",title:"Async Condition",starterCode:`async function waitFor(condition) {
  while (!condition()) {
    await new Promise(r => setTimeout(r, 10));
  }
  return true;
}
let val = false;
setTimeout(() => val = true, 30);
waitFor(() => val).then(() => console.log('resolved'));`,solution:`async function waitFor(condition) {
  while (!condition()) {
    await new Promise(r => setTimeout(r, 10));
  }
  return true;
}
let val = false;
setTimeout(() => val = true, 30);
waitFor(() => val).then(() => console.log('resolved'));`,tests:[{input:[],expected:"resolved"}],hints:["Poll until condition is true","Use while loop with await"]},{id:"12-async-async-await-28",title:"Async Queue",starterCode:`class AsyncQueue {
  constructor() { this.queue = []; }
  add(fn) { this.queue.push(fn); }
  async run() {
    for (const fn of this.queue) {
      await fn();
    }
    console.log('done');
  }
}
const q = new AsyncQueue();
q.add(() => Promise.resolve());
q.add(() => Promise.resolve());
q.run();`,solution:`class AsyncQueue {
  constructor() { this.queue = []; }
  add(fn) { this.queue.push(fn); }
  async run() {
    for (const fn of this.queue) {
      await fn();
    }
    console.log('done');
  }
}
const q = new AsyncQueue();
q.add(() => Promise.resolve());
q.add(() => Promise.resolve());
q.run();`,tests:[{input:[],expected:"done"}],hints:["Store functions in array","Run sequentially with await"]},{id:"12-async-async-await-29",title:"Async Pattern",starterCode:`async function fetchUser(id) {
  return await Promise.resolve({ id, name: 'User' + id });
}
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
}
main();`,solution:`async function fetchUser(id) {
  return await Promise.resolve({ id, name: 'User' + id });
}
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
}
main();`,tests:[{input:[],expected:"User1"}],hints:["Async function returns promise","Await to get result"]},{id:"12-async-async-await-30",title:"Async Practice",starterCode:`async function practice() {
  const data = await Promise.resolve('complete');
  console.log(data);
}
practice();`,solution:`async function practice() {
  const data = await Promise.resolve('complete');
  console.log(data);
}
practice();`,tests:[{input:[],expected:"complete"}],hints:["Use async/await for cleaner code","Wrap in try/catch for errors"]},{id:"12-async-async-await-31",title:"Promise.all Parallel Work",starterCode:`async function parallelWork() {
  const results = await Promise.all([
    new Promise(r => setTimeout(() => r(1), 10)),
    new Promise(r => setTimeout(() => r(2), 10)),
    new Promise(r => setTimeout(() => r(3), 10))
  ]);
  console.log(results.reduce((a, b) => a + b));
}
parallelWork();`,solution:`async function parallelWork() {
  const results = await Promise.all([
    new Promise(r => setTimeout(() => r(1), 10)),
    new Promise(r => setTimeout(() => r(2), 10)),
    new Promise(r => setTimeout(() => r(3), 10))
  ]);
  console.log(results.reduce((a, b) => a + b));
}
parallelWork();`,tests:[{input:[],expected:"6"}],hints:["All run in parallel","Sum the results"]},{id:"12-async-async-await-32",title:"Await Promise.allSettled",starterCode:`async function allSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('fail')
  ]);
  console.log(results.length);
}
allSettled();`,solution:`async function allSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('fail')
  ]);
  console.log(results.length);
}
allSettled();`,tests:[{input:[],expected:"2"}],hints:["allSettled never rejects","Returns all results"]},{id:"12-async-async-await-33",title:"Async forEach",starterCode:`async function forEachAsync(items, fn) {
  for (const item of items) {
    await fn(item);
  }
}
forEachAsync([1, 2, 3], async (item) => {
  await Promise.resolve();
}).then(() => console.log('done'));`,solution:`async function forEachAsync(items, fn) {
  for (const item of items) {
    await fn(item);
  }
}
forEachAsync([1, 2, 3], async (item) => {
  await Promise.resolve();
}).then(() => console.log('done'));`,tests:[{input:[],expected:"done"}],hints:["Sequential forEach with await","Use for...of loop"]},{id:"12-async-async-await-34",title:"Async Reduce Accumulator",starterCode:`async function asyncReduce(items, fn, init) {
  let acc = init;
  for (const item of items) {
    acc = await fn(acc, item);
  }
  return acc;
}
asyncReduce([1, 2, 3], async (acc, item) => acc + item, 0)
  .then(r => console.log(r));`,solution:`async function asyncReduce(items, fn, init) {
  let acc = init;
  for (const item of items) {
    acc = await fn(acc, item);
  }
  return acc;
}
asyncReduce([1, 2, 3], async (acc, item) => acc + item, 0)
  .then(r => console.log(r));`,tests:[{input:[],expected:"6"}],hints:["Accumulate with await","Sequential reduction"]},{id:"12-async-async-await-35",title:"Async Complete",starterCode:`// async/await makes async code readable
console.log("async/await complete");`,solution:`// async/await makes async code readable
console.log("async/await complete");`,tests:[{input:[],expected:"async/await complete"}],hints:["Review all async patterns","Practice with real APIs"]},{id:"12-async-async-await-36",title:"Async Function Return",starterCode:`async function getNum() { return 42; }
getNum().then(n => console.log(n));`,solution:`async function getNum() { return 42; }
getNum().then(n => console.log(n));`,tests:[{input:[],expected:"42"}],hints:["async function returns promise","then() receives the value"]},{id:"12-async-async-await-37",title:"Await Promise",starterCode:`async function wait() {
  const val = await Promise.resolve(10);
  console.log(val);
}
wait();`,solution:`async function wait() {
  const val = await Promise.resolve(10);
  console.log(val);
}
wait();`,tests:[{input:[],expected:"10"}],hints:["await pauses until resolved","Returns resolved value"]},{id:"12-async-async-await-38",title:"Try Catch Async",starterCode:`async function risky() {
  try {
    await Promise.reject('oops');
  } catch (e) {
    console.log('caught: ' + e);
  }
}
risky();`,solution:`async function risky() {
  try {
    await Promise.reject('oops');
  } catch (e) {
    console.log('caught: ' + e);
  }
}
risky();`,tests:[{input:[],expected:"caught: oops"}],hints:["try/catch handles rejected await","catch block runs on error"]},{id:"12-async-async-await-39",title:"Async Arrow",starterCode:`const add = async (a, b) => a + b;
add(1, 2).then(r => console.log(r));`,solution:`const add = async (a, b) => a + b;
add(1, 2).then(r => console.log(r));`,tests:[{input:[],expected:"3"}],hints:["Arrow functions can be async","Returns promise"]},{id:"12-async-async-await-40",title:"Await Loop",starterCode:`async function sum() {
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    total += await Promise.resolve(i);
  }
  console.log(total);
}
sum();`,solution:`async function sum() {
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    total += await Promise.resolve(i);
  }
  console.log(total);
}
sum();`,tests:[{input:[],expected:"6"}],hints:["Sequential await in loop","1 + 2 + 3 = 6"]},{id:"12-async-async-await-41",title:"Error Propagation",starterCode:`async function fail() { throw new Error('boom'); }
async function caller() {
  try { await fail(); }
  catch (e) { console.log(e.message); }
}
caller();`,solution:`async function fail() { throw new Error('boom'); }
async function caller() {
  try { await fail(); }
  catch (e) { console.log(e.message); }
}
caller();`,tests:[{input:[],expected:"boom"}],hints:["Errors propagate up","Catch with try/catch"]},{id:"12-async-async-await-42",title:"Parallel Await",starterCode:`async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  console.log(a + b);
}
parallel();`,solution:`async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  console.log(a + b);
}
parallel();`,tests:[{input:[],expected:"3"}],hints:["Promise.all runs in parallel","Destructure results"]},{id:"12-async-async-await-43",title:"Sequential Await",starterCode:`async function seq() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a * 2);
  console.log(b);
}
seq();`,solution:`async function seq() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a * 2);
  console.log(b);
}
seq();`,tests:[{input:[],expected:"2"}],hints:["Sequential awaits","Each depends on previous"]},{id:"12-async-async-await-44",title:"Async Map",starterCode:`async function mapAsync(arr) {
  return Promise.all(arr.map(async x => x * 2));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,solution:`async function mapAsync(arr) {
  return Promise.all(arr.map(async x => x * 2));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,tests:[{input:[],expected:"2,4,6"}],hints:["Map with async callback","Promise.all for parallel"]},{id:"12-async-async-await-45",title:"Async Generator",starterCode:`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
(async () => {
  const results = [];
  for await (const v of gen()) results.push(v);
  console.log(results);
})();`,solution:`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
(async () => {
  const results = [];
  for await (const v of gen()) results.push(v);
  console.log(results);
})();`,tests:[{input:[],expected:"1,2"}],hints:["async function* creates async generator","for await...of iterates"]},{id:"12-async-async-await-46",title:"Async Class Method",starterCode:`class API {
  async getData() { return 'data'; }
}
new API().getData().then(d => console.log(d));`,solution:`class API {
  async getData() { return 'data'; }
}
new API().getData().then(d => console.log(d));`,tests:[{input:[],expected:"data"}],hints:["Class methods can be async","Returns promise"]},{id:"12-async-async-await-47",title:"Async Timeout",starterCode:`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function run() {
  await delay(10);
  console.log('done');
}
run();`,solution:`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function run() {
  await delay(10);
  console.log('done');
}
run();`,tests:[{input:[],expected:"done"}],hints:["Create delay helper","Await the delay"]},{id:"12-async-async-await-48",title:"Async Retry",starterCode:`async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try { return await fn(); }
    catch (e) { if (i === n - 1) throw e; }
  }
}
let c = 0;
retry(async () => { c++; if (c < 3) throw 'err'; return 'ok'; }, 3)
  .then(r => console.log(r));`,solution:`async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try { return await fn(); }
    catch (e) { if (i === n - 1) throw e; }
  }
}
let c = 0;
retry(async () => { c++; if (c < 3) throw 'err'; return 'ok'; }, 3)
  .then(r => console.log(r));`,tests:[{input:[],expected:"ok"}],hints:["Loop with try/catch","Retry on failure"]},{id:"12-async-async-await-49",title:"Async Reduce",starterCode:`async function reduceAsync(arr, fn, init) {
  let acc = init;
  for (const item of arr) acc = await fn(acc, item);
  return acc;
}
reduceAsync([1, 2, 3], async (a, b) => a + b, 0)
  .then(r => console.log(r));`,solution:`async function reduceAsync(arr, fn, init) {
  let acc = init;
  for (const item of arr) acc = await fn(acc, item);
  return acc;
}
reduceAsync([1, 2, 3], async (a, b) => a + b, 0)
  .then(r => console.log(r));`,tests:[{input:[],expected:"6"}],hints:["Sequential reduction","Await each step"]},{id:"12-async-async-await-50",title:"Async Complete Review",starterCode:`// async/await: function, await, try/catch
console.log("async/await review complete");`,solution:`// async/await: function, await, try/catch
console.log("async/await review complete");`,tests:[{input:[],expected:"async/await review complete"}],hints:["Review all async/await concepts","Practice with real code"]}],"12-async-01-callbacks-promises":[{id:"12-async-callbacks-promises-01",title:"Callback Pattern",starterCode:`function fetchData(callback) {
  // TODO: call callback with data
  callback('Hello');
}
fetchData(function(data) {
  console.log(data);
});`,solution:`function fetchData(callback) {
  callback('Hello');
}
fetchData(function(data) {
  console.log(data);
});`,tests:[{input:[],expected:"Hello"}],hints:["Callback is a function passed as argument","Call it with the result"]},{id:"12-async-callbacks-promises-02",title:"Callback Hell",starterCode:`function step1(cb) { cb(1); }
function step2(val, cb) { cb(val + 1); }
function step3(val, cb) { cb(val + 1); }
step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});`,solution:`function step1(cb) { cb(1); }
function step2(val, cb) { cb(val + 1); }
function step3(val, cb) { cb(val + 1); }
step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});`,tests:[{input:[],expected:"3"}],hints:["Nested callbacks form pyramid","Each step adds 1"]},{id:"12-async-callbacks-promises-03",title:"Promise Creation",starterCode:`const promise = new Promise((resolve, reject) => {
  // TODO: resolve the promise
  resolve('done');
});
promise.then(result => console.log(result));`,solution:`const promise = new Promise((resolve, reject) => {
  resolve('done');
});
promise.then(result => console.log(result));`,tests:[{input:[],expected:"done"}],hints:["Promise constructor takes executor","resolve() fulfills the promise"]},{id:"12-async-callbacks-promises-04",title:"Promise Resolve",starterCode:`const p = Promise.resolve(42);
p.then(val => console.log(val));`,solution:`const p = Promise.resolve(42);
p.then(val => console.log(val));`,tests:[{input:[],expected:"42"}],hints:["Promise.resolve creates resolved promise","then() receives the value"]},{id:"12-async-callbacks-promises-05",title:"Promise Reject",starterCode:`const p = Promise.reject('error');
p.catch(err => console.log(err));`,solution:`const p = Promise.reject('error');
p.catch(err => console.log(err));`,tests:[{input:[],expected:"error"}],hints:["Promise.reject creates rejected promise","catch() handles the error"]},{id:"12-async-callbacks-promises-06",title:"Then Chaining",starterCode:`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,solution:`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,tests:[{input:[],expected:"3"}],hints:["Each then returns new promise","Value passes through chain"]},{id:"12-async-callbacks-promises-07",title:"Catch Handling",starterCode:`Promise.reject('fail')
  .catch(err => 'recovered')
  .then(val => console.log(val));`,solution:`Promise.reject('fail')
  .catch(err => 'recovered')
  .then(val => console.log(val));`,tests:[{input:[],expected:"recovered"}],hints:["catch handles rejection","Returns new resolved promise"]},{id:"12-async-callbacks-promises-08",title:"Promise All",starterCode:`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log(values));`,solution:`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log(values));`,tests:[{input:[],expected:"1,2,3"}],hints:["Promise.all waits for all","Returns array of results"]},{id:"12-async-callbacks-promises-09",title:"Promise Race",starterCode:`Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 100)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 10))
]).then(winner => console.log(winner));`,solution:`Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 100)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 10))
]).then(winner => console.log(winner));`,tests:[{input:[],expected:"fast"}],hints:["race returns first settled","Fast promise wins"]},{id:"12-async-callbacks-promises-10",title:"Promise AllSettled",starterCode:`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail'),
  Promise.resolve('done')
]).then(results => console.log(results.length));`,solution:`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail'),
  Promise.resolve('done')
]).then(results => console.log(results.length));`,tests:[{input:[],expected:"3"}],hints:["allSettled waits for all","Never rejects, returns all results"]},{id:"12-async-callbacks-promises-11",title:"Error Handling",starterCode:`function riskyOperation() {
  return new Promise((resolve, reject) => {
    reject('something went wrong');
  });
}
riskyOperation()
  .catch(err => console.log(err));`,solution:`function riskyOperation() {
  return new Promise((resolve, reject) => {
    reject('something went wrong');
  });
}
riskyOperation()
  .catch(err => console.log(err));`,tests:[{input:[],expected:"something went wrong"}],hints:["reject sends error to catch","Use catch to handle errors"]},{id:"12-async-callbacks-promises-12",title:"Finally Block",starterCode:`Promise.resolve('done')
  .then(val => console.log(val))
  .finally(() => console.log('complete'));`,solution:`Promise.resolve('done')
  .then(val => console.log(val))
  .finally(() => console.log('complete'));`,tests:[{input:[],expected:`done
complete`}],hints:["finally runs after then/catch","Always executes"]},{id:"12-async-callbacks-promises-13",title:"Static Methods",starterCode:`console.log(typeof Promise.resolve);
console.log(typeof Promise.reject);
console.log(typeof Promise.all);`,solution:`console.log(typeof Promise.resolve);
console.log(typeof Promise.reject);
console.log(typeof Promise.all);`,tests:[{input:[],expected:`function
function
function`}],hints:["Promise has static methods","resolve, reject, all are functions"]},{id:"12-async-callbacks-promises-14",title:"Concurrent Promises",starterCode:`const p1 = new Promise(r => setTimeout(() => r(1), 50));
const p2 = new Promise(r => setTimeout(() => r(2), 30));
const p3 = new Promise(r => setTimeout(() => r(3), 10));
Promise.all([p1, p2, p3]).then(v => console.log(v));`,solution:`const p1 = new Promise(r => setTimeout(() => r(1), 50));
const p2 = new Promise(r => setTimeout(() => r(2), 30));
const p3 = new Promise(r => setTimeout(() => r(3), 10));
Promise.all([p1, p2, p3]).then(v => console.log(v));`,tests:[{input:[],expected:"1,2,3"}],hints:["All promises run concurrently","Results in order of input"]},{id:"12-async-callbacks-promises-15",title:"Sequential Promises",starterCode:`function asyncTask(val) {
  return new Promise(resolve => setTimeout(() => resolve(val), 10));
}
asyncTask(1)
  .then(r1 => asyncTask(r1 + 1))
  .then(r2 => asyncTask(r2 + 1))
  .then(r3 => console.log(r3));`,solution:`function asyncTask(val) {
  return new Promise(resolve => setTimeout(() => resolve(val), 10));
}
asyncTask(1)
  .then(r1 => asyncTask(r1 + 1))
  .then(r2 => asyncTask(r2 + 1))
  .then(r3 => console.log(r3));`,tests:[{input:[],expected:"3"}],hints:["Chain promises for sequential execution","Each depends on previous"]},{id:"12-async-callbacks-promises-16",title:"Retry Pattern",starterCode:`function retry(fn, attempts) {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  });
}
let count = 0;
retry(() => new Promise((res, rej) => {
  count++;
  if (count < 3) rej('fail');
  else res('success');
}), 3).then(r => console.log(r));`,solution:`function retry(fn, attempts) {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  });
}
let count = 0;
retry(() => new Promise((res, rej) => {
  count++;
  if (count < 3) rej('fail');
  else res('success');
}), 3).then(r => console.log(r));`,tests:[{input:[],expected:"success"}],hints:["Catch and retry on failure","Decrement attempts counter"]},{id:"12-async-callbacks-promises-17",title:"Timeout Pattern",starterCode:`function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej('timeout'), ms))
  ]);
}
withTimeout(new Promise(r => setTimeout(() => r('done'), 50)), 100)
  .then(v => console.log(v));`,solution:`function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej('timeout'), ms))
  ]);
}
withTimeout(new Promise(r => setTimeout(() => r('done'), 50)), 100)
  .then(v => console.log(v));`,tests:[{input:[],expected:"done"}],hints:["Race promise against timeout","First to settle wins"]},{id:"12-async-callbacks-promises-18",title:"Cancel Pattern",starterCode:`let cancelled = false;
const p = new Promise((resolve) => {
  setTimeout(() => {
    if (!cancelled) resolve('done');
  }, 10);
});
cancelled = true;
p.then(v => console.log(v)).catch(() => console.log('cancelled'));`,solution:`let cancelled = false;
const p = new Promise((resolve) => {
  setTimeout(() => {
    if (!cancelled) resolve('done');
  }, 10);
});
cancelled = true;
p.then(v => console.log(v)).catch(() => console.log('cancelled'));`,tests:[{input:[],expected:"cancelled"}],hints:["Use flag to track cancellation","Check flag before resolving"]},{id:"12-async-callbacks-promises-19",title:"Utility All",starterCode:`function fetchAll(urls) {
  return Promise.all(urls.map(url => Promise.resolve(url)));
}
fetchAll(['/a', '/b', '/c']).then(r => console.log(r.length));`,solution:`function fetchAll(urls) {
  return Promise.all(urls.map(url => Promise.resolve(url)));
}
fetchAll(['/a', '/b', '/c']).then(r => console.log(r.length));`,tests:[{input:[],expected:"3"}],hints:["Map urls to promises","Use Promise.all"]},{id:"12-async-callbacks-promises-20",title:"Error First Callback",starterCode:`function readFile(path, callback) {
  // Node.js error-first pattern
  callback(null, 'file contents');
}
readFile('/path', function(err, data) {
  console.log(err + ' ' + data);
});`,solution:`function readFile(path, callback) {
  callback(null, 'file contents');
}
readFile('/path', function(err, data) {
  console.log(err + ' ' + data);
});`,tests:[{input:[],expected:"null file contents"}],hints:["First argument is error","null means no error"]},{id:"12-async-callbacks-promises-21",title:"Executor Function",starterCode:`const p = new Promise((resolve, reject) => {
  resolve('executor result');
});
p.then(r => console.log(r));`,solution:`const p = new Promise((resolve, reject) => {
  resolve('executor result');
});
p.then(r => console.log(r));`,tests:[{input:[],expected:"executor result"}],hints:["Executor runs immediately","Calls resolve or reject"]},{id:"12-async-callbacks-promises-22",title:"Chaining Return",starterCode:`Promise.resolve('start')
  .then(x => { console.log(x); return x.toUpperCase(); })
  .then(x => console.log(x));`,solution:`Promise.resolve('start')
  .then(x => { console.log(x); return x.toUpperCase(); })
  .then(x => console.log(x));`,tests:[{input:[],expected:`start
START`}],hints:["Return value passes to next then","Return new value in chain"]},{id:"12-async-callbacks-promises-23",title:"All Error",starterCode:`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,solution:`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,tests:[{input:[],expected:"err"}],hints:["Promise.all rejects if any rejects","First rejection triggers catch"]},{id:"12-async-callbacks-promises-24",title:"Race Winner",starterCode:`const slow = new Promise(r => setTimeout(() => r('slow'), 100));
const fast = new Promise(r => setTimeout(() => r('fast'), 10));
Promise.race([slow, fast]).then(w => console.log(w));`,solution:`const slow = new Promise(r => setTimeout(() => r('slow'), 100));
const fast = new Promise(r => setTimeout(() => r('fast'), 10));
Promise.race([slow, fast]).then(w => console.log(w));`,tests:[{input:[],expected:"fast"}],hints:["First promise to settle wins","Faster timeout wins"]},{id:"12-async-callbacks-promises-25",title:"AllSettled Status",starterCode:`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail')
]).then(results => {
  console.log(results[0].status + ' ' + results[1].status);
});`,solution:`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail')
]).then(results => {
  console.log(results[0].status + ' ' + results[1].status);
});`,tests:[{input:[],expected:"fulfilled rejected"}],hints:["status is 'fulfilled' or 'rejected'","Check each result's status"]},{id:"12-async-callbacks-promises-26",title:"Rejection Handler",starterCode:`Promise.reject('unhandled')
  .catch(err => console.log('caught: ' + err));`,solution:`Promise.reject('unhandled')
  .catch(err => console.log('caught: ' + err));`,tests:[{input:[],expected:"caught: unhandled"}],hints:["catch handles rejected promise","Prevents unhandled rejection"]},{id:"12-async-callbacks-promises-27",title:"Unhandled Rejection",starterCode:`// Without catch, rejection is unhandled
Promise.reject('error');
console.log('will show warning');`,solution:`// Without catch, rejection is unhandled
Promise.reject('error');
console.log('will show warning');`,tests:[{input:[],expected:"will show warning"}],hints:["Unhandled rejections cause warnings","Always add catch handler"]},{id:"12-async-callbacks-promises-28",title:"Callback vs Promise",starterCode:`// Callback: error-first pattern
// Promise: then/catch pattern
console.log("promises are cleaner");`,solution:`// Callback: error-first pattern
// Promise: then/catch pattern
console.log("promises are cleaner");`,tests:[{input:[],expected:"promises are cleaner"}],hints:["Promises avoid callback hell","Chainable and composable"]},{id:"12-async-callbacks-promises-29",title:"Async Pattern",starterCode:`function asyncAdd(a, b) {
  return new Promise(resolve => resolve(a + b));
}
asyncAdd(2, 3).then(result => console.log(result));`,solution:`function asyncAdd(a, b) {
  return new Promise(resolve => resolve(a + b));
}
asyncAdd(2, 3).then(result => console.log(result));`,tests:[{input:[],expected:"5"}],hints:["Wrap sync code in Promise","Use then to get result"]},{id:"12-async-callbacks-promises-30",title:"Promise Practice",starterCode:`Promise.resolve('practice')
  .then(x => x + ' makes perfect')
  .then(x => console.log(x));`,solution:`Promise.resolve('practice')
  .then(x => x + ' makes perfect')
  .then(x => console.log(x));`,tests:[{input:[],expected:"practice makes perfect"}],hints:["Chain promises together","Transform values in then"]},{id:"12-async-callbacks-promises-31",title:"Promise.all Parallel",starterCode:`const tasks = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];
Promise.all(tasks).then(r => console.log(r.join('')));`,solution:`const tasks = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];
Promise.all(tasks).then(r => console.log(r.join('')));`,tests:[{input:[],expected:"abc"}],hints:["All run in parallel","Results joined as string"]},{id:"12-async-callbacks-promises-32",title:"Promise Chain Value",starterCode:`Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(x => console.log(x));`,solution:`Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(x => console.log(x));`,tests:[{input:[],expected:"25"}],hints:["10 * 2 = 20","20 + 5 = 25"]},{id:"12-async-callbacks-promises-33",title:"Promise.all Mixed",starterCode:`Promise.all([
  Promise.resolve(1),
  new Promise(r => setTimeout(() => r(2), 10)),
  Promise.resolve(3)
]).then(v => console.log(v));`,solution:`Promise.all([
  Promise.resolve(1),
  new Promise(r => setTimeout(() => r(2), 10)),
  Promise.resolve(3)
]).then(v => console.log(v));`,tests:[{input:[],expected:"1,2,3"}],hints:["Mix of sync and async promises","All results in order"]},{id:"12-async-callbacks-promises-34",title:"Promise.race Loser",starterCode:`const p1 = new Promise(r => setTimeout(() => r('first'), 50));
const p2 = new Promise(r => setTimeout(() => r('second'), 100));
Promise.race([p1, p2]).then(w => console.log(w));`,solution:`const p1 = new Promise(r => setTimeout(() => r('first'), 50));
const p2 = new Promise(r => setTimeout(() => r('second'), 100));
Promise.race([p1, p2]).then(w => console.log(w));`,tests:[{input:[],expected:"first"}],hints:["First to settle wins","Slower promise is ignored"]},{id:"12-async-callbacks-promises-35",title:"Promise.allSettled Complete",starterCode:`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).then(results => {
  const fulfilled = results.filter(r => r.status === 'fulfilled');
  console.log(fulfilled.length);
});`,solution:`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).then(results => {
  const fulfilled = results.filter(r => r.status === 'fulfilled');
  console.log(fulfilled.length);
});`,tests:[{input:[],expected:"2"}],hints:["Count fulfilled results","Filter by status"]},{id:"12-async-callbacks-promises-36",title:"Promise Resolve Object",starterCode:`Promise.resolve({ name: 'John', age: 30 })
  .then(user => console.log(user.name));`,solution:`Promise.resolve({ name: 'John', age: 30 })
  .then(user => console.log(user.name));`,tests:[{input:[],expected:"John"}],hints:["Promise can resolve with any value","Access properties in then"]},{id:"12-async-callbacks-promises-37",title:"Promise.all Array Methods",starterCode:`const nums = [1, 2, 3, 4, 5];
Promise.all(nums.map(n => Promise.resolve(n * 2)))
  .then(doubled => console.log(doubled));`,solution:`const nums = [1, 2, 3, 4, 5];
Promise.all(nums.map(n => Promise.resolve(n * 2)))
  .then(doubled => console.log(doubled));`,tests:[{input:[],expected:"2,4,6,8,10"}],hints:["Map array to promises","Use Promise.all on mapped array"]},{id:"12-async-callbacks-promises-38",title:"Promise Complete",starterCode:`// Callbacks → Promises → Async/Await
console.log("promises complete");`,solution:`// Callbacks → Promises → Async/Await
console.log("promises complete");`,tests:[{input:[],expected:"promises complete"}],hints:["Review callback and promise patterns","Foundation for async/await"]},{id:"12-async-callbacks-promises-39",title:"Promise Resolve String",starterCode:`Promise.resolve('hello')
  .then(msg => console.log(msg));`,solution:`Promise.resolve('hello')
  .then(msg => console.log(msg));`,tests:[{input:[],expected:"hello"}],hints:["Promise.resolve with string value","then receives the string"]},{id:"12-async-callbacks-promises-40",title:"Promise Reject Error",starterCode:`Promise.reject(new Error('fail'))
  .catch(err => console.log(err.message));`,solution:`Promise.reject(new Error('fail'))
  .catch(err => console.log(err.message));`,tests:[{input:[],expected:"fail"}],hints:["Reject with Error object","catch receives the error"]},{id:"12-async-callbacks-promises-41",title:"Promise Then Return",starterCode:`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,solution:`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,tests:[{input:[],expected:"3"}],hints:["Each then returns new promise","Values chain through"]},{id:"12-async-callbacks-promises-42",title:"Promise All Reject",starterCode:`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,solution:`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,tests:[{input:[],expected:"err"}],hints:["Promise.all rejects on first rejection","Ignores remaining promises"]},{id:"12-async-callbacks-promises-43",title:"Promise Race Reject",starterCode:`Promise.race([
  new Promise((_, r) => setTimeout(() => r('slow error'), 100)),
  new Promise((_, r) => setTimeout(() => r('fast error'), 10))
]).catch(err => console.log(err));`,solution:`Promise.race([
  new Promise((_, r) => setTimeout(() => r('slow error'), 100)),
  new Promise((_, r) => setTimeout(() => r('fast error'), 10))
]).catch(err => console.log(err));`,tests:[{input:[],expected:"fast error"}],hints:["Race returns first settled","Fastest rejection wins"]},{id:"12-async-callbacks-promises-44",title:"Promise Finally",starterCode:`Promise.reject('error')
  .catch(err => 'caught')
  .finally(() => console.log('done'));`,solution:`Promise.reject('error')
  .catch(err => 'caught')
  .finally(() => console.log('done'));`,tests:[{input:[],expected:"done"}],hints:["finally runs after catch","Always executes"]},{id:"12-async-callbacks-promises-45",title:"Promise Chain Error",starterCode:`Promise.resolve(1)
  .then(x => { throw new Error('oops'); })
  .catch(err => console.log(err.message));`,solution:`Promise.resolve(1)
  .then(x => { throw new Error('oops'); })
  .catch(err => console.log(err.message));`,tests:[{input:[],expected:"oops"}],hints:["Throw in then goes to catch","Error is caught"]},{id:"12-async-callbacks-promises-46",title:"Promise.all Empty",starterCode:`Promise.all([])
  .then(r => console.log(r.length));`,solution:`Promise.all([])
  .then(r => console.log(r.length));`,tests:[{input:[],expected:"0"}],hints:["Promise.all with empty array","Resolves to empty array"]},{id:"12-async-callbacks-promises-47",title:"Promise Resolve Null",starterCode:`Promise.resolve(null)
  .then(val => console.log(val));`,solution:`Promise.resolve(null)
  .then(val => console.log(val));`,tests:[{input:[],expected:"null"}],hints:["Promise can resolve with null","then receives null"]},{id:"12-async-callbacks-promises-48",title:"Promise Resolve Undefined",starterCode:`Promise.resolve(undefined)
  .then(val => console.log(typeof val));`,solution:`Promise.resolve(undefined)
  .then(val => console.log(typeof val));`,tests:[{input:[],expected:"undefined"}],hints:["Promise can resolve with undefined","then receives undefined"]},{id:"12-async-callbacks-promises-49",title:"Promise.all Settled Order",starterCode:`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
]).then(r => console.log(r.map(x => x.status)));`,solution:`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
]).then(r => console.log(r.map(x => x.status)));`,tests:[{input:[],expected:"fulfilled,rejected,fulfilled"}],hints:["Results maintain input order","Each has status property"]},{id:"12-async-callbacks-promises-50",title:"Promise Race Tie",starterCode:`Promise.race([
  Promise.resolve('a'),
  Promise.resolve('b')
]).then(w => console.log(w));`,solution:`Promise.race([
  Promise.resolve('a'),
  Promise.resolve('b')
]).then(w => console.log(w));`,tests:[{input:[],expected:"a"}],hints:["Both resolve synchronously","First in array wins"]}],"12-async-03-fetch-api":[{id:"12-async-fetch-api-01",title:"Fetch GET",starterCode:`// fetch() makes HTTP requests
console.log("fetch returns a Promise");`,solution:`// fetch() makes HTTP requests
console.log("fetch returns a Promise");`,tests:[{input:[],expected:"fetch returns a Promise"}],hints:["fetch() is built into browsers","Returns a Promise"]},{id:"12-async-fetch-api-02",title:"Response Object",starterCode:`// fetch resolves to a Response object
console.log("Response has status, headers, body");`,solution:`// fetch resolves to a Response object
console.log("Response has status, headers, body");`,tests:[{input:[],expected:"Response has status, headers, body"}],hints:["Response is the fetch result","Contains response data"]},{id:"12-async-fetch-api-03",title:"Response JSON",starterCode:`// response.json() parses JSON body
console.log("json() returns a Promise");`,solution:`// response.json() parses JSON body
console.log("json() returns a Promise");`,tests:[{input:[],expected:"json() returns a Promise"}],hints:["json() is async method","Returns parsed JSON"]},{id:"12-async-fetch-api-04",title:"Response Status",starterCode:`// response.status is HTTP status code
console.log("200 = success, 404 = not found");`,solution:`// response.status is HTTP status code
console.log("200 = success, 404 = not found");`,tests:[{input:[],expected:"200 = success, 404 = not found"}],hints:["status is numeric code","2xx means success"]},{id:"12-async-fetch-api-05",title:"Response Headers",starterCode:`// response.headers is Headers object
console.log("headers.get() reads header value");`,solution:`// response.headers is Headers object
console.log("headers.get() reads header value");`,tests:[{input:[],expected:"headers.get() reads header value"}],hints:["Headers object has get method","Case-insensitive header names"]},{id:"12-async-fetch-api-06",title:"Fetch Error Handling",starterCode:`// fetch only rejects on network error
// HTTP errors (404, 500) are not rejections
console.log("check response.ok or status");`,solution:`// fetch only rejects on network error
// HTTP errors (404, 500) are not rejections
console.log("check response.ok or status");`,tests:[{input:[],expected:"check response.ok or status"}],hints:["response.ok is true for 2xx","Check status for errors"]},{id:"12-async-fetch-api-07",title:"AbortController",starterCode:`// AbortController cancels fetch
console.log("controller.abort() cancels request");`,solution:`// AbortController cancels fetch
console.log("controller.abort() cancels request");`,tests:[{input:[],expected:"controller.abort() cancels request"}],hints:["Create AbortController","Pass signal to fetch"]},{id:"12-async-fetch-api-08",title:"Fetch Timeout",starterCode:`// Use AbortController for timeout
console.log("abort after timeout ms");`,solution:`// Use AbortController for timeout
console.log("abort after timeout ms");`,tests:[{input:[],expected:"abort after timeout ms"}],hints:["setTimeout calls abort","Race fetch against timeout"]},{id:"12-async-fetch-api-09",title:"Fetch Headers",starterCode:`// Set headers in fetch options
console.log("headers: { 'Content-Type': 'application/json' }");`,solution:`// Set headers in fetch options
console.log("headers: { 'Content-Type': 'application/json' }");`,tests:[{input:[],expected:"headers: { 'Content-Type': 'application/json' }"}],hints:["Headers object in options","Set Content-Type for JSON"]},{id:"12-async-fetch-api-10",title:"Parallel Fetch",starterCode:`// Use Promise.all for parallel requests
console.log("Promise.all for multiple fetches");`,solution:`// Use Promise.all for multiple requests
console.log("Promise.all for multiple fetches");`,tests:[{input:[],expected:"Promise.all for multiple fetches"}],hints:["Map URLs to fetch promises","Promise.all waits for all"]},{id:"12-async-fetch-api-11",title:"Fetch Options",starterCode:`// Options: method, headers, body, mode, credentials
console.log("method, headers, body are common");`,solution:`// Options: method, headers, body, mode, credentials
console.log("method, headers, body are common");`,tests:[{input:[],expected:"method, headers, body are common"}],hints:["method is GET, POST, etc.","body is request payload"]},{id:"12-async-fetch-api-12",title:"Content-Type",starterCode:`// Set Content-Type for request body
console.log("application/json for JSON data");`,solution:`// Set Content-Type for request body
console.log("application/json for JSON data");`,tests:[{input:[],expected:"application/json for JSON data"}],hints:["Content-Type tells server format","JSON needs application/json"]},{id:"12-async-fetch-api-13",title:"POST Request",starterCode:`// fetch(url, { method: 'POST', body: data })
console.log("method: POST for creating");`,solution:`// fetch(url, { method: 'POST', body: data })
console.log("method: POST for creating");`,tests:[{input:[],expected:"method: POST for creating"}],hints:["POST sends data to server","Include body with data"]},{id:"12-async-fetch-api-14",title:"PUT Request",starterCode:`// PUT updates entire resource
console.log("method: PUT for updating");`,solution:`// PUT updates entire resource
console.log("method: PUT for updating");`,tests:[{input:[],expected:"method: PUT for updating"}],hints:["PUT replaces entire resource","Needs complete data"]},{id:"12-async-fetch-api-15",title:"DELETE Request",starterCode:`// DELETE removes resource
console.log("method: DELETE for removing");`,solution:`// DELETE removes resource
console.log("method: DELETE for removing");`,tests:[{input:[],expected:"method: DELETE for removing"}],hints:["DELETE removes the resource","Usually no body needed"]},{id:"12-async-fetch-api-16",title:"FormData",starterCode:`// FormData for file uploads
console.log("FormData for multipart/form-data");`,solution:`// FormData for file uploads
console.log("FormData for multipart/form-data");`,tests:[{input:[],expected:"FormData for multipart/form-data"}],hints:["FormData handles files and fields","Auto-sets content-type"]},{id:"12-async-fetch-api-17",title:"Fetch Blob",starterCode:`// response.blob() for binary data
console.log("blob() returns a Blob");`,solution:`// response.blob() for binary data
console.log("blob() returns a Blob");`,tests:[{input:[],expected:"blob() returns a Blob"}],hints:["Blob is binary data","Use for files and images"]},{id:"12-async-fetch-api-18",title:"Fetch Text",starterCode:`// response.text() for plain text
console.log("text() returns string");`,solution:`// response.text() for plain text
console.log("text() returns string");`,tests:[{input:[],expected:"text() returns string"}],hints:["text() reads response as string","For plain text responses"]},{id:"12-async-fetch-api-19",title:"Fetch ArrayBuffer",starterCode:`// response.arrayBuffer() for binary
console.log("arrayBuffer() returns ArrayBuffer");`,solution:`// response.arrayBuffer() for binary
console.log("arrayBuffer() returns ArrayBuffer");`,tests:[{input:[],expected:"arrayBuffer() returns ArrayBuffer"}],hints:["ArrayBuffer is fixed-length binary","Use for typed arrays"]},{id:"12-async-fetch-api-20",title:"CORS Basics",starterCode:`// CORS: Cross-Origin Resource Sharing
console.log("same-origin policy blocks cross-origin");`,solution:`// CORS: Cross-Origin Resource Sharing
console.log("same-origin policy blocks cross-origin");`,tests:[{input:[],expected:"same-origin policy blocks cross-origin"}],hints:["CORS allows cross-origin requests","Server must send CORS headers"]},{id:"12-async-fetch-api-21",title:"Fetch Credentials",starterCode:`// credentials: 'include' sends cookies
console.log("credentials option controls cookies");`,solution:`// credentials: 'include' sends cookies
console.log("credentials option controls cookies");`,tests:[{input:[],expected:"credentials option controls cookies"}],hints:["same-origin, include, or omit","include sends cookies cross-origin"]},{id:"12-async-fetch-api-22",title:"Fetch Mode",starterCode:`// mode: 'cors', 'no-cors', 'same-origin'
console.log("mode controls CORS behavior");`,solution:`// mode: 'cors', 'no-cors', 'same-origin'
console.log("mode controls CORS behavior");`,tests:[{input:[],expected:"mode controls CORS behavior"}],hints:["cors allows cross-origin","no-cors limits to simple requests"]},{id:"12-async-fetch-api-23",title:"Interceptor Pattern",starterCode:`// Wrap fetch to add headers/auth
console.log("interceptors modify requests");`,solution:`// Wrap fetch to add headers/auth
console.log("interceptors modify requests");`,tests:[{input:[],expected:"interceptors modify requests"}],hints:["Create custom fetch wrapper","Add headers before request"]},{id:"12-async-fetch-api-24",title:"Fetch Retry",starterCode:`async function fetchRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch (e) {}
  }
  throw new Error('failed');
}
console.log("retry pattern defined");`,solution:`async function fetchRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch (e) {}
  }
  throw new Error('failed');
}
console.log("retry pattern defined");`,tests:[{input:[],expected:"retry pattern defined"}],hints:["Loop with try/catch","Return on success"]},{id:"12-async-fetch-api-25",title:"Fetch Progress",starterCode:`// ReadableStream for progress tracking
console.log("use ReadableStream for progress");`,solution:`// ReadableStream for progress tracking
console.log("use ReadableStream for progress");`,tests:[{input:[],expected:"use ReadableStream for progress"}],hints:["response.body is ReadableStream","Track bytes received"]},{id:"12-async-fetch-api-26",title:"Fetch Cache",starterCode:`// cache: 'no-cache', 'reload', 'force-cache'
console.log("cache option controls caching");`,solution:`// cache: 'no-cache', 'reload', 'force-cache'
console.log("cache option controls caching");`,tests:[{input:[],expected:"cache option controls caching"}],hints:["no-cache always fetches fresh","force-cache uses cache"]},{id:"12-async-fetch-api-27",title:"Fetch Keepalive",starterCode:`// keepalive: true for background requests
console.log("keepalive survives page unload");`,solution:`// keepalive: true for background requests
console.log("keepalive survives page unload");`,tests:[{input:[],expected:"keepalive survives page unload"}],hints:["Use for analytics beacons","Request continues after page close"]},{id:"12-async-fetch-api-28",title:"Fetch Signal",starterCode:`// signal option for AbortController
console.log("signal: controller.signal");`,solution:`// signal option for AbortController
console.log("signal: controller.signal");`,tests:[{input:[],expected:"signal: controller.signal"}],hints:["Pass signal from AbortController","controller.abort() cancels fetch"]},{id:"12-async-fetch-api-29",title:"Fetch Duplex",starterCode:`// duplex: 'half' for streaming requests
console.log("duplex option for streaming");`,solution:`// duplex: 'half' for streaming requests
console.log("duplex option for streaming");`,tests:[{input:[],expected:"duplex option for streaming"}],hints:["Required for streaming body","Half-duplex streaming"]},{id:"12-async-fetch-api-30",title:"Fetch Practice",starterCode:`// Basic fetch pattern
// fetch(url).then(r => r.json()).then(d => console.log(d))
console.log("fetch practice");`,solution:`// Basic fetch pattern
// fetch(url).then(r => r.json()).then(d => console.log(d))
console.log("fetch practice");`,tests:[{input:[],expected:"fetch practice"}],hints:["fetch returns Response promise","json() returns data promise"]},{id:"12-async-fetch-api-31",title:"Fetch GET Pattern",starterCode:`// fetch('/api/data')
//   .then(r => r.json())
//   .then(data => console.log(data))
console.log("GET pattern");`,solution:`// fetch('/api/data')
//   .then(r => r.json())
//   .then(data => console.log(data))
console.log("GET pattern");`,tests:[{input:[],expected:"GET pattern"}],hints:["Default method is GET","Chain json() to parse"]},{id:"12-async-fetch-api-32",title:"Fetch POST Pattern",starterCode:`// fetch('/api/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'John' })
// })
console.log("POST pattern");`,solution:`// fetch('/api/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'John' })
// })
console.log("POST pattern");`,tests:[{input:[],expected:"POST pattern"}],hints:["Set method to POST","Stringify body for JSON"]},{id:"12-async-fetch-api-33",title:"Fetch Error Check",starterCode:`// async function fetchData(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(res.statusText);
//   return res.json();
// }
console.log("check res.ok");`,solution:`// async function fetchData(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(res.statusText);
//   return res.json();
// }
console.log("check res.ok");`,tests:[{input:[],expected:"check res.ok"}],hints:["res.ok is false for HTTP errors","Throw on non-2xx status"]},{id:"12-async-fetch-api-34",title:"Fetch Headers Iterate",starterCode:`// for (const [key, value] of response.headers) {
//   console.log(key, value);
// }
console.log("iterate response headers");`,solution:`// for (const [key, value] of response.headers) {
//   console.log(key, value);
// }
console.log("iterate response headers");`,tests:[{input:[],expected:"iterate response headers"}],hints:["Headers is iterable","Use for...of to iterate"]},{id:"12-async-fetch-api-35",title:"Fetch with Timeout",starterCode:`// async function fetchTimeout(url, ms) {
//   const controller = new AbortController();
//   setTimeout(() => controller.abort(), ms);
//   return fetch(url, { signal: controller.signal });
// }
console.log("timeout with AbortController");`,solution:`// async function fetchTimeout(url, ms) {
//   const controller = new AbortController();
//   setTimeout(() => controller.abort(), ms);
//   return fetch(url, { signal: controller.signal });
// }
console.log("timeout with AbortController");`,tests:[{input:[],expected:"timeout with AbortController"}],hints:["Create AbortController","Abort after timeout"]},{id:"12-async-fetch-api-36",title:"Fetch Complete",starterCode:`// fetch API: GET, POST, PUT, DELETE, etc.
console.log("fetch API complete");`,solution:`// fetch API: GET, POST, PUT, DELETE, etc.
console.log("fetch API complete");`,tests:[{input:[],expected:"fetch API complete"}],hints:["Review all fetch patterns","Practice with real APIs"]},{id:"12-async-fetch-api-37",title:"Fetch Response Methods",starterCode:`// response.json(), .text(), .blob(), .arrayBuffer()
console.log("4 methods to read response");`,solution:`// response.json(), .text(), .blob(), .arrayBuffer()
console.log("4 methods to read response");`,tests:[{input:[],expected:"4 methods to read response"}],hints:["json for JSON, text for strings","blob and arrayBuffer for binary"]},{id:"12-async-fetch-api-38",title:"Fetch Promise Chain",starterCode:`// fetch(url).then(checkStatus).then(parseJSON).then(handleData)
console.log("promise chain pattern");`,solution:`// fetch(url).then(checkStatus).then(parseJSON).then(handleData)
console.log("promise chain pattern");`,tests:[{input:[],expected:"promise chain pattern"}],hints:["Chain .then() calls","Each step transforms data"]},{id:"12-async-fetch-api-39",title:"Fetch Async Pattern",starterCode:`// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
console.log("async fetch pattern");`,solution:`// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
console.log("async fetch pattern");`,tests:[{input:[],expected:"async fetch pattern"}],hints:["Use async/await","Await fetch and json()"]},{id:"12-async-fetch-api-40",title:"Fetch with Auth",starterCode:`// fetch(url, { headers: { 'Authorization': 'Bearer token' } })
console.log("authorization header");`,solution:`// fetch(url, { headers: { 'Authorization': 'Bearer token' } })
console.log("authorization header");`,tests:[{input:[],expected:"authorization header"}],hints:["Set Authorization header","Bearer token format"]},{id:"12-async-fetch-api-41",title:"Fetch Multiple",starterCode:`// Promise.all([fetch(url1), fetch(url2)])
console.log("parallel fetch with Promise.all");`,solution:`// Promise.all([fetch(url1), fetch(url2)])
console.log("parallel fetch with Promise.all");`,tests:[{input:[],expected:"parallel fetch with Promise.all"}],hints:["Map URLs to fetch promises","All run in parallel"]},{id:"12-async-fetch-api-42",title:"Fetch Cancellation",starterCode:`// const controller = new AbortController();
// fetch(url, { signal: controller.signal });
// controller.abort();
console.log("cancel with AbortController");`,solution:`// const controller = new AbortController();
// fetch(url, { signal: controller.signal });
// controller.abort();
console.log("cancel with AbortController");`,tests:[{input:[],expected:"cancel with AbortController"}],hints:["Create controller before fetch","Abort to cancel"]},{id:"12-async-fetch-api-43",title:"Fetch Response OK",starterCode:`// response.ok is true if status 200-299
console.log("response.ok for success check");`,solution:`// response.ok is true if status 200-299
console.log("response.ok for success check");`,tests:[{input:[],expected:"response.ok for success check"}],hints:["response.ok is boolean","Check before processing"]},{id:"12-async-fetch-api-44",title:"Fetch URL Search Params",starterCode:`// const params = new URLSearchParams({ q: 'test', page: 1 });
// fetch('/api?' + params)
console.log("URLSearchParams for query strings");`,solution:`// const params = new URLSearchParams({ q: 'test', page: 1 });
// fetch('/api?' + params)
console.log("URLSearchParams for query strings");`,tests:[{input:[],expected:"URLSearchParams for query strings"}],hints:["URLSearchParams builds query strings","Append to URL"]},{id:"12-async-fetch-api-45",title:"Fetch Body Methods",starterCode:`// JSON.stringify(body) for JSON
// formData for files
// text for plain text
console.log("3 body formats");`,solution:`// JSON.stringify(body) for JSON
// formData for files
// text for plain text
console.log("3 body formats");`,tests:[{input:[],expected:"3 body formats"}],hints:["JSON for structured data","FormData for files"]},{id:"12-async-fetch-api-46",title:"Fetch DELETE",starterCode:`// fetch(url, { method: 'DELETE' })
console.log("DELETE removes resource");`,solution:`// fetch(url, { method: 'DELETE' })
console.log("DELETE removes resource");`,tests:[{input:[],expected:"DELETE removes resource"}],hints:["DELETE method for removal","Usually no body needed"]},{id:"12-async-fetch-api-47",title:"Fetch Response OK",starterCode:`// res.ok is true for status 200-299
console.log("check res.ok for success");`,solution:`// res.ok is true for status 200-299
console.log("check res.ok for success");`,tests:[{input:[],expected:"check res.ok for success"}],hints:["res.ok is boolean","False for 4xx/5xx"]},{id:"12-async-fetch-api-48",title:"Fetch Headers Get",starterCode:`// response.headers.get('content-type')
console.log("headers.get reads header");`,solution:`// response.headers.get('content-type')
console.log("headers.get reads header");`,tests:[{input:[],expected:"headers.get reads header"}],hints:["Headers object has get method","Case-insensitive"]},{id:"12-async-fetch-api-49",title:"Fetch Abort",starterCode:`// const c = new AbortController();
// fetch(url, { signal: c.signal });
// c.abort();
console.log("AbortController cancels fetch");`,solution:`// const c = new AbortController();
// fetch(url, { signal: c.signal });
// c.abort();
console.log("AbortController cancels fetch");`,tests:[{input:[],expected:"AbortController cancels fetch"}],hints:["Create AbortController","Pass signal to fetch"]},{id:"12-async-fetch-api-50",title:"Fetch Complete Review",starterCode:`// fetch: GET, POST, PUT, DELETE, headers
console.log("fetch API review complete");`,solution:`// fetch: GET, POST, PUT, DELETE, headers
console.log("fetch API review complete");`,tests:[{input:[],expected:"fetch API review complete"}],hints:["Review all fetch concepts","Practice with APIs"]}],"13-oop-01-classes-inheritance":[{id:"13-oop-classes-inheritance-01",title:"Class Declaration",starterCode:`class Animal {
  // TODO: add constructor
}
const a = new Animal();
console.log(typeof a);`,solution:`class Animal {
  constructor() {
    this.type = 'animal';
  }
}
const a = new Animal();
console.log(typeof a);`,tests:[{input:[],expected:"object"}],hints:["Class creates a constructor function","typeof object for instances"]},{id:"13-oop-classes-inheritance-02",title:"Constructor",starterCode:`class Person {
  constructor(name) {
    // TODO: set name
  }
}
const p = new Person('John');
console.log(p.name);`,solution:`class Person {
  constructor(name) {
    this.name = name;
  }
}
const p = new Person('John');
console.log(p.name);`,tests:[{input:[],expected:"John"}],hints:["constructor runs on new","this refers to new instance"]},{id:"13-oop-classes-inheritance-03",title:"Instance Methods",starterCode:`class Dog {
  constructor(name) { this.name = name; }
  bark() {
    // TODO: return bark string
  }
}
const d = new Dog('Rex');
console.log(d.bark());`,solution:`class Dog {
  constructor(name) { this.name = name; }
  bark() {
    return this.name + ' says woof';
  }
}
const d = new Dog('Rex');
console.log(d.bark());`,tests:[{input:[],expected:"Rex says woof"}],hints:["Methods are on the prototype","Use this to access instance"]},{id:"13-oop-classes-inheritance-04",title:"Static Methods",starterCode:`class MathUtil {
  static add(a, b) {
    // TODO: return sum
  }
}
console.log(MathUtil.add(2, 3));`,solution:`class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3));`,tests:[{input:[],expected:"5"}],hints:["static methods are on the class","No need to instantiate"]},{id:"13-oop-classes-inheritance-05",title:"Extends",starterCode:`class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  // TODO: call super
}
const d = new Dog('Rex');
console.log(d.name);`,solution:`class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
const d = new Dog('Rex');
console.log(d.name);`,tests:[{input:[],expected:"Rex"}],hints:["extends creates inheritance","super() calls parent constructor"]},{id:"13-oop-classes-inheritance-06",title:"Super Call",starterCode:`class Parent {
  greet() { return 'hello'; }
}
class Child extends Parent {
  greet() {
    return super.greet() + ' world';
  }
}
console.log(new Child().greet());`,solution:`class Parent {
  greet() { return 'hello'; }
}
class Child extends Parent {
  greet() {
    return super.greet() + ' world';
  }
}
console.log(new Child().greet());`,tests:[{input:[],expected:"hello world"}],hints:["super.method() calls parent method","Can modify return value"]},{id:"13-oop-classes-inheritance-07",title:"Method Overriding",starterCode:`class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() {
    // TODO: return πr²
  }
}
console.log(new Circle(5).area());`,solution:`class Shape {
  area() { return 0; }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() {
    return Math.PI * this.r * this.r;
  }
}
console.log(new Circle(5).area());`,tests:[{input:[],expected:"78.53981633974483"}],hints:["Override parent method","Use Math.PI for π"]},{id:"13-oop-classes-inheritance-08",title:"Private Fields",starterCode:`class Account {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}
const a = new Account();
a.deposit(100);
console.log(a.#balance);`,solution:`class Account {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
}
const a = new Account();
a.deposit(100);
console.log(a.#balance);`,tests:[{input:[],expected:"100"}],hints:["# creates private field","Cannot access outside class"]},{id:"13-oop-classes-inheritance-09",title:"Getter/Setter",starterCode:`class Temperature {
  #celsius;
  constructor(c) { this.#celsius = c; }
  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
}
console.log(new Temperature(100).fahrenheit);`,solution:`class Temperature {
  #celsius;
  constructor(c) { this.#celsius = c; }
  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }
}
console.log(new Temperature(100).fahrenheit);`,tests:[{input:[],expected:"212"}],hints:["get creates getter property","Access like a property, not method"]},{id:"13-oop-classes-inheritance-10",title:"Setter",starterCode:`class Person {
  #age = 0;
  set age(val) {
    if (val >= 0) this.#age = val;
  }
  get age() { return this.#age; }
}
const p = new Person();
p.age = 25;
console.log(p.age);`,solution:`class Person {
  #age = 0;
  set age(val) {
    if (val >= 0) this.#age = val;
  }
  get age() { return this.#age; }
}
const p = new Person();
p.age = 25;
console.log(p.age);`,tests:[{input:[],expected:"25"}],hints:["set creates setter","Can validate before setting"]},{id:"13-oop-classes-inheritance-11",title:"Class Patterns",starterCode:`// Classes are syntactic sugar over prototypes
class Foo {}
const f = new Foo();
console.log(typeof f);`,solution:`// Classes are syntactic sugar over prototypes
class Foo {}
const f = new Foo();
console.log(typeof f);`,tests:[{input:[],expected:"object"}],hints:["Classes create objects","Same as function constructors"]},{id:"13-oop-classes-inheritance-12",title:"Class Expression",starterCode:`const MyClass = class {
  constructor() { this.val = 42; }
};
console.log(new MyClass().val);`,solution:`const MyClass = class {
  constructor() { this.val = 42; }
};
console.log(new MyClass().val);`,tests:[{input:[],expected:"42"}],hints:["Classes can be expressions","Assign to variable"]},{id:"13-oop-classes-inheritance-13",title:"Static Factory",starterCode:`class User {
  constructor(name) { this.name = name; }
  static create(name) {
    return new User(name);
  }
}
const u = User.create('John');
console.log(u.name);`,solution:`class User {
  constructor(name) { this.name = name; }
  static create(name) {
    return new User(name);
  }
}
const u = User.create('John');
console.log(u.name);`,tests:[{input:[],expected:"John"}],hints:["Static factory creates instances","Alternative to new"]},{id:"13-oop-classes-inheritance-14",title:"instanceof",starterCode:`class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);`,solution:`class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);`,tests:[{input:[],expected:"true"}],hints:["instanceof checks prototype chain","Returns boolean"]},{id:"13-oop-classes-inheritance-15",title:"Method Chaining",starterCode:`class Builder {
  constructor() { this.parts = []; }
  add(part) { this.parts.push(part); return this; }
  build() { return this.parts.join('-'); }
}
console.log(new Builder().add('a').add('b').build());`,solution:`class Builder {
  constructor() { this.parts = []; }
  add(part) { this.parts.push(part); return this; }
  build() { return this.parts.join('-'); }
}
console.log(new Builder().add('a').add('b').build());`,tests:[{input:[],expected:"a-b"}],hints:["Return this for chaining","Each method returns instance"]},{id:"13-oop-classes-inheritance-16",title:"Protected Pattern",starterCode:`class Base {
  _internal() { return 'protected'; }
}
class Child extends Base {
  access() { return this._internal(); }
}
console.log(new Child().access());`,solution:`class Base {
  _internal() { return 'protected'; }
}
class Child extends Base {
  access() { return this._internal(); }
}
console.log(new Child().access());`,tests:[{input:[],expected:"protected"}],hints:["_ prefix convention for protected","Not truly private in JS"]},{id:"13-oop-classes-inheritance-17",title:"Abstract Pattern",starterCode:`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s * this.s; }
}
console.log(new Square(5).area());`,solution:`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s * this.s; }
}
console.log(new Square(5).area());`,tests:[{input:[],expected:"25"}],hints:["Abstract class throws on abstract method","Subclass must implement"]},{id:"13-oop-classes-inheritance-18",title:"Mixin Pattern",starterCode:`function Timestamped(Base) {
  return class extends Base {
    createdAt = new Date();
  }
}
class User { constructor(name) { this.name = name; } }
class TimestampedUser extends Timestamped(User) {}
console.log(new TimestampedUser('John').name);`,solution:`function Timestamped(Base) {
  return class extends Base {
    createdAt = new Date();
  }
}
class User { constructor(name) { this.name = name; } }
class TimestampedUser extends Timestamped(User) {}
console.log(new TimestampedUser('John').name);`,tests:[{input:[],expected:"John"}],hints:["Mixin is a function returning class","Extends base class"]},{id:"13-oop-classes-inheritance-19",title:"Symbol.iterator",starterCode:`class Range {
  constructor(start, end) { this.start = start; this.end = end; }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}
console.log([...new Range(1, 3)]);`,solution:`class Range {
  constructor(start, end) { this.start = start; this.end = end; }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}
console.log([...new Range(1, 3)]);`,tests:[{input:[],expected:"1,2,3"}],hints:["Symbol.iterator makes class iterable","Return object with next()"]},{id:"13-oop-classes-inheritance-20",title:"toStringTag",starterCode:`class Collection {
  get [Symbol.toStringTag]() { return 'Collection'; }
}
console.log(Object.prototype.toString.call(new Collection()));`,solution:`class Collection {
  get [Symbol.toStringTag]() { return 'Collection'; }
}
console.log(Object.prototype.toString.call(new Collection()));`,tests:[{input:[],expected:"[object Collection]"}],hints:["Symbol.toStringTag sets type string","Used by Object.prototype.toString"]},{id:"13-oop-classes-inheritance-21",title:"Symbol.hasInstance",starterCode:`class Even {
  static [Symbol.hasInstance](num) {
    return num % 2 === 0;
  }
}
console.log(4 instanceof Even);`,solution:`class Even {
  static [Symbol.hasInstance](num) {
    return num % 2 === 0;
  }
}
console.log(4 instanceof Even);`,tests:[{input:[],expected:"true"}],hints:["Symbol.hasInstance customizes instanceof","Static method on class"]},{id:"13-oop-classes-inheritance-22",title:"Static Init",starterCode:`class Config {
  static instance;
  static {
    Config.instance = new Config();
  }
}
console.log(Config.instance instanceof Config);`,solution:`class Config {
  static instance;
  static {
    Config.instance = new Config();
  }
}
console.log(Config.instance instanceof Config);`,tests:[{input:[],expected:"true"}],hints:["static block runs once","Used for static initialization"]},{id:"13-oop-classes-inheritance-23",title:"Private Method",starterCode:`class Foo {
  #secret() { return 42; }
  reveal() { return this.#secret(); }
}
console.log(new Foo().reveal());`,solution:`class Foo {
  #secret() { return 42; }
  reveal() { return this.#secret(); }
}
console.log(new Foo().reveal());`,tests:[{input:[],expected:"42"}],hints:["# before method name makes it private","Can only call from class"]},{id:"13-oop-classes-inheritance-24",title:"Field Declaration",starterCode:`class User {
  name = 'John';
  age = 30;
}
const u = new User();
console.log(u.name + ' ' + u.age);`,solution:`class User {
  name = 'John';
  age = 30;
}
const u = new User();
console.log(u.name + ' ' + u.age);`,tests:[{input:[],expected:"John 30"}],hints:["Fields are initialized in class body","No need for constructor"]},{id:"13-oop-classes-inheritance-25",title:"Class Get/Set",starterCode:`class Circle {
  #radius;
  constructor(r) { this.#radius = r; }
  get radius() { return this.#radius; }
  set radius(r) { if (r > 0) this.#radius = r; }
}
const c = new Circle(5);
c.radius = 10;
console.log(c.radius);`,solution:`class Circle {
  #radius;
  constructor(r) { this.#radius = r; }
  get radius() { return this.#radius; }
  set radius(r) { if (r > 0) this.#radius = r; }
}
const c = new Circle(5);
c.radius = 10;
console.log(c.radius);`,tests:[{input:[],expected:"10"}],hints:["Getter returns value","Setter validates and sets"]},{id:"13-oop-classes-inheritance-26",title:"Static Method",starterCode:`class ArrayUtils {
  static flatten(arr) {
    return arr.flat();
  }
}
console.log(ArrayUtils.flatten([[1, 2], [3, 4]]));`,solution:`class ArrayUtils {
  static flatten(arr) {
    return arr.flat();
  }
}
console.log(ArrayUtils.flatten([[1, 2], [3, 4]]));`,tests:[{input:[],expected:"1,2,3,4"}],hints:["Static method on class","No instance needed"]},{id:"13-oop-classes-inheritance-27",title:"Inheritance Chain",starterCode:`class A { foo() { return 'A'; } }
class B extends A { foo() { return 'B'; } }
class C extends B {}
console.log(new C().foo());`,solution:`class A { foo() { return 'A'; } }
class B extends A { foo() { return 'B'; } }
class C extends B {}
console.log(new C().foo());`,tests:[{input:[],expected:"B"}],hints:["C inherits from B","B overrides foo"]},{id:"13-oop-classes-inheritance-28",title:"Class Practice",starterCode:`class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}
const s = new Stack();
s.push(1); s.push(2);
console.log(s.pop());`,solution:`class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}
const s = new Stack();
s.push(1); s.push(2);
console.log(s.pop());`,tests:[{input:[],expected:"2"}],hints:["pop removes and returns last","LIFO order"]},{id:"13-oop-classes-inheritance-29",title:"Class vs Function",starterCode:`// class is syntactic sugar for function constructors
class Foo {}
function Bar() {}
console.log(typeof Foo);`,solution:`// class is syntactic sugar for function constructors
class Foo {}
function Bar() {}
console.log(typeof Foo);`,tests:[{input:[],expected:"function"}],hints:["class is actually a function","Both create constructors"]},{id:"13-oop-classes-inheritance-30",title:"Patterns Complete",starterCode:`// Factory, Singleton, Observer patterns with classes
console.log("class patterns complete");`,solution:`// Factory, Singleton, Observer patterns with classes
console.log("class patterns complete");`,tests:[{input:[],expected:"class patterns complete"}],hints:["Review all class patterns","Practice building classes"]},{id:"13-oop-classes-inheritance-31",title:"Interview Questions",starterCode:`// class, extends, super, private, static
console.log("class interview topics");`,solution:`// class, extends, super, private, static
console.log("class interview topics");`,tests:[{input:[],expected:"class interview topics"}],hints:["Know class syntax well","Understand inheritance"]},{id:"13-oop-classes-inheritance-32",title:"Private Field Access",starterCode:`class Secret {
  #value = 'hidden';
  getValue() { return this.#value; }
}
const s = new Secret();
console.log(s.getValue());`,solution:`class Secret {
  #value = 'hidden';
  getValue() { return this.#value; }
}
const s = new Secret();
console.log(s.getValue());`,tests:[{input:[],expected:"hidden"}],hints:["Private fields accessible via methods","Not directly from outside"]},{id:"13-oop-classes-inheritance-33",title:"Static Property",starterCode:`class Counter {
  static count = 0;
  constructor() { Counter.count++; }
}
new Counter(); new Counter();
console.log(Counter.count);`,solution:`class Counter {
  static count = 0;
  constructor() { Counter.count++; }
}
new Counter(); new Counter();
console.log(Counter.count);`,tests:[{input:[],expected:"2"}],hints:["Static property shared across instances","Increment in constructor"]},{id:"13-oop-classes-inheritance-34",title:"Method Overriding",starterCode:`class Animal {
  speak() { return '...'; }
}
class Cat extends Animal {
  speak() { return 'meow'; }
}
console.log(new Cat().speak());`,solution:`class Animal {
  speak() { return '...'; }
}
class Cat extends Animal {
  speak() { return 'meow'; }
}
console.log(new Cat().speak());`,tests:[{input:[],expected:"meow"}],hints:["Override parent method","Same method name"]},{id:"13-oop-classes-inheritance-35",title:"Super Constructor",starterCode:`class Base {
  constructor(x) { this.x = x; }
}
class Child extends Base {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
const c = new Child(1, 2);
console.log(c.x + c.y);`,solution:`class Base {
  constructor(x) { this.x = x; }
}
class Child extends Base {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
const c = new Child(1, 2);
console.log(c.x + c.y);`,tests:[{input:[],expected:"3"}],hints:["super() must be called first","Then set own properties"]},{id:"13-oop-classes-inheritance-36",title:"Class Complete",starterCode:`// Classes: declaration, inheritance, private, static
console.log("classes complete");`,solution:`// Classes: declaration, inheritance, private, static
console.log("classes complete");`,tests:[{input:[],expected:"classes complete"}],hints:["Review all class concepts","Practice building class hierarchies"]},{id:"13-oop-classes-inheritance-37",title:"Class Constructor",starterCode:`class Book {
  constructor(title) { this.title = title; }
}
const b = new Book('JS');
console.log(b.title);`,solution:`class Book {
  constructor(title) { this.title = title; }
}
const b = new Book('JS');
console.log(b.title);`,tests:[{input:[],expected:"JS"}],hints:["constructor initializes instance","this refers to new object"]},{id:"13-oop-classes-inheritance-38",title:"Instance Method",starterCode:`class Greeting {
  constructor(name) { this.name = name; }
  greet() { return 'Hello ' + this.name; }
}
console.log(new Greeting('World').greet());`,solution:`class Greeting {
  constructor(name) { this.name = name; }
  greet() { return 'Hello ' + this.name; }
}
console.log(new Greeting('World').greet());`,tests:[{input:[],expected:"Hello World"}],hints:["Methods are on prototype","Use this to access instance"]},{id:"13-oop-classes-inheritance-39",title:"Static Factory Method",starterCode:`class User {
  constructor(name) { this.name = name; }
  static create(name) { return new User(name); }
}
const u = User.create('Admin');
console.log(u.name);`,solution:`class User {
  constructor(name) { this.name = name; }
  static create(name) { return new User(name); }
}
const u = User.create('Admin');
console.log(u.name);`,tests:[{input:[],expected:"Admin"}],hints:["Static method creates instance","Called on class, not instance"]},{id:"13-oop-classes-inheritance-40",title:"Extends Super",starterCode:`class Animal {
  constructor(type) { this.type = type; }
}
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
}
console.log(new Dog('Rex').type + ' ' + new Dog('Rex').name);`,solution:`class Animal {
  constructor(type) { this.type = type; }
}
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
}
console.log(new Dog('Rex').type + ' ' + new Dog('Rex').name);`,tests:[{input:[],expected:"dog Rex"}],hints:["super() calls parent constructor","Set own properties after super"]},{id:"13-oop-classes-inheritance-41",title:"Method Override",starterCode:`class Base {
  toString() { return 'Base'; }
}
class Child extends Base {
  toString() { return 'Child'; }
}
console.log(new Child().toString());`,solution:`class Base {
  toString() { return 'Base'; }
}
class Child extends Base {
  toString() { return 'Child'; }
}
console.log(new Child().toString());`,tests:[{input:[],expected:"Child"}],hints:["Override by same method name","Child version is called"]},{id:"13-oop-classes-inheritance-42",title:"Private Field",starterCode:`class Counter {
  #count = 0;
  increment() { this.#count++; }
  getCount() { return this.#count; }
}
const c = new Counter();
c.increment(); c.increment();
console.log(c.getCount());`,solution:`class Counter {
  #count = 0;
  increment() { this.#count++; }
  getCount() { return this.#count; }
}
const c = new Counter();
c.increment(); c.increment();
console.log(c.getCount());`,tests:[{input:[],expected:"2"}],hints:["# creates private field","Access via method"]},{id:"13-oop-classes-inheritance-43",title:"Getter Property",starterCode:`class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
}
console.log(new Rectangle(3, 4).area);`,solution:`class Rectangle {
  constructor(w, h) { this.w = w; this.h = h; }
  get area() { return this.w * this.h; }
}
console.log(new Rectangle(3, 4).area);`,tests:[{input:[],expected:"12"}],hints:["get creates getter","Access like property"]},{id:"13-oop-classes-inheritance-44",title:"Setter Property",starterCode:`class Temperature {
  #celsius = 0;
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }
  get celsius() { return this.#celsius; }
}
const t = new Temperature();
t.fahrenheit = 212;
console.log(t.celsius);`,solution:`class Temperature {
  #celsius = 0;
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }
  get celsius() { return this.#celsius; }
}
const t = new Temperature();
t.fahrenheit = 212;
console.log(t.celsius);`,tests:[{input:[],expected:"100"}],hints:["set creates setter","Converts and stores"]},{id:"13-oop-classes-inheritance-45",title:"Static Method",starterCode:`class MathUtil {
  static clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
}
console.log(MathUtil.clamp(15, 0, 10));`,solution:`class MathUtil {
  static clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
}
console.log(MathUtil.clamp(15, 0, 10));`,tests:[{input:[],expected:"10"}],hints:["Static method on class","No instance needed"]},{id:"13-oop-classes-inheritance-46",title:"Inheritance Chain",starterCode:`class A { type() { return 'A'; } }
class B extends A {}
class C extends B {}
const c = new C();
console.log(c.type() + ' ' + (c instanceof A));`,solution:`class A { type() { return 'A'; } }
class B extends A {}
class C extends B {}
const c = new C();
console.log(c.type() + ' ' + (c instanceof A));`,tests:[{input:[],expected:"A true"}],hints:["C inherits from B inherits from A","instanceof checks chain"]},{id:"13-oop-classes-inheritance-47",title:"Mixin Pattern",starterCode:`function Timestamped(Base) {
  return class extends Base {
    created = Date.now();
  };
}
class User { constructor(n) { this.name = n; } }
class TSUser extends Timestamped(User) {}
console.log(new TSUser('John').name);`,solution:`function Timestamped(Base) {
  return class extends Base {
    created = Date.now();
  };
}
class User { constructor(n) { this.name = n; } }
class TSUser extends Timestamped(User) {}
console.log(new TSUser('John').name);`,tests:[{input:[],expected:"John"}],hints:["Mixin adds behavior","Returns extended class"]},{id:"13-oop-classes-inheritance-48",title:"Symbol.iterator",starterCode:`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,solution:`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,tests:[{input:[],expected:"1,2,3"}],hints:["Symbol.iterator makes iterable","next() returns value/done"]},{id:"13-oop-classes-inheritance-49",title:"Abstract Pattern",starterCode:`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}
console.log(new Square(4).area());`,solution:`class Shape {
  area() { throw new Error('abstract'); }
}
class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}
console.log(new Square(4).area());`,tests:[{input:[],expected:"16"}],hints:["Abstract throws on call","Subclass must implement"]},{id:"13-oop-classes-inheritance-50",title:"Class Expression",starterCode:`const MyClass = class {
  constructor() { this.val = 99; }
};
console.log(new MyClass().val);`,solution:`const MyClass = class {
  constructor() { this.val = 99; }
};
console.log(new MyClass().val);`,tests:[{input:[],expected:"99"}],hints:["Class expression assigned to variable","Anonymous class"]}],"13-oop-03-oop-patterns":[{id:"13-oop-oop-patterns-01",title:"Module Pattern IIFE",starterCode:`const counter = (function() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
})();
counter.increment();
console.log(counter.getCount());`,solution:`const counter = (function() {
  let count = 0;
  return {
    increment() { count++; },
    getCount() { return count; }
  };
})();
counter.increment();
console.log(counter.getCount());`,tests:[{input:[],expected:"1"}],hints:["IIFE creates private scope","Return public methods"]},{id:"13-oop-oop-patterns-02",title:"Revealing Module",starterCode:`const bank = (function() {
  let balance = 0;
  function deposit(amount) { balance += amount; }
  function getBalance() { return balance; }
  return { deposit, getBalance };
})();
bank.deposit(100);
console.log(bank.getBalance());`,solution:`const bank = (function() {
  let balance = 0;
  function deposit(amount) { balance += amount; }
  function getBalance() { return balance; }
  return { deposit, getBalance };
})();
bank.deposit(100);
console.log(bank.getBalance());`,tests:[{input:[],expected:"100"}],hints:["Define functions privately","Return object mapping names"]},{id:"13-oop-oop-patterns-03",title:"Singleton",starterCode:`class Database {
  static instance;
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connected = true;
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);`,solution:`class Database {
  static instance;
  constructor() {
    if (Database.instance) return Database.instance;
    Database.instance = this;
    this.connected = true;
  }
}
const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);`,tests:[{input:[],expected:"true"}],hints:["Singleton has one instance","Check if instance exists"]},{id:"13-oop-oop-patterns-04",title:"Factory",starterCode:`function createUser(name, role) {
  return { name, role, greet() { return 'Hi ' + this.name; } };
}
const user = createUser('John', 'admin');
console.log(user.greet());`,solution:`function createUser(name, role) {
  return { name, role, greet() { return 'Hi ' + this.name; } };
}
const user = createUser('John', 'admin');
console.log(user.greet());`,tests:[{input:[],expected:"Hi John"}],hints:["Factory returns new object","No need for new keyword"]},{id:"13-oop-oop-patterns-05",title:"Observer Subscribe",starterCode:`class EventEmitter {
  constructor() { this.listeners = {}; }
  on(event, fn) {
    (this.listeners[event] = this.listeners[event] || []).push(fn);
  }
  emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('data', (d) => console.log(d));
emitter.emit('data', 'hello');`,solution:`class EventEmitter {
  constructor() { this.listeners = {}; }
  on(event, fn) {
    (this.listeners[event] = this.listeners[event] || []).push(fn);
  }
  emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on('data', (d) => console.log(d));
emitter.emit('data', 'hello');`,tests:[{input:[],expected:"hello"}],hints:["Store callbacks in object","Call all on emit"]},{id:"13-oop-oop-patterns-06",title:"Observer Notify",starterCode:`class Subject {
  constructor() { this.observers = []; }
  attach(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const subject = new Subject();
subject.attach(d => console.log(d));
subject.notify('update');`,solution:`class Subject {
  constructor() { this.observers = []; }
  attach(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const subject = new Subject();
subject.attach(d => console.log(d));
subject.notify('update');`,tests:[{input:[],expected:"update"}],hints:["Subject maintains observer list","notify calls all observers"]},{id:"13-oop-oop-patterns-07",title:"Pub/Sub",starterCode:`class PubSub {
  constructor() { this.channels = {}; }
  subscribe(ch, fn) {
    (this.channels[ch] = this.channels[ch] || []).push(fn);
  }
  publish(ch, data) {
    (this.channels[ch] || []).forEach(fn => fn(data));
  }
}
const ps = new PubSub();
ps.subscribe('news', (d) => console.log(d));
ps.publish('news', 'breaking');`,solution:`class PubSub {
  constructor() { this.channels = {}; }
  subscribe(ch, fn) {
    (this.channels[ch] = this.channels[ch] || []).push(fn);
  }
  publish(ch, data) {
    (this.channels[ch] || []).forEach(fn => fn(data));
  }
}
const ps = new PubSub();
ps.subscribe('news', (d) => console.log(d));
ps.publish('news', 'breaking');`,tests:[{input:[],expected:"breaking"}],hints:["Channels group subscribers","publish notifies all in channel"]},{id:"13-oop-oop-patterns-08",title:"Strategy",starterCode:`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 2, 3));`,solution:`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 2, 3));`,tests:[{input:[],expected:"5"}],hints:["Strategy object holds algorithms","Select at runtime"]},{id:"13-oop-oop-patterns-09",title:"Decorator",starterCode:`function withLogging(fn) {
  return function(...args) {
    console.log('calling');
    return fn(...args);
  };
}
const add = (a, b) => a + b;
const logged = withLogging(add);
console.log(logged(1, 2));`,solution:`function withLogging(fn) {
  return function(...args) {
    console.log('calling');
    return fn(...args);
  };
}
const add = (a, b) => a + b;
const logged = withLogging(add);
console.log(logged(1, 2));`,tests:[{input:[],expected:`calling
3`}],hints:["Decorator wraps function","Add behavior before/after"]},{id:"13-oop-oop-patterns-10",title:"State Pattern",starterCode:`class State {
  handle() { return 'default'; }
}
class ActiveState extends State {
  handle() { return 'active'; }
}
class InactiveState extends State {
  handle() { return 'inactive'; }
}
const states = { active: new ActiveState(), inactive: new InactiveState() };
console.log(states.active.handle());`,solution:`class State {
  handle() { return 'default'; }
}
class ActiveState extends State {
  handle() { return 'active'; }
}
class InactiveState extends State {
  handle() { return 'inactive'; }
}
const states = { active: new ActiveState(), inactive: new InactiveState() };
console.log(states.active.handle());`,tests:[{input:[],expected:"active"}],hints:["Each state is a class","Switch between state objects"]},{id:"13-oop-oop-patterns-11",title:"Mixin",starterCode:`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User {
  constructor(name) { this.name = name; }
}
Object.assign(User.prototype, Serializable);
console.log(new User('John').serialize());`,solution:`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User {
  constructor(name) { this.name = name; }
}
Object.assign(User.prototype, Serializable);
console.log(new User('John').serialize());`,tests:[{input:[],expected:'{"name":"John"}'}],hints:["Mixin is object with methods","Object.assign adds to prototype"]},{id:"13-oop-oop-patterns-12",title:"Adapter",starterCode:`class OldAPI {
  getData() { return { first: 'John', last: 'Doe' }; }
}
class NewAPI {
  constructor(old) { this.old = old; }
  getFullName() {
    const d = this.old.getData();
    return d.first + ' ' + d.last;
  }
}
console.log(new NewAPI(new OldAPI()).getFullName());`,solution:`class OldAPI {
  getData() { return { first: 'John', last: 'Doe' }; }
}
class NewAPI {
  constructor(old) { this.old = old; }
  getFullName() {
    const d = this.old.getData();
    return d.first + ' ' + d.last;
  }
}
console.log(new NewAPI(new OldAPI()).getFullName());`,tests:[{input:[],expected:"John Doe"}],hints:["Adapter wraps old interface","Converts to new interface"]},{id:"13-oop-oop-patterns-13",title:"Proxy",starterCode:`const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'not found';
  }
};
const proxy = new Proxy({ name: 'John' }, handler);
console.log(proxy.name + ' ' + proxy.age);`,solution:`const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'not found';
  }
};
const proxy = new Proxy({ name: 'John' }, handler);
console.log(proxy.name + ' ' + proxy.age);`,tests:[{input:[],expected:"John not found"}],hints:["Proxy intercepts operations","handler defines traps"]},{id:"13-oop-oop-patterns-14",title:"Builder",starterCode:`class QueryBuilder {
  constructor() { this.parts = []; }
  select(fields) { this.parts.push('SELECT ' + fields); return this; }
  from(table) { this.parts.push('FROM ' + table); return this; }
  where(cond) { this.parts.push('WHERE ' + cond); return this; }
  build() { return this.parts.join(' '); }
}
console.log(new QueryBuilder().select('*').from('users').where('id=1').build());`,solution:`class QueryBuilder {
  constructor() { this.parts = []; }
  select(fields) { this.parts.push('SELECT ' + fields); return this; }
  from(table) { this.parts.push('FROM ' + table); return this; }
  where(cond) { this.parts.push('WHERE ' + cond); return this; }
  build() { return this.parts.join(' '); }
}
console.log(new QueryBuilder().select('*').from('users').where('id=1').build());`,tests:[{input:[],expected:"SELECT * FROM users WHERE id=1"}],hints:["Each method returns this","build() assembles final result"]},{id:"13-oop-oop-patterns-15",title:"Command",starterCode:`class Command {
  execute() {}
}
class AddCommand extends Command {
  constructor(receiver, value) { super(); this.receiver = receiver; this.value = value; }
  execute() { this.receiver.value += this.value; }
}
const obj = { value: 0 };
new AddCommand(obj, 5).execute();
console.log(obj.value);`,solution:`class Command {
  execute() {}
}
class AddCommand extends Command {
  constructor(receiver, value) { super(); this.receiver = receiver; this.value = value; }
  execute() { this.receiver.value += this.value; }
}
const obj = { value: 0 };
new AddCommand(obj, 5).execute();
console.log(obj.value);`,tests:[{input:[],expected:"5"}],hints:["Command encapsulates action","execute() performs the action"]},{id:"13-oop-oop-patterns-16",title:"Iterator",starterCode:`class Counter {
  constructor(limit) { this.limit = limit; }
  [Symbol.iterator]() {
    let n = 0;
    const limit = this.limit;
    return {
      next() {
        return n < limit ? { value: n++, done: false } : { done: true };
      }
    };
  }
}
console.log([...new Counter(3)]);`,solution:`class Counter {
  constructor(limit) { this.limit = limit; }
  [Symbol.iterator]() {
    let n = 0;
    const limit = this.limit;
    return {
      next() {
        return n < limit ? { value: n++, done: false } : { done: true };
      }
    };
  }
}
console.log([...new Counter(3)]);`,tests:[{input:[],expected:"0,1,2"}],hints:["Symbol.iterator makes iterable","next() returns value/done"]},{id:"13-oop-oop-patterns-17",title:"Mediator",starterCode:`class ChatRoom {
  constructor() { this.users = []; }
  register(user) { this.users.push(user); }
  send(message, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(message));
  }
}
class User {
  constructor(name, room) { this.name = name; room.register(this); }
  send(msg) { this.room.send(msg, this); }
  receive(msg) { console.log(this.name + ': ' + msg); }
}`,solution:`class ChatRoom {
  constructor() { this.users = []; }
  register(user) { this.users.push(user); }
  send(message, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(message));
  }
}
class User {
  constructor(name, room) { this.name = name; this.room = room; room.register(this); }
  send(msg) { this.room.send(msg, this); }
  receive(msg) { console.log(this.name + ': ' + msg); }
}
const room = new ChatRoom();
const u1 = new User('Alice', room);
const u2 = new User('Bob', room);
u1.send('hello');`,tests:[{input:[],expected:"Bob: hello"}],hints:["Mediator coordinates communication","Users don't talk directly"]},{id:"13-oop-oop-patterns-18",title:"Memento",starterCode:`class Editor {
  constructor() { this.content = ''; }
  type(words) { this.content += words; }
  save() { return { content: this.content }; }
  restore(state) { this.content = state.content; }
}
const e = new Editor();
e.type('hello ');
const snapshot = e.save();
e.type('world');
e.restore(snapshot);
console.log(e.content);`,solution:`class Editor {
  constructor() { this.content = ''; }
  type(words) { this.content += words; }
  save() { return { content: this.content }; }
  restore(state) { this.content = state.content; }
}
const e = new Editor();
e.type('hello ');
const snapshot = e.save();
e.type('world');
e.restore(snapshot);
console.log(e.content);`,tests:[{input:[],expected:"hello "}],hints:["Save creates snapshot","Restore reverts to snapshot"]},{id:"13-oop-oop-patterns-19",title:"Visitor",starterCode:`class Shape {
  accept(visitor) { return visitor.visit(this); }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
}
class AreaVisitor {
  visit(circle) { return Math.PI * circle.r * circle.r; }
}
console.log(new Circle(5).accept(new AreaVisitor()));`,solution:`class Shape {
  accept(visitor) { return visitor.visit(this); }
}
class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
}
class AreaVisitor {
  visit(circle) { return Math.PI * circle.r * circle.r; }
}
console.log(new Circle(5).accept(new AreaVisitor()));`,tests:[{input:[],expected:"78.53981633974483"}],hints:["Visitor adds operations without modifying","accept calls visitor.visit"]},{id:"13-oop-oop-patterns-20",title:"Chain of Responsibility",starterCode:`class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}
class AuthHandler extends Handler {
  handle(request) {
    if (request.auth) return 'authenticated';
    return super.handle(request);
  }
}
const auth = new AuthHandler();
auth.setNext(new Handler());
console.log(auth.handle({ auth: true }));`,solution:`class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}
class AuthHandler extends Handler {
  handle(request) {
    if (request.auth) return 'authenticated';
    return super.handle(request);
  }
}
const auth = new AuthHandler();
auth.setNext(new Handler());
console.log(auth.handle({ auth: true }));`,tests:[{input:[],expected:"authenticated"}],hints:["Chain handlers together","Each handles or passes to next"]},{id:"13-oop-oop-patterns-21",title:"Composite",starterCode:`class Component {
  operation() { return 0; }
}
class Leaf extends Component {
  constructor(val) { super(); this.val = val; }
  operation() { return this.val; }
}
class Composite extends Component {
  constructor() { super(); this.children = []; }
  add(child) { this.children.push(child); }
  operation() { return this.children.reduce((s, c) => s + c.operation(), 0); }
}
const tree = new Composite();
tree.add(new Leaf(1));
tree.add(new Leaf(2));
console.log(tree.operation());`,solution:`class Component {
  operation() { return 0; }
}
class Leaf extends Component {
  constructor(val) { super(); this.val = val; }
  operation() { return this.val; }
}
class Composite extends Component {
  constructor() { super(); this.children = []; }
  add(child) { this.children.push(child); }
  operation() { return this.children.reduce((s, c) => s + c.operation(), 0); }
}
const tree = new Composite();
tree.add(new Leaf(1));
tree.add(new Leaf(2));
console.log(tree.operation());`,tests:[{input:[],expected:"3"}],hints:["Tree structure of components","Composite contains children"]},{id:"13-oop-oop-patterns-22",title:"Flyweight",starterCode:`const flyweights = {};
function getFlyweight(key) {
  if (!flyweights[key]) flyweights[key] = { key };
  return flyweights[key];
}
const a = getFlyweight('a');
const b = getFlyweight('a');
console.log(a === b);`,solution:`const flyweights = {};
function getFlyweight(key) {
  if (!flyweights[key]) flyweights[key] = { key };
  return flyweights[key];
}
const a = getFlyweight('a');
const b = getFlyweight('a');
console.log(a === b);`,tests:[{input:[],expected:"true"}],hints:["Share common state","Cache objects by key"]},{id:"13-oop-oop-patterns-23",title:"Repository",starterCode:`class Repository {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  findById(id) { return this.items.find(i => i.id === id); }
  findAll() { return this.items; }
}
const repo = new Repository();
repo.add({ id: 1, name: 'John' });
console.log(repo.findById(1).name);`,solution:`class Repository {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  findById(id) { return this.items.find(i => i.id === id); }
  findAll() { return this.items; }
}
const repo = new Repository();
repo.add({ id: 1, name: 'John' });
console.log(repo.findById(1).name);`,tests:[{input:[],expected:"John"}],hints:["Centralized data access","CRUD operations"]},{id:"13-oop-oop-patterns-24",title:"Service Locator",starterCode:`const services = {};
function register(name, service) { services[name] = service; }
function getService(name) { return services[name]; }
register('logger', { log: (msg) => console.log(msg) });
getService('logger').log('hello');`,solution:`const services = {};
function register(name, service) { services[name] = service; }
function getService(name) { return services[name]; }
register('logger', { log: (msg) => console.log(msg) });
getService('logger').log('hello');`,tests:[{input:[],expected:"hello"}],hints:["Registry of services","Look up by name"]},{id:"13-oop-oop-patterns-25",title:"Dependency Injection",starterCode:`class Service {
  getData() { return 'data'; }
}
class Consumer {
  constructor(service) { this.service = service; }
  use() { return this.service.getData(); }
}
const consumer = new Consumer(new Service());
console.log(consumer.use());`,solution:`class Service {
  getData() { return 'data'; }
}
class Consumer {
  constructor(service) { this.service = service; }
  use() { return this.service.getData(); }
}
const consumer = new Consumer(new Service());
console.log(consumer.use());`,tests:[{input:[],expected:"data"}],hints:["Pass dependencies to constructor","Loose coupling"]},{id:"13-oop-oop-patterns-26",title:"Event Sourcing",starterCode:`class EventStore {
  constructor() { this.events = []; }
  add(event) { this.events.push(event); }
  getEvents() { return this.events; }
}
const store = new EventStore();
store.add({ type: 'created', data: {} });
console.log(store.getEvents().length);`,solution:`class EventStore {
  constructor() { this.events = []; }
  add(event) { this.events.push(event); }
  getEvents() { return this.events; }
}
const store = new EventStore();
store.add({ type: 'created', data: {} });
console.log(store.getEvents().length);`,tests:[{input:[],expected:"1"}],hints:["Store events instead of state","Rebuild state from events"]},{id:"13-oop-oop-patterns-27",title:"CQRS",starterCode:`class CommandHandler {
  execute(cmd) { return 'executed ' + cmd; }
}
class QueryHandler {
  handle(query) { return 'result for ' + query; }
}
const cmd = new CommandHandler();
const q = new QueryHandler();
console.log(cmd.execute('create') + ' | ' + q.handle('read'));`,solution:`class CommandHandler {
  execute(cmd) { return 'executed ' + cmd; }
}
class QueryHandler {
  handle(query) { return 'result for ' + query; }
}
const cmd = new CommandHandler();
const q = new QueryHandler();
console.log(cmd.execute('create') + ' | ' + q.handle('read'));`,tests:[{input:[],expected:"executed create | result for read"}],hints:["Separate read and write models","Commands vs Queries"]},{id:"13-oop-oop-patterns-28",title:"Saga",starterCode:`class Saga {
  constructor() { this.steps = []; }
  addStep(fn) { this.steps.push(fn); }
  async execute() {
    for (const step of this.steps) {
      await step();
    }
    console.log('complete');
  }
}
const saga = new Saga();
saga.addStep(() => Promise.resolve());
saga.addStep(() => Promise.resolve());
saga.execute();`,solution:`class Saga {
  constructor() { this.steps = []; }
  addStep(fn) { this.steps.push(fn); }
  async execute() {
    for (const step of this.steps) {
      await step();
    }
    console.log('complete');
  }
}
const saga = new Saga();
saga.addStep(() => Promise.resolve());
saga.addStep(() => Promise.resolve());
saga.execute();`,tests:[{input:[],expected:"complete"}],hints:["Manage long-running processes","Sequential async steps"]},{id:"13-oop-oop-patterns-29",title:"Strategy Complete",starterCode:`class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(arr) { return this.strategy(arr); }
}
const asc = (arr) => [...arr].sort((a, b) => a - b);
const desc = (arr) => [...arr].sort((a, b) => b - a);
const sorter = new Sorter(asc);
console.log(sorter.sort([3, 1, 2]));`,solution:`class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(arr) { return this.strategy(arr); }
}
const asc = (arr) => [...arr].sort((a, b) => a - b);
const desc = (arr) => [...arr].sort((a, b) => b - a);
const sorter = new Sorter(asc);
console.log(sorter.sort([3, 1, 2]));`,tests:[{input:[],expected:"1,2,3"}],hints:["Inject strategy","Swap algorithm at runtime"]},{id:"13-oop-oop-patterns-30",title:"Observer Complete",starterCode:`class Store {
  constructor(state) { this.state = state; this.listeners = []; }
  subscribe(fn) { this.listeners.push(fn); }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(fn => fn(this.state));
  }
}
const store = new Store({ count: 0 });
store.subscribe(s => console.log(s.count));
store.setState({ count: 1 });`,solution:`class Store {
  constructor(state) { this.state = state; this.listeners = []; }
  subscribe(fn) { this.listeners.push(fn); }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(fn => fn(this.state));
  }
}
const store = new Store({ count: 0 });
store.subscribe(s => console.log(s.count));
store.setState({ count: 1 });`,tests:[{input:[],expected:"1"}],hints:["State management with observer","Notify on state change"]},{id:"13-oop-oop-patterns-31",title:"Patterns Practice",starterCode:`// Module, Singleton, Factory, Observer, Strategy
console.log("OOP patterns complete");`,solution:`// Module, Singleton, Factory, Observer, Strategy
console.log("OOP patterns complete");`,tests:[{input:[],expected:"OOP patterns complete"}],hints:["Review all design patterns","Apply in real projects"]},{id:"13-oop-oop-patterns-32",title:"Module Pattern",starterCode:`const counter = (function() {
  let count = 0;
  return { increment: () => ++count, getCount: () => count };
})();
counter.increment();
console.log(counter.getCount());`,solution:`const counter = (function() {
  let count = 0;
  return { increment: () => ++count, getCount: () => count };
})();
counter.increment();
console.log(counter.getCount());`,tests:[{input:[],expected:"1"}],hints:["IIFE creates private scope","Return public interface"]},{id:"13-oop-oop-patterns-33",title:"Singleton",starterCode:`class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b);`,solution:`class Singleton {
  static instance;
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
const a = new Singleton();
const b = new Singleton();
console.log(a === b);`,tests:[{input:[],expected:"true"}],hints:["Only one instance exists","Check if instance already created"]},{id:"13-oop-oop-patterns-34",title:"Factory",starterCode:`function create(type) {
  const types = { admin: { role: 'admin' }, user: { role: 'user' } };
  return { ...types[type] };
}
console.log(create('admin').role);`,solution:`function create(type) {
  const types = { admin: { role: 'admin' }, user: { role: 'user' } };
  return { ...types[type] };
}
console.log(create('admin').role);`,tests:[{input:[],expected:"admin"}],hints:["Factory creates objects by type","No new keyword needed"]},{id:"13-oop-oop-patterns-35",title:"Observer Pattern",starterCode:`class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const s = new Subject();
s.subscribe(d => console.log(d));
s.notify('event');`,solution:`class Subject {
  constructor() { this.observers = []; }
  subscribe(fn) { this.observers.push(fn); }
  notify(data) { this.observers.forEach(fn => fn(data)); }
}
const s = new Subject();
s.subscribe(d => console.log(d));
s.notify('event');`,tests:[{input:[],expected:"event"}],hints:["Subject maintains observer list","notify calls all observers"]},{id:"13-oop-oop-patterns-36",title:"Pub/Sub",starterCode:`const pubsub = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
pubsub.on('msg', m => console.log(m));
pubsub.emit('msg', 'hi');`,solution:`const pubsub = {
  events: {},
  on(e, fn) { (this.events[e] = this.events[e] || []).push(fn); },
  emit(e, d) { (this.events[e] || []).forEach(fn => fn(d)); }
};
pubsub.on('msg', m => console.log(m));
pubsub.emit('msg', 'hi');`,tests:[{input:[],expected:"hi"}],hints:["on subscribes, emit publishes","Events object stores callbacks"]},{id:"13-oop-oop-patterns-37",title:"Strategy Pattern",starterCode:`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 3, 2));`,solution:`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 3, 2));`,tests:[{input:[],expected:"5"}],hints:["Strategy object holds algorithms","Select at runtime"]},{id:"13-oop-oop-patterns-38",title:"Decorator Pattern",starterCode:`function withTimestamp(fn) {
  return function(...args) {
    console.log('called at ' + Date.now());
    return fn(...args);
  };
}
const greet = withTimestamp(() => 'hello');
greet();`,solution:`function withTimestamp(fn) {
  return function(...args) {
    console.log('called at ' + Date.now());
    return fn(...args);
  };
}
const greet = withTimestamp(() => 'hello');
greet();`,tests:[{input:[],expected:"called at"}],hints:["Decorator wraps function","Add behavior before/after"]},{id:"13-oop-oop-patterns-39",title:"State Pattern",starterCode:`class State { handle() { return 'default'; } }
class OnState extends State { handle() { return 'on'; } }
class OffState extends State { handle() { return 'off'; } }
const states = { on: new OnState(), off: new OffState() };
console.log(states.on.handle());`,solution:`class State { handle() { return 'default'; } }
class OnState extends State { handle() { return 'on'; } }
class OffState extends State { handle() { return 'off'; } }
const states = { on: new OnState(), off: new OffState() };
console.log(states.on.handle());`,tests:[{input:[],expected:"on"}],hints:["Each state is a class","Switch between state objects"]},{id:"13-oop-oop-patterns-40",title:"Mixin Pattern",starterCode:`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User { constructor(n) { this.name = n; } }
Object.assign(User.prototype, Serializable);
console.log(new User('X').serialize());`,solution:`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User { constructor(n) { this.name = n; } }
Object.assign(User.prototype, Serializable);
console.log(new User('X').serialize());`,tests:[{input:[],expected:'{"name":"X"}'}],hints:["Mixin adds methods to prototype","Object.assign merges"]},{id:"13-oop-oop-patterns-41",title:"Adapter Pattern",starterCode:`class OldAPI { getData() { return { f: 'A', l: 'B' }; } }
class Adapter {
  constructor(old) { this.old = old; }
  getName() { const d = this.old.getData(); return d.f + ' ' + d.l; }
}
console.log(new Adapter(new OldAPI()).getName());`,solution:`class OldAPI { getData() { return { f: 'A', l: 'B' }; } }
class Adapter {
  constructor(old) { this.old = old; }
  getName() { const d = this.old.getData(); return d.f + ' ' + d.l; }
}
console.log(new Adapter(new OldAPI()).getName());`,tests:[{input:[],expected:"A B"}],hints:["Adapter wraps old interface","Converts to new interface"]},{id:"13-oop-oop-patterns-42",title:"Proxy Pattern",starterCode:`const handler = {
  get(t, p) { return p in t ? t[p] : 'default'; }
};
const proxy = new Proxy({ x: 1 }, handler);
console.log(proxy.x + ' ' + proxy.y);`,solution:`const handler = {
  get(t, p) { return p in t ? t[p] : 'default'; }
};
const proxy = new Proxy({ x: 1 }, handler);
console.log(proxy.x + ' ' + proxy.y);`,tests:[{input:[],expected:"1 default"}],hints:["Proxy intercepts operations","handler defines traps"]},{id:"13-oop-oop-patterns-43",title:"Builder Pattern",starterCode:`class QueryBuilder {
  constructor() { this.q = []; }
  select(f) { this.q.push('SELECT ' + f); return this; }
  from(t) { this.q.push('FROM ' + t); return this; }
  build() { return this.q.join(' '); }
}
console.log(new QueryBuilder().select('*').from('t').build());`,solution:`class QueryBuilder {
  constructor() { this.q = []; }
  select(f) { this.q.push('SELECT ' + f); return this; }
  from(t) { this.q.push('FROM ' + t); return this; }
  build() { return this.q.join(' '); }
}
console.log(new QueryBuilder().select('*').from('t').build());`,tests:[{input:[],expected:"SELECT * FROM t"}],hints:["Each method returns this","build() assembles result"]},{id:"13-oop-oop-patterns-44",title:"Command Pattern",starterCode:`class Cmd { execute() {} }
class LogCmd extends Cmd {
  constructor(msg) { super(); this.msg = msg; }
  execute() { console.log(this.msg); }
}
new LogCmd('hello').execute();`,solution:`class Cmd { execute() {} }
class LogCmd extends Cmd {
  constructor(msg) { super(); this.msg = msg; }
  execute() { console.log(this.msg); }
}
new LogCmd('hello').execute();`,tests:[{input:[],expected:"hello"}],hints:["Command encapsulates action","execute() performs it"]},{id:"13-oop-oop-patterns-45",title:"Iterator Pattern",starterCode:`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,solution:`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,tests:[{input:[],expected:"1,2,3"}],hints:["Symbol.iterator makes iterable","next() returns value/done"]},{id:"13-oop-oop-patterns-46",title:"Mediator Pattern",starterCode:`class Room {
  constructor() { this.users = []; }
  join(u) { this.users.push(u); }
  send(msg, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(msg));
  }
}
class User {
  constructor(n, r) { this.name = n; r.join(this); this.room = r; }
  send(m) { this.room.send(m, this); }
  receive(m) { console.log(this.name + ': ' + m); }
}
const r = new Room();
const u1 = new User('A', r);
const u2 = new User('B', r);
u1.send('hi');`,solution:`class Room {
  constructor() { this.users = []; }
  join(u) { this.users.push(u); }
  send(msg, sender) {
    this.users.filter(u => u !== sender).forEach(u => u.receive(msg));
  }
}
class User {
  constructor(n, r) { this.name = n; r.join(this); this.room = r; }
  send(m) { this.room.send(m, this); }
  receive(m) { console.log(this.name + ': ' + m); }
}
const r = new Room();
const u1 = new User('A', r);
const u2 = new User('B', r);
u1.send('hi');`,tests:[{input:[],expected:"B: hi"}],hints:["Mediator coordinates communication","Users don't talk directly"]},{id:"13-oop-oop-patterns-47",title:"Memento Pattern",starterCode:`class Editor {
  constructor() { this.text = ''; }
  type(t) { this.text += t; }
  save() { return { text: this.text }; }
  restore(s) { this.text = s.text; }
}
const e = new Editor();
e.type('a ');
const snap = e.save();
e.type('b');
e.restore(snap);
console.log(e.text);`,solution:`class Editor {
  constructor() { this.text = ''; }
  type(t) { this.text += t; }
  save() { return { text: this.text }; }
  restore(s) { this.text = s.text; }
}
const e = new Editor();
e.type('a ');
const snap = e.save();
e.type('b');
e.restore(snap);
console.log(e.text);`,tests:[{input:[],expected:"a "}],hints:["Save creates snapshot","Restore reverts to snapshot"]},{id:"13-oop-oop-patterns-48",title:"Visitor Pattern",starterCode:`class Shape { accept(v) { return v.visit(this); } }
class Rect extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
}
class AreaV { visit(r) { return r.w * r.h; } }
console.log(new Rect(3, 4).accept(new AreaV()));`,solution:`class Shape { accept(v) { return v.visit(this); } }
class Rect extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
}
class AreaV { visit(r) { return r.w * r.h; } }
console.log(new Rect(3, 4).accept(new AreaV()));`,tests:[{input:[],expected:"12"}],hints:["Visitor adds operations","accept calls visitor.visit"]},{id:"13-oop-oop-patterns-49",title:"Chain of Responsibility",starterCode:`class Handler {
  setNext(h) { this.next = h; return h; }
  handle(r) { return this.next ? this.next.handle(r) : null; }
}
class A extends Handler {
  handle(r) { return r.a ? 'a ok' : super.handle(r); }
}
const chain = new A();
chain.setNext(new Handler());
console.log(chain.handle({ a: true }));`,solution:`class Handler {
  setNext(h) { this.next = h; return h; }
  handle(r) { return this.next ? this.next.handle(r) : null; }
}
class A extends Handler {
  handle(r) { return r.a ? 'a ok' : super.handle(r); }
}
const chain = new A();
chain.setNext(new Handler());
console.log(chain.handle({ a: true }));`,tests:[{input:[],expected:"a ok"}],hints:["Chain handlers","Each handles or passes to next"]},{id:"13-oop-oop-patterns-50",title:"Composite Pattern",starterCode:`class Item { price() { return 0; } }
class Product extends Item {
  constructor(p) { super(); this.p = p; }
  price() { return this.p; }
}
class Box extends Item {
  constructor() { super(); this.items = []; }
  add(i) { this.items.push(i); }
  price() { return this.items.reduce((s, i) => s + i.price(), 0); }
}
const box = new Box();
box.add(new Product(10));
box.add(new Product(20));
console.log(box.price());`,solution:`class Item { price() { return 0; } }
class Product extends Item {
  constructor(p) { super(); this.p = p; }
  price() { return this.p; }
}
class Box extends Item {
  constructor() { super(); this.items = []; }
  add(i) { this.items.push(i); }
  price() { return this.items.reduce((s, i) => s + i.price(), 0); }
}
const box = new Box();
box.add(new Product(10));
box.add(new Product(20));
console.log(box.price());`,tests:[{input:[],expected:"30"}],hints:["Tree structure","Composite contains children"]}],"13-oop-02-prototypes-this":[{id:"13-oop-prototypes-this-01",title:"Prototype Chain",starterCode:`const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);`,solution:`const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);`,tests:[{input:[],expected:"true"}],hints:["Object.getPrototypeOf gets prototype","obj inherits from Object.prototype"]},{id:"13-oop-prototypes-this-02",title:"__proto__ Property",starterCode:`const obj = { a: 1 };
const child = Object.create(obj);
console.log(child.__proto__ === obj);`,solution:`const obj = { a: 1 };
const child = Object.create(obj);
console.log(child.__proto__ === obj);`,tests:[{input:[],expected:"true"}],hints:["__proto__ is reference to prototype","Object.create sets prototype"]},{id:"13-oop-prototypes-this-03",title:"This in Function",starterCode:`function greet() {
  console.log(this);
}
greet();`,solution:`function greet() {
  console.log(this);
}
greet();`,tests:[{input:[],expected:"[object Object]"}],hints:["this in global function is globalThis","In strict mode, this is undefined"]},{id:"13-oop-prototypes-this-04",title:"This in Object Method",starterCode:`const obj = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
obj.greet();`,solution:`const obj = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
obj.greet();`,tests:[{input:[],expected:"John"}],hints:["this refers to calling object","obj is calling greet"]},{id:"13-oop-prototypes-this-05",title:"This in Arrow",starterCode:`const obj = {
  name: 'John',
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();`,solution:`const obj = {
  name: 'John',
  greet: () => {
    console.log(this.name);
  }
};
obj.greet();`,tests:[{input:[],expected:"undefined"}],hints:["Arrow functions don't bind this","this is lexical (enclosing scope)"]},{id:"13-oop-prototypes-this-06",title:"Call Method",starterCode:`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
greet.call({ name: 'John' }, 'Hello');`,solution:`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
greet.call({ name: 'John' }, 'Hello');`,tests:[{input:[],expected:"Hello John"}],hints:["call sets this and passes args","First arg is this context"]},{id:"13-oop-prototypes-this-07",title:"Apply Method",starterCode:`function greet(greeting, punct) {
  console.log(greeting + ' ' + this.name + punct);
}
greet.apply({ name: 'John' }, ['Hello', '!']);`,solution:`function greet(greeting, punct) {
  console.log(greeting + ' ' + this.name + punct);
}
greet.apply({ name: 'John' }, ['Hello', '!']);`,tests:[{input:[],expected:"Hello John!"}],hints:["apply takes args as array","Same as call but with array"]},{id:"13-oop-prototypes-this-08",title:"Bind Method",starterCode:`function greet() {
  console.log(this.name);
}
const bound = greet.bind({ name: 'John' });
bound();`,solution:`function greet() {
  console.log(this.name);
}
const bound = greet.bind({ name: 'John' });
bound();`,tests:[{input:[],expected:"John"}],hints:["bind returns new function","this is permanently set"]},{id:"13-oop-prototypes-this-09",title:"Prototype Methods",starterCode:`function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};
const p = new Person('John');
console.log(p.greet());`,solution:`function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};
const p = new Person('John');
console.log(p.greet());`,tests:[{input:[],expected:"Hello John"}],hints:["Methods go on prototype","Shared across instances"]},{id:"13-oop-prototypes-this-10",title:"Object.create",starterCode:`const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,solution:`const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,tests:[{input:[],expected:"hi"}],hints:["Object.create creates new object","Sets prototype to argument"]},{id:"13-oop-prototypes-this-11",title:"instanceof",starterCode:`function Animal() {}
const a = new Animal();
console.log(a instanceof Animal);`,solution:`function Animal() {}
const a = new Animal();
console.log(a instanceof Animal);`,tests:[{input:[],expected:"true"}],hints:["instanceof checks prototype chain","Returns boolean"]},{id:"13-oop-prototypes-this-12",title:"This Binding Patterns",starterCode:`const obj = {
  name: 'John',
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular();`,solution:`const obj = {
  name: 'John',
  regular() { console.log(this.name); },
  arrow: () => { console.log(this.name); }
};
obj.regular();`,tests:[{input:[],expected:"John"}],hints:["Regular function: this is obj","Arrow: this is enclosing scope"]},{id:"13-oop-prototypes-this-13",title:"This in Class",starterCode:`class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
new Person('John').greet();`,solution:`class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(this.name); }
}
new Person('John').greet();`,tests:[{input:[],expected:"John"}],hints:["Class methods work like prototype","this is the instance"]},{id:"13-oop-prototypes-this-14",title:"This in Event",starterCode:`const btn = { name: 'button' };
// btn.addEventListener('click', function() {
//   console.log(this.name); // 'button'
// });
console.log("this is the element with listener");`,solution:`const btn = { name: 'button' };
// btn.addEventListener('click', function() {
//   console.log(this.name); // 'button'
// });
console.log("this is the element with listener");`,tests:[{input:[],expected:"this is the element with listener"}],hints:["In event handler, this is element","Not the object containing method"]},{id:"13-oop-prototypes-this-15",title:"This in Callback",starterCode:`const obj = {
  name: 'John',
  delayed() {
    setTimeout(function() {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,solution:`const obj = {
  name: 'John',
  delayed() {
    setTimeout(function() {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,tests:[{input:[],expected:"undefined"}],hints:["Callback loses this binding","this becomes global"]},{id:"13-oop-prototypes-this-16",title:"This in Constructor",starterCode:`function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name);`,solution:`function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name);`,tests:[{input:[],expected:"John"}],hints:["new creates empty object","this refers to new object"]},{id:"13-oop-prototypes-this-17",title:"Prototype Inheritance",starterCode:`function Animal() { this.type = 'animal'; }
function Dog() { Animal.call(this); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const d = new Dog();
console.log(d.type);`,solution:`function Animal() { this.type = 'animal'; }
function Dog() { Animal.call(this); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const d = new Dog();
console.log(d.type);`,tests:[{input:[],expected:"animal"}],hints:["Object.create for prototype chain","Call parent constructor"]},{id:"13-oop-prototypes-this-18",title:"getPrototypeOf",starterCode:`const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype);`,solution:`const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype);`,tests:[{input:[],expected:"true"}],hints:["getPrototypeOf returns prototype","Compare with Object.prototype"]},{id:"13-oop-prototypes-this-19",title:"setPrototypeOf",starterCode:`const obj = { a: 1 };
const child = {};
Object.setPrototypeOf(child, obj);
console.log(child.a);`,solution:`const obj = { a: 1 };
const child = {};
Object.setPrototypeOf(child, obj);
console.log(child.a);`,tests:[{input:[],expected:"1"}],hints:["setPrototypeOf changes prototype","Child can access parent properties"]},{id:"13-oop-prototypes-this-20",title:"Prototype Pollution",starterCode:`// Warning: prototype pollution is a security risk
const obj = {};
Object.prototype.polluted = 'yes';
console.log({}.polluted);`,solution:`// Warning: prototype pollution is a security risk
const obj = {};
Object.prototype.polluted = 'yes';
console.log({}.polluted);`,tests:[{input:[],expected:"yes"}],hints:["Modifying Object.prototype affects all","Security vulnerability"]},{id:"13-oop-prototypes-this-21",title:"This Lost",starterCode:`const obj = {
  name: 'John',
  greet() { console.log(this.name); }
};
const fn = obj.greet;
fn();`,solution:`const obj = {
  name: 'John',
  greet() { console.log(this.name); }
};
const fn = obj.greet;
fn();`,tests:[{input:[],expected:"undefined"}],hints:["this is lost when function is extracted","Use bind to fix"]},{id:"13-oop-prototypes-this-22",title:"Bind Partial",starterCode:`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,solution:`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,tests:[{input:[],expected:"10"}],hints:["bind can prefill arguments","First arg is this, rest are params"]},{id:"13-oop-prototypes-this-23",title:"Call Args",starterCode:`function sum(a, b) { return a + b; }
console.log(sum.call(null, 1, 2));`,solution:`function sum(a, b) { return a + b; }
console.log(sum.call(null, 1, 2));`,tests:[{input:[],expected:"3"}],hints:["call passes args individually","First arg is this context"]},{id:"13-oop-prototypes-this-24",title:"Apply Array",starterCode:`function sum(a, b) { return a + b; }
console.log(sum.apply(null, [1, 2]));`,solution:`function sum(a, b) { return a + b; }
console.log(sum.apply(null, [1, 2]));`,tests:[{input:[],expected:"3"}],hints:["apply takes args as array","Same as call but with array"]},{id:"13-oop-prototypes-this-25",title:"This Arrow Fix",starterCode:`const obj = {
  name: 'John',
  delayed() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,solution:`const obj = {
  name: 'John',
  delayed() {
    setTimeout(() => {
      console.log(this.name);
    }, 10);
  }
};
obj.delayed();`,tests:[{input:[],expected:"John"}],hints:["Arrow function captures this","Use arrow for callbacks"]},{id:"13-oop-prototypes-this-26",title:"Chain Depth",starterCode:`function A() {}
A.prototype = Object.create(null);
const a = new A();
console.log(Object.getPrototypeOf(a) === A.prototype);`,solution:`function A() {}
A.prototype = Object.create(null);
const a = new A();
console.log(Object.getPrototypeOf(a) === A.prototype);`,tests:[{input:[],expected:"true"}],hints:["Object.create(null) has no prototype","Clean prototype chain"]},{id:"13-oop-prototypes-this-27",title:"__proto__ vs prototype",starterCode:`function Foo() {}
const f = new Foo();
console.log(f.__proto__ === Foo.prototype);`,solution:`function Foo() {}
const f = new Foo();
console.log(f.__proto__ === Foo.prototype);`,tests:[{input:[],expected:"true"}],hints:["__proto__ is instance reference","prototype is on constructor"]},{id:"13-oop-prototypes-this-28",title:"instanceof Polyfill",starterCode:`function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === Constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
console.log(myInstanceof(new Date(), Date));`,solution:`function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === Constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
console.log(myInstanceof(new Date(), Date));`,tests:[{input:[],expected:"true"}],hints:["Walk up prototype chain","Compare with Constructor.prototype"]},{id:"13-oop-prototypes-this-29",title:"This Practice",starterCode:`const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  result() { return this.value; }
};
console.log(calculator.add(5).add(3).result());`,solution:`const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  result() { return this.value; }
};
console.log(calculator.add(5).add(3).result());`,tests:[{input:[],expected:"8"}],hints:["Return this for chaining","this is the calculator object"]},{id:"13-oop-prototypes-this-30",title:"Prototype Practice",starterCode:`function Car(make) { this.make = make; }
Car.prototype.toString = function() {
  return 'Car: ' + this.make;
};
console.log(new Car('Toyota').toString());`,solution:`function Car(make) { this.make = make; }
Car.prototype.toString = function() {
  return 'Car: ' + this.make;
};
console.log(new Car('Toyota').toString());`,tests:[{input:[],expected:"Car: Toyota"}],hints:["Add methods to prototype","Shared across instances"]},{id:"13-oop-prototypes-this-31",title:"This Interview",starterCode:`// Q: What is 'this'?
// A: Depends on how function is called
console.log("this depends on call context");`,solution:`// Q: What is 'this'?
// A: Depends on how function is called
console.log("this depends on call context");`,tests:[{input:[],expected:"this depends on call context"}],hints:["this is determined at call time","Not at definition time"]},{id:"13-oop-prototypes-this-32",title:"OOP Complete",starterCode:`// Prototypes, this, call/apply/bind
console.log("prototypes and this complete");`,solution:`// Prototypes, this, call/apply/bind
console.log("prototypes and this complete");`,tests:[{input:[],expected:"prototypes and this complete"}],hints:["Review all prototype concepts","Master this binding"]},{id:"13-oop-prototypes-this-33",title:"Prototype Chain",starterCode:`const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);`,solution:`const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);`,tests:[{input:[],expected:"true"}],hints:["Object.getPrototypeOf gets prototype","obj inherits from Object.prototype"]},{id:"13-oop-prototypes-this-34",title:"This in Method",starterCode:`const person = {
  name: 'Alice',
  sayHi() { return 'Hi ' + this.name; }
};
console.log(person.sayHi());`,solution:`const person = {
  name: 'Alice',
  sayHi() { return 'Hi ' + this.name; }
};
console.log(person.sayHi());`,tests:[{input:[],expected:"Hi Alice"}],hints:["this is the calling object","person is calling sayHi"]},{id:"13-oop-prototypes-this-35",title:"Call Apply Bind",starterCode:`function greet(greeting) { return greeting + ' ' + this.name; }
const ctx = { name: 'Bob' };
console.log(greet.call(ctx, 'Hey'));`,solution:`function greet(greeting) { return greeting + ' ' + this.name; }
const ctx = { name: 'Bob' };
console.log(greet.call(ctx, 'Hey'));`,tests:[{input:[],expected:"Hey Bob"}],hints:["call sets this and passes args","First arg is context"]},{id:"13-oop-prototypes-this-36",title:"Arrow This",starterCode:`const obj = {
  name: 'test',
  getArrow: () => this.name
};
console.log(obj.getArrow());`,solution:`const obj = {
  name: 'test',
  getArrow: () => this.name
};
console.log(obj.getArrow());`,tests:[{input:[],expected:"undefined"}],hints:["Arrow doesn't bind this","this is from outer scope"]},{id:"13-oop-prototypes-this-37",title:"Object Create",starterCode:`const proto = { greet() { return 'hello'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,solution:`const proto = { greet() { return 'hello'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,tests:[{input:[],expected:"hello"}],hints:["Object.create creates with prototype","Inherits from proto"]},{id:"13-oop-prototypes-this-38",title:"Prototype Method",starterCode:`function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' speaks'; };
console.log(new Animal('Cat').speak());`,solution:`function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' speaks'; };
console.log(new Animal('Cat').speak());`,tests:[{input:[],expected:"Cat speaks"}],hints:["Methods on prototype are shared","this refers to instance"]},{id:"13-oop-prototypes-this-39",title:"Bind Partial Application",starterCode:`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,solution:`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,tests:[{input:[],expected:"10"}],hints:["bind prefills arguments","First arg is this"]},{id:"13-oop-prototypes-this-40",title:"This in Callback",starterCode:`const obj = {
  name: 'test',
  delayed() {
    setTimeout(function() { console.log(this.name); }.bind(this), 10);
  }
};
obj.delayed();`,solution:`const obj = {
  name: 'test',
  delayed() {
    setTimeout(function() { console.log(this.name); }.bind(this), 10);
  }
};
obj.delayed();`,tests:[{input:[],expected:"test"}],hints:["bind fixes this in callback","Pass context to bind"]},{id:"13-oop-prototypes-this-41",title:"Prototype Inheritance",starterCode:`function Parent() { this.type = 'parent'; }
function Child() { Parent.call(this); }
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
console.log(c.type);`,solution:`function Parent() { this.type = 'parent'; }
function Child() { Parent.call(this); }
Child.prototype = Object.create(Parent.prototype);
const c = new Child();
console.log(c.type);`,tests:[{input:[],expected:"parent"}],hints:["Object.create for prototype chain","Call parent constructor"]},{id:"13-oop-prototypes-this-42",title:"Instanceof",starterCode:`function Dog() {}
const d = new Dog();
console.log(d instanceof Dog);`,solution:`function Dog() {}
const d = new Dog();
console.log(d instanceof Dog);`,tests:[{input:[],expected:"true"}],hints:["instanceof checks prototype chain","Returns boolean"]},{id:"13-oop-prototypes-this-43",title:"This Lost Fix",starterCode:`const obj = {
  name: 'lost',
  getName() { return this.name; }
};
const fn = obj.getName.bind(obj);
console.log(fn());`,solution:`const obj = {
  name: 'lost',
  getName() { return this.name; }
};
const fn = obj.getName.bind(obj);
console.log(fn());`,tests:[{input:[],expected:"lost"}],hints:["bind fixes lost this","Returns bound function"]},{id:"13-oop-prototypes-this-44",title:"SetPrototypeOf",starterCode:`const parent = { type: 'parent' };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.type);`,solution:`const parent = { type: 'parent' };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.type);`,tests:[{input:[],expected:"parent"}],hints:["setPrototypeOf changes prototype","child inherits from parent"]},{id:"13-oop-prototypes-this-45",title:"Prototype Pollution Warning",starterCode:`// Modifying Object.prototype affects ALL objects
console.log("prototype pollution is dangerous");`,solution:`// Modifying Object.prototype affects ALL objects
console.log("prototype pollution is dangerous");`,tests:[{input:[],expected:"prototype pollution is dangerous"}],hints:["Never modify Object.prototype","Security vulnerability"]},{id:"13-oop-prototypes-this-46",title:"This in Constructor",starterCode:`function User(name) { this.name = name; }
const u = new User('Charlie');
console.log(u.name);`,solution:`function User(name) { this.name = name; }
const u = new User('Charlie');
console.log(u.name);`,tests:[{input:[],expected:"Charlie"}],hints:["new creates empty object","this is the new object"]},{id:"13-oop-prototypes-this-47",title:"Chain Depth",starterCode:`function A() {}
function B() extends A {}
function C() extends B {}
const c = new C();
console.log(c instanceof A);`,solution:`function A() {}
function B() extends A {}
function C() extends B {}
const c = new C();
console.log(c instanceof A);`,tests:[{input:[],expected:"true"}],hints:["Deep prototype chain","instanceof walks the chain"]},{id:"13-oop-prototypes-this-48",title:"Apply Array Args",starterCode:`function sum(a, b, c) { return a + b + c; }
console.log(sum.apply(null, [1, 2, 3]));`,solution:`function sum(a, b, c) { return a + b + c; }
console.log(sum.apply(null, [1, 2, 3]));`,tests:[{input:[],expected:"6"}],hints:["apply takes args as array","Same as call with array"]},{id:"13-oop-prototypes-this-49",title:"This in Class",starterCode:`class Counter {
  constructor() { this.count = 0; }
  increment() { this.count++; return this; }
}
const c = new Counter();
c.increment().increment();
console.log(c.count);`,solution:`class Counter {
  constructor() { this.count = 0; }
  increment() { this.count++; return this; }
}
const c = new Counter();
c.increment().increment();
console.log(c.count);`,tests:[{input:[],expected:"2"}],hints:["Class methods use this","Return this for chaining"]},{id:"13-oop-prototypes-this-50",title:"Prototype Complete",starterCode:`// Prototype chain, this, call/apply/bind
console.log("prototypes review complete");`,solution:`// Prototype chain, this, call/apply/bind
console.log("prototypes review complete");`,tests:[{input:[],expected:"prototypes review complete"}],hints:["Review all concepts","Practice with code"]}]};export{e as default};
