const e="04-control-flow-if-else-switch-12",t="Guard clause pattern",n=`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet('Alice');`,o=`function greet(name) {
  if (!name) return;
  console.log(\`Hello, \${name}!\`);
}
greet('Alice');`,s=[{input:[],expected:"Hello, Alice!"}],l=["Guard clause exits early if condition met","!name is false for 'Alice'"],i={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{i as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
