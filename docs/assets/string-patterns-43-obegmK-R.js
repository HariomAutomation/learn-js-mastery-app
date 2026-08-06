const t="09-strings-string-patterns-43",e="Decompress String",s=`function decompress(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, c, n) => c.repeat(Number(n)));
}
console.log(decompress('a3b2c4'));`,n=`function decompress(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, c, n) => c.repeat(Number(n)));
}
console.log(decompress('a3b2c4'));`,c=[{input:[],expected:"aaabbbbcccc"}],r=["Match char + count","Repeat char"],o={id:t,title:e,starterCode:s,solution:n,tests:c,hints:r};export{o as default,r as hints,t as id,n as solution,s as starterCode,c as tests,e as title};
