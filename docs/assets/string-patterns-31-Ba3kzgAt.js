const t="09-strings-string-patterns-31",e="Count Letters",c=`function countLetters(str) {
  return str.split('').reduce((acc, c) => ({...acc, [c]: (acc[c] || 0) + 1}), {});
}
console.log(countLetters('hello'));`,n=`function countLetters(str) {
  return str.split('').reduce((acc, c) => ({...acc, [c]: (acc[c] || 0) + 1}), {});
}
console.log(countLetters('hello'));`,s=[{input:[],expected:"{ h: 1, e: 1, l: 2, o: 1 }"}],o=["Reduce to frequency","Count each letter"],r={id:t,title:e,starterCode:c,solution:n,tests:s,hints:o};export{r as default,o as hints,t as id,n as solution,c as starterCode,s as tests,e as title};
