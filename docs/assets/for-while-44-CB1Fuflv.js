const t="05-loops-for-while-44",n="Sum Even Digits",i=`let num = 2468;
let sum = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit % 2 === 0) sum += digit;
  num = Math.floor(num / 10);
}
console.log(sum);`,e=`let num = 2468;
let sum = 0;
while (num > 0) {
  let digit = num % 10;
  if (digit % 2 === 0) sum += digit;
  num = Math.floor(num / 10);
}
console.log(sum);`,s=[{input:[],expected:"20"}],o=["Extract digit with % 10","Check if digit is even"],l={id:t,title:n,starterCode:i,solution:e,tests:s,hints:o};export{l as default,o as hints,t as id,e as solution,i as starterCode,s as tests,n as title};
