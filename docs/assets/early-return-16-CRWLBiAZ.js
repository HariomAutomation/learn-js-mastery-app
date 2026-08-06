const t="04-control-flow-early-return-16",n="Early return in loop",e=`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, -3, 4]));`,r=`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, -3, 4]));`,o=[{input:[],expected:"true"}],s=["Loop finds -3","Returns true immediately"],a={id:t,title:n,starterCode:e,solution:r,tests:o,hints:s};export{a as default,s as hints,t as id,r as solution,e as starterCode,o as tests,n as title};
