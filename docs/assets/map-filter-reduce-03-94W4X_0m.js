const t="07-arrays-map-filter-reduce-03",s="Reduce Sum",c=`const nums = [1, 2, 3, 4];
const sum = nums.____((acc, x) => acc + x, 0);
console.log(sum);`,e=`const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, x) => acc + x, 0);
console.log(sum);`,n=[{input:[],expected:"10"}],o=["reduce accumulates value","Start at 0"],u={id:t,title:s,starterCode:c,solution:e,tests:n,hints:o};export{u as default,o as hints,t as id,e as solution,c as starterCode,n as tests,s as title};
