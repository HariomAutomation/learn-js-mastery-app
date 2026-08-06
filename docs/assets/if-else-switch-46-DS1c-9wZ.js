const e="04-control-flow-if-else-switch-46",n="Switch with multiple breaks",o=`const x = 3;
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  default:
    console.log('other');
}`,s=`const x = 3;
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  default:
    console.log('other');
}`,t=[{input:[],expected:"three"}],c=["Each case has a break","3 matches case 3"],l={id:e,title:n,starterCode:o,solution:s,tests:t,hints:c};export{l as default,c as hints,e as id,s as solution,o as starterCode,t as tests,n as title};
