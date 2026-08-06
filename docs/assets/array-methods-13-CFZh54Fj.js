const n="07-arrays-array-methods-13",t="FindIndex",s=`const nums = [10, 20, 30, 40];
const idx = nums.____(x => x === 30);
console.log(idx);`,o=`const nums = [10, 20, 30, 40];
const idx = nums.findIndex(x => x === 30);
console.log(idx);`,e=[{input:[],expected:"2"}],d=["findIndex returns index","Returns -1 if not found"],i={id:n,title:t,starterCode:s,solution:o,tests:e,hints:d};export{i as default,d as hints,n as id,o as solution,s as starterCode,e as tests,t as title};
