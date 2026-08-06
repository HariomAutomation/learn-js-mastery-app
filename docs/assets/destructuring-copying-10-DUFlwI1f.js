const t="08-objects-destructuring-copying-10",o="Merge Spread",e=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,n=`const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const merged = {...obj1, ...obj2};
console.log(merged);`,s=[{input:[],expected:"{ a: 1, b: 3, c: 4 }"}],c=["Spread merge objects","Later wins"],r={id:t,title:o,starterCode:e,solution:n,tests:s,hints:c};export{r as default,c as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
