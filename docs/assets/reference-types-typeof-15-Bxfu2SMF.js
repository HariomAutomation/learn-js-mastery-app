const t="02-data-types-reference-types-typeof-15",e="Array reference sharing",s=`const a = [1, 2];
const b = a;
b.push(3);
console.log();`,o=`const a = [1, 2];
const b = a;
b.push(3);
console.log(a.length);`,n=[{input:[],expected:"3"}],c=["Arrays are objects too","Modifying b modifies a"],r={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{r as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
