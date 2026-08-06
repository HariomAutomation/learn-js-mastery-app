const s="03-operators-logical-ternary-38",t="Optional chaining with array",e=`const users = [{ name: 'Alice' }];
const result = users?.[0]?.name;
console.log(result);`,n=`const users = [{ name: 'Alice' }];
const result = users?.[0]?.name;
console.log(result);`,o=[{input:[],expected:"Alice"}],r=["?.[] for optional property access","users[0] exists and has name"],a={id:s,title:t,starterCode:e,solution:n,tests:o,hints:r};export{a as default,r as hints,s as id,n as solution,e as starterCode,o as tests,t as title};
