const t="08-objects-object-basics-28",o="Filter Entries",s=`const obj = {a: 1, b: 2, c: 3, d: 4};
const result = {};
for (const [k, v] of Object.entries(obj)) {
  if (v % 2 === 0) result[k] = v;
}
console.log(result);`,e=`const obj = {a: 1, b: 2, c: 3, d: 4};
const result = {};
for (const [k, v] of Object.entries(obj)) {
  if (v % 2 === 0) result[k] = v;
}
console.log(result);`,n=[{input:[],expected:"{ b: 2, d: 4 }"}],c=["Loop and check condition","Keep even values"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
