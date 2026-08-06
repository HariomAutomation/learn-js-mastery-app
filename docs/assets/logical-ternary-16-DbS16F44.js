const e="03-operators-logical-ternary-16",t="Optional chaining",s=`const user = { name: 'Alice' };
const result = user?.address?.street;
console.log(result);`,n=`const user = { name: 'Alice' };
const result = user?.address?.street;
console.log(result);`,o=[{input:[],expected:"undefined"}],r=["?. returns undefined if property doesn't exist","user has no address property"],i={id:e,title:t,starterCode:s,solution:n,tests:o,hints:r};export{i as default,r as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
