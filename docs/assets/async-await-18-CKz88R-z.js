const n="12-async-async-await-18",t="Error Pattern",r=`async function safe(fn) {
  try {
    return await fn();
  } catch (err) {
    return 'fallback';
  }
}
safe(() => Promise.reject('err')).then(r => console.log(r));`,e=`async function safe(fn) {
  try {
    return await fn();
  } catch (err) {
    return 'fallback';
  }
}
safe(() => Promise.reject('err')).then(r => console.log(r));`,a=[{input:[],expected:"fallback"}],s=["Wrap in try/catch","Return fallback on error"],c={id:n,title:t,starterCode:r,solution:e,tests:a,hints:s};export{c as default,s as hints,n as id,e as solution,r as starterCode,a as tests,t as title};
