const o="04-control-flow-if-else-switch-04",s="If/else if/else chain",e=`const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}`,n=`const score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}`,t=[{input:[],expected:"B"}],l=["85 is not >= 90","85 >= 80 is true"],c={id:o,title:s,starterCode:e,solution:n,tests:t,hints:l};export{c as default,l as hints,o as id,n as solution,e as starterCode,t as tests,s as title};
