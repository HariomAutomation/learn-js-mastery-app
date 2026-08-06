const s="03-operators-logical-ternary-17",t="Optional chaining exists",e=`const user = { name: 'Alice', address: { street: '123 Main St' } };
const result = user?.address?.street;
console.log(result);`,n=`const user = { name: 'Alice', address: { street: '123 Main St' } };
const result = user?.address?.street;
console.log(result);`,o=[{input:[],expected:"123 Main St"}],r=["?. safely accesses nested properties","All properties exist"],i={id:s,title:t,starterCode:e,solution:n,tests:o,hints:r};export{i as default,r as hints,s as id,n as solution,e as starterCode,o as tests,t as title};
