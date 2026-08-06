const t="05-loops-patterns-practice-40",n="Digit Sum While",s=`let num = 987;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,e=`let num = 987;
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);`,o=[{input:[],expected:"24"}],u=["Extract digits","Sum them"],l={id:t,title:n,starterCode:s,solution:e,tests:o,hints:u};export{l as default,u as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
