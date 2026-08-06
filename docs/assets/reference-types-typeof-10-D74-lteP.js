const t="02-data-types-reference-types-typeof-10",e="Use instanceof for type checking",o=`const d = new Date();
console.log();`,s=`const d = new Date();
console.log(d instanceof Date);`,n=[{input:[],expected:"true"}],c=["instanceof checks prototype chain","Returns true for Date objects"],r={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{r as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
