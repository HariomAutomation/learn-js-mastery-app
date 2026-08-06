const t="09-strings-string-patterns-34",e="Run Length Decode",n=`function decode(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, char, count) => char.repeat(Number(count)));
}
console.log(decode('a3b2c1'));`,c=`function decode(str) {
  return str.replace(/(\\w)(\\d+)/g, (_, char, count) => char.repeat(Number(count)));
}
console.log(decode('a3b2c1'));`,o=[{input:[],expected:"aaabbc"}],s=["Match char + digits","Repeat char by count"],r={id:t,title:e,starterCode:n,solution:c,tests:o,hints:s};export{r as default,s as hints,t as id,c as solution,n as starterCode,o as tests,e as title};
