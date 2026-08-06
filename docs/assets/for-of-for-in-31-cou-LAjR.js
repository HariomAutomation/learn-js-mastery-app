const o="05-loops-for-of-for-in-31",t="Set Dedupe",n=`const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
for (const val of unique) {
  console.log(val);
}`,e=`const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)];
for (const val of unique) {
  console.log(val);
}`,s=[{input:[],expected:`1
2
3`}],r=["Set removes duplicates","Spread to array"],c={id:o,title:t,starterCode:n,solution:e,tests:s,hints:r};export{c as default,r as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
