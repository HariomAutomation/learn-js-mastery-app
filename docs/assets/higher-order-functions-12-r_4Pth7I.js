const n="06-functions-higher-order-functions-12",t="Transformer Function",s=`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,r=`function transform(arr, ...fns) {
  return arr.map(item => {
    return fns.reduce((value, fn) => fn(value), item);
  });
}
const nums = [1, 2, 3];
const result = transform(nums, x => x * 2, x => x + 1);
console.log(result);`,e=[{input:[],expected:"[ 3, 5, 7 ]"}],o=["Apply functions to each item","Chain transformations"],u={id:n,title:t,starterCode:s,solution:r,tests:e,hints:o};export{u as default,o as hints,n as id,r as solution,s as starterCode,e as tests,t as title};
