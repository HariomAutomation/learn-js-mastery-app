const o="05-loops-for-of-for-in-05",t="For...In Objects",n=`const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}`,s=`const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}`,e=[{input:[],expected:`a: 1
b: 2`}],c=["for...in gives keys","Access value with obj[key]"],i={id:o,title:t,starterCode:n,solution:s,tests:e,hints:c};export{i as default,c as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
