const e="04-control-flow-early-return-19",n="Guard function - no email",t=`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail(''));`,i=`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail(''));`,l=[{input:[],expected:"false"}],s=["'' is falsy","First guard returns false"],a={id:e,title:n,starterCode:t,solution:i,tests:l,hints:s};export{a as default,s as hints,e as id,i as solution,t as starterCode,l as tests,n as title};
