const e="06-functions-closures-iife-47",n="Conditional Execution",o=`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,s=`function when(predicate, fn) {
  return (value) => predicate(value) ? fn(value) : value;
}
const isEven = x => x % 2 === 0;
const double = x => x * 2;
const process = when(isEven, double);
console.log(process(4));
console.log(process(5));`,t=[{input:[],expected:`8
5`}],c=["Check predicate","Apply or return original"],l={id:e,title:n,starterCode:o,solution:s,tests:t,hints:c};export{l as default,c as hints,e as id,s as solution,o as starterCode,t as tests,n as title};
