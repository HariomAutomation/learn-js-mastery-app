const s="07-arrays-array-methods-09",t="Slice Subarray",o=`const arr = [1, 2, 3, 4, 5];
const sub = arr.____(1, 4);
console.log(sub);`,n=`const arr = [1, 2, 3, 4, 5];
const sub = arr.slice(1, 4);
console.log(sub);`,e=[{input:[],expected:"[ 2, 3, 4 ]"}],r=["slice(start, end)","End index exclusive"],c={id:s,title:t,starterCode:o,solution:n,tests:e,hints:r};export{c as default,r as hints,s as id,n as solution,o as starterCode,e as tests,t as title};
