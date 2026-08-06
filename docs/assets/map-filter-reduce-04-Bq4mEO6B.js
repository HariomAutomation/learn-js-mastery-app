const t="07-arrays-map-filter-reduce-04",s="Chaining",n=`const nums = [1, 2, 3, 4, 5];
const result = nums.____(x => x > 2).map(x => x * 10);
console.log(result);`,e=`const nums = [1, 2, 3, 4, 5];
const result = nums.filter(x => x > 2).map(x => x * 10);
console.log(result);`,o=[{input:[],expected:"[ 30, 40, 50 ]"}],r=["Filter first then map","Chain array methods"],i={id:t,title:s,starterCode:n,solution:e,tests:o,hints:r};export{i as default,r as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
