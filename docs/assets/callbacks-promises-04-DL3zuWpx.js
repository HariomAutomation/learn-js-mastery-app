const e="12-async-callbacks-promises-04",s="Promise Resolve",o=`const p = Promise.resolve(42);
p.then(val => console.log(val));`,t=`const p = Promise.resolve(42);
p.then(val => console.log(val));`,l=[{input:[],expected:"42"}],n=["Promise.resolve creates resolved promise","then() receives the value"],c={id:e,title:s,starterCode:o,solution:t,tests:l,hints:n};export{c as default,n as hints,e as id,t as solution,o as starterCode,l as tests,s as title};
