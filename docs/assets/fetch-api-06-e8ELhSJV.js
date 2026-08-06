const e="12-async-fetch-api-06",o="Fetch Error Handling",t=`// fetch only rejects on network error
// HTTP errors (404, 500) are not rejections
console.log("check response.ok or status");`,s=`// fetch only rejects on network error
// HTTP errors (404, 500) are not rejections
console.log("check response.ok or status");`,r=[{input:[],expected:"check response.ok or status"}],n=["response.ok is true for 2xx","Check status for errors"],c={id:e,title:o,starterCode:t,solution:s,tests:r,hints:n};export{c as default,n as hints,e as id,s as solution,t as starterCode,r as tests,o as title};
