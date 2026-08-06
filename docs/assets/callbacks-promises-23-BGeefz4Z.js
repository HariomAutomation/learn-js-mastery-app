const e="12-async-callbacks-promises-23",r="All Error",s=`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,o=`Promise.all([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).catch(err => console.log(err));`,t=[{input:[],expected:"err"}],c=["Promise.all rejects if any rejects","First rejection triggers catch"],l={id:e,title:r,starterCode:s,solution:o,tests:t,hints:c};export{l as default,c as hints,e as id,o as solution,s as starterCode,t as tests,r as title};
