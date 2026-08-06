const t="05-loops-for-of-for-in-35",o="For...In With Object.keys",s=`const obj = {a: 10, b: 20, c: 30};
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ': ' + obj[keys[i]]);
}`,e=`const obj = {a: 10, b: 20, c: 30};
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ': ' + obj[keys[i]]);
}`,n=[{input:[],expected:`a: 10
b: 20
c: 30`}],i=["Get keys array first","Access with index"],c={id:t,title:o,starterCode:s,solution:e,tests:n,hints:i};export{c as default,i as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
