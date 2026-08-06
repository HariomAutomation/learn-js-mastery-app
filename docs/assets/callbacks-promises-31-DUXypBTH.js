const s="12-async-callbacks-promises-31",e="Promise.all Parallel",o=`const tasks = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];
Promise.all(tasks).then(r => console.log(r.join('')));`,t=`const tasks = [
  Promise.resolve('a'),
  Promise.resolve('b'),
  Promise.resolve('c')
];
Promise.all(tasks).then(r => console.log(r.join('')));`,n=[{input:[],expected:"abc"}],l=["All run in parallel","Results joined as string"],r={id:s,title:e,starterCode:o,solution:t,tests:n,hints:l};export{r as default,l as hints,s as id,t as solution,o as starterCode,n as tests,e as title};
