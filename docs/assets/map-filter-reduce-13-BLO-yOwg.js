const t="07-arrays-map-filter-reduce-13",s="Reduce Initial Value",c=`const nums = [1, 2, 3];
const sum = nums.____((acc, x) => acc + x, 10);
console.log(sum);`,n=`const nums = [1, 2, 3];
const sum = nums.reduce((acc, x) => acc + x, 10);
console.log(sum);`,e=[{input:[],expected:"16"}],o=["Initial value is 10","Add to accumulator"],u={id:t,title:s,starterCode:c,solution:n,tests:e,hints:o};export{u as default,o as hints,t as id,n as solution,c as starterCode,e as tests,s as title};
