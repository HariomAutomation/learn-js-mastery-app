const t="07-arrays-map-filter-reduce-16",e="Reduce Sum",o=`const arr = [5, 10, 15];
const total = arr.____((acc, x) => acc + x, 0);
console.log(total);`,c=`const arr = [5, 10, 15];
const total = arr.reduce((acc, x) => acc + x, 0);
console.log(total);`,s=[{input:[],expected:"30"}],a=["Sum all elements","Start at 0"],n={id:t,title:e,starterCode:o,solution:c,tests:s,hints:a};export{n as default,a as hints,t as id,c as solution,o as starterCode,s as tests,e as title};
