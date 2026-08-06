const n="06-functions-function-basics-40",t="Decorator Pattern",o=`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,s=`function withLogging(fn) {
  return function(...args) {
    console.log('Calling ' + fn.name);
    const result = fn(...args);
    console.log('Result: ' + result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);`,e=[{input:[],expected:`Calling add
Result: 5`}],l=["Wrap function","Add behavior"],g={id:n,title:t,starterCode:o,solution:s,tests:e,hints:l};export{g as default,l as hints,n as id,s as solution,o as starterCode,e as tests,t as title};
