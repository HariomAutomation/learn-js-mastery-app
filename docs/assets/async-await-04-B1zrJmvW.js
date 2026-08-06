const s="12-async-async-await-04",e="Parallel Await",n=`async function parallel() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  console.log(a + b + c);
}
parallel();`,l=`async function parallel() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ]);
  console.log(a + b + c);
}
parallel();`,o=[{input:[],expected:"6"}],t=["Promise.all runs in parallel","Destructure results"],a={id:s,title:e,starterCode:n,solution:l,tests:o,hints:t};export{a as default,t as hints,s as id,l as solution,n as starterCode,o as tests,e as title};
