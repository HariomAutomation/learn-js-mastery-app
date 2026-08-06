const t="07-arrays-array-patterns-48",o="Compact Falsy",s=`const arr = [0, 1, false, 2, NaN, 3, '', 4];
const compact = arr.filter(Boolean);
console.log(compact);`,a=`const arr = [0, 1, false, 2, NaN, 3, '', 4];
const compact = arr.filter(Boolean);
console.log(compact);`,e=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],n=["Boolean removes falsy","Keep truthy values"],r={id:t,title:o,starterCode:s,solution:a,tests:e,hints:n};export{r as default,n as hints,t as id,a as solution,s as starterCode,e as tests,o as title};
