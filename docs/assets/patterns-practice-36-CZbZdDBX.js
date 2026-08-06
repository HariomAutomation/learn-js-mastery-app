const t="05-loops-patterns-practice-36",n="Fibonacci With While",e=`let a = 0, b = 1;
let count = 0;
while (count < 7) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
  count++;
}`,o=`let a = 0, b = 1;
let count = 0;
while (count < 7) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
  count++;
}`,c=[{input:[],expected:`0
1
1
2
3
5
8`}],s=["Use while loop","Track count"],l={id:t,title:n,starterCode:e,solution:o,tests:c,hints:s};export{l as default,s as hints,t as id,o as solution,e as starterCode,c as tests,n as title};
