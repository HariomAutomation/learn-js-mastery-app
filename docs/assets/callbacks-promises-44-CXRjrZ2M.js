const t="12-async-callbacks-promises-44",e="Promise Finally",s=`Promise.reject('error')
  .catch(err => 'caught')
  .finally(() => console.log('done'));`,o=`Promise.reject('error')
  .catch(err => 'caught')
  .finally(() => console.log('done'));`,n=[{input:[],expected:"done"}],c=["finally runs after catch","Always executes"],r={id:t,title:e,starterCode:s,solution:o,tests:n,hints:c};export{r as default,c as hints,t as id,o as solution,s as starterCode,n as tests,e as title};
