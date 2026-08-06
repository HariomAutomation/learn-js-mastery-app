const t="08-objects-destructuring-copying-30",e="Spread Merge Multiple",n=`const a = {x: 1};
const b = {y: 2};
const c = {z: 3};
const merged = {...a, ...b, ...c};
console.log(merged);`,s=`const a = {x: 1};
const b = {y: 2};
const c = {z: 3};
const merged = {...a, ...b, ...c};
console.log(merged);`,o=[{input:[],expected:"{ x: 1, y: 2, z: 3 }"}],c=["Multiple spread merges","Combine all"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
