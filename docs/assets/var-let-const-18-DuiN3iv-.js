const t="01-variables-declarations-var-let-const-18",e="const freeze object",o=`const obj = Object.freeze({ x: 1 })
try {
  obj.x = 2
} catch(e) {
  console.log("error")
}
console.log(obj.x)`,n=`const obj = Object.freeze({ x: 1 })
try {
  obj.x = 2
} catch(e) {
  console.log("error")
}
console.log(obj.x)`,s=[{input:[],expected:`error
1`}],r=["freeze prevents mutation"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:r};export{c as default,r as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
