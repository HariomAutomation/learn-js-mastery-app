const o="05-loops-for-of-for-in-18",n="For...Of With Continue",t=`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val % 2 === 0) continue;
  console.log(val);
}`,s=`const arr = [1, 2, 3, 4, 5];
for (const val of arr) {
  if (val % 2 === 0) continue;
  console.log(val);
}`,e=[{input:[],expected:`1
3
5`}],r=["continue skips iteration","Check for even to skip"],i={id:o,title:n,starterCode:t,solution:s,tests:e,hints:r};export{i as default,r as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
