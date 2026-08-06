const t="05-loops-for-while-10",e="While True With Break",n=`let i = 0;
while (true) {
  if (i >= 5) break;
  console.log(i);
  i++;
}`,i=`let i = 0;
while (true) {
  if (i >= 5) break;
  console.log(i);
  i++;
}`,o=[{input:[],expected:`0
1
2
3
4`}],s=["Use while(true) for infinite loop","Break when condition met"],l={id:t,title:e,starterCode:n,solution:i,tests:o,hints:s};export{l as default,s as hints,t as id,i as solution,n as starterCode,o as tests,e as title};
