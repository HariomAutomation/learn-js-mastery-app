const n="04-control-flow-early-return-05",e="Nested to flat with early return",t=`function process(value) {
  if (value === null) return 'null input';
  if (value === undefined) return 'undefined input';
  return \`processed: \${value}\`;
}
console.log(process(null));`,u=`function process(value) {
  if (value === null) return 'null input';
  if (value === undefined) return 'undefined input';
  return \`processed: \${value}\`;
}
console.log(process(null));`,l=[{input:[],expected:"null input"}],s=["First guard catches null","Returns before second check"],r={id:n,title:e,starterCode:t,solution:u,tests:l,hints:s};export{r as default,s as hints,n as id,u as solution,t as starterCode,l as tests,e as title};
