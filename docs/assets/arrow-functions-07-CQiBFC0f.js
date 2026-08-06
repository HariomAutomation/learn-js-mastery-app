const t="06-functions-arrow-functions-07",n="Arrow In Filter",s=`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,o=`const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens);`,e=[{input:[],expected:"[ 2, 4 ]"}],c=["Return true to keep","Arrow callback"],r={id:t,title:n,starterCode:s,solution:o,tests:e,hints:c};export{r as default,c as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
