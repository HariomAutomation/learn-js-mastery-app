const e="04-control-flow-if-else-switch-09",n="Switch with break",t=`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
    break;
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,o=`const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('red');
    break;
  case 'banana':
    console.log('yellow');
    break;
  default:
    console.log('other');
}`,s=[{input:[],expected:"red"}],l=["break prevents fallthrough","Only apple case executes"],a={id:e,title:n,starterCode:t,solution:o,tests:s,hints:l};export{a as default,l as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
