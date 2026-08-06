const o="07-arrays-map-filter-reduce-43",t="Map Boolean",s=`const arr = [0, 1, 2, 3, 4];
const bools = arr.____(x => x > 2);
console.log(bools);`,e=`const arr = [0, 1, 2, 3, 4];
const bools = arr.map(x => x > 2);
console.log(bools);`,n=[{input:[],expected:"[ false, false, false, true, true ]"}],r=["Compare returns boolean","Map to true/false"],a={id:o,title:t,starterCode:s,solution:e,tests:n,hints:r};export{a as default,r as hints,o as id,e as solution,s as starterCode,n as tests,t as title};
