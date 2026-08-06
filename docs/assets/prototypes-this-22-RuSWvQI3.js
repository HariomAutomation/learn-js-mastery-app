const t="13-oop-prototypes-this-22",n="Bind Partial",o=`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,s=`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,l=[{input:[],expected:"10"}],e=["bind can prefill arguments","First arg is this, rest are params"],i={id:t,title:n,starterCode:o,solution:s,tests:l,hints:e};export{i as default,e as hints,t as id,s as solution,o as starterCode,l as tests,n as title};
