const n="04-control-flow-early-return-46",t="Guard benefit - no deep nesting",e=`function calculate(a, b, op) {
  if (typeof a !== 'number') return 'invalid a';
  if (typeof b !== 'number') return 'invalid b';
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  return 'unknown operator';
}
console.log(calculate(10, 5, '*'));`,r=`function calculate(a, b, op) {
  if (typeof a !== 'number') return 'invalid a';
  if (typeof b !== 'number') return 'invalid b';
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  return 'unknown operator';
}
console.log(calculate(10, 5, '*'));`,o=[{input:[],expected:"50"}],a=["Both are numbers","op is '*', returns product"],u={id:n,title:t,starterCode:e,solution:r,tests:o,hints:a};export{u as default,a as hints,n as id,r as solution,e as starterCode,o as tests,t as title};
