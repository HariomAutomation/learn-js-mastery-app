const n="08-objects-destructuring-copying-41",t="Default Condition",o=`const obj = {};
const {name = 'Unknown', age = 0} = obj;
console.log(name, age);`,e=`const obj = {};
const {name = 'Unknown', age = 0} = obj;
console.log(name, age);`,s=[{input:[],expected:"Unknown 0"}],i=["All defaults applied","Missing properties"],c={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
