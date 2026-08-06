const t="12-async-async-await-26",n="Async Retry",r=`async function retry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}
let count = 0;
retry(async () => {
  count++;
  if (count < 3) throw new Error('fail');
  return 'success';
}, 3).then(r => console.log(r));`,e=`async function retry(fn, attempts) {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}
let count = 0;
retry(async () => {
  count++;
  if (count < 3) throw new Error('fail');
  return 'success';
}, 3).then(r => console.log(r));`,s=[{input:[],expected:"success"}],c=["Try/catch with retry logic","Recursive retry on failure"],o={id:t,title:n,starterCode:r,solution:e,tests:s,hints:c};export{o as default,c as hints,t as id,e as solution,r as starterCode,s as tests,n as title};
