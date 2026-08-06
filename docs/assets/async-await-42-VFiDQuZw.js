const s="12-async-async-await-42",n="Parallel Await",e=`async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  console.log(a + b);
}
parallel();`,t=`async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  console.log(a + b);
}
parallel();`,l=[{input:[],expected:"3"}],a=["Promise.all runs in parallel","Destructure results"],o={id:s,title:n,starterCode:e,solution:t,tests:l,hints:a};export{o as default,a as hints,s as id,t as solution,e as starterCode,l as tests,n as title};
