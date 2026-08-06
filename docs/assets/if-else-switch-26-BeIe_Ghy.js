const o="04-control-flow-if-else-switch-26",e="Multiple if/else if conditions",t=`const temp = 25;
if (temp < 0) {
  console.log('freezing');
} else if (temp < 15) {
  console.log('cold');
} else if (temp < 25) {
  console.log('mild');
} else {
  console.log('hot');
}`,n=`const temp = 25;
if (temp < 0) {
  console.log('freezing');
} else if (temp < 15) {
  console.log('cold');
} else if (temp < 25) {
  console.log('mild');
} else {
  console.log('hot');
}`,s=[{input:[],expected:"hot"}],l=["25 is not < 0, not < 15, not < 25","Falls to else"],i={id:o,title:e,starterCode:t,solution:n,tests:s,hints:l};export{i as default,l as hints,o as id,n as solution,t as starterCode,s as tests,e as title};
