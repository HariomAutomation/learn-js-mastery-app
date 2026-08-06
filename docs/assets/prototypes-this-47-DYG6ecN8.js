const t="13-oop-prototypes-this-47",n="Chain Depth",o=`function A() {}
function B() extends A {}
function C() extends B {}
const c = new C();
console.log(c instanceof A);`,e=`function A() {}
function B() extends A {}
function C() extends B {}
const c = new C();
console.log(c instanceof A);`,s=[{input:[],expected:"true"}],c=["Deep prototype chain","instanceof walks the chain"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
