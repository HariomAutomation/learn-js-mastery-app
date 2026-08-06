const e="12-async-callbacks-promises-17",t="Timeout Pattern",o=`function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej('timeout'), ms))
  ]);
}
withTimeout(new Promise(r => setTimeout(() => r('done'), 50)), 100)
  .then(v => console.log(v));`,s=`function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej('timeout'), ms))
  ]);
}
withTimeout(new Promise(r => setTimeout(() => r('done'), 50)), 100)
  .then(v => console.log(v));`,n=[{input:[],expected:"done"}],i=["Race promise against timeout","First to settle wins"],r={id:e,title:t,starterCode:o,solution:s,tests:n,hints:i};export{r as default,i as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
