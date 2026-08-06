const n="12-async-async-await-47",t="Async Timeout",e=`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function run() {
  await delay(10);
  console.log('done');
}
run();`,s=`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function run() {
  await delay(10);
  console.log('done');
}
run();`,o=[{input:[],expected:"done"}],a=["Create delay helper","Await the delay"],i={id:n,title:t,starterCode:e,solution:s,tests:o,hints:a};export{i as default,a as hints,n as id,s as solution,e as starterCode,o as tests,t as title};
