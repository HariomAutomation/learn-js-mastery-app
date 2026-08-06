const t="06-functions-closures-iife-48",e="Mapper Function",n=`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,r=`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,o=[{input:[],expected:"[ 2, 4, 6 ]"}],s=["Return mapper function","Use map inside"],a={id:t,title:e,starterCode:n,solution:r,tests:o,hints:s};export{a as default,s as hints,t as id,r as solution,n as starterCode,o as tests,e as title};
