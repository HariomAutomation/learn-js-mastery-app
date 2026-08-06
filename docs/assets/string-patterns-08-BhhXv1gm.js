const t="09-strings-string-patterns-08",o="Count Words",n=`function countWords(str) {
  return str.trim().split(/\\s+/).length;
}
console.log(countWords('hello world'));
console.log(countWords('  hello   world  '));`,s=`function countWords(str) {
  return str.trim().split(/\\s+/).length;
}
console.log(countWords('hello world'));
console.log(countWords('  hello   world  '));`,r=[{input:[],expected:`2
2`}],l=["Trim then split","Count array length"],e={id:t,title:o,starterCode:n,solution:s,tests:r,hints:l};export{e as default,l as hints,t as id,s as solution,n as starterCode,r as tests,o as title};
