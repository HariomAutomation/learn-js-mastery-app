const n="04-control-flow-if-else-switch-27",t="Switch with no matching case",e=`const status = 'pending';
switch (status) {
  case 'active':
    console.log('active');
    break;
  case 'inactive':
    console.log('inactive');
    break;
  default:
    console.log('unknown');
}`,s=`const status = 'pending';
switch (status) {
  case 'active':
    console.log('active');
    break;
  case 'inactive':
    console.log('inactive');
    break;
  default:
    console.log('unknown');
}`,o=[{input:[],expected:"unknown"}],c=["'pending' doesn't match any case","default executes"],i={id:n,title:t,starterCode:e,solution:s,tests:o,hints:c};export{i as default,c as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
