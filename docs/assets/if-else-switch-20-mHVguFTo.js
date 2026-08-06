const e="04-control-flow-if-else-switch-20",n="If with undefined check",t=`const value = undefined;
if (value !== undefined) {
  console.log('defined');
} else {
  console.log('undefined');
}`,s=`const value = undefined;
if (value !== undefined) {
  console.log('defined');
} else {
  console.log('undefined');
}`,o=[{input:[],expected:"undefined"}],d=["undefined !== undefined is false","else block executes"],i={id:e,title:n,starterCode:t,solution:s,tests:o,hints:d};export{i as default,d as hints,e as id,s as solution,t as starterCode,o as tests,n as title};
