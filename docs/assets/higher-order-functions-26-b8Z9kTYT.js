const e="06-functions-higher-order-functions-26",n="Negate Predicate",t=`function negate(predicate) {
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
false`}],i=["Return opposite result","Use spread args"],r={id:e,title:n,starterCode:t,solution:s,tests:o,hints:i};export{r as default,i as hints,e as id,s as solution,t as starterCode,o as tests,n as title};
