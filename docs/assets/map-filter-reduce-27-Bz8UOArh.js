const s="07-arrays-map-filter-reduce-27",t="Map Parse",n=`const strs = ['1', '2', '3', '4'];
const nums = strs.____(s => parseInt(s));
console.log(nums);`,e=`const strs = ['1', '2', '3', '4'];
const nums = strs.map(s => parseInt(s));
console.log(nums);`,o=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],r=["Parse string to number","Use parseInt"],c={id:s,title:t,starterCode:n,solution:e,tests:o,hints:r};export{c as default,r as hints,s as id,e as solution,n as starterCode,o as tests,t as title};
