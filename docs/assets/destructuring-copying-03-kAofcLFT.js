const t="08-objects-destructuring-copying-03",e="Default Values",n=`const obj = {name: 'Alice'};
const {name, age = 30} = obj;
console.log(age);`,o=`const obj = {name: 'Alice'};
const {name, age = 30} = obj;
console.log(age);`,s=[{input:[],expected:"30"}],c=["Default value with =","Used when undefined"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
