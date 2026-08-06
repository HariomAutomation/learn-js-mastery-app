const t="09-strings-string-patterns-49",n="Longest Palindrome Substring",s=`function longestPalindrome(str) {
  let best = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('') && sub.length > best.length) best = sub;
    }
  }
  return best;
}
console.log(longestPalindrome('babad'));`,e=`function longestPalindrome(str) {
  let best = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const sub = str.slice(i, j + 1);
      if (sub === sub.split('').reverse().join('') && sub.length > best.length) best = sub;
    }
  }
  return best;
}
console.log(longestPalindrome('babad'));`,o=[{input:[],expected:"bab"}],i=["Check all substrings","Track longest palin"],l={id:t,title:n,starterCode:s,solution:e,tests:o,hints:i};export{l as default,i as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
