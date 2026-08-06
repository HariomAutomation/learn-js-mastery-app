const e="06-functions-arrow-functions-19",o="Promise Arrow",s=`const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(100).then(() => console.log('Resolved'));`,t=`const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
delay(100).then(() => console.log('Resolved'));`,n=[{input:[],expected:"Resolved"}],l=["Arrow in Promise","Resolve callback"],r={id:e,title:o,starterCode:s,solution:t,tests:n,hints:l};export{r as default,l as hints,e as id,t as solution,s as starterCode,n as tests,o as title};
