const o="04-control-flow-if-else-switch-11",n="Truthy number condition",t=`const count = 0;
if (count) {
  console.log('has count');
} else {
  console.log('no count');
}`,s=`const count = 0;
if (count) {
  console.log('has count');
} else {
  console.log('no count');
}`,e=[{input:[],expected:"no count"}],c=["0 is falsy","else block executes"],l={id:o,title:n,starterCode:t,solution:s,tests:e,hints:c};export{l as default,c as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
