const s="12-async-callbacks-promises-25",t="AllSettled Status",e=`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail')
]).then(results => {
  console.log(results[0].status + ' ' + results[1].status);
});`,l=`Promise.allSettled([
  Promise.resolve('ok'),
  Promise.reject('fail')
]).then(results => {
  console.log(results[0].status + ' ' + results[1].status);
});`,o=[{input:[],expected:"fulfilled rejected"}],n=["status is 'fulfilled' or 'rejected'","Check each result's status"],r={id:s,title:t,starterCode:e,solution:l,tests:o,hints:n};export{r as default,n as hints,s as id,l as solution,e as starterCode,o as tests,t as title};
