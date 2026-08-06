const e="12-async-callbacks-promises-30",t="Promise Practice",s=`Promise.resolve('practice')
  .then(x => x + ' makes perfect')
  .then(x => console.log(x));`,o=`Promise.resolve('practice')
  .then(x => x + ' makes perfect')
  .then(x => console.log(x));`,n=[{input:[],expected:"practice makes perfect"}],c=["Chain promises together","Transform values in then"],r={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{r as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
