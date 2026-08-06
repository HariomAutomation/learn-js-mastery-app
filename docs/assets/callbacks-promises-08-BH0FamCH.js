const s="12-async-callbacks-promises-08",e="Promise All",o=`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log(values));`,l=`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log(values));`,t=[{input:[],expected:"1,2,3"}],r=["Promise.all waits for all","Returns array of results"],n={id:s,title:e,starterCode:o,solution:l,tests:t,hints:r};export{n as default,r as hints,s as id,l as solution,o as starterCode,t as tests,e as title};
