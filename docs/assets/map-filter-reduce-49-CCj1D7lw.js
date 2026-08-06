const t="07-arrays-map-filter-reduce-49",e="Map String Length",n=`const words = ['hello', 'hi', 'hey'];
const lengths = words.____(w => w.length);
console.log(lengths);`,s=`const words = ['hello', 'hi', 'hey'];
const lengths = words.map(w => w.length);
console.log(lengths);`,o=[{input:[],expected:"[ 5, 2, 3 ]"}],l=["Map to string length","Return length property"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:l};export{r as default,l as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
