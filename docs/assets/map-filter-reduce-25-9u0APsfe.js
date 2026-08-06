const e="07-arrays-map-filter-reduce-25",t="Filter Unique",n=`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.____((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,i=`const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);`,s=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],o=["Check first occurrence","indexOf equals current index"],r={id:e,title:t,starterCode:n,solution:i,tests:s,hints:o};export{r as default,o as hints,e as id,i as solution,n as starterCode,s as tests,t as title};
