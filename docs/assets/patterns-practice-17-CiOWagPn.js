const n="05-loops-patterns-practice-17",e="Palindrome Number Check",t=`let num = 1221;
let orig = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(orig === rev);`,o=`let num = 1221;
let orig = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(orig === rev);`,r=[{input:[],expected:"true"}],s=["Save original","Reverse and compare"],l={id:n,title:e,starterCode:t,solution:o,tests:r,hints:s};export{l as default,s as hints,n as id,o as solution,t as starterCode,r as tests,e as title};
