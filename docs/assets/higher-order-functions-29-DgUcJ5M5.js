const n="06-functions-higher-order-functions-29",e="Conditional Execution",o=`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,t=`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,s=[{input:[],expected:`8
5`}],c=["Check predicate","Apply or return original"],i={id:n,title:e,starterCode:o,solution:t,tests:s,hints:c};export{i as default,c as hints,n as id,t as solution,o as starterCode,s as tests,e as title};
