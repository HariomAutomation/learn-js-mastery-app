const e="07-arrays-map-filter-reduce-19",t="Filter Undefined",n=`const arr = [1, undefined, 3, undefined, 5];
const filtered = arr.____(x => x !== undefined);
console.log(filtered);`,d=`const arr = [1, undefined, 3, undefined, 5];
const filtered = arr.filter(x => x !== undefined);
console.log(filtered);`,i=[{input:[],expected:"[ 1, 3, 5 ]"}],o=["Filter out undefined","Check equality"],r={id:e,title:t,starterCode:n,solution:d,tests:i,hints:o};export{r as default,o as hints,e as id,d as solution,n as starterCode,i as tests,t as title};
