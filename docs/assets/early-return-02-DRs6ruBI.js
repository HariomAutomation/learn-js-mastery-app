const n="04-control-flow-early-return-02",e="Early return on divide by zero",t=`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 0));`,o=`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 0));`,i=[{input:[],expected:"Cannot divide by zero"}],r=["b is 0, guard clause triggers","Returns early before division"],s={id:n,title:e,starterCode:t,solution:o,tests:i,hints:r};export{s as default,r as hints,n as id,o as solution,t as starterCode,i as tests,e as title};
