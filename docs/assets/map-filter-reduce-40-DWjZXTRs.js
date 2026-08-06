const s="07-arrays-map-filter-reduce-40",t="Map Absolute",o=`const nums = [-1, 2, -3, 4, -5];
const abs = nums.____(x => Math.abs(x));
console.log(abs);`,e=`const nums = [-1, 2, -3, 4, -5];
const abs = nums.map(x => Math.abs(x));
console.log(abs);`,n=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],a=["Math.abs for absolute","Remove negatives"],c={id:s,title:t,starterCode:o,solution:e,tests:n,hints:a};export{c as default,a as hints,s as id,e as solution,o as starterCode,n as tests,t as title};
