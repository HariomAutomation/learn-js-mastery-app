const t="12-async-fetch-api-24",e="Fetch Retry",n=`async function fetchRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch (e) {}
  }
  throw new Error('failed');
}
console.log("retry pattern defined");`,r=`async function fetchRetry(url, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res;
    } catch (e) {}
  }
  throw new Error('failed');
}
console.log("retry pattern defined");`,s=[{input:[],expected:"retry pattern defined"}],o=["Loop with try/catch","Return on success"],i={id:t,title:e,starterCode:n,solution:r,tests:s,hints:o};export{i as default,o as hints,t as id,r as solution,n as starterCode,s as tests,e as title};
