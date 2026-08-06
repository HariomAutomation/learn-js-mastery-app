const t="05-loops-for-while-05",o="Break Statement",e=`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`,n=`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`,i=[{input:[],expected:`0
1
2
3
4`}],s=["Use break to exit loop","Check condition before break"],l={id:t,title:o,starterCode:e,solution:n,tests:i,hints:s};export{l as default,s as hints,t as id,n as solution,e as starterCode,i as tests,o as title};
