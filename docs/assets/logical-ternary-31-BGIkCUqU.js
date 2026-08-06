const t="03-operators-logical-ternary-31",l="OR returns last if all falsy",s=`const result = 0 || "" || null;
console.log(result);`,e=`const result = 0 || "" || null;
console.log(result);`,o=[{input:[],expected:"null"}],n=["|| returns last value if all falsy","All are falsy"],r={id:t,title:l,starterCode:s,solution:e,tests:o,hints:n};export{r as default,n as hints,t as id,e as solution,s as starterCode,o as tests,l as title};
