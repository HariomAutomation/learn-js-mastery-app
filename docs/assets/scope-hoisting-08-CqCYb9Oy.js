const n="01-variables-declarations-scope-hoisting-08",t="Scope chain lookup",o=`var x = 1
function a() {
  var x = 2
  function b() {
    console.log(x)
  }
  b()
}
a()`,s=`var x = 1
function a() {
  var x = 2
  function b() {
    console.log(x)
  }
  b()
}
a()`,i=[{input:[],expected:"2"}],e=["b looks at a's x first"],a={id:n,title:t,starterCode:o,solution:s,tests:i,hints:e};export{a as default,e as hints,n as id,s as solution,o as starterCode,i as tests,t as title};
