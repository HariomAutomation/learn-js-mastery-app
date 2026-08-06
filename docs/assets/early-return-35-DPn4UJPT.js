const e="04-control-flow-early-return-35",t="Early return boolean",n=`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(25));`,s=`function isAdult(age) {
  if (typeof age !== 'number') return false;
  if (age < 0) return false;
  return age >= 18;
}
console.log(isAdult(25));`,r=[{input:[],expected:"true"}],o=["age is a number","age is positive","25 >= 18 is true"],i={id:e,title:t,starterCode:n,solution:s,tests:r,hints:o};export{i as default,o as hints,e as id,s as solution,n as starterCode,r as tests,t as title};
