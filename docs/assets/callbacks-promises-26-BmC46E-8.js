const e="12-async-callbacks-promises-26",t="Rejection Handler",s=`Promise.reject('unhandled')
  .catch(err => console.log('caught: ' + err));`,n=`Promise.reject('unhandled')
  .catch(err => console.log('caught: ' + err));`,c=[{input:[],expected:"caught: unhandled"}],o=["catch handles rejected promise","Prevents unhandled rejection"],r={id:e,title:t,starterCode:s,solution:n,tests:c,hints:o};export{r as default,o as hints,e as id,n as solution,s as starterCode,c as tests,t as title};
