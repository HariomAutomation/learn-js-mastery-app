const t="09-strings-string-patterns-29",n="Group Anagrams",s=`function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(s);
  }
  return Object.values(map);
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));`,a=`function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split('').sort().join('');
    map[key] = map[key] || [];
    map[key].push(s);
  }
  return Object.values(map);
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));`,o=[{input:[],expected:"[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]"}],e=["Sort chars as key","Group by anagram"],r={id:t,title:n,starterCode:s,solution:a,tests:o,hints:e};export{r as default,e as hints,t as id,a as solution,s as starterCode,o as tests,n as title};
