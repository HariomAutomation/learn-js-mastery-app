const t="04-control-flow-early-return-40",e="Guard clause with logical AND",n=`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(21, true));`,s=`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(21, true));`,o=[{input:[],expected:"true"}],r=["21 < 18 is false","!true is false","false || false is false, guard doesn't trigger"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{i as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
