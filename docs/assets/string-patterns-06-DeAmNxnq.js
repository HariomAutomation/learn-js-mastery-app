const e="09-strings-string-patterns-06",n="Palindrome Check",t=`function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));`,s=`function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));`,o=[{input:[],expected:`true
false`}],r=["Clean string first","Compare to reverse"],l={id:e,title:n,starterCode:t,solution:s,tests:o,hints:r};export{l as default,r as hints,e as id,s as solution,t as starterCode,o as tests,n as title};
