const t="01-variables-declarations-scope-hoisting-06",o="Hoisting let const",n=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("TDZ")
}`,e=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("TDZ")
}`,s=[{input:[],expected:"TDZ"}],c=["let/const have temporal dead zone"],l={id:t,title:o,starterCode:n,solution:e,tests:s,hints:c};export{l as default,c as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
