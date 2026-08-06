const n="01-variables-declarations-scope-hoisting-10",t="Nested scope",o=`function a() {
  function b() {
    function c() {
      console.log("deep")
    }
    c()
  }
  b()
}
a()`,s=`function a() {
  function b() {
    function c() {
      console.log("deep")
    }
    c()
  }
  b()
}
a()`,e=[{input:[],expected:"deep"}],c=["Functions can nest arbitrarily"],i={id:n,title:t,starterCode:o,solution:s,tests:e,hints:c};export{i as default,c as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
