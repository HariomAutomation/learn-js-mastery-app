const t="05-loops-for-of-for-in-04",o="For...Of Sets",n=`const set = new Set([1, 2, 3]);
for (const val of set) {
  console.log(val);
}`,s=`const set = new Set([1, 2, 3]);
for (const val of set) {
  console.log(val);
}`,e=[{input:[],expected:`1
2
3`}],r=["Set has unique values","Iterates in insertion order"],l={id:t,title:o,starterCode:n,solution:s,tests:e,hints:r};export{l as default,r as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
