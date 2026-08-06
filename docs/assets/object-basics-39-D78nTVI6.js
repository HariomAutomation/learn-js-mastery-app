const t="08-objects-object-basics-39",e="Complete 2",o=`const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const half = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v % 2 === 0));
console.log(half);`,s=`const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
const half = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v % 2 === 0));
console.log(half);`,n=[{input:[],expected:"{ b: 2, d: 4 }"}],c=["Filter even values","fromEntries back"],i={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{i as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
