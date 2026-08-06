const t="03-operators-logical-ternary-41",s="Short circuit OR return value",l=`const result = false || "fallback";
console.log(result);`,e=`const result = false || "fallback";
console.log(result);`,o=[{input:[],expected:"fallback"}],r=["|| returns first truthy","false is falsy, so returns 'fallback'"],n={id:t,title:s,starterCode:l,solution:e,tests:o,hints:r};export{n as default,r as hints,t as id,e as solution,l as starterCode,o as tests,s as title};
