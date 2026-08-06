const t="01-variables-declarations-var-let-const-25",n="var in function param",s=`function test(x) {
  var x = 10
  console.log(x)
}
test(5)`,o=`function test(x) {
  var x = 10
  console.log(x)
}
test(5)`,e=[{input:[],expected:"10"}],a=["var shadows parameter"],r={id:t,title:n,starterCode:s,solution:o,tests:e,hints:a};export{r as default,a as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
