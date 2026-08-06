const t="06-functions-function-basics-17",n="Apply Method",s=`function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [5, 10]));`,o=`function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [5, 10]));`,e=[{input:[],expected:"15"}],l=["apply() takes array","null for no context"],c={id:t,title:n,starterCode:s,solution:o,tests:e,hints:l};export{c as default,l as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
