const t="09-strings-string-patterns-15",s="Run-Length Compression",n=`function compress(str) {
  return str.replace(/(.)\\1+/g, (match) => match[0] + match.length);
}
console.log(compress('aaabbbccc'));`,c=`function compress(str) {
  return str.replace(/(.)\\1+/g, (match) => match[0] + match.length);
}
console.log(compress('aaabbbccc'));`,e=[{input:[],expected:"a3b3c3"}],o=["Count consecutive","Replace with count"],r={id:t,title:s,starterCode:n,solution:c,tests:e,hints:o};export{r as default,o as hints,t as id,c as solution,n as starterCode,e as tests,s as title};
