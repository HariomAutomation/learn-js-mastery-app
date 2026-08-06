const e="04-control-flow-if-else-switch-14",o="Switch on numbers",n=`const code = 2;
switch (code) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('other');
}`,t=`const code = 2;
switch (code) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('other');
}`,s=[{input:[],expected:"two"}],c=["2 matches case 2","break prevents fallthrough"],l={id:e,title:o,starterCode:n,solution:t,tests:s,hints:c};export{l as default,c as hints,e as id,t as solution,n as starterCode,s as tests,o as title};
