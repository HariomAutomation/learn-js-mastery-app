const t="08-objects-advanced-objects-06",e="Prototype",o=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,s=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,n=[{input:[],expected:"Hello"}],c=["Object.create with prototype","Inherit methods"],r={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{r as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
