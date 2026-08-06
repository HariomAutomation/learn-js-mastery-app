const o="04-control-flow-if-else-switch-48",e="Switch with bitwise OR",s=`const flags = 5;
switch (flags) {
  case 1: console.log('flag1'); break;
  case 2: console.log('flag2'); break;
  case 3: console.log('flag3'); break;
  default: console.log('other');
}`,t=`const flags = 5;
switch (flags) {
  case 1: console.log('flag1'); break;
  case 2: console.log('flag2'); break;
  case 3: console.log('flag3'); break;
  default: console.log('other');
}`,l=[{input:[],expected:"other"}],n=["5 doesn't match 1, 2, or 3","default executes"],c={id:o,title:e,starterCode:s,solution:t,tests:l,hints:n};export{c as default,n as hints,o as id,t as solution,s as starterCode,l as tests,e as title};
