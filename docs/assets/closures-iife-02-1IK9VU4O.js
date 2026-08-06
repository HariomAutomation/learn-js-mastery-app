const n="06-functions-closures-iife-02",t="Closure With Variable",e=`function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));`,o=`function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5));`,r=[{input:[],expected:"10"}],u=["factor is captured","Return inner function"],i={id:n,title:t,starterCode:e,solution:o,tests:r,hints:u};export{i as default,u as hints,n as id,o as solution,e as starterCode,r as tests,t as title};
