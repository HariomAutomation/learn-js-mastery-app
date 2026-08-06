const t="05-loops-for-of-for-in-23",e="Map Iteration",n=`const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
for (const [key, val] of map) {
  console.log(key + ' is ' + val);
}`,o=`const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
for (const [key, val] of map) {
  console.log(key + ' is ' + val);
}`,s=[{input:[],expected:`name is Alice
age is 25`}],a=["Destructure entries","Use template or concat"],c={id:t,title:e,starterCode:n,solution:o,tests:s,hints:a};export{c as default,a as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
