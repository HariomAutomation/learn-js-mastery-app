const o="05-loops-for-of-for-in-38",t="For...Of Array Reverse",r=`const arr = [10, 20, 30, 40];
for (const val of [...arr].reverse()) {
  console.log(val);
}`,e=`const arr = [10, 20, 30, 40];
for (const val of [...arr].reverse()) {
  console.log(val);
}`,n=[{input:[],expected:`40
30
20
10`}],s=["Spread to copy array","Reverse before iterating"],a={id:o,title:t,starterCode:r,solution:e,tests:n,hints:s};export{a as default,s as hints,o as id,e as solution,r as starterCode,n as tests,t as title};
