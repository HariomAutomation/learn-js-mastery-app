const o="07-arrays-map-filter-reduce-41",t="Filter Length",e=`const words = ['hi', 'hello', 'hey', 'world'];
const long = words.____(w => w.length > 3);
console.log(long);`,n=`const words = ['hi', 'hello', 'hey', 'world'];
const long = words.filter(w => w.length > 3);
console.log(long);`,s=[{input:[],expected:"[ 'hello', 'world' ]"}],l=["Check string length","Keep long words"],r={id:o,title:t,starterCode:e,solution:n,tests:s,hints:l};export{r as default,l as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
