const t="07-arrays-array-patterns-31",a="Flatten Deep",n=`function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));`,r=`function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
console.log(flatten([1, [2, [3, [4, [5]]]]]));`,c=[{input:[],expected:"[ 1, 2, 3, 4, 5 ]"}],e=["Recursive flatten","Check Array.isArray"],s={id:t,title:a,starterCode:n,solution:r,tests:c,hints:e};export{s as default,e as hints,t as id,r as solution,n as starterCode,c as tests,a as title};
