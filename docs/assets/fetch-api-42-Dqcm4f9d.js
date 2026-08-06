const t="12-async-fetch-api-42",o="Fetch Cancellation",n=`// const controller = new AbortController();
// fetch(url, { signal: controller.signal });
// controller.abort();
console.log("cancel with AbortController");`,l=`// const controller = new AbortController();
// fetch(url, { signal: controller.signal });
// controller.abort();
console.log("cancel with AbortController");`,e=[{input:[],expected:"cancel with AbortController"}],r=["Create controller before fetch","Abort to cancel"],c={id:t,title:o,starterCode:n,solution:l,tests:e,hints:r};export{c as default,r as hints,t as id,l as solution,n as starterCode,e as tests,o as title};
