const s="12-async-async-await-21",t="Sequential Array",e=`async function processSequentially() {
  const items = [1, 2, 3];
  const results = [];
  for (const item of items) {
    results.push(await Promise.resolve(item * 10));
  }
  console.log(results);
}
processSequentially();`,n=`async function processSequentially() {
  const items = [1, 2, 3];
  const results = [];
  for (const item of items) {
    results.push(await Promise.resolve(item * 10));
  }
  console.log(results);
}
processSequentially();`,o=[{input:[],expected:"10,20,30"}],i=["Use for loop with await","Sequential processing"],c={id:s,title:t,starterCode:e,solution:n,tests:o,hints:i};export{c as default,i as hints,s as id,n as solution,e as starterCode,o as tests,t as title};
