const s="04-control-flow-if-else-switch-23",n="If with logical OR",e=`const isVIP = false;
const isAdmin = true;
if (isVIP || isAdmin) {
  console.log('access granted');
} else {
  console.log('access denied');
}`,t=`const isVIP = false;
const isAdmin = true;
if (isVIP || isAdmin) {
  console.log('access granted');
} else {
  console.log('access denied');
}`,o=[{input:[],expected:"access granted"}],i=["|| needs one truthy condition","isAdmin is true"],c={id:s,title:n,starterCode:e,solution:t,tests:o,hints:i};export{c as default,i as hints,s as id,t as solution,e as starterCode,o as tests,n as title};
