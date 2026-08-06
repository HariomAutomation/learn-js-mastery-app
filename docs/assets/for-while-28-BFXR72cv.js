const e="05-loops-for-while-28",n="Reverse Number",t=`let num = 123;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,o=`let num = 123;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,l=[{input:[],expected:"321"}],s=["Multiply rev by 10","Add last digit"],r={id:e,title:n,starterCode:t,solution:o,tests:l,hints:s};export{r as default,s as hints,e as id,o as solution,t as starterCode,l as tests,n as title};
