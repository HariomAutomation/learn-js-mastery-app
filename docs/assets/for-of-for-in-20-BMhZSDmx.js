const o="05-loops-for-of-for-in-20",t="For...Of Reverse",e=`const arr = [1, 2, 3, 4, 5];
for (const val of arr.reverse()) {
  console.log(val);
}`,n=`const arr = [1, 2, 3, 4, 5];
for (const val of arr.reverse()) {
  console.log(val);
}`,s=[{input:[],expected:`5
4
3
2
1`}],r=["Use reverse() first","Then iterate"],c={id:o,title:t,starterCode:e,solution:n,tests:s,hints:r};export{c as default,r as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
