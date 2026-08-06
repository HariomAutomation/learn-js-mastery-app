const n="07-arrays-map-filter-reduce-44",t="Filter Range Inclusive",e=`const nums = [1, 5, 10, 15, 20];
const range = nums.____(x => x >= 10 && x <= 20);
console.log(range);`,s=`const nums = [1, 5, 10, 15, 20];
const range = nums.filter(x => x >= 10 && x <= 20);
console.log(range);`,o=[{input:[],expected:"[ 10, 15, 20 ]"}],c=["Inclusive range","Both bounds included"],r={id:n,title:t,starterCode:e,solution:s,tests:o,hints:c};export{r as default,c as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
