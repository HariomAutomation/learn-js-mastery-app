const t="07-arrays-array-patterns-44",n="Intersection Three Arrays",s=`const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5];
const c = [3, 4, 5, 6];
const common = a.filter(x => b.includes(x) && c.includes(x));
console.log(common);`,o=`const a = [1, 2, 3, 4];
const b = [2, 3, 4, 5];
const c = [3, 4, 5, 6];
const common = a.filter(x => b.includes(x) && c.includes(x));
console.log(common);`,c=[{input:[],expected:"[ 3, 4 ]"}],e=["Filter with two includes","Must be in all three"],r={id:t,title:n,starterCode:s,solution:o,tests:c,hints:e};export{r as default,e as hints,t as id,o as solution,s as starterCode,c as tests,n as title};
