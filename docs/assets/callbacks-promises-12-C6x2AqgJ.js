const e="12-async-callbacks-promises-12",o="Finally Block",l=`Promise.resolve('done')
  .then(val => console.log(val))
  .finally(() => console.log('complete'));`,s=`Promise.resolve('done')
  .then(val => console.log(val))
  .finally(() => console.log('complete'));`,t=[{input:[],expected:`done
complete`}],n=["finally runs after then/catch","Always executes"],c={id:e,title:o,starterCode:l,solution:s,tests:t,hints:n};export{c as default,n as hints,e as id,s as solution,l as starterCode,t as tests,o as title};
