const t="03-operators-logical-ternary-27",e="De Morgan's Law NOT OR",s=`const result = !(true || false);
console.log(result);`,o=`const result = !(true || false);
console.log(result);`,l=[{input:[],expected:"false"}],n=["De Morgan: !(A || B) === !A && !B","!(true || false) === !true && !false === false"],r={id:t,title:e,starterCode:s,solution:o,tests:l,hints:n};export{r as default,n as hints,t as id,o as solution,s as starterCode,l as tests,e as title};
