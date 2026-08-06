const e="06-functions-closures-iife-49",t="Filter Maker",n=`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,r=`function createFilter(predicate) {
  return (arr) => arr.filter(predicate);
}
const keepEvens = createFilter(x => x % 2 === 0);
console.log(keepEvens([1, 2, 3, 4, 5]));`,s=[{input:[],expected:"[ 2, 4 ]"}],i=["Return filter function","Use filter inside"],o={id:e,title:t,starterCode:n,solution:r,tests:s,hints:i};export{o as default,i as hints,e as id,r as solution,n as starterCode,s as tests,t as title};
