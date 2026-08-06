const t="07-arrays-map-filter-reduce-14",o="Map String",e=`const words = ['hello', 'world'];
const upper = words.____(w => w.toUpperCase());
console.log(upper);`,s=`const words = ['hello', 'world'];
const upper = words.map(w => w.toUpperCase());
console.log(upper);`,r=[{input:[],expected:"[ 'HELLO', 'WORLD' ]"}],n=["toUpperCase converts","Map each word"],p={id:t,title:o,starterCode:e,solution:s,tests:r,hints:n};export{p as default,n as hints,t as id,s as solution,e as starterCode,r as tests,o as title};
