const s="12-async-callbacks-promises-39",e="Promise Resolve String",t=`Promise.resolve('hello')
  .then(msg => console.log(msg));`,o=`Promise.resolve('hello')
  .then(msg => console.log(msg));`,l=[{input:[],expected:"hello"}],n=["Promise.resolve with string value","then receives the string"],i={id:s,title:e,starterCode:t,solution:o,tests:l,hints:n};export{i as default,n as hints,s as id,o as solution,t as starterCode,l as tests,e as title};
