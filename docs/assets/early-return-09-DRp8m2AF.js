const t="04-control-flow-early-return-09",n="Readability with early return",e=`function calculateShipping(weight, isInternational) {
  if (weight <= 0) return 0;
  if (isInternational) return weight * 5;
  return weight * 2;
}
console.log(calculateShipping(10, false));`,i=`function calculateShipping(weight, isInternational) {
  if (weight <= 0) return 0;
  if (isInternational) return weight * 5;
  return weight * 2;
}
console.log(calculateShipping(10, false));`,r=[{input:[],expected:"20"}],l=["weight is 10, not <= 0","isInternational is false","Returns weight * 2"],o={id:t,title:n,starterCode:e,solution:i,tests:r,hints:l};export{o as default,l as hints,t as id,i as solution,e as starterCode,r as tests,n as title};
