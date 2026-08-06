const s="12-async-callbacks-promises-37",o="Promise.all Array Methods",e=`const nums = [1, 2, 3, 4, 5];
Promise.all(nums.map(n => Promise.resolve(n * 2)))
  .then(doubled => console.log(doubled));`,t=`const nums = [1, 2, 3, 4, 5];
Promise.all(nums.map(n => Promise.resolve(n * 2)))
  .then(doubled => console.log(doubled));`,n=[{input:[],expected:"2,4,6,8,10"}],l=["Map array to promises","Use Promise.all on mapped array"],a={id:s,title:o,starterCode:e,solution:t,tests:n,hints:l};export{a as default,l as hints,s as id,t as solution,e as starterCode,n as tests,o as title};
