const n="09-strings-string-patterns-22",e="Mask Email",t=`function maskEmail(email) {
  const [name, domain] = email.split('@');
  const masked = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  return masked + '@' + domain;
}
console.log(maskEmail('alice@example.com'));`,a=`function maskEmail(email) {
  const [name, domain] = email.split('@');
  const masked = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  return masked + '@' + domain;
}
console.log(maskEmail('alice@example.com'));`,s=[{input:[],expected:"a*****e@example.com"}],m=["Keep first and last","Mask middle with *"],i={id:n,title:e,starterCode:t,solution:a,tests:s,hints:m};export{i as default,m as hints,n as id,a as solution,t as starterCode,s as tests,e as title};
