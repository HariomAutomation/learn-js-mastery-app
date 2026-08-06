const t="05-loops-for-while-29",e="Palindrome Check Loop",n=`const str = "racecar";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);`,s=`const str = "racecar";
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);`,o=[{input:[],expected:"true"}],r=["Compare characters from both ends","Only check half the string"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{i as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
