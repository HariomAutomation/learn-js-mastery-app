const n="01-variables-declarations-scope-hoisting-15",t="Scope resolution order",o=`var x = 1
function a() {
  var x = 2
  function b() {
    var x = 3
    console.log(x)
  }
  b()
}
a()`,s=`var x = 1
function a() {
  var x = 2
  function b() {
    var x = 3
    console.log(x)
  }
  b()
}
a()`,e=[{input:[],expected:"3"}],i=["Innermost scope wins"],c={id:n,title:t,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
