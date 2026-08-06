const t="05-loops-for-while-04",o="Do...While Loop",n=`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,e=`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,i=[{input:[],expected:`0
1
2
3
4`}],s=["Body executes first","Check condition after"],l={id:t,title:o,starterCode:n,solution:e,tests:i,hints:s};export{l as default,s as hints,t as id,e as solution,n as starterCode,i as tests,o as title};
