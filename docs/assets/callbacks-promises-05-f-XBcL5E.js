const e="12-async-callbacks-promises-05",t="Promise Reject",r=`const p = Promise.reject('error');
p.catch(err => console.log(err));`,s=`const p = Promise.reject('error');
p.catch(err => console.log(err));`,o=[{input:[],expected:"error"}],c=["Promise.reject creates rejected promise","catch() handles the error"],n={id:e,title:t,starterCode:r,solution:s,tests:o,hints:c};export{n as default,c as hints,e as id,s as solution,r as starterCode,o as tests,t as title};
