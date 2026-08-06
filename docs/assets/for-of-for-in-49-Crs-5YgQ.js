const o="05-loops-for-of-for-in-49",t="For...Of Array Spread",n=`const arr = [1, 2, 3];
const copy = [...arr];
for (const val of copy) {
  console.log(val);
}`,s=`const arr = [1, 2, 3];
const copy = [...arr];
for (const val of copy) {
  console.log(val);
}`,r=[{input:[],expected:`1
2
3`}],c=["Spread creates copy","Iterate copy"],e={id:o,title:t,starterCode:n,solution:s,tests:r,hints:c};export{e as default,c as hints,o as id,s as solution,n as starterCode,r as tests,t as title};
