const e="12-async-callbacks-promises-35",l="Promise.allSettled Complete",s=`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).then(results => {
  const fulfilled = results.filter(r => r.status === 'fulfilled');
  console.log(fulfilled.length);
});`,t=`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('err'),
  Promise.resolve(3)
]).then(results => {
  const fulfilled = results.filter(r => r.status === 'fulfilled');
  console.log(fulfilled.length);
});`,o=[{input:[],expected:"2"}],r=["Count fulfilled results","Filter by status"],n={id:e,title:l,starterCode:s,solution:t,tests:o,hints:r};export{n as default,r as hints,e as id,t as solution,s as starterCode,o as tests,l as title};
