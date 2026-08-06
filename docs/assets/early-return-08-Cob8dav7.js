const e="04-control-flow-early-return-08",t="Multiple exit points - moderator",n=`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isMod: true }));`,r=`function getRole(user) {
  if (!user) return 'anonymous';
  if (user.isAdmin) return 'admin';
  if (user.isMod) return 'moderator';
  return 'user';
}
console.log(getRole({ isMod: true }));`,o=[{input:[],expected:"moderator"}],s=["user is truthy","isAdmin is undefined (falsy)","isMod is true"],i={id:e,title:t,starterCode:n,solution:r,tests:o,hints:s};export{i as default,s as hints,e as id,r as solution,n as starterCode,o as tests,t as title};
