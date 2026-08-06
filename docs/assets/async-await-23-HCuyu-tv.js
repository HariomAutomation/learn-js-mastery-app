const t="12-async-async-await-23",s="Async Waterfall",n=`async function waterfall() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 10);
  const c = await Promise.resolve(b + 100);
  console.log(c);
}
waterfall();`,e=`async function waterfall() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 10);
  const c = await Promise.resolve(b + 100);
  console.log(c);
}
waterfall();`,o=[{input:[],expected:"111"}],a=["Each step depends on previous","1 + 10 = 11, 11 + 100 = 111"],c={id:t,title:s,starterCode:n,solution:e,tests:o,hints:a};export{c as default,a as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
