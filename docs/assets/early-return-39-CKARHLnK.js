const e="04-control-flow-early-return-39",t="Early return with default - empty",n=`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet(''));`,r=`function greet(name = 'Guest') {
  if (!name) return 'Hello, stranger!';
  return \`Hello, \${name}!\`;
}
console.log(greet(''));`,o=[{input:[],expected:"Hello, stranger!"}],s=["'' overrides default","'' is falsy","Guard triggers"],l={id:e,title:t,starterCode:n,solution:r,tests:o,hints:s};export{l as default,s as hints,e as id,r as solution,n as starterCode,o as tests,t as title};
