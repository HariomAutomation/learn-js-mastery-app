const t="12-async-callbacks-promises-22",e="Chaining Return",s=`Promise.resolve('start')
  .then(x => { console.log(x); return x.toUpperCase(); })
  .then(x => console.log(x));`,n=`Promise.resolve('start')
  .then(x => { console.log(x); return x.toUpperCase(); })
  .then(x => console.log(x));`,o=[{input:[],expected:`start
START`}],r=["Return value passes to next then","Return new value in chain"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:r};export{l as default,r as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
