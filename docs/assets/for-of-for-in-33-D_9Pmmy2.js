const t="05-loops-for-of-for-in-33",o="For...Of With Map Entries",n=`const map = new Map([['x', 10], ['y', 20]]);
for (const [key, val] of map.entries()) {
  console.log(key + '=' + val);
}`,e=`const map = new Map([['x', 10], ['y', 20]]);
for (const [key, val] of map.entries()) {
  console.log(key + '=' + val);
}`,s=[{input:[],expected:`x=10
y=20`}],r=["Use entries() method","Destructure pairs"],a={id:t,title:o,starterCode:n,solution:e,tests:s,hints:r};export{a as default,r as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
