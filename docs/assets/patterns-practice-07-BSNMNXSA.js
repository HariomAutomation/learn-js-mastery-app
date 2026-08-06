const t="05-loops-patterns-practice-07",e="Reverse Number",n=`let num = 12345;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,o=`let num = 12345;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(rev);`,s=[{input:[],expected:"54321"}],r=["Multiply rev by 10","Add last digit"],l={id:t,title:e,starterCode:n,solution:o,tests:s,hints:r};export{l as default,r as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
