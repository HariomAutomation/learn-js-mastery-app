const n="01-variables-declarations-scope-hoisting-24",t="nested function scope",o=`function a() {
  const x = 1
  return function b() {
    return function c() {
      return x
    }
  }
}
console.log(a()()())`,e=`function a() {
  const x = 1
  return function b() {
    return function c() {
      return x
    }
  }
}
console.log(a()()())`,s=[{input:[],expected:"1"}],c=["Scope chain traverses all levels"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
