const t="07-arrays-map-filter-reduce-09",s="Map Filter Combo",e=`const nums = [1, 2, 3, 4, 5, 6];
const result = nums.____(x => x % 2 === 0).map(x => x * x);
console.log(result);`,n=`const nums = [1, 2, 3, 4, 5, 6];
const result = nums.filter(x => x % 2 === 0).map(x => x * x);
console.log(result);`,o=[{input:[],expected:"[ 4, 16, 36 ]"}],l=["Filter evens then square","Chain filter and map"],r={id:t,title:s,starterCode:e,solution:n,tests:o,hints:l};export{r as default,l as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
