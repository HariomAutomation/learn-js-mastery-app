const n="12-async-async-await-09",t="Error Propagation",o=`async function fail() {
  throw new Error('boom');
}
async function caller() {
  try {
    await fail();
  } catch (e) {
    console.log(e.message);
  }
}
caller();`,a=`async function fail() {
  throw new Error('boom');
}
async function caller() {
  try {
    await fail();
  } catch (e) {
    console.log(e.message);
  }
}
caller();`,c=[{input:[],expected:"boom"}],s=["Errors propagate up the chain","Catch with try/catch"],e={id:n,title:t,starterCode:o,solution:a,tests:c,hints:s};export{e as default,s as hints,n as id,a as solution,o as starterCode,c as tests,t as title};
