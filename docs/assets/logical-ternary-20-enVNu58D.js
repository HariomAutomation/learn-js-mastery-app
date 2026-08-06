const t="03-operators-logical-ternary-20",s="Short circuit OR assignment",o=`let x = 0;
const result = x || (x = 5);
console.log(x);`,n=`let x = 0;
const result = x || (x = 5);
console.log(x);`,e=[{input:[],expected:"5"}],i=["|| short-circuits on first truthy","x is 0 (falsy), so assignment happens"],r={id:t,title:s,starterCode:o,solution:n,tests:e,hints:i};export{r as default,i as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
