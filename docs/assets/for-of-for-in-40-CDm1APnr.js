const o="05-loops-for-of-for-in-40",t="For...Of Map Values",n=`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const val of map.values()) {
  console.log(val * 10);
}`,s=`const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const val of map.values()) {
  console.log(val * 10);
}`,e=[{input:[],expected:`10
20
30`}],a=["Use values() method","Transform each value"],l={id:o,title:t,starterCode:n,solution:s,tests:e,hints:a};export{l as default,a as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
