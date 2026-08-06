const t="06-functions-closures-iife-05",n="IIFE Returning Value",s=`const result = (function() {
  return 42;
})();
console.log(result);`,e=`const result = (function() {
  return 42;
})();
console.log(result);`,o=[{input:[],expected:"42"}],u=["IIFE can return value","Assign result"],r={id:t,title:n,starterCode:s,solution:e,tests:o,hints:u};export{r as default,u as hints,t as id,e as solution,s as starterCode,o as tests,n as title};
