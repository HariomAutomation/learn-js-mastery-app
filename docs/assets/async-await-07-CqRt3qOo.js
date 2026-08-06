const t="12-async-async-await-07",n="Return from Async",e=`async function getValue() {
  return 'result';
}
async function caller() {
  const val = await getValue();
  console.log(val);
}
caller();`,a=`async function getValue() {
  return 'result';
}
async function caller() {
  const val = await getValue();
  console.log(val);
}
caller();`,s=[{input:[],expected:"result"}],l=["Return value is wrapped in promise","Await to get actual value"],c={id:t,title:n,starterCode:e,solution:a,tests:s,hints:l};export{c as default,l as hints,t as id,a as solution,e as starterCode,s as tests,n as title};
