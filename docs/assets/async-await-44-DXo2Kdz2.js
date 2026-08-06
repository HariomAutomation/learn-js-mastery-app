const n="12-async-async-await-44",s="Async Map",t=`async function mapAsync(arr) {
  return Promise.all(arr.map(async x => x * 2));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,a=`async function mapAsync(arr) {
  return Promise.all(arr.map(async x => x * 2));
}
mapAsync([1, 2, 3]).then(r => console.log(r));`,c=[{input:[],expected:"2,4,6"}],o=["Map with async callback","Promise.all for parallel"],r={id:n,title:s,starterCode:t,solution:a,tests:c,hints:o};export{r as default,o as hints,n as id,a as solution,t as starterCode,c as tests,s as title};
