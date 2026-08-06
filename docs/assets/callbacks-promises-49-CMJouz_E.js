const e="12-async-callbacks-promises-49",s="Promise.all Settled Order",t=`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
]).then(r => console.log(r.map(x => x.status)));`,o=`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3)
]).then(r => console.log(r.map(x => x.status)));`,l=[{input:[],expected:"fulfilled,rejected,fulfilled"}],r=["Results maintain input order","Each has status property"],n={id:e,title:s,starterCode:t,solution:o,tests:l,hints:r};export{n as default,r as hints,e as id,o as solution,t as starterCode,l as tests,s as title};
