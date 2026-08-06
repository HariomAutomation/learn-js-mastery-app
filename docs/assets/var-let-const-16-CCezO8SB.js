const t="01-variables-declarations-var-let-const-16",s="var while scope",e=`var i = 0
while (i < 3) {
  var result = i
  i++
}
console.log(result)`,o=`var i = 0
while (i < 3) {
  var result = i
  i++
}
console.log(result)`,n=[{input:[],expected:"2"}],i=["var leaks out of loop"],l={id:t,title:s,starterCode:e,solution:o,tests:n,hints:i};export{l as default,i as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
