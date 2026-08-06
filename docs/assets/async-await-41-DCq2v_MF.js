const t="12-async-async-await-41",n="Error Propagation",o=`async function fail() { throw new Error('boom'); }
async function caller() {
  try { await fail(); }
  catch (e) { console.log(e.message); }
}
caller();`,a=`async function fail() { throw new Error('boom'); }
async function caller() {
  try { await fail(); }
  catch (e) { console.log(e.message); }
}
caller();`,c=[{input:[],expected:"boom"}],s=["Errors propagate up","Catch with try/catch"],e={id:t,title:n,starterCode:o,solution:a,tests:c,hints:s};export{e as default,s as hints,t as id,a as solution,o as starterCode,c as tests,n as title};
