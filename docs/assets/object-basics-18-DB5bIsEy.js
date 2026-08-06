const t="08-objects-object-basics-18",o="Values Transform",e=`const obj = {a: 1, b: 2, c: 3};
const doubled = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]));
console.log(doubled);`,s=`const obj = {a: 1, b: 2, c: 3};
const doubled = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]));
console.log(doubled);`,n=[{input:[],expected:"{ a: 2, b: 4, c: 6 }"}],c=["entries then map","fromEntries back to object"],b={id:t,title:o,starterCode:e,solution:s,tests:n,hints:c};export{b as default,c as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
