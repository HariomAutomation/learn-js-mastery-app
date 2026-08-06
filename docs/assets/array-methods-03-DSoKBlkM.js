const t="07-arrays-array-methods-03",s="Shift Element",o=`const arr = [1, 2, 3];
const first = arr.____();
console.log(first);
console.log(arr);`,e=`const arr = [1, 2, 3];
const first = arr.shift();
console.log(first);
console.log(arr);`,n=[{input:[],expected:`1
[ 2, 3 ]`}],r=["shift removes first element","Returns removed element"],i={id:t,title:s,starterCode:o,solution:e,tests:n,hints:r};export{i as default,r as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
