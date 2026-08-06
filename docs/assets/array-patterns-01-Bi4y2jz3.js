const t="07-arrays-array-patterns-01",s="Flatten Array",n=`const arr = [[1, 2], [3, 4], [5]];
const flat = arr.____();
console.log(flat);`,a=`const arr = [[1, 2], [3, 4], [5]];
const flat = arr.flat();
console.log(flat);`,o=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],e=["flat() flattens one level","Default depth is 1"],r={id:t,title:s,starterCode:n,solution:a,tests:o,hints:e};export{r as default,e as hints,t as id,a as solution,n as starterCode,o as tests,s as title};
