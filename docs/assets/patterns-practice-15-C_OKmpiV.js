const t="05-loops-patterns-practice-15",n="Factorial With While",e=`let n = 5;
let result = 1;
let i = n;
while (i > 1) {
  result *= i;
  i--;
}
console.log(result);`,s=`let n = 5;
let result = 1;
let i = n;
while (i > 1) {
  result *= i;
  i--;
}
console.log(result);`,l=[{input:[],expected:"120"}],o=["Start from n","Count down"],i={id:t,title:n,starterCode:e,solution:s,tests:l,hints:o};export{i as default,o as hints,t as id,s as solution,e as starterCode,l as tests,n as title};
