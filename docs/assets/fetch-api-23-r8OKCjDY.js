const t="12-async-fetch-api-23",e="Interceptor Pattern",s=`// Wrap fetch to add headers/auth
console.log("interceptors modify requests");`,o=`// Wrap fetch to add headers/auth
console.log("interceptors modify requests");`,r=[{input:[],expected:"interceptors modify requests"}],n=["Create custom fetch wrapper","Add headers before request"],c={id:t,title:e,starterCode:s,solution:o,tests:r,hints:n};export{c as default,n as hints,t as id,o as solution,s as starterCode,r as tests,e as title};
