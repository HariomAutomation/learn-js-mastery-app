const t="13-oop-oop-patterns-37",o="Strategy Pattern",n=`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 3, 2));`,s=`const strategies = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b
};
function calc(op, a, b) { return strategies[op](a, b); }
console.log(calc('add', 3, 2));`,a=[{input:[],expected:"5"}],e=["Strategy object holds algorithms","Select at runtime"],c={id:t,title:o,starterCode:n,solution:s,tests:a,hints:e};export{c as default,e as hints,t as id,s as solution,n as starterCode,a as tests,o as title};
