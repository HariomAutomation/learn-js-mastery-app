const o="08-objects-object-basics-08",t="Spread Objects",e=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,s=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,c=[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],n=["Spread merges objects","Later overrides earlier"],b={id:o,title:t,starterCode:e,solution:s,tests:c,hints:n};export{b as default,n as hints,o as id,s as solution,e as starterCode,c as tests,t as title};
