const e="02-data-types-reference-types-typeof-38",t="Spread creates new object",s=`const a = { x: 1 };
const b = { ...a, y: 2 };
console.log(b);`,o=`const a = { x: 1 };
const b = { ...a, y: 2 };
console.log(b);`,n=[{input:[],expected:"{ x: 1, y: 2 }"}],c=["Spread can add new properties","Creates a new object"],a={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{a as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
