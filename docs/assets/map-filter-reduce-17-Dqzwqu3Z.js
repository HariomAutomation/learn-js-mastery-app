const t="07-arrays-map-filter-reduce-17",e="Chained Pipeline",s=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 5).map(x => x * 2).reduce((a, b) => a + b, 0);
console.log(result);`,n=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.filter(x => x > 5).map(x => x * 2).reduce((a, b) => a + b, 0);
console.log(result);`,o=[{input:[],expected:"60"}],l=["Filter, map, then reduce","Full pipeline"],r={id:t,title:e,starterCode:s,solution:n,tests:o,hints:l};export{r as default,l as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
