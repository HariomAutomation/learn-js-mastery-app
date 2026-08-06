const n="12-async-async-await-24",t="Try/Catch/Finally",o=`async function withFinally() {
  try {
    await Promise.resolve('ok');
  } catch (e) {
    console.log('error');
  } finally {
    console.log('done');
  }
}
withFinally();`,s=`async function withFinally() {
  try {
    await Promise.resolve('ok');
  } catch (e) {
    console.log('error');
  } finally {
    console.log('done');
  }
}
withFinally();`,e=[{input:[],expected:"done"}],l=["finally always runs","Even without error"],i={id:n,title:t,starterCode:o,solution:s,tests:e,hints:l};export{i as default,l as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
