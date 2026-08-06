const t="13-oop-oop-patterns-08",a="Strategy",n=`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 2, 3));`,o=`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 2, 3));`,s=[{input:[],expected:"5"}],e=["Strategy object holds algorithms","Select at runtime"],c={id:t,title:a,starterCode:n,solution:o,tests:s,hints:e};export{c as default,e as hints,t as id,o as solution,n as starterCode,s as tests,a as title};
