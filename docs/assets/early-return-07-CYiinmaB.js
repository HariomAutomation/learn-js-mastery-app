const n="04-control-flow-early-return-07",t="Multiple exit points",e=`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isAdmin: true }));`,r=`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isAdmin: true }));`,s=[{input:[],expected:"admin"}],o=["user is truthy","isAdmin is true, returns 'admin'"],i={id:n,title:t,starterCode:e,solution:r,tests:s,hints:o};export{i as default,o as hints,n as id,r as solution,e as starterCode,s as tests,t as title};
