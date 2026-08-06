const t="04-control-flow-early-return-41",e="Guard clause - cannot vote",n=`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(16, true));`,o=`function canVote(age, citizen) {
  if (age < 18 || !citizen) return false;
  return true;
}
console.log(canVote(16, true));`,r=[{input:[],expected:"false"}],s=["16 < 18 is true","true || false is true, guard triggers"],i={id:t,title:e,starterCode:n,solution:o,tests:r,hints:s};export{i as default,s as hints,t as id,o as solution,n as starterCode,r as tests,e as title};
