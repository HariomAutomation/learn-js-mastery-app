const t="05-loops-patterns-practice-16",n="Digit Counting",o=`let num = 123456789;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,e=`let num = 123456789;
let count = 0;
while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}
console.log(count);`,s=[{input:[],expected:"9"}],c=["Divide by 10","Count iterations"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
