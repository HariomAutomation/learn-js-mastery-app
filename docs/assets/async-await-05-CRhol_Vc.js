const t="12-async-async-await-05",s="Sequential Await",e=`async function sequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 1);
  const c = await Promise.resolve(b + 1);
  console.log(c);
}
sequential();`,n=`async function sequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(a + 1);
  const c = await Promise.resolve(b + 1);
  console.log(c);
}
sequential();`,o=[{input:[],expected:"3"}],a=["Each await waits for previous","Sequential execution"],i={id:t,title:s,starterCode:e,solution:n,tests:o,hints:a};export{i as default,a as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
