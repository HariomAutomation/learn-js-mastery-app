const t="07-arrays-array-methods-47",s="Slice No Mutation",o=`const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
arr.____(0);
console.log(sliced);`,e=`const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
arr.push(0);
console.log(sliced);`,n=[{input:[],expected:"[ 2, 3 ]"}],r=["slice creates new array","Changes to original don't affect copy"],c={id:t,title:s,starterCode:o,solution:e,tests:n,hints:r};export{c as default,r as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
