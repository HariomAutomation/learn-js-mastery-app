const t="12-async-async-await-34",n="Async Reduce Accumulator",c=`async function asyncReduce(items, fn, init) {
  let acc = init;
  for (const item of items) {
    acc = await fn(acc, item);
  }
  return acc;
}
asyncReduce([1, 2, 3], async (acc, item) => acc + item, 0)
  .then(r => console.log(r));`,e=`async function asyncReduce(items, fn, init) {
  let acc = init;
  for (const item of items) {
    acc = await fn(acc, item);
  }
  return acc;
}
asyncReduce([1, 2, 3], async (acc, item) => acc + item, 0)
  .then(r => console.log(r));`,a=[{input:[],expected:"6"}],i=["Accumulate with await","Sequential reduction"],s={id:t,title:n,starterCode:c,solution:e,tests:a,hints:i};export{s as default,i as hints,t as id,e as solution,c as starterCode,a as tests,n as title};
