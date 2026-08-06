const e="07-arrays-array-methods-46",o="Splice Return",t=`const arr = ['a', 'b', 'c', 'd'];
const removed = arr.____(1, 2);
console.log(removed);
console.log(arr);`,r=`const arr = ['a', 'b', 'c', 'd'];
const removed = arr.splice(1, 2);
console.log(removed);
console.log(arr);`,s=[{input:[],expected:`[ 'b', 'c' ]
[ 'a', 'd' ]`}],n=["splice returns removed items","Array with removed elements"],c={id:e,title:o,starterCode:t,solution:r,tests:s,hints:n};export{c as default,n as hints,e as id,r as solution,t as starterCode,s as tests,o as title};
