const e="12-async-callbacks-promises-07",t="Catch Handling",s=`Promise.reject('fail')
  .catch(err => 'recovered')
  .then(val => console.log(val));`,o=`Promise.reject('fail')
  .catch(err => 'recovered')
  .then(val => console.log(val));`,c=[{input:[],expected:"recovered"}],n=["catch handles rejection","Returns new resolved promise"],r={id:e,title:t,starterCode:s,solution:o,tests:c,hints:n};export{r as default,n as hints,e as id,o as solution,s as starterCode,c as tests,t as title};
