const e="04-control-flow-early-return-18",t="Guard function pattern",i=`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail('test@example.com'));`,n=`function isValidEmail(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;
  return email.includes('@');
}
console.log(isValidEmail('test@example.com'));`,l=[{input:[],expected:"true"}],s=["email is truthy","email is a string","email includes '@'"],a={id:e,title:t,starterCode:i,solution:n,tests:l,hints:s};export{a as default,s as hints,e as id,n as solution,i as starterCode,l as tests,t as title};
