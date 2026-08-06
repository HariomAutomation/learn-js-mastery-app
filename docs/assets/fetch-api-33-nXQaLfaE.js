const t="12-async-fetch-api-33",s="Fetch Error Check",e=`// async function fetchData(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(res.statusText);
//   return res.json();
// }
console.log("check res.ok");`,n=`// async function fetchData(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error(res.statusText);
//   return res.json();
// }
console.log("check res.ok");`,o=[{input:[],expected:"check res.ok"}],r=["res.ok is false for HTTP errors","Throw on non-2xx status"],c={id:t,title:s,starterCode:e,solution:n,tests:o,hints:r};export{c as default,r as hints,t as id,n as solution,e as starterCode,o as tests,s as title};
