const t="07-arrays-map-filter-reduce-15",e="Filter Number",o=`const arr = [1, 'two', 3, 'four', 5];
const nums = arr.____(x => typeof x === 'number');
console.log(nums);`,n=`const arr = [1, 'two', 3, 'four', 5];
const nums = arr.filter(x => typeof x === 'number');
console.log(nums);`,s=[{input:[],expected:"[ 1, 3, 5 ]"}],r=["Check typeof","Keep only numbers"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:r};export{c as default,r as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
