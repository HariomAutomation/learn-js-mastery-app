const t="13-oop-prototypes-this-39",o="Bind Partial Application",n=`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,s=`function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);
console.log(double(5));`,l=[{input:[],expected:"10"}],i=["bind prefills arguments","First arg is this"],e={id:t,title:o,starterCode:n,solution:s,tests:l,hints:i};export{e as default,i as hints,t as id,s as solution,n as starterCode,l as tests,o as title};
