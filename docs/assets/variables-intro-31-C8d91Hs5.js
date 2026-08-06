const o="01-variables-declarations-variables-intro-31",t="Structured clone deep copy",n=`const original = { a: { b: 1 } }
const copy = structuredClone(original)
copy.a.b = 99
console.log(original.a.b)`,e=`const original = { a: { b: 1 } }
const copy = structuredClone(original)
copy.a.b = 99
console.log(original.a.b)`,s=[{input:[],expected:"1"}],c=["structuredClone creates deep copy"],i={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{i as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
