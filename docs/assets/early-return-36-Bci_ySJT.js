const e="04-control-flow-early-return-36",t="Early return boolean - not adult",n=`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(15));`,s=`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(15));`,o=[{input:[],expected:"false"}],r=["age is a number","age is positive","15 >= 18 is false"],a={id:e,title:t,starterCode:n,solution:s,tests:o,hints:r};export{a as default,r as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
