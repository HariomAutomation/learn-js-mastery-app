const t="08-objects-object-basics-12",e="Object Create",o=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,s=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.greet());`,c=[{input:[],expected:"Hello"}],n=["Object.create with prototype","Inherits methods"],r={id:t,title:e,starterCode:o,solution:s,tests:c,hints:n};export{r as default,n as hints,t as id,s as solution,o as starterCode,c as tests,e as title};
