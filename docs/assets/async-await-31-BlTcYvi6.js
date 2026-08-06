const e="12-async-async-await-31",t="Promise.all Parallel Work",s=`async function parallelWork() {
  const results = await Promise.all([
    new Promise(r => setTimeout(() => r(1), 10)),
    new Promise(r => setTimeout(() => r(2), 10)),
    new Promise(r => setTimeout(() => r(3), 10))
  ]);
  console.log(results.reduce((a, b) => a + b));
}
parallelWork();`,n=`async function parallelWork() {
  const results = await Promise.all([
    new Promise(r => setTimeout(() => r(1), 10)),
    new Promise(r => setTimeout(() => r(2), 10)),
    new Promise(r => setTimeout(() => r(3), 10))
  ]);
  console.log(results.reduce((a, b) => a + b));
}
parallelWork();`,r=[{input:[],expected:"6"}],o=["All run in parallel","Sum the results"],l={id:e,title:t,starterCode:s,solution:n,tests:r,hints:o};export{l as default,o as hints,e as id,n as solution,s as starterCode,r as tests,t as title};
