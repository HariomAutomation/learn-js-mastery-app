const o="02-data-types-coercion-truthy-falsy",n="Coercion aur truthy/falsy predict karo",l=`// Pehle har line ka output predict karo, phir run karo:
console.log("5" + 1)          // ?
console.log("5" - 1)          // ?
console.log(true + 1)         // ?
console.log(null + 1)         // ?
console.log(undefined + 1)    // ?
console.log("5" + null)       // ?

// Truthy ya falsy?
console.log(Boolean("0"))     // ?
console.log(Boolean([]))       // ?
console.log(Boolean({}))       // ?
console.log(Boolean(0))        // ?
console.log(Boolean("false")) // ?
`,e=`console.log("5" + 1)       // "51" (string concat)
console.log("5" - 1)       // 4 (string → number)
console.log(true + 1)      // 2
console.log(null + 1)      // 1 (null → 0)
console.log(undefined + 1) // NaN
console.log("5" + null)    // "5null"
console.log(Boolean("0"))     // true
console.log(Boolean([]))       // true
console.log(Boolean({}))       // true
console.log(Boolean(0))        // false
console.log(Boolean("false")) // true`,s=[{input:[],expected:"51"}],t=["+ string ke saath concat karta hai, - subtract karta hai",'6 falsy: false, 0, "", null, undefined, NaN','"0", "false", [], {} — sab truthy'],a={id:o,title:n,starterCode:l,solution:e,tests:s,hints:t};export{a as default,t as hints,o as id,e as solution,l as starterCode,s as tests,n as title};
