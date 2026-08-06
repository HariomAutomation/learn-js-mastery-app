const t="08-objects-object-basics-19",e="Entries Filter",s=`const obj = {a: 1, b: 2, c: 3, d: 4};
const filtered = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 2));
console.log(filtered);`,o=`const obj = {a: 1, b: 2, c: 3, d: 4};
const filtered = Object.fromEntries(Object.entries(obj).filter(([k, v]) => v > 2));
console.log(filtered);`,n=[{input:[],expected:"{ c: 3, d: 4 }"}],c=["Filter entries by value","fromEntries back"],i={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
