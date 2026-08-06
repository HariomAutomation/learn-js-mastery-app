const t="09-strings-string-patterns-09",s="Extract Numbers",e=`function extractNumbers(str) {
  return str.match(/\\d+/g).map(Number);
}
console.log(extractNumbers('abc123def456'));`,n=`function extractNumbers(str) {
  return str.match(/\\d+/g).map(Number);
}
console.log(extractNumbers('abc123def456'));`,r=[{input:[],expected:"[ 123, 456 ]"}],o=["Match digits","Convert to numbers"],c={id:t,title:s,starterCode:e,solution:n,tests:r,hints:o};export{c as default,o as hints,t as id,n as solution,e as starterCode,r as tests,s as title};
