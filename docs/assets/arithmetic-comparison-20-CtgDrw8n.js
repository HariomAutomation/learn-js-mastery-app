const t="03-operators-arithmetic-comparison-20",o="Loose equality with type coercion",s=`const result = 0 == "";
console.log(result);`,e=`const result = 0 == "";
console.log(result);`,n=[{input:[],expected:"true"}],c=["== coerces types","Empty string coerces to 0"],r={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{r as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
