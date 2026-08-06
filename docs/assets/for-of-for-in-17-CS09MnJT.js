const o="05-loops-for-of-for-in-17",t="For...Of With Break",n=`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val === 3) break;
  console.log(val);
}`,s=`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val === 3) break;
  console.log(val);
}`,r=[{input:[],expected:`1
2`}],e=["break exits loop","Check before logging"],a={id:o,title:t,starterCode:n,solution:s,tests:r,hints:e};export{a as default,e as hints,o as id,s as solution,n as starterCode,r as tests,t as title};
