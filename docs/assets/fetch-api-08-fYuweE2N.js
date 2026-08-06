const t="12-async-fetch-api-08",o="Fetch Timeout",e=`// Use AbortController for timeout
console.log("abort after timeout ms");`,s=`// Use AbortController for timeout
console.log("abort after timeout ms");`,i=[{input:[],expected:"abort after timeout ms"}],n=["setTimeout calls abort","Race fetch against timeout"],r={id:t,title:o,starterCode:e,solution:s,tests:i,hints:n};export{r as default,n as hints,t as id,s as solution,e as starterCode,i as tests,o as title};
