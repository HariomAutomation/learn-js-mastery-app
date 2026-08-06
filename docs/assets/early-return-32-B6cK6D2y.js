const n="04-control-flow-early-return-32",t="Guard benefits - clean code",e=`function divide(a, b) {
  if (b === 0) return Infinity;
  return a / b;
}
console.log(divide(10, 0));`,i=`function divide(a, b) {
  if (b === 0) return Infinity;
  return a / b;
}
console.log(divide(10, 0));`,o=[{input:[],expected:"Infinity"}],s=["b is 0, guard returns Infinity","No nested else needed"],r={id:n,title:t,starterCode:e,solution:i,tests:o,hints:s};export{r as default,s as hints,n as id,i as solution,e as starterCode,o as tests,t as title};
