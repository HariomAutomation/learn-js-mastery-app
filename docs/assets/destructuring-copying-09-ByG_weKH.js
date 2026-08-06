const n="08-objects-destructuring-copying-09",o="structuredClone Demo",t=`const original = {arr: [1, 2, 3], nested: {x: 10}};
const copy = structuredClone(original);
copy.arr.push(4);
copy.nested.x = 99;
console.log(original.arr);
console.log(original.nested.x);`,e=`const original = {arr: [1, 2, 3], nested: {x: 10}};
const copy = structuredClone(original);
copy.arr.push(4);
copy.nested.x = 99;
console.log(original.arr);
console.log(original.nested.x);`,s=[{input:[],expected:`[ 1, 2, 3 ]
10`}],r=["Deep clone","Original unchanged"],c={id:n,title:o,starterCode:t,solution:e,tests:s,hints:r};export{c as default,r as hints,n as id,e as solution,t as starterCode,s as tests,o as title};
