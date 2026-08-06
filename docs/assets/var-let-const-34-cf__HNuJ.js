const n="01-variables-declarations-var-let-const-34",t="var scope chain",o=`var x = 1
function outer() {
  var x = 2
  function inner() {
    console.log(x)
  }
  inner()
}
outer()`,e=`var x = 1
function outer() {
  var x = 2
  function inner() {
    console.log(x)
  }
  inner()
}
outer()`,s=[{input:[],expected:"2"}],r=["inner looks at outer's x first"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
