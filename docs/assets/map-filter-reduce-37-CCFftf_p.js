const t="07-arrays-map-filter-reduce-37",s="Map Math",o=`const nums = [1, 4, 9, 16];
const roots = nums.____(x => Math.sqrt(x));
console.log(roots);`,n=`const nums = [1, 4, 9, 16];
const roots = nums.map(x => Math.sqrt(x));
console.log(roots);`,e=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],r=["Math.sqrt for square root","Map each number"],a={id:t,title:s,starterCode:o,solution:n,tests:e,hints:r};export{a as default,r as hints,t as id,n as solution,o as starterCode,e as tests,s as title};
