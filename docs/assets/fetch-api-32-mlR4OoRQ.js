const t="12-async-fetch-api-32",n="Fetch POST Pattern",e=`// fetch('/api/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'John' })
// })
console.log("POST pattern");`,o=`// fetch('/api/users', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ name: 'John' })
// })
console.log("POST pattern");`,s=[{input:[],expected:"POST pattern"}],i=["Set method to POST","Stringify body for JSON"],a={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{a as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
