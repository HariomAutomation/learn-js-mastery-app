const t="04-control-flow-if-else-switch-38",o="If with truthy object",e=`const obj = { name: 'test' };
if (obj) {
  console.log('object exists');
} else {
  console.log('no object');
}`,s=`const obj = { name: 'test' };
if (obj) {
  console.log('object exists');
} else {
  console.log('no object');
}`,n=[{input:[],expected:"object exists"}],c=["Objects are truthy","if block executes"],i={id:t,title:o,starterCode:e,solution:s,tests:n,hints:c};export{i as default,c as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
