const t="05-loops-patterns-practice-22",n="Sum Even Digits",e=`let num = 2468;
let sum = 0;
while (num > 0) {
  let d = num % 10;
  if (d % 2 === 0) sum += d;
  num = Math.floor(num / 10);
}
console.log(sum);`,s=`let num = 2468;
let sum = 0;
while (num > 0) {
  let d = num % 10;
  if (d % 2 === 0) sum += d;
  num = Math.floor(num / 10);
}
console.log(sum);`,o=[{input:[],expected:"20"}],i=["Check if digit even","Sum even digits"],u={id:t,title:n,starterCode:e,solution:s,tests:o,hints:i};export{u as default,i as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
