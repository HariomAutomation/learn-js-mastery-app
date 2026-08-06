const o="04-control-flow-if-else-switch-16",n="Switch with string comparison",t=`const color = 'red';
switch (color) {
  case 'red':
    console.log('warm');
    break;
  case 'blue':
    console.log('cool');
    break;
  default:
    console.log('neutral');
}`,e=`const color = 'red';
switch (color) {
  case 'red':
    console.log('warm');
    break;
  case 'blue':
    console.log('cool');
    break;
  default:
    console.log('neutral');
}`,s=[{input:[],expected:"warm"}],c=["switch does strict comparison","'red' === 'red' is true"],l={id:o,title:n,starterCode:t,solution:e,tests:s,hints:c};export{l as default,c as hints,o as id,e as solution,t as starterCode,s as tests,n as title};
