const n="12-async-async-await-16",e="Async Generator",t=`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();`,s=`async function* gen() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
(async () => {
  for await (const val of gen()) {
    console.log(val);
  }
})();`,o=[{input:[],expected:`1
2
3`}],a=["async function* creates async generator","for await...of iterates"],i={id:n,title:e,starterCode:t,solution:s,tests:o,hints:a};export{i as default,a as hints,n as id,s as solution,t as starterCode,o as tests,e as title};
