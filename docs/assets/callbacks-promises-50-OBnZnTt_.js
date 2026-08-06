const s="12-async-callbacks-promises-50",e="Promise Race Tie",o=`Promise.race([
  Promise.resolve('a'),
  Promise.resolve('b')
]).then(w => console.log(w));`,t=`Promise.race([
  Promise.resolve('a'),
  Promise.resolve('b')
]).then(w => console.log(w));`,n=[{input:[],expected:"a"}],r=["Both resolve synchronously","First in array wins"],i={id:s,title:e,starterCode:o,solution:t,tests:n,hints:r};export{i as default,r as hints,s as id,t as solution,o as starterCode,n as tests,e as title};
