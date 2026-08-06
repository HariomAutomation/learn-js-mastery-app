const e="04-control-flow-if-else-switch-13",n="Guard clause returns early",t=`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet(null);`,o=`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet(null);`,s=[{input:[],expected:""}],l=["null is falsy","Function returns before console.log"],r={id:e,title:n,starterCode:t,solution:o,tests:s,hints:l};export{r as default,l as hints,e as id,o as solution,t as starterCode,s as tests,n as title};
