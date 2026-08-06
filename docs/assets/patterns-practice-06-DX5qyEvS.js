const t="05-loops-patterns-practice-06",n="Sum Of Digits",s=`let num = 9876;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,o=`let num = 9876;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,e=[{input:[],expected:"30"}],u=["% 10 gets last digit","Floor divide by 10"],l={id:t,title:n,starterCode:s,solution:o,tests:e,hints:u};export{l as default,u as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
