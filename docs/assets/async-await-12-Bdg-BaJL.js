const t="12-async-async-await-12",e="Async Filter",n=`async function filterAsync(items) {
  const results = await Promise.all(items.map(async item => {
    return { item, keep: await Promise.resolve(item > 2) };
  }));
  return results.filter(r => r.keep).map(r => r.item);
}
filterAsync([1, 2, 3, 4]).then(r => console.log(r));`,s=`async function filterAsync(items) {
  const results = await Promise.all(items.map(async item => {
    return { item, keep: await Promise.resolve(item > 2) };
  }));
  return results.filter(r => r.keep).map(r => r.item);
}
filterAsync([1, 2, 3, 4]).then(r => console.log(r));`,r=[{input:[],expected:"3,4"}],i=["Map to check condition","Filter by keep property"],o={id:t,title:e,starterCode:n,solution:s,tests:r,hints:i};export{o as default,i as hints,t as id,s as solution,n as starterCode,r as tests,e as title};
