const t="05-loops-for-while-11",o="Do...While At Least One",e=`let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);`,n=`let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);`,i=[{input:[],expected:"10"}],s=["Body executes once even if condition false","Check condition after body"],l={id:t,title:o,starterCode:e,solution:n,tests:i,hints:s};export{l as default,s as hints,t as id,n as solution,e as starterCode,i as tests,o as title};
