const n="05-loops-for-of-for-in-06",o="For...In Gives Indices",s=`const arr = ['a', 'b', 'c'];
for (const i in arr) {
  console.log(i + ': ' + arr[i]);
}`,t=`const arr = ['a', 'b', 'c'];
for (const i in arr) {
  console.log(i + ': ' + arr[i]);
}`,r=[{input:[],expected:`0: a
1: b
2: c`}],i=["for...in on array gives indices","Indices are strings"],e={id:n,title:o,starterCode:s,solution:t,tests:r,hints:i};export{e as default,i as hints,n as id,t as solution,s as starterCode,r as tests,o as title};
