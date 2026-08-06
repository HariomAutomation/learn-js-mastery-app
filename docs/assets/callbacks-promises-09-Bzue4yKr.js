const e="12-async-callbacks-promises-09",s="Promise Race",t=`Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 100)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 10))
]).then(winner => console.log(winner));`,o=`Promise.race([
  new Promise(resolve => setTimeout(() => resolve('slow'), 100)),
  new Promise(resolve => setTimeout(() => resolve('fast'), 10))
]).then(winner => console.log(winner));`,n=[{input:[],expected:"fast"}],r=["race returns first settled","Fast promise wins"],i={id:e,title:s,starterCode:t,solution:o,tests:n,hints:r};export{i as default,r as hints,e as id,o as solution,t as starterCode,n as tests,s as title};
