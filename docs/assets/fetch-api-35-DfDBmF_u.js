const t="12-async-fetch-api-35",o="Fetch with Timeout",n=`// async function fetchTimeout(url, ms) {
//   const controller = new AbortController();
//   setTimeout(() => controller.abort(), ms);
//   return fetch(url, { signal: controller.signal });
// }
console.log("timeout with AbortController");`,e=`// async function fetchTimeout(url, ms) {
//   const controller = new AbortController();
//   setTimeout(() => controller.abort(), ms);
//   return fetch(url, { signal: controller.signal });
// }
console.log("timeout with AbortController");`,r=[{input:[],expected:"timeout with AbortController"}],l=["Create AbortController","Abort after timeout"],s={id:t,title:o,starterCode:n,solution:e,tests:r,hints:l};export{s as default,l as hints,t as id,e as solution,n as starterCode,r as tests,o as title};
