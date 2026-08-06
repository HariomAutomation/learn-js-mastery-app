const t="03-operators-logical-ternary-42",n="Ternary with function call",e=`const isEven = (n) => n % 2 === 0;
const result = isEven(4) ? 'even' : 'odd';
console.log(result);`,s=`const isEven = (n) => n % 2 === 0;
const result = isEven(4) ? 'even' : 'odd';
console.log(result);`,o=[{input:[],expected:"even"}],r=["isEven(4) returns true","Ternary returns first value"],l={id:t,title:n,starterCode:e,solution:s,tests:o,hints:r};export{l as default,r as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
