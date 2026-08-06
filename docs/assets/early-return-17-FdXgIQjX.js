const n="04-control-flow-early-return-17",t="Early return in loop - no match",e=`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, 3, 4]));`,o=`function hasNegative(arr) {
  for (const num of arr) {
    if (num < 0) return true;
  }
  return false;
}
console.log(hasNegative([1, 2, 3, 4]));`,r=[{input:[],expected:"false"}],s=["No negative numbers found","Returns false after loop"],a={id:n,title:t,starterCode:e,solution:o,tests:r,hints:s};export{a as default,s as hints,n as id,o as solution,e as starterCode,r as tests,t as title};
