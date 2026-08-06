const n="04-control-flow-if-else-switch-37",e="Switch with undefined",t=`const value = undefined;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,o=`const value = undefined;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,s=[{input:[],expected:"undefined"}],l=["undefined matches case undefined","switch uses === comparison"],c={id:n,title:e,starterCode:t,solution:o,tests:s,hints:l};export{c as default,l as hints,n as id,o as solution,t as starterCode,s as tests,e as title};
