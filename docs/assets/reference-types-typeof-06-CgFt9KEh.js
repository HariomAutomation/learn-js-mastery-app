const e="02-data-types-reference-types-typeof-06",t="Create two references to same object",o=`const a = { x: 1 };
const b = ;
console.log(a === b);`,s=`const a = { x: 1 };
const b = a;
console.log(a === b);`,n=[{input:[],expected:"true"}],c=["Assignment copies the reference","Both variables point to the same object"],a={id:e,title:t,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
