const e="04-control-flow-early-return-24",s="Nested refactor to flat",n=`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: true }));`,t=`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: true }));`,r=[{input:[],expected:"true"}],o=["user is truthy","isLoggedIn is true","hasPermission is true"],i={id:e,title:s,starterCode:n,solution:t,tests:r,hints:o};export{i as default,o as hints,e as id,t as solution,n as starterCode,r as tests,s as title};
