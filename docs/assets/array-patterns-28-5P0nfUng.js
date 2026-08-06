const t="07-arrays-array-patterns-28",n="Compact Filter",e=`const arr = [0, 1, 2, null, 3, undefined, 4, ''];
const compact = arr.filter(x => x !== 0 && x !== null && x !== undefined && x !== '');
console.log(compact);`,o=`const arr = [0, 1, 2, null, 3, undefined, 4, ''];
const compact = arr.filter(x => x !== 0 && x !== null && x !== undefined && x !== '');
console.log(compact);`,s=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],c=["Filter out falsy","Explicit checks"],r={id:t,title:n,starterCode:e,solution:o,tests:s,hints:c};export{r as default,c as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
