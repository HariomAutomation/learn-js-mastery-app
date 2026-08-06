const n="05-loops-for-of-for-in-11",o="For...Of With Entries",t=`const arr = ['x', 'y', 'z'];
for (const [index, val] of arr.entries()) {
  console.log(index + ': ' + val);
}`,s=`const arr = ['x', 'y', 'z'];
for (const [index, val] of arr.entries()) {
  console.log(index + ': ' + val);
}`,e=[{input:[],expected:`0: x
1: y
2: z`}],r=["entries() returns [index, value]","Use with for...of"],i={id:n,title:o,starterCode:t,solution:s,tests:e,hints:r};export{i as default,r as hints,n as id,s as solution,t as starterCode,e as tests,o as title};
