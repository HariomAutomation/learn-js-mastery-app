const t="07-arrays-array-methods-08",o="Slice Copy",s=`const arr = [1, 2, 3, 4, 5];
const copy = arr.____();
console.log(copy);`,n=`const arr = [1, 2, 3, 4, 5];
const copy = arr.slice();
console.log(copy);`,e=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],c=["slice with no args copies","Does not mutate"],r={id:t,title:o,starterCode:s,solution:n,tests:e,hints:c};export{r as default,c as hints,t as id,n as solution,s as starterCode,e as tests,o as title};
