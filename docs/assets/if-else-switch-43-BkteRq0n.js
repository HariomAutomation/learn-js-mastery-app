const t="04-control-flow-if-else-switch-43",n="If with bitwise AND",o=`const num = 5;
if (num & 1) {
  console.log('odd');
} else {
  console.log('even');
}`,s=`const num = 5;
if (num & 1) {
  console.log('odd');
} else {
  console.log('even');
}`,e=[{input:[],expected:"odd"}],i=["& is bitwise AND","5 & 1 = 1, which is truthy"],l={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{l as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
