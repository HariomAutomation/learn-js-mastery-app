const t="12-async-async-await-11",n="Async Map",s=`async function mapAsync(items) {
  return Promise.all(items.map(async item => {
    return await Promise.resolve(item * 2);
  }));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,e=`async function mapAsync(items) {
  return Promise.all(items.map(async item => {
    return await Promise.resolve(item * 2);
  }));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,a=[{input:[],expected:"2,4,6"}],o=["Map with async callback","Use Promise.all for parallel"],i={id:t,title:n,starterCode:s,solution:e,tests:a,hints:o};export{i as default,o as hints,t as id,e as solution,s as starterCode,a as tests,n as title};
