const n="06-functions-function-basics-09",t="Function Hoisting",o=`console.log(add(2, 3));
function add(a, b) {
  return a + b;
}`,s=`console.log(add(2, 3));
function add(a, b) {
  return a + b;
}`,i=[{input:[],expected:"5"}],e=["Declarations are hoisted","Can call before definition"],c={id:n,title:t,starterCode:o,solution:s,tests:i,hints:e};export{c as default,e as hints,n as id,s as solution,o as starterCode,i as tests,t as title};
