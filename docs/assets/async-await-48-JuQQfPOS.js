const t="12-async-async-await-48",n="Async Retry",r=`async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try { return await fn(); }
    catch (e) { if (i === n - 1) throw e; }
  }
}
let c = 0;
retry(async () => { c++; if (c < 3) throw 'err'; return 'ok'; }, 3)
  .then(r => console.log(r));`,e=`async function retry(fn, n) {
  for (let i = 0; i < n; i++) {
    try { return await fn(); }
    catch (e) { if (i === n - 1) throw e; }
  }
}
let c = 0;
retry(async () => { c++; if (c < 3) throw 'err'; return 'ok'; }, 3)
  .then(r => console.log(r));`,o=[{input:[],expected:"ok"}],c=["Loop with try/catch","Retry on failure"],i={id:t,title:n,starterCode:r,solution:e,tests:o,hints:c};export{i as default,c as hints,t as id,e as solution,r as starterCode,o as tests,n as title};
