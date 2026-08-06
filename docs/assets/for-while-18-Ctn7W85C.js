const t="05-loops-for-while-18",n="While Parsing Input",i=`let num = 12345;
let digits = 0;
while (num > 0) {
  digits++;
  num = Math.floor(num / 10);
}
console.log(digits);`,o=`let num = 12345;
let digits = 0;
while (num > 0) {
  digits++;
  num = Math.floor(num / 10);
}
console.log(digits);`,e=[{input:[],expected:"5"}],s=["Divide by 10 to remove last digit","Count each iteration"],l={id:t,title:n,starterCode:i,solution:o,tests:e,hints:s};export{l as default,s as hints,t as id,o as solution,i as starterCode,e as tests,n as title};
