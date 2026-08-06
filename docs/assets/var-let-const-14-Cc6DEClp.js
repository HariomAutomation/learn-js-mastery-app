const t="01-variables-declarations-var-let-const-14",o="let not hoisted value",e=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("error")
}`,n=`try {
  console.log(x)
  let x = 5
} catch(e) {
  console.log("error")
}`,s=[{input:[],expected:"error"}],l=["let is not initialized before declaration"],r={id:t,title:o,starterCode:e,solution:n,tests:s,hints:l};export{r as default,l as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
