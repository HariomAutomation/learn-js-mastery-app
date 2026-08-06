const o="05-loops-for-of-for-in-13",t="For...Of With Index",n=`const arr = ['a', 'b', 'c'];
for (const [i, val] of arr.entries()) {
  console.log(i + '->' + val);
}`,s=`const arr = ['a', 'b', 'c'];
for (const [i, val] of arr.entries()) {
  console.log(i + '->' + val);
}`,e=[{input:[],expected:`0->a
1->b
2->c`}],r=["Use entries() for index","Destructure both"],i={id:o,title:t,starterCode:n,solution:s,tests:e,hints:r};export{i as default,r as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
