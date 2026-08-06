const e="04-control-flow-if-else-switch-05",n="Nested if/else",s=`const num = 15;
if (num > 10) {
  if (num > 20) {
    console.log('large');
  } else {
    console.log('medium');
  }
} else {
  console.log('small');
}`,o=`const num = 15;
if (num > 10) {
  if (num > 20) {
    console.log('large');
  } else {
    console.log('medium');
  }
} else {
  console.log('small');
}`,t=[{input:[],expected:"medium"}],l=["15 > 10 is true, enter first block","15 > 20 is false, enter else"],i={id:e,title:n,starterCode:s,solution:o,tests:t,hints:l};export{i as default,l as hints,e as id,o as solution,s as starterCode,t as tests,n as title};
