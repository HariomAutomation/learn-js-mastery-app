const t="09-strings-string-patterns-07",s="Anagram Check",n=`function isAnagram(a, b) {
  const sort = s => s.toLowerCase().split('').sort().join('');
  return sort(a) === sort(b);
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));`,o=`function isAnagram(a, b) {
  const sort = s => s.toLowerCase().split('').sort().join('');
  return sort(a) === sort(b);
}
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));`,r=[{input:[],expected:`true
false`}],e=["Sort characters","Compare sorted"],a={id:t,title:s,starterCode:n,solution:o,tests:r,hints:e};export{a as default,e as hints,t as id,o as solution,n as starterCode,r as tests,s as title};
