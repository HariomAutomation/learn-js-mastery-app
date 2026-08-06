const e="12-async-callbacks-promises-43",r="Promise Race Reject",s=`Promise.race([
  new Promise((_, r) => setTimeout(() => r('slow error'), 100)),
  new Promise((_, r) => setTimeout(() => r('fast error'), 10))
]).catch(err => console.log(err));`,t=`Promise.race([
  new Promise((_, r) => setTimeout(() => r('slow error'), 100)),
  new Promise((_, r) => setTimeout(() => r('fast error'), 10))
]).catch(err => console.log(err));`,o=[{input:[],expected:"fast error"}],n=["Race returns first settled","Fastest rejection wins"],c={id:e,title:r,starterCode:s,solution:t,tests:o,hints:n};export{c as default,n as hints,e as id,t as solution,s as starterCode,o as tests,r as title};
