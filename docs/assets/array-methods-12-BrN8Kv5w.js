const n="07-arrays-array-methods-12",t="Find",s=`const nums = [1, 2, 3, 4, 5];
const found = nums.____(x => x > 3);
console.log(found);`,o=`const nums = [1, 2, 3, 4, 5];
const found = nums.find(x => x > 3);
console.log(found);`,e=[{input:[],expected:"4"}],d=["find returns first match","Returns undefined if none"],c={id:n,title:t,starterCode:s,solution:o,tests:e,hints:d};export{c as default,d as hints,n as id,o as solution,s as starterCode,e as tests,t as title};
