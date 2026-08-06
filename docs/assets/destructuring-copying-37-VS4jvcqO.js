const t="08-objects-destructuring-copying-37",o="Deep Copy Array",s=`const arr = [[1, 2], [3, 4]];
const copy = structuredClone(arr);
copy[0].push(5);
console.log(arr[0]);`,e=`const arr = [[1, 2], [3, 4]];
const copy = structuredClone(arr);
copy[0].push(5);
console.log(arr[0]);`,n=[{input:[],expected:"[ 1, 2 ]"}],r=["structuredClone deep copies","Nested arrays independent"],c={id:t,title:o,starterCode:s,solution:e,tests:n,hints:r};export{c as default,r as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
