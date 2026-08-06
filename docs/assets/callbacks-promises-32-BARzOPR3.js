const t="12-async-callbacks-promises-32",s="Promise Chain Value",e=`Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(x => console.log(x));`,n=`Promise.resolve(10)
  .then(x => x * 2)
  .then(x => x + 5)
  .then(x => console.log(x));`,o=[{input:[],expected:"25"}],l=["10 * 2 = 20","20 + 5 = 25"],c={id:t,title:s,starterCode:e,solution:n,tests:o,hints:l};export{c as default,l as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
