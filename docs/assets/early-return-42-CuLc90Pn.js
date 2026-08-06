const e="04-control-flow-early-return-42",n="Early return in filter callback",t=`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => {
  if (n % 2 !== 0) return false;
  return true;
});
console.log(evens);`,s=`const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => {
  if (n % 2 !== 0) return false;
  return true;
});
console.log(evens);`,r=[{input:[],expected:"2,4,6"}],o=["filter keeps elements where callback returns true","Even numbers pass the check"],l={id:e,title:n,starterCode:t,solution:s,tests:r,hints:o};export{l as default,o as hints,e as id,s as solution,t as starterCode,r as tests,n as title};
