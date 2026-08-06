const o="12-async-callbacks-promises-45",s="Promise Chain Error",e=`Promise.resolve(1)
  .then(x => { throw new Error('oops'); })
  .catch(err => console.log(err.message));`,t=`Promise.resolve(1)
  .then(x => { throw new Error('oops'); })
  .catch(err => console.log(err.message));`,r=[{input:[],expected:"oops"}],n=["Throw in then goes to catch","Error is caught"],c={id:o,title:s,starterCode:e,solution:t,tests:r,hints:n};export{c as default,n as hints,o as id,t as solution,e as starterCode,r as tests,s as title};
