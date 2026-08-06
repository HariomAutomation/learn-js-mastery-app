const t="01-variables-declarations-scope-hoisting-01",s="Global scope variable",e=`var x = 10
function test() {
  console.log(x)
}
test()`,o=`var x = 10
function test() {
  console.log(x)
}
test()`,n=[{input:[],expected:"10"}],i=["Global variables are accessible everywhere"],a={id:t,title:s,starterCode:e,solution:o,tests:n,hints:i};export{a as default,i as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
