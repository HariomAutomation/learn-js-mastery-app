const t="04-control-flow-early-return-49",n="Early return with object destructuring",s=`function getFullName({ first, last }) {
  if (!first) return 'No first name';
  if (!last) return 'No last name';
  return \`\${first} \${last}\`;
}
console.log(getFullName({ first: 'John', last: 'Doe' }));`,e=`function getFullName({ first, last }) {
  if (!first) return 'No first name';
  if (!last) return 'No last name';
  return \`\${first} \${last}\`;
}
console.log(getFullName({ first: 'John', last: 'Doe' }));`,r=[{input:[],expected:"John Doe"}],o=["first is truthy","last is truthy","Returns full name"],l={id:t,title:n,starterCode:s,solution:e,tests:r,hints:o};export{l as default,o as hints,t as id,e as solution,s as starterCode,r as tests,n as title};
