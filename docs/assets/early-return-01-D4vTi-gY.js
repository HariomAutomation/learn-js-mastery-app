const n="04-control-flow-early-return-01",t="Simple validation return",e=`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 2));`,o=`function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
console.log(divide(10, 2));`,r=[{input:[],expected:"5"}],i=["Guard clause returns early on error","b is not 0, so normal return executes"],s={id:n,title:t,starterCode:e,solution:o,tests:r,hints:i};export{s as default,i as hints,n as id,o as solution,e as starterCode,r as tests,t as title};
