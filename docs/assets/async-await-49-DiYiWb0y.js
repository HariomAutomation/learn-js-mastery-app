const n="12-async-async-await-49",t="Async Reduce",c=`async function reduceAsync(arr, fn, init) {
  let acc = init;
  for (const item of arr) acc = await fn(acc, item);
  return acc;
}
reduceAsync([1, 2, 3], async (a, b) => a + b, 0)
  .then(r => console.log(r));`,e=`async function reduceAsync(arr, fn, init) {
  let acc = init;
  for (const item of arr) acc = await fn(acc, item);
  return acc;
}
reduceAsync([1, 2, 3], async (a, b) => a + b, 0)
  .then(r => console.log(r));`,a=[{input:[],expected:"6"}],s=["Sequential reduction","Await each step"],i={id:n,title:t,starterCode:c,solution:e,tests:a,hints:s};export{i as default,s as hints,n as id,e as solution,c as starterCode,a as tests,t as title};
