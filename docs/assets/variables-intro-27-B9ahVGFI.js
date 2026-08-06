const t="01-variables-declarations-variables-intro-27",n="Optional chaining",s=`const user = { addr: { city: "NY" } }
console.log(user?.addr?.city)
console.log(user?.addr?.zip)`,e=`const user = { addr: { city: "NY" } }
console.log(user?.addr?.city)
console.log(user?.addr?.zip)`,o=[{input:[],expected:`NY
undefined`}],i=["?. returns undefined if null/undefined"],d={id:t,title:n,starterCode:s,solution:e,tests:o,hints:i};export{d as default,i as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
