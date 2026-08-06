const o="05-loops-for-of-for-in-21",t="For...In Alphabetical Keys",s=`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort();
for (const key of sorted) {
  console.log(key + ':' + obj[key]);
}`,e=`const obj = {c: 3, a: 1, b: 2};
const sorted = Object.keys(obj).sort();
for (const key of sorted) {
  console.log(key + ':' + obj[key]);
}`,n=[{input:[],expected:`a:1
b:2
c:3`}],c=["Sort keys alphabetically","Use for...of on sorted array"],r={id:o,title:t,starterCode:s,solution:e,tests:n,hints:c};export{r as default,c as hints,o as id,e as solution,s as starterCode,n as tests,t as title};
