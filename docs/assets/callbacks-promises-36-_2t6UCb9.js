const e="12-async-callbacks-promises-36",s="Promise Resolve Object",o=`Promise.resolve({ name: 'John', age: 30 })
  .then(user => console.log(user.name));`,t=`Promise.resolve({ name: 'John', age: 30 })
  .then(user => console.log(user.name));`,n=[{input:[],expected:"John"}],r=["Promise can resolve with any value","Access properties in then"],c={id:e,title:s,starterCode:o,solution:t,tests:n,hints:r};export{c as default,r as hints,e as id,t as solution,o as starterCode,n as tests,s as title};
