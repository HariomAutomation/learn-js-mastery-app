const s="04-control-flow-if-else-switch-35",e="If/else if with string comparison",o=`const role = 'admin';
if (role === 'admin') {
  console.log('full access');
} else if (role === 'user') {
  console.log('limited access');
} else {
  console.log('no access');
}`,n=`const role = 'admin';
if (role === 'admin') {
  console.log('full access');
} else if (role === 'user') {
  console.log('limited access');
} else {
  console.log('no access');
}`,l=[{input:[],expected:"full access"}],t=["role === 'admin' is true","First condition matches"],c={id:s,title:e,starterCode:o,solution:n,tests:l,hints:t};export{c as default,t as hints,s as id,n as solution,o as starterCode,l as tests,e as title};
