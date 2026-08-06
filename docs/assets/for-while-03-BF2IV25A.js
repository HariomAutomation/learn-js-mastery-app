const o="05-loops-for-while-03",t="While Loop Basics",n=`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,e=`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,i=[{input:[],expected:`0
1
2
3
4`}],s=["Initialize counter before loop","Increment inside loop"],l={id:o,title:t,starterCode:n,solution:e,tests:i,hints:s};export{l as default,s as hints,o as id,e as solution,n as starterCode,i as tests,t as title};
