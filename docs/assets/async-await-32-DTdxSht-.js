const t="12-async-async-await-32",e="Await Promise.allSettled",s=`async function allSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('fail')
  ]);
  console.log(results.length);
}
allSettled();`,l=`async function allSettled() {
  const results = await Promise.allSettled([
    Promise.resolve('ok'),
    Promise.reject('fail')
  ]);
  console.log(results.length);
}
allSettled();`,n=[{input:[],expected:"2"}],o=["allSettled never rejects","Returns all results"],a={id:t,title:e,starterCode:s,solution:l,tests:n,hints:o};export{a as default,o as hints,t as id,l as solution,s as starterCode,n as tests,e as title};
