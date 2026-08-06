const t="06-functions-function-basics-10",n="Function Scope",s=`function test() {
  const x = 10;
  console.log(x);
}
test();`,o=`function test() {
  const x = 10;
  console.log(x);
}
test();`,c=[{input:[],expected:"10"}],e=["Variables are local","Accessible inside function"],i={id:t,title:n,starterCode:s,solution:o,tests:c,hints:e};export{i as default,e as hints,t as id,o as solution,s as starterCode,c as tests,n as title};
