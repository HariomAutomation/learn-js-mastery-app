const s="12-async-callbacks-promises-33",e="Promise.all Mixed",o=`Promise.all([
  Promise.resolve(1),
  new Promise(r => setTimeout(() => r(2), 10)),
  Promise.resolve(3)
]).then(v => console.log(v));`,t=`Promise.all([
  Promise.resolve(1),
  new Promise(r => setTimeout(() => r(2), 10)),
  Promise.resolve(3)
]).then(v => console.log(v));`,n=[{input:[],expected:"1,2,3"}],r=["Mix of sync and async promises","All results in order"],i={id:s,title:e,starterCode:o,solution:t,tests:n,hints:r};export{i as default,r as hints,s as id,t as solution,o as starterCode,n as tests,e as title};
