const e="06-functions-higher-order-functions-18",t="Filter Maker",n=`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,r=`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,i=[{input:[],expected:"[ 2, 4 ]"}],s=["Return filter function","Use filter inside"],o={id:e,title:t,starterCode:n,solution:r,tests:i,hints:s};export{o as default,s as hints,e as id,r as solution,n as starterCode,i as tests,t as title};
