const e="12-async-callbacks-promises-40",t="Promise Reject Error",r=`Promise.reject(new Error('fail'))
  .catch(err => console.log(err.message));`,s=`Promise.reject(new Error('fail'))
  .catch(err => console.log(err.message));`,o=[{input:[],expected:"fail"}],c=["Reject with Error object","catch receives the error"],i={id:e,title:t,starterCode:r,solution:s,tests:o,hints:c};export{i as default,c as hints,e as id,s as solution,r as starterCode,o as tests,t as title};
