const t="01-variables-declarations-scope-hoisting-11",n="Inner outer scope",s=`var x = 1
function test() {
  console.log(x)
}
test()`,o=`var x = 1
function test() {
  console.log(x)
}
test()`,e=[{input:[],expected:"1"}],c=["Inner scope can access outer"],i={id:t,title:n,starterCode:s,solution:o,tests:e,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
