const t="03-operators-logical-ternary-01",s="Logical AND with truthy values",o=`const result = true && 42;
console.log(result);`,e=`const result = true && 42;
console.log(result);`,r=[{input:[],expected:"42"}],l=["&& returns first falsy or last value","Both are truthy, so returns last"],n={id:t,title:s,starterCode:o,solution:e,tests:r,hints:l};export{n as default,l as hints,t as id,e as solution,o as starterCode,r as tests,s as title};
