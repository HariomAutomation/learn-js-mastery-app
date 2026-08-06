const t="13-oop-prototypes-this-26",o="Chain Depth",e=`function A() {}
A.prototype = Object.create(null);
const a = new A();
console.log(Object.getPrototypeOf(a) === A.prototype);`,n=`function A() {}
A.prototype = Object.create(null);
const a = new A();
console.log(Object.getPrototypeOf(a) === A.prototype);`,s=[{input:[],expected:"true"}],c=["Object.create(null) has no prototype","Clean prototype chain"],p={id:t,title:o,starterCode:e,solution:n,tests:s,hints:c};export{p as default,c as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
