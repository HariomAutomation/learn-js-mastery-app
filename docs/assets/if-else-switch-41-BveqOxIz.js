const s="04-control-flow-if-else-switch-41",o="If with comparison operators",n=`const a = 10;
const b = 20;
if (a < b) {
  console.log('a is smaller');
} else if (a > b) {
  console.log('a is larger');
} else {
  console.log('equal');
}`,e=`const a = 10;
const b = 20;
if (a < b) {
  console.log('a is smaller');
} else if (a > b) {
  console.log('a is larger');
} else {
  console.log('equal');
}`,t=[{input:[],expected:"a is smaller"}],l=["10 < 20 is true","First condition matches"],i={id:s,title:o,starterCode:n,solution:e,tests:t,hints:l};export{i as default,l as hints,s as id,e as solution,n as starterCode,t as tests,o as title};
