const n="04-control-flow-early-return-44",t="Multiple early returns in loop",e=`function findFirstNegative(arr) {
  for (const num of arr) {
    if (typeof num !== 'number') continue;
    if (num < 0) return num;
  }
  return null;
}
console.log(findFirstNegative([1, 'a', -3, 4]));`,r=`function findFirstNegative(arr) {
  for (const num of arr) {
    if (typeof num !== 'number') continue;
    if (num < 0) return num;
  }
  return null;
}
console.log(findFirstNegative([1, 'a', -3, 4]));`,o=[{input:[],expected:"-3"}],i=["1 is number, not negative","'a' is not number, skip","-3 is number and negative"],s={id:n,title:t,starterCode:e,solution:r,tests:o,hints:i};export{s as default,i as hints,n as id,r as solution,e as starterCode,o as tests,t as title};
