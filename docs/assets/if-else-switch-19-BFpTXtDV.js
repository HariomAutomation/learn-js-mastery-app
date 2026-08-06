const e="04-control-flow-if-else-switch-19",s="Null check with if",n=`const user = null;
if (user !== null) {
  console.log(user.name);
} else {
  console.log('no user');
}`,l=`const user = null;
if (user !== null) {
  console.log(user.name);
} else {
  console.log('no user');
}`,o=[{input:[],expected:"no user"}],t=["null !== null is false","else block executes"],c={id:e,title:s,starterCode:n,solution:l,tests:o,hints:t};export{c as default,t as hints,e as id,l as solution,n as starterCode,o as tests,s as title};
