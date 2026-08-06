const t="03-operators-logical-ternary-18",e="Optional chaining method",o=`const obj = { greet: () => 'hi' };
const result = obj?.greet();
console.log(result);`,s=`const obj = { greet: () => 'hi' };
const result = obj?.greet();
console.log(result);`,n=[{input:[],expected:"hi"}],r=["?. can be used for method calls","obj exists and has greet method"],l={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{l as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
