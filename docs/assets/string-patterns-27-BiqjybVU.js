const t="09-strings-string-patterns-27",n="Longest Substring No Repeat",s=`function longestSubstring(str) {
  let max = 0, start = 0;
  const seen = new Map();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i]) && seen.get(str[i]) >= start) {
      start = seen.get(str[i]) + 1;
    }
    seen.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(longestSubstring('abcabcbb'));`,e=`function longestSubstring(str) {
  let max = 0, start = 0;
  const seen = new Map();
  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i]) && seen.get(str[i]) >= start) {
      start = seen.get(str[i]) + 1;
    }
    seen.set(str[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(longestSubstring('abcabcbb'));`,r=[{input:[],expected:"3"}],i=["Sliding window","Track seen characters"],a={id:t,title:n,starterCode:s,solution:e,tests:r,hints:i};export{a as default,i as hints,t as id,e as solution,s as starterCode,r as tests,n as title};
