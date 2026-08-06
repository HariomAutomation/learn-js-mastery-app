const t="07-arrays-map-filter-reduce-18",n="Map Flatten",s=`const arr = [[1, 2], [3, 4]];
const flat = arr.____(x => x);
console.log(flat);`,e=`const arr = [[1, 2], [3, 4]];
const flat = arr.flatMap(x => x);
console.log(flat);`,a=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],o=["flatMap flattens result","Return inner array"],r={id:t,title:n,starterCode:s,solution:e,tests:a,hints:o};export{r as default,o as hints,t as id,e as solution,s as starterCode,a as tests,n as title};
