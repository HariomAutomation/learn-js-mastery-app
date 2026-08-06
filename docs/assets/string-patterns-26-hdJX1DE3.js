const t="09-strings-string-patterns-26",n="First Unique Char",s=`function firstUniqueChar(str) {
  for (const c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c;
  }
  return null;
}
console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('aabb'));`,r=`function firstUniqueChar(str) {
  for (const c of str) {
    if (str.indexOf(c) === str.lastIndexOf(c)) return c;
  }
  return null;
}
console.log(firstUniqueChar('leetcode'));
console.log(firstUniqueChar('aabb'));`,e=[{input:[],expected:`l
null`}],o=["Check first and last same","Unique character"],i={id:t,title:n,starterCode:s,solution:r,tests:e,hints:o};export{i as default,o as hints,t as id,r as solution,s as starterCode,e as tests,n as title};
