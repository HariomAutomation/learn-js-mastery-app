const s="04-control-flow-if-else-switch-45",t="If with NaN check",e=`const value = NaN;
if (Number.isNaN(value)) {
  console.log('is NaN');
} else {
  console.log('not NaN');
}`,o=`const value = NaN;
if (Number.isNaN(value)) {
  console.log('is NaN');
} else {
  console.log('not NaN');
}`,n=[{input:[],expected:"is NaN"}],N=["Number.isNaN checks for NaN","value is NaN"],l={id:s,title:t,starterCode:e,solution:o,tests:n,hints:N};export{l as default,N as hints,s as id,o as solution,e as starterCode,n as tests,t as title};
