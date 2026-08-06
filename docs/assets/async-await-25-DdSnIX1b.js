const t="12-async-async-await-25",n="Await Timeout",e=`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function wait() {
  await delay(10);
  console.log('waited');
}
wait();`,s=`function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
async function wait() {
  await delay(10);
  console.log('waited');
}
wait();`,a=[{input:[],expected:"waited"}],i=["Create delay function","Await the delay"],o={id:t,title:n,starterCode:e,solution:s,tests:a,hints:i};export{o as default,i as hints,t as id,s as solution,e as starterCode,a as tests,n as title};
