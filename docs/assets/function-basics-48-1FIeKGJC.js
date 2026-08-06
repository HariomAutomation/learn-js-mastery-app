const t="06-functions-function-basics-48",e="Reducer Pattern",n=`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,c=`function createReducer(accumulator, initial) {
  return (arr) => arr.reduce(accumulator, initial);
}
const sum = createReducer((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4]));`,r=[{input:[],expected:"10"}],u=["Return reducer function","Use reduce inside"],s={id:t,title:e,starterCode:n,solution:c,tests:r,hints:u};export{s as default,u as hints,t as id,c as solution,n as starterCode,r as tests,e as title};
