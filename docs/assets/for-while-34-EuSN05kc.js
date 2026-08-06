const t="05-loops-for-while-34",n="Fibonacci Loop",o=`let a = 0, b = 1;
for (let i = 0; i < 7; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}`,e=`let a = 0, b = 1;
for (let i = 0; i < 7; i++) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}`,s=[{input:[],expected:`0
1
1
2
3
5
8`}],i=["Start with 0 and 1","Swap and add"],a={id:t,title:n,starterCode:o,solution:e,tests:s,hints:i};export{a as default,i as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
