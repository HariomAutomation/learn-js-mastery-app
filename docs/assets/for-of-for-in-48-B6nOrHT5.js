const o="05-loops-for-of-for-in-48",t="For...Of Map Keys",s=`const map = new Map([['x', 1], ['y', 2], ['z', 3]]);
for (const key of map.keys()) {
  console.log(key);
}`,e=`const map = new Map([['x', 1], ['y', 2], ['z', 3]]);
for (const key of map.keys()) {
  console.log(key);
}`,n=[{input:[],expected:`x
y
z`}],c=["Use keys() method","Iterates map keys"],a={id:o,title:t,starterCode:s,solution:e,tests:n,hints:c};export{a as default,c as hints,o as id,e as solution,s as starterCode,n as tests,t as title};
