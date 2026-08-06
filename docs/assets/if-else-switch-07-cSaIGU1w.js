const n="04-control-flow-if-else-switch-07",t="Switch with default",e=`const day = 'Wednesday';
switch (day) {
  case 'Monday':
    console.log('Start');
    break;
  case 'Friday':
    console.log('End');
    break;
  default:
    console.log('Other');
}`,s=`const day = 'Wednesday';
switch (day) {
  case 'Monday':
    console.log('Start');
    break;
  case 'Friday':
    console.log('End');
    break;
  default:
    console.log('Other');
}`,o=[{input:[],expected:"Other"}],a=["Wednesday doesn't match any case","default executes"],c={id:n,title:t,starterCode:e,solution:s,tests:o,hints:a};export{c as default,a as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
