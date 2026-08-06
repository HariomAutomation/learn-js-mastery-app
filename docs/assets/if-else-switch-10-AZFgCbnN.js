const n="04-control-flow-if-else-switch-10",e="Truthy/falsy if condition",o=`const name = '';
if (name) {
  console.log('has name');
} else {
  console.log('no name');
}`,s=`const name = '';
if (name) {
  console.log('has name');
} else {
  console.log('no name');
}`,t=[{input:[],expected:"no name"}],l=["Empty string is falsy","else block executes"],c={id:n,title:e,starterCode:o,solution:s,tests:t,hints:l};export{c as default,l as hints,n as id,s as solution,o as starterCode,t as tests,e as title};
