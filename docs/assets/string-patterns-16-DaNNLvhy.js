const t="09-strings-string-patterns-16",n="Longest Word",s=`function longestWord(str) {
  return str.split(/\\s+/).reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestWord('hello beautiful world'));`,e=`function longestWord(str) {
  return str.split(/\\s+/).reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestWord('hello beautiful world'));`,o=[{input:[],expected:"beautiful"}],l=["Split by spaces","Find longest"],r={id:t,title:n,starterCode:s,solution:e,tests:o,hints:l};export{r as default,l as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
