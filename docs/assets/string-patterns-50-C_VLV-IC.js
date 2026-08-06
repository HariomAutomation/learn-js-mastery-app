const t="09-strings-string-patterns-50",n="Count Substrings",s=`function countSubstrings(s, t) {
  let count = 0;
  for (let i = 0; i <= s.length - t.length; i++) {
    if (s.substring(i, i + t.length) === t) count++;
  }
  return count;
}
console.log(countSubstrings('abcabc', 'abc'));`,o=`function countSubstrings(s, t) {
  let count = 0;
  for (let i = 0; i <= s.length - t.length; i++) {
    if (s.substring(i, i + t.length) === t) count++;
  }
  return count;
}
console.log(countSubstrings('abcabc', 'abc'));`,i=[{input:[],expected:"2"}],e=["Slide window over string","Count exact matches"],c={id:t,title:n,starterCode:s,solution:o,tests:i,hints:e};export{c as default,e as hints,t as id,o as solution,s as starterCode,i as tests,n as title};
