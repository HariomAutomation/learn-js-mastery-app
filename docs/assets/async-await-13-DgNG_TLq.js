const t="12-async-async-await-13",n="Async Reduce",e=`async function reduceAsync(items) {
  let acc = 0;
  for (const item of items) {
    acc += await Promise.resolve(item);
  }
  return acc;
}
reduceAsync([1, 2, 3]).then(r => console.log(r));`,c=`async function reduceAsync(items) {
  let acc = 0;
  for (const item of items) {
    acc += await Promise.resolve(item);
  }
  return acc;
}
reduceAsync([1, 2, 3]).then(r => console.log(r));`,s=[{input:[],expected:"6"}],o=["Accumulate in loop","Await each addition"],i={id:t,title:n,starterCode:e,solution:c,tests:s,hints:o};export{i as default,o as hints,t as id,c as solution,e as starterCode,s as tests,n as title};
