const t="09-strings-string-patterns-42",n="Compress String",s=`function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i-1]) count++;
    else { result += str[i-1] + (count > 1 ? count : ''); count = 1; }
  }
  return result;
}
console.log(compress('aaabbbcc'));`,e=`function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i-1]) count++;
    else { result += str[i-1] + (count > 1 ? count : ''); count = 1; }
  }
  return result;
}
console.log(compress('aaabbbcc'));`,o=[{input:[],expected:"a3b3c2"}],r=["Count consecutive","Skip count if 1"],c={id:t,title:n,starterCode:s,solution:e,tests:o,hints:r};export{c as default,r as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
