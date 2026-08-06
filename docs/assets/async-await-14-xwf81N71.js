const s="12-async-async-await-14",t="Await Promise.all",e=`async function fetchAll() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b')
  ]);
  console.log(results);
}
fetchAll();`,n=`async function fetchAll() {
  const results = await Promise.all([
    Promise.resolve('a'),
    Promise.resolve('b')
  ]);
  console.log(results);
}
fetchAll();`,o=[{input:[],expected:"a,b"}],l=["Promise.all returns array","Await the combined promise"],a={id:s,title:t,starterCode:e,solution:n,tests:o,hints:l};export{a as default,l as hints,s as id,n as solution,e as starterCode,o as tests,t as title};
