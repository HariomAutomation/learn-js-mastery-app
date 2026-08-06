const s="12-async-async-await-22",e="Parallel Promises",l=`async function parallel() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  ]);
  console.log(results.join(''));
}
parallel();`,n=`async function parallel() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  ]);
  console.log(results.join(''));
}
parallel();`,o=[{input:[],expected:"abc"}],t=["Promise.all for parallel","Join results"],a={id:s,title:e,starterCode:l,solution:n,tests:o,hints:t};export{a as default,t as hints,s as id,n as solution,l as starterCode,o as tests,e as title};
