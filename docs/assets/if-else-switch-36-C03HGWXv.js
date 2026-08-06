const n="04-control-flow-if-else-switch-36",e="Switch with null",l=`const value = null;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,t=`const value = null;
switch (value) {
  case null:
    console.log('null');
    break;
  case undefined:
    console.log('undefined');
    break;
  default:
    console.log('other');
}`,o=[{input:[],expected:"null"}],s=["null matches case null","switch uses === comparison"],c={id:n,title:e,starterCode:l,solution:t,tests:o,hints:s};export{c as default,s as hints,n as id,t as solution,l as starterCode,o as tests,e as title};
