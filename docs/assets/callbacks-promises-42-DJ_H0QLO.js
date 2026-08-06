const e="12-async-callbacks-promises-42",s="Promise All Reject",r=`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,o=`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,t=[{input:[],expected:"err"}],n=["Promise.all rejects on first rejection","Ignores remaining promises"],i={id:e,title:s,starterCode:r,solution:o,tests:t,hints:n};export{i as default,n as hints,e as id,o as solution,r as starterCode,t as tests,s as title};
