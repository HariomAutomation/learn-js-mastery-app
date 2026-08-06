const t="05-loops-for-of-for-in-16",o="For...Of NodeList",s=`const items = [10, 20, 30];
for (const item of items) {
  console.log(item * 2);
}`,n=`const items = [10, 20, 30];
for (const item of items) {
  console.log(item * 2);
}`,e=[{input:[],expected:`20
40
60`}],i=["NodeList is iterable","for...of works on it"],r={id:t,title:o,starterCode:s,solution:n,tests:e,hints:i};export{r as default,i as hints,t as id,n as solution,s as starterCode,e as tests,o as title};
