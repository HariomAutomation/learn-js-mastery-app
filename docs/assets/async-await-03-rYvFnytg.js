const t="12-async-async-await-03",n="Try/Catch Async",r=`async function risky() {
  try {
    await Promise.reject('error');
  } catch (err) {
    console.log(err);
  }
}
risky();`,s=`async function risky() {
  try {
    await Promise.reject('error');
  } catch (err) {
    console.log(err);
  }
}
risky();`,e=[{input:[],expected:"error"}],c=["Use try/catch with await","catch handles rejected promise"],o={id:t,title:n,starterCode:r,solution:s,tests:e,hints:c};export{o as default,c as hints,t as id,s as solution,r as starterCode,e as tests,n as title};
