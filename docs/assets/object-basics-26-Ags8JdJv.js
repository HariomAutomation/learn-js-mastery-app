const t="08-objects-object-basics-26",e="Omit",o=`const obj = {a: 1, b: 2, c: 3, d: 4};
const omitted = Object.fromEntries(Object.entries(obj).filter(([k]) => !['b', 'd'].includes(k)));
console.log(omitted);`,s=`const obj = {a: 1, b: 2, c: 3, d: 4};
const omitted = Object.fromEntries(Object.entries(obj).filter(([k]) => !['b', 'd'].includes(k)));
console.log(omitted);`,c=[{input:[],expected:"{ a: 1, c: 3 }"}],i=["Exclude specific keys","Omit properties"],n={id:t,title:e,starterCode:o,solution:s,tests:c,hints:i};export{n as default,i as hints,t as id,s as solution,o as starterCode,c as tests,e as title};
