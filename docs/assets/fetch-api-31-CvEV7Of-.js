const t="12-async-fetch-api-31",n="Fetch GET Pattern",e=`// fetch('/api/data')
//   .then(r => r.json())
//   .then(data => console.log(data))
console.log("GET pattern");`,o=`// fetch('/api/data')
//   .then(r => r.json())
//   .then(data => console.log(data))
console.log("GET pattern");`,s=[{input:[],expected:"GET pattern"}],a=["Default method is GET","Chain json() to parse"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:a};export{c as default,a as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
