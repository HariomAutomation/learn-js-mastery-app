const n="04-control-flow-early-return-06",e="Return undefined early",s=`function findUser(users, id) {
  if (!users) return undefined;
  if (!id) return undefined;
  return users.find(u => u.id === id);
}
const users = [{ id: 1, name: 'Alice' }];
console.log(findUser(users, 1));`,t=`function findUser(users, id) {
  if (!users) return undefined;
  if (!id) return undefined;
  return users.find(u => u.id === id);
}
const users = [{ id: 1, name: 'Alice' }];
console.log(findUser(users, 1));`,r=[{input:[],expected:"[object Object]"}],i=["Both guards pass","find returns matching user object"],u={id:n,title:e,starterCode:s,solution:t,tests:r,hints:i};export{u as default,i as hints,n as id,t as solution,s as starterCode,r as tests,e as title};
