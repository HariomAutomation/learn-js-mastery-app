const t="03-operators-logical-ternary-44",e="Logical OR default pattern",n=`function greet(name) {
  const displayName = name || 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,s=`function greet(name) {
  const displayName = name || 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,o=[{input:[],expected:"Hello, Guest!"}],l=["'' is falsy","|| returns 'Guest'"],a={id:t,title:e,starterCode:n,solution:s,tests:o,hints:l};export{a as default,l as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
