const t="07-arrays-map-filter-reduce-35",e="Filter Includes",a=`const arr = ['apple', 'banana', 'avocado', 'cherry'];
const withA = arr.____(w => w.includes('a'));
console.log(withA);`,n=`const arr = ['apple', 'banana', 'avocado', 'cherry'];
const withA = arr.filter(w => w.includes('a'));
console.log(withA);`,s=[{input:[],expected:"[ 'apple', 'banana', 'avocado' ]"}],o=["includes checks substring","Filter words with 'a'"],c={id:t,title:e,starterCode:a,solution:n,tests:s,hints:o};export{c as default,o as hints,t as id,n as solution,a as starterCode,s as tests,e as title};
