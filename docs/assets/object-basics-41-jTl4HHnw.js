const e="08-objects-object-basics-41",t="Complete 4",s=`const obj = {a: 1, b: 2};
const result = Object.keys(obj).reduce((acc, key) => {
  acc[key.toUpperCase()] = obj[key];
  return acc;
}, {});
console.log(result);`,c=`const obj = {a: 1, b: 2};
const result = Object.keys(obj).reduce((acc, key) => {
  acc[key.toUpperCase()] = obj[key];
  return acc;
}, {});
console.log(result);`,o=[{input:[],expected:"{ A: 1, B: 2 }"}],n=["Uppercase keys","Reduce to new object"],r={id:e,title:t,starterCode:s,solution:c,tests:o,hints:n};export{r as default,n as hints,e as id,c as solution,s as starterCode,o as tests,t as title};
