const t="02-data-types-primitive-types-37",s="Convert string to integer with parseInt",n=`const str = "42px";
const num = ;
console.log(num);`,e=`const str = "42px";
const num = parseInt(str);
console.log(num);`,o=[{input:[],expected:"42"}],i=["parseInt parses until it finds non-numeric","It stops at the 'px'"],r={id:t,title:s,starterCode:n,solution:e,tests:o,hints:i};export{r as default,i as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
