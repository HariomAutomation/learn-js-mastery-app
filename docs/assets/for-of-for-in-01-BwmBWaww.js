const o="05-loops-for-of-for-in-01",t="For...Of Arrays",s=`const arr = [1, 2, 3];
for (const val of arr) {
  console.log(val);
}`,n=`const arr = [1, 2, 3];
for (const val of arr) {
  console.log(val);
}`,r=[{input:[],expected:`1
2
3`}],e=["Use 'of' for values","const declares loop variable"],l={id:o,title:t,starterCode:s,solution:n,tests:r,hints:e};export{l as default,e as hints,o as id,n as solution,s as starterCode,r as tests,t as title};
