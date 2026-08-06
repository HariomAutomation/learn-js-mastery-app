const t="06-functions-function-basics-30",n="Higher Order Filter",e=`function filterBy(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(filterBy(nums, x => x % 2 === 0));`,s=`function filterBy(arr, predicate) {
  const result = [];
  for (const item of arr) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
const nums = [1, 2, 3, 4, 5, 6];
console.log(filterBy(nums, x => x % 2 === 0));`,r=[{input:[],expected:"[ 2, 4, 6 ]"}],i=["Return function parameter","Check predicate"],o={id:t,title:n,starterCode:e,solution:s,tests:r,hints:i};export{o as default,i as hints,t as id,s as solution,e as starterCode,r as tests,n as title};
