const t="06-functions-function-basics-46",n="Mapper Function",e=`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,o=`function createMapper(transform) {
  return (arr) => arr.map(transform);
}
const doubleAll = createMapper(x => x * 2);
console.log(doubleAll([1, 2, 3]));`,r=[{input:[],expected:"[ 2, 4, 6 ]"}],s=["Return mapper function","Use map inside"],a={id:t,title:n,starterCode:e,solution:o,tests:r,hints:s};export{a as default,s as hints,t as id,o as solution,e as starterCode,r as tests,n as title};
