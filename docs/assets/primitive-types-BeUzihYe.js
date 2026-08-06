const n="02-data-types-primitive-types",e="Primitive types ka collection banao",o=`// Saare primitive types ke examples banao:
let myString = "Hello JS"       // string
let myNumber = 42                // number
let myBoolean = true             // boolean
let myNull = null                // null
let myUndefined                  // undefined
let myBigInt = 123456789012345678901234567890n // bigint
let mySymbol = Symbol("id")     // symbol

// Har ek ka typeof print karo
console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof myBigInt)
console.log(typeof mySymbol)
`,t=`let myString = "Hello JS"
let myNumber = 42
let myBoolean = true
let myNull = null
let myUndefined
let myBigInt = 123456789012345678901234567890n
let mySymbol = Symbol("id")
console.log(typeof myString)      // string
console.log(typeof myNumber)      // number
console.log(typeof myBoolean)     // boolean
console.log(typeof myNull)        // object (bug!)
console.log(typeof myUndefined)   // undefined
console.log(typeof myBigInt)      // bigint
console.log(typeof mySymbol)      // symbol`,l=[{input:[],expected:"string"}],i=["7 primitives hain: string, number, boolean, null, undefined, bigint, symbol","typeof null ka 'object' aata hai — famous bug","BigInt ke end mein n lagta hai"],y={id:n,title:e,starterCode:o,solution:t,tests:l,hints:i};export{y as default,i as hints,n as id,t as solution,o as starterCode,l as tests,e as title};
