const n="05-loops-for-while-37",t="Digit Counting",o=`let num = 987654321;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,e=`let num = 987654321;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,i=[{input:[],expected:"9"}],s=["Divide by 10 each iteration","Count until num is 0"],u={id:n,title:t,starterCode:o,solution:e,tests:i,hints:s};export{u as default,s as hints,n as id,e as solution,o as starterCode,i as tests,t as title};
