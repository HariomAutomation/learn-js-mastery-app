const e="04-control-flow-if-else-switch-06",n="Switch/case basic",t=`const day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Midweek');
}`,o=`const day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of week');
    break;
  case 'Friday':
    console.log('End of week');
    break;
  default:
    console.log('Midweek');
}`,s=[{input:[],expected:"Start of week"}],a=["switch matches day against cases","Monday matches first case"],c={id:e,title:n,starterCode:t,solution:o,tests:s,hints:a};export{c as default,a as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
