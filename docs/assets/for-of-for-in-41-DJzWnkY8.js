const n="05-loops-for-of-for-in-41",t="For...Of Set Union",o=`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const union = new Set([...set1, ...set2]);
for (const val of union) {
  console.log(val);
}`,e=`const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);
const union = new Set([...set1, ...set2]);
for (const val of union) {
  console.log(val);
}`,s=[{input:[],expected:`1
2
3
4`}],c=["Spread sets into new Set","Union removes duplicates"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
