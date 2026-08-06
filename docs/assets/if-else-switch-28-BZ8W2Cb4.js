const e="04-control-flow-if-else-switch-28",s="Guard clause with multiple conditions",n=`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  if (!user.email) return 'no email';
  return \`Processing \${user.name}\`;
}
console.log(processUser({ name: 'Alice', email: 'alice@test.com' }));`,r=`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  if (!user.email) return 'no email';
  return \`Processing \${user.name}\`;
}
console.log(processUser({ name: 'Alice', email: 'alice@test.com' }));`,t=[{input:[],expected:"Processing Alice"}],o=["All guards pass","Returns success message"],i={id:e,title:s,starterCode:n,solution:r,tests:t,hints:o};export{i as default,o as hints,e as id,r as solution,n as starterCode,t as tests,s as title};
