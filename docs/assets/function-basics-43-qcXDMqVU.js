const n="06-functions-function-basics-43",e="Negate Predicate",t=`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,s=`function negate(predicate) {
  return (...args) => !predicate(...args);
}
const isOdd = x => x % 2 !== 0;
const isEven = negate(isOdd);
console.log(isEven(2));
console.log(isEven(3));`,o=[{input:[],expected:`true
false`}],i=["Return opposite result","Use spread args"],c={id:n,title:e,starterCode:t,solution:s,tests:o,hints:i};export{c as default,i as hints,n as id,s as solution,t as starterCode,o as tests,e as title};
