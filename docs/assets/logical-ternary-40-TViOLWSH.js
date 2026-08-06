const t="03-operators-logical-ternary-40",e="Short circuit AND return value",o=`const result = true && "hello";
console.log(result);`,s=`const result = true && "hello";
console.log(result);`,l=[{input:[],expected:"hello"}],r=["&& returns last value if all truthy","true is truthy, so returns 'hello'"],n={id:t,title:e,starterCode:o,solution:s,tests:l,hints:r};export{n as default,r as hints,t as id,s as solution,o as starterCode,l as tests,e as title};
