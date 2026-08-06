const t="07-arrays-map-filter-reduce-39",c="Reduce Product",s=`const nums = [2, 3, 4];
const product = nums.____((acc, x) => acc * x, 1);
console.log(product);`,o=`const nums = [2, 3, 4];
const product = nums.reduce((acc, x) => acc * x, 1);
console.log(product);`,e=[{input:[],expected:"24"}],n=["Multiply all elements","Start at 1"],u={id:t,title:c,starterCode:s,solution:o,tests:e,hints:n};export{u as default,n as hints,t as id,o as solution,s as starterCode,e as tests,c as title};
