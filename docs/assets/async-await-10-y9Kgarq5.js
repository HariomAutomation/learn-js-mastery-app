const t="12-async-async-await-10",n="Async Iteration",s=`async function iterate() {
  const items = [1, 2, 3];
  for (const item of items) {
    const val = await Promise.resolve(item * 10);
    console.log(val);
  }
}
iterate();`,e=`async function iterate() {
  const items = [1, 2, 3];
  for (const item of items) {
    const val = await Promise.resolve(item * 10);
    console.log(val);
  }
}
iterate();`,o=[{input:[],expected:`10
20
30`}],i=["Use for...of with await","Each iteration waits"],a={id:t,title:n,starterCode:s,solution:e,tests:o,hints:i};export{a as default,i as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
