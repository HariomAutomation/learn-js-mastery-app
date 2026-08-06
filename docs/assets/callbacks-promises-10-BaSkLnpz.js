const e="12-async-callbacks-promises-10",s="Promise AllSettled",t=`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail'),
  Promise.resolve('done')
]).then(results => console.log(results.length));`,l=`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail'),
  Promise.resolve('done')
]).then(results => console.log(results.length));`,o=[{input:[],expected:"3"}],r=["allSettled waits for all","Never rejects, returns all results"],n={id:e,title:s,starterCode:t,solution:l,tests:o,hints:r};export{n as default,r as hints,e as id,l as solution,t as starterCode,o as tests,s as title};
