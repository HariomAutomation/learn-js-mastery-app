const t="12-async-callbacks-promises-16",e="Retry Pattern",n=`function retry(fn, attempts) {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  });
}
let count = 0;
retry(() => new Promise((res, rej) => {
  count++;
  if (count < 3) rej('fail');
  else res('success');
}), 3).then(r => console.log(r));`,r=`function retry(fn, attempts) {
  return fn().catch(err => {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  });
}
let count = 0;
retry(() => new Promise((res, rej) => {
  count++;
  if (count < 3) rej('fail');
  else res('success');
}), 3).then(r => console.log(r));`,s=[{input:[],expected:"success"}],c=["Catch and retry on failure","Decrement attempts counter"],o={id:t,title:e,starterCode:n,solution:r,tests:s,hints:c};export{o as default,c as hints,t as id,r as solution,n as starterCode,s as tests,e as title};
