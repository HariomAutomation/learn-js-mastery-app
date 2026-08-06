const s="04-control-flow-early-return-25",e="Nested refactor - no access",n=`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: false }));`,r=`function canAccess(user) {
  if (!user) return false;
  if (!user.isLoggedIn) return false;
  if (!user.hasPermission) return false;
  return true;
}
console.log(canAccess({ isLoggedIn: true, hasPermission: false }));`,t=[{input:[],expected:"false"}],o=["user is truthy","isLoggedIn is true","hasPermission is false, returns false"],i={id:s,title:e,starterCode:n,solution:r,tests:t,hints:o};export{i as default,o as hints,s as id,r as solution,n as starterCode,t as tests,e as title};
