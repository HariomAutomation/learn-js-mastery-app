const n="04-control-flow-if-else-switch-39",o="If with empty object",e=`const obj = {};
if (obj.name) {
  console.log('has name');
} else {
  console.log('no name');
}`,t=`const obj = {};
if (obj.name) {
  console.log('has name');
} else {
  console.log('no name');
}`,s=[{input:[],expected:"no name"}],i=["obj.name is undefined","undefined is falsy"],l={id:n,title:o,starterCode:e,solution:t,tests:s,hints:i};export{l as default,i as hints,n as id,t as solution,e as starterCode,s as tests,o as title};
