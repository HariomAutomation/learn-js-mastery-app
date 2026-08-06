const s="12-async-callbacks-promises-15",n="Sequential Promises",e=`function asyncTask(val) {
  return new Promise(resolve => setTimeout(() => resolve(val), 10));
}
asyncTask(1)
  .then(r1 => asyncTask(r1 + 1))
  .then(r2 => asyncTask(r2 + 1))
  .then(r3 => console.log(r3));`,t=`function asyncTask(val) {
  return new Promise(resolve => setTimeout(() => resolve(val), 10));
}
asyncTask(1)
  .then(r1 => asyncTask(r1 + 1))
  .then(r2 => asyncTask(r2 + 1))
  .then(r3 => console.log(r3));`,o=[{input:[],expected:"3"}],a=["Chain promises for sequential execution","Each depends on previous"],r={id:s,title:n,starterCode:e,solution:t,tests:o,hints:a};export{r as default,a as hints,s as id,t as solution,e as starterCode,o as tests,n as title};
