const e="06-functions-closures-iife-45",n="Negate Predicate",s=`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,t=`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,o=[{input:[],expected:`true
false`}],i=["Return opposite result","Use spread args"],c={id:e,title:n,starterCode:s,solution:t,tests:o,hints:i};export{c as default,i as hints,e as id,t as solution,s as starterCode,o as tests,n as title};
