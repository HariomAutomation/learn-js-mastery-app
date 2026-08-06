const t="08-objects-advanced-objects-48",o="Prototype Access",e=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.__proto__ === proto);`,s=`const proto = {greet() { return 'Hello'; }};
const obj = Object.create(proto);
console.log(obj.__proto__ === proto);`,c=[{input:[],expected:"true"}],n=["__proto__ reference","Check equality"],r={id:t,title:o,starterCode:e,solution:s,tests:c,hints:n};export{r as default,n as hints,t as id,s as solution,e as starterCode,c as tests,o as title};
