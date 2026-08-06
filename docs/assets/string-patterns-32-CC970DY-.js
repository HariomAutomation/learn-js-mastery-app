const t="09-strings-string-patterns-32",s="Is Pangram",n=`function isPangram(str) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => str.toLowerCase().includes(c));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello'));`,e=`function isPangram(str) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(c => str.toLowerCase().includes(c));
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello'));`,o=[{input:[],expected:`true
false`}],r=["Check all 26 letters","every with includes"],i={id:t,title:s,starterCode:n,solution:e,tests:o,hints:r};export{i as default,r as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
