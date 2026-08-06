const t="09-strings-string-patterns-02",n="Count Vowels",o=`function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world'));`,s=`function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world'));`,e=[{input:[],expected:"3"}],l=["Match vowels globally","Case-insensitive"],i={id:t,title:n,starterCode:o,solution:s,tests:e,hints:l};export{i as default,l as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
