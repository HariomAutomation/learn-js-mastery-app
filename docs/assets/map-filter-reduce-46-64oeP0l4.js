const e="07-arrays-map-filter-reduce-46",t="Map Index",n=`const arr = ['a', 'b', 'c'];
const indexed = arr.____((_, i) => i);
console.log(indexed);`,o=`const arr = ['a', 'b', 'c'];
const indexed = arr.map((_, i) => i);
console.log(indexed);`,s=[{input:[],expected:"[ 0, 1, 2 ]"}],i=["Return only index","Ignore value"],r={id:e,title:t,starterCode:n,solution:o,tests:s,hints:i};export{r as default,i as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
