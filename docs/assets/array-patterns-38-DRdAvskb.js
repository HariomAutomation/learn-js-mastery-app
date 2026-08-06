const t="07-arrays-array-patterns-38",n="Compact Undefined",e=`const arr = [1, undefined, 2, undefined, 3];
const compact = arr.filter(x => x !== undefined);
console.log(compact);`,o=`const arr = [1, undefined, 2, undefined, 3];
const compact = arr.filter(x => x !== undefined);
console.log(compact);`,s=[{input:[],expected:"[ 1, 2, 3 ]"}],c=["Filter out undefined","Explicit check"],r={id:t,title:n,starterCode:e,solution:o,tests:s,hints:c};export{r as default,c as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
