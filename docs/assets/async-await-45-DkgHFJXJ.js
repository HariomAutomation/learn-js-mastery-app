const s="12-async-async-await-45",n="Async Generator",t=`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
(async () => {
  const results = [];
  for await (const v of gen()) results.push(v);
  console.log(results);
})();`,e=`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}
(async () => {
  const results = [];
  for await (const v of gen()) results.push(v);
  console.log(results);
})();`,o=[{input:[],expected:"1,2"}],a=["async function* creates async generator","for await...of iterates"],i={id:s,title:n,starterCode:t,solution:e,tests:o,hints:a};export{i as default,a as hints,s as id,e as solution,t as starterCode,o as tests,n as title};
