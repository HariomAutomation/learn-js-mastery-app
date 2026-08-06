const t="09-strings-string-patterns-38",s="Is Unique Chars",n=`function isUnique(str) {
  return new Set(str).size === str.length;
}
console.log(isUnique('abcde'));
console.log(isUnique('abcda'));`,e=`function isUnique(str) {
  return new Set(str).size === str.length;
}
console.log(isUnique('abcde'));
console.log(isUnique('abcda'));`,i=[{input:[],expected:`true
false`}],o=["Set removes duplicates","Compare sizes"],r={id:t,title:s,starterCode:n,solution:e,tests:i,hints:o};export{r as default,o as hints,t as id,e as solution,n as starterCode,i as tests,s as title};
