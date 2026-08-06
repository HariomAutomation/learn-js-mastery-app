const t="09-strings-string-patterns-25",n="Isomorphic Strings",s=`function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = {}, mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) return false;
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) return false;
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));`,i=`function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = {}, mapTS = {};
  for (let i = 0; i < s.length; i++) {
    if (mapST[s[i]] && mapST[s[i]] !== t[i]) return false;
    if (mapTS[t[i]] && mapTS[t[i]] !== s[i]) return false;
    mapST[s[i]] = t[i];
    mapTS[t[i]] = s[i];
  }
  return true;
}
console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));`,o=[{input:[],expected:`true
false`}],e=["Two-way mapping","Check consistency"],r={id:t,title:n,starterCode:s,solution:i,tests:o,hints:e};export{r as default,e as hints,t as id,i as solution,s as starterCode,o as tests,n as title};
