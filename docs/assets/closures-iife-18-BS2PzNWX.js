const t="06-functions-closures-iife-18",n="Revealing Module",e=`const calculator = (function() {
  let result = 0;
  function add(n) { result += n; }
  function subtract(n) { result -= n; }
  function getResult() { return result; }
  return { add, subtract, getResult };
})();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult());`,u=`const calculator = (function() {
  let result = 0;
  function add(n) { result += n; }
  function subtract(n) { result -= n; }
  function getResult() { return result; }
  return { add, subtract, getResult };
})();
calculator.add(5);
calculator.subtract(2);
console.log(calculator.getResult());`,s=[{input:[],expected:"3"}],c=["Private functions","Reveal public API"],l={id:t,title:n,starterCode:e,solution:u,tests:s,hints:c};export{l as default,c as hints,t as id,u as solution,e as starterCode,s as tests,n as title};
