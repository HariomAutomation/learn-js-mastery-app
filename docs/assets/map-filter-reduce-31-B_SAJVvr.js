const t="07-arrays-map-filter-reduce-31",s="Map Array Flat",e=`const arr = [[1, 2], [3, 4], [5]];
const result = arr.____((x, i) => [...x, i]);
console.log(result.flat());`,n=`const arr = [[1, 2], [3, 4], [5]];
const result = arr.map((x, i) => [...x, i]);
console.log(result.flat());`,o=[{input:[],expected:"[ 1, 2, 0, 3, 4, 1, 5, 2 ]"}],r=["Map adds index to each","Then flatten"],a={id:t,title:s,starterCode:e,solution:n,tests:o,hints:r};export{a as default,r as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
