const e="12-async-callbacks-promises-48",s="Promise Resolve Undefined",n=`Promise.resolve(undefined)
  .then(val => console.log(typeof val));`,t=`Promise.resolve(undefined)
  .then(val => console.log(typeof val));`,o=[{input:[],expected:"undefined"}],i=["Promise can resolve with undefined","then receives undefined"],l={id:e,title:s,starterCode:n,solution:t,tests:o,hints:i};export{l as default,i as hints,e as id,t as solution,n as starterCode,o as tests,s as title};
