const t="09-strings-string-patterns-19",o="Is Rotation",n=`function isRotation(a, b) {
  return a.length === b.length && (a + a).includes(b);
}
console.log(isRotation('hello', 'llohe'));
console.log(isRotation('hello', 'helloo'));`,s=`function isRotation(a, b) {
  return a.length === b.length && (a + a).includes(b);
}
console.log(isRotation('hello', 'llohe'));
console.log(isRotation('hello', 'helloo'));`,e=[{input:[],expected:`true
false`}],l=["Concat string with itself","Check inclusion"],i={id:t,title:o,starterCode:n,solution:s,tests:e,hints:l};export{i as default,l as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
