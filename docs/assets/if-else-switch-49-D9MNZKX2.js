const e="04-control-flow-if-else-switch-49",t="If with template literal condition",o=`const name = "Alice";
if (\`Hello, \${name}\` === "Hello, Alice") {
  console.log("match");
} else {
  console.log("no match");
}`,l=`const name = "Alice";
if (\`Hello, \${name}\` === "Hello, Alice") {
  console.log("match");
} else {
  console.log("no match");
}`,n=[{input:[],expected:"match"}],s=["Template literal produces 'Hello, Alice'","Comparison is true"],c={id:e,title:t,starterCode:o,solution:l,tests:n,hints:s};export{c as default,s as hints,e as id,l as solution,o as starterCode,n as tests,t as title};
