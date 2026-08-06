const t="07-arrays-array-methods-41",s="Chaining Methods",o=`const arr = [1, 2, 3, 4, 5, 6];
const result = arr.____(x => x % 2 === 0).map(x => x * 10);
console.log(result);`,r=`const arr = [1, 2, 3, 4, 5, 6];
const result = arr.filter(x => x % 2 === 0).map(x => x * 10);
console.log(result);`,e=[{input:[],expected:"[ 20, 40, 60 ]"}],n=["Filter then map","Chain array methods"],a={id:t,title:s,starterCode:o,solution:r,tests:e,hints:n};export{a as default,n as hints,t as id,r as solution,o as starterCode,e as tests,s as title};
