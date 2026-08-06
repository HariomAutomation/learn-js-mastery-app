const n="05-loops-for-while-38",e="Palindrome Number Check",t=`let num = 121;
let original = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(original === rev);`,o=`let num = 121;
let original = num;
let rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(original === rev);`,l=[{input:[],expected:"true"}],r=["Save original number","Reverse and compare"],i={id:n,title:e,starterCode:t,solution:o,tests:l,hints:r};export{i as default,r as hints,n as id,o as solution,t as starterCode,l as tests,e as title};
