const e="12-async-callbacks-promises-06",s="Then Chaining",t=`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,n=`Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => console.log(x));`,o=[{input:[],expected:"3"}],c=["Each then returns new promise","Value passes through chain"],i={id:e,title:s,starterCode:t,solution:n,tests:o,hints:c};export{i as default,c as hints,e as id,n as solution,t as starterCode,o as tests,s as title};
