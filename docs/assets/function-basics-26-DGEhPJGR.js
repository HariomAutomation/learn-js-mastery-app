const t="06-functions-function-basics-26",n="Purity Test",s=`function add(a, b) {
  return a + b;
}
console.log(add(2, 3) === add(2, 3));`,o=`function add(a, b) {
  return a + b;
}
console.log(add(2, 3) === add(2, 3));`,e=[{input:[],expected:"true"}],i=["Same input gives same output","No side effects"],d={id:t,title:n,starterCode:s,solution:o,tests:e,hints:i};export{d as default,i as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
