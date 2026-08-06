const t="07-arrays-map-filter-reduce-06",s="Filter Condition",o=`const words = ['hello', 'hi', 'hey', 'world'];
const hWords = words.____(w => w.startsWith('h'));
console.log(hWords);`,e=`const words = ['hello', 'hi', 'hey', 'world'];
const hWords = words.filter(w => w.startsWith('h'));
console.log(hWords);`,r=[{input:[],expected:"[ 'hello', 'hi', 'hey' ]"}],n=["startsWith checks prefix","Filter keeps matching"],i={id:t,title:s,starterCode:o,solution:e,tests:r,hints:n};export{i as default,n as hints,t as id,e as solution,o as starterCode,r as tests,s as title};
