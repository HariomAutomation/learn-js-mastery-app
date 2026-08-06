const t="12-async-async-await-27",n="Async Condition",e=`async function waitFor(condition) {
  while (!condition()) {
    await new Promise(r => setTimeout(r, 10));
  }
  return true;
}
let val = false;
setTimeout(() => val = true, 30);
waitFor(() => val).then(() => console.log('resolved'));`,o=`async function waitFor(condition) {
  while (!condition()) {
    await new Promise(r => setTimeout(r, 10));
  }
  return true;
}
let val = false;
setTimeout(() => val = true, 30);
waitFor(() => val).then(() => console.log('resolved'));`,i=[{input:[],expected:"resolved"}],s=["Poll until condition is true","Use while loop with await"],a={id:t,title:n,starterCode:e,solution:o,tests:i,hints:s};export{a as default,s as hints,t as id,o as solution,e as starterCode,i as tests,n as title};
