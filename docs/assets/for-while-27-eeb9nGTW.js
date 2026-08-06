const t="05-loops-for-while-27",n="Sum Of Digits",o=`let num = 123;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,s=`let num = 123;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,e=[{input:[],expected:"6"}],l=["Use % 10 for last digit","Divide by 10 to remove it"],u={id:t,title:n,starterCode:o,solution:s,tests:e,hints:l};export{u as default,l as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
