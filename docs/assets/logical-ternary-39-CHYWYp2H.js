const s="03-operators-logical-ternary-39",t="Optional chaining array out of bounds",e=`const users = [];
const result = users?.[0]?.name;
console.log(result);`,n=`const users = [];
const result = users?.[0]?.name;
console.log(result);`,o=[{input:[],expected:"undefined"}],r=["?. safely returns undefined","users[0] is undefined"],l={id:s,title:t,starterCode:e,solution:n,tests:o,hints:r};export{l as default,r as hints,s as id,n as solution,e as starterCode,o as tests,t as title};
