const t="01-variables-declarations-var-let-const-35",e="let scope example",s=`let x = 1
function test() {
  console.log(x)
}
test()`,n=`let x = 1
function test() {
  console.log(x)
}
test()`,o=[{input:[],expected:"1"}],l=["let in global scope is accessible"],c={id:t,title:e,starterCode:s,solution:n,tests:o,hints:l};export{c as default,l as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
