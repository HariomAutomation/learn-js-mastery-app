const t="09-strings-string-patterns-18",e="Remove Duplicate Chars",n=`function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
console.log(removeDuplicates('hello'));`,s=`function removeDuplicates(str) {
  return [...new Set(str)].join('');
}
console.log(removeDuplicates('hello'));`,o=[{input:[],expected:"helo"}],r=["Set removes duplicates","Spread and join"],i={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{i as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
