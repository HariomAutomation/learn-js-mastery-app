const t="04-control-flow-if-else-switch-30",n="Nested switch with fallthrough",o=`const x = 1;
const y = 1;
switch (x) {
  case 1:
    console.log('x=1');
  case 2:
    console.log('x=2');
    break;
  default:
    console.log('other');
}`,s=`const x = 1;
const y = 1;
switch (x) {
  case 1:
    console.log('x=1');
  case 2:
    console.log('x=2');
    break;
  default:
    console.log('other');
}`,e=[{input:[],expected:`x=1
x=2`}],c=["case 1 has no break","Falls through to case 2"],l={id:t,title:n,starterCode:o,solution:s,tests:e,hints:c};export{l as default,c as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
