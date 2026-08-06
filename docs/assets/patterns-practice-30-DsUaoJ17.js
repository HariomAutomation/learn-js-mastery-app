const t="05-loops-patterns-practice-30",n="While Countdown",o=`let count = 10;
while (count >= 0) {
  console.log(count);
  count -= 2;
}`,e=`let count = 10;
while (count >= 0) {
  console.log(count);
  count -= 2;
}`,c=[{input:[],expected:`10
8
6
4
2
0`}],s=["Start at 10","Decrement by 2"],l={id:t,title:n,starterCode:o,solution:e,tests:c,hints:s};export{l as default,s as hints,t as id,e as solution,o as starterCode,c as tests,n as title};
