const t="09-strings-string-patterns-11",n="Count Consonants",o=`function countConsonants(str) {
  return (str.match(/[^aeiou\\W\\d]/gi) || []).length;
}
console.log(countConsonants('hello world'));`,s=`function countConsonants(str) {
  return (str.match(/[^aeiou\\W\\d]/gi) || []).length;
}
console.log(countConsonants('hello world'));`,e=[{input:[],expected:"7"}],r=["Non-vowel letters","Match consonants"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
