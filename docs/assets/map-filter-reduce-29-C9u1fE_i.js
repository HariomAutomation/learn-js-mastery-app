const t="07-arrays-map-filter-reduce-29",n="Reduce Max",s=`const nums = [3, 7, 2, 9, 4];
const max = nums.____((a, b) => Math.max(a, b), -Infinity);
console.log(max);`,e=`const nums = [3, 7, 2, 9, 4];
const max = nums.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);`,a=[{input:[],expected:"9"}],o=["Use Math.max","Start with -Infinity"],c={id:t,title:n,starterCode:s,solution:e,tests:a,hints:o};export{c as default,o as hints,t as id,e as solution,s as starterCode,a as tests,n as title};
