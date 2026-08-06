const e="04-control-flow-if-else-switch-50",t="Switch with comma in case",n=`const day = 'Sat';
switch (day) {
  case 'Sat':
  case 'Sun':
    console.log('weekend');
    break;
  default:
    console.log('weekday');
}`,s=`const day = 'Sat';
switch (day) {
  case 'Sat':
  case 'Sun':
    console.log('weekend');
    break;
  default:
    console.log('weekday');
}`,o=[{input:[],expected:"weekend"}],a=["Sat matches first case","Falls through to weekend"],c={id:e,title:t,starterCode:n,solution:s,tests:o,hints:a};export{c as default,a as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
