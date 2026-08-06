const r="02-data-types-reference-types-typeof",e="Reference vs Value ka farq samjho",a=`// 1. Primitive copy — independent hai:
let a = 10
let b = a
b = 99
console.log("a =", a, "b =", b)  // a = 10? b = 99?

// 2. Reference copy — same memory point karte hain:
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log("arr1 =", arr1)  // kya aayega?
console.log("arr2 =", arr2)

// 3. Ab copy ko independent banao (spread):
let arr3 = [...arr1]
arr3.push(5)
console.log("arr1 =", arr1, "arr3 =", arr3)
`,n=`let a = 10
let b = a
b = 99
console.log("a =", a, "b =", b)  // a = 10 b = 99 (independent)
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log("arr1 =", arr1)  // [1,2,3,4] — same reference!
console.log("arr2 =", arr2)  // [1,2,3,4]
let arr3 = [...arr1]
arr3.push(5)
console.log("arr1 =", arr1, "arr3 =", arr3)  // arr1 [1,2,3,4], arr3 [1,2,3,4,5]`,o=[{input:[],expected:"a = 10 b = 99"}],t=["Primitives copy by value — har ek independent","Arrays/objects copy by reference — same memory location","Spread [...arr] naya array banata hai"],s={id:r,title:e,starterCode:a,solution:n,tests:o,hints:t};export{s as default,t as hints,r as id,n as solution,a as starterCode,o as tests,e as title};
