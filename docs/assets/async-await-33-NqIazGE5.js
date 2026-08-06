const n="12-async-async-await-33",t="Async forEach",o=`async function forEachAsync(items, fn) {
  for (const item of items) {
    await fn(item);
  }
}
forEachAsync([1, 2, 3], async (item) => {
  await Promise.resolve();
}).then(() => console.log('done'));`,s=`async function forEachAsync(items, fn) {
  for (const item of items) {
    await fn(item);
  }
}
forEachAsync([1, 2, 3], async (item) => {
  await Promise.resolve();
}).then(() => console.log('done'));`,e=[{input:[],expected:"done"}],c=["Sequential forEach with await","Use for...of loop"],i={id:n,title:t,starterCode:o,solution:s,tests:e,hints:c};export{i as default,c as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
