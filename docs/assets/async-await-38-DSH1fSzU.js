const t="12-async-async-await-38",n="Try Catch Async",s=`async function risky() {
  try {
    await Promise.reject('oops');
  } catch (e) {
    console.log('caught: ' + e);
  }
}
risky();`,c=`async function risky() {
  try {
    await Promise.reject('oops');
  } catch (e) {
    console.log('caught: ' + e);
  }
}
risky();`,o=[{input:[],expected:"caught: oops"}],e=["try/catch handles rejected await","catch block runs on error"],a={id:t,title:n,starterCode:s,solution:c,tests:o,hints:e};export{a as default,e as hints,t as id,c as solution,s as starterCode,o as tests,n as title};
