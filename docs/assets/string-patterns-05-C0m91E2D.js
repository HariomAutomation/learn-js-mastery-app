const t="09-strings-string-patterns-05",n="Truncate String",e=`function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}
console.log(truncate('hello world', 5));`,s=`function truncate(str, len) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}
console.log(truncate('hello world', 5));`,l=[{input:[],expected:"hello..."}],r=["Check length","Add ellipsis"],o={id:t,title:n,starterCode:e,solution:s,tests:l,hints:r};export{o as default,r as hints,t as id,s as solution,e as starterCode,l as tests,n as title};
