const t="08-objects-destructuring-copying-40",e="Destructuring Condition",n=`const obj = {name: 'Alice', active: true};
const {name, active = false} = obj;
console.log(active);`,o=`const obj = {name: 'Alice', active: true};
const {name, active = false} = obj;
console.log(active);`,s=[{input:[],expected:"true"}],i=["Default only if undefined","Existing value kept"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
