const t="01-variables-declarations-var-let-const-05",o="let TDZ",e=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("TDZ")
}`,n=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("TDZ")
}`,s=[{input:[],expected:"TDZ"}],l=["let has temporal dead zone"],c={id:t,title:o,starterCode:e,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
