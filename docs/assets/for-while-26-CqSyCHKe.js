const n="05-loops-for-while-26",o="While Countdown",t=`let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log('Go!');`,e=`let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
console.log('Go!');`,s=[{input:[],expected:`5
4
3
2
1
Go!`}],l=["Start at 5","Decrement until 0"],c={id:n,title:o,starterCode:t,solution:e,tests:s,hints:l};export{c as default,l as hints,n as id,e as solution,t as starterCode,s as tests,o as title};
