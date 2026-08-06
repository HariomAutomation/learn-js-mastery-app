const e="07-arrays-map-filter-reduce-30",t="Map Filter Reduce Pipeline",s=`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x % 2 !== 0).map(x => x * x).reduce((a, b) => a + b, 0);
console.log(result);`,n=`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x % 2 !== 0).map(x => x * x).reduce((a, b) => a + b, 0);
console.log(result);`,o=[{input:[],expected:"35"}],l=["Filter odds, square, sum","Complete pipeline"],r={id:e,title:t,starterCode:s,solution:n,tests:o,hints:l};export{r as default,l as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
