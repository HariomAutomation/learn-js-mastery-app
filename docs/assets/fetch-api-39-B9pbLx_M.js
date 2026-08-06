const t="12-async-fetch-api-39",n="Fetch Async Pattern",a=`// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
console.log("async fetch pattern");`,s=`// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }
console.log("async fetch pattern");`,e=[{input:[],expected:"async fetch pattern"}],c=["Use async/await","Await fetch and json()"],o={id:t,title:n,starterCode:a,solution:s,tests:e,hints:c};export{o as default,c as hints,t as id,s as solution,a as starterCode,e as tests,n as title};
