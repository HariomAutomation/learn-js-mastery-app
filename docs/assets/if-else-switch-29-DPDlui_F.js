const s="04-control-flow-if-else-switch-29",e="Guard clause with null user",n=`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  return \`Processing \${user.name}\`;
}
console.log(processUser(null));`,r=`function processUser(user) {
  if (!user) return 'no user';
  if (!user.name) return 'no name';
  return \`Processing \${user.name}\`;
}
console.log(processUser(null));`,t=[{input:[],expected:"no user"}],o=["null is falsy","First guard returns early"],u={id:s,title:e,starterCode:n,solution:r,tests:t,hints:o};export{u as default,o as hints,s as id,r as solution,n as starterCode,t as tests,e as title};
