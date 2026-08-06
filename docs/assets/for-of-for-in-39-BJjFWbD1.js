const n="05-loops-for-of-for-in-39",t="For...In String Indices",s=`const str = "abc";
for (const index in str) {
  console.log(index + ": " + str[index]);
}`,o=`const str = "abc";
for (const index in str) {
  console.log(index + ": " + str[index]);
}`,i=[{input:[],expected:`0: a
1: b
2: c`}],e=["for...in on string gives indices","Access char with index"],c={id:n,title:t,starterCode:s,solution:o,tests:i,hints:e};export{c as default,e as hints,n as id,o as solution,s as starterCode,i as tests,t as title};
