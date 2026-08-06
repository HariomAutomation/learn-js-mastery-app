const t="12-async-fetch-api-49",o="Fetch Abort",n=`// const c = new AbortController();
// fetch(url, { signal: c.signal });
// c.abort();
console.log("AbortController cancels fetch");`,e=`// const c = new AbortController();
// fetch(url, { signal: c.signal });
// c.abort();
console.log("AbortController cancels fetch");`,c=[{input:[],expected:"AbortController cancels fetch"}],s=["Create AbortController","Pass signal to fetch"],l={id:t,title:o,starterCode:n,solution:e,tests:c,hints:s};export{l as default,s as hints,t as id,e as solution,n as starterCode,c as tests,o as title};
