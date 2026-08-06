const s="07-arrays-map-filter-reduce-33",t="Reduce Sum Squares",e=`const nums = [1, 2, 3, 4];
const sumSq = nums.____((acc, x) => acc + x * x, 0);
console.log(sumSq);`,c=`const nums = [1, 2, 3, 4];
const sumSq = nums.reduce((acc, x) => acc + x * x, 0);
console.log(sumSq);`,n=[{input:[],expected:"30"}],o=["Square each then sum","Accumulate squares"],u={id:s,title:t,starterCode:e,solution:c,tests:n,hints:o};export{u as default,o as hints,s as id,c as solution,e as starterCode,n as tests,t as title};
