const t="06-functions-higher-order-functions-32",e="Reducer Pattern",n=`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,r=`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,c=[{input:[],expected:"10"}],u=["Return reducer function","Use reduce inside"],o={id:t,title:e,starterCode:n,solution:r,tests:c,hints:u};export{o as default,u as hints,t as id,r as solution,n as starterCode,c as tests,e as title};
