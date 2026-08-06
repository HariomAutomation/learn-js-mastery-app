const e="03-operators-logical-ternary-45",n="Nullish OR default pattern",t=`function greet(name) {
  const displayName = name ?? 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,o=`function greet(name) {
  const displayName = name ?? 'Guest';
  return \`Hello, \${displayName}!\`;
}
console.log(greet(''));`,s=[{input:[],expected:"Hello, !"}],l=["?? only triggers on null/undefined","'' is not null/undefined, so no default"],a={id:e,title:n,starterCode:t,solution:o,tests:s,hints:l};export{a as default,l as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
