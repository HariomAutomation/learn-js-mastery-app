const t="07-arrays-map-filter-reduce-32",s="Filter Strict",e=`const arr = [1, 2, '2', 3];
const nums = arr.____(x => x === 2);
console.log(nums);`,n=`const arr = [1, 2, '2', 3];
const nums = arr.filter(x => x === 2);
console.log(nums);`,o=[{input:[],expected:"[ 2 ]"}],r=["Strict equality ===","Type matters"],c={id:t,title:s,starterCode:e,solution:n,tests:o,hints:r};export{c as default,r as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
