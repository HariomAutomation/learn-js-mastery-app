const e="12-async-callbacks-promises-41",t="Promise Then Return",s=`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,n=`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,o=[{input:[],expected:"3"}],c=["Each then returns new promise","Values chain through"],r={id:e,title:t,starterCode:s,solution:n,tests:o,hints:c};export{r as default,c as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
