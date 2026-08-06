const t="07-arrays-array-patterns-12",a="Deep Flatten",e=`function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
}
console.log(deepFlatten([1, [2, [3, [4]]]]));`,n=`function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(deepFlatten(val)) : acc.concat(val), []);
}
console.log(deepFlatten([1, [2, [3, [4]]]]));`,r=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],c=["Recursive flatten","Check Array.isArray"],s={id:t,title:a,starterCode:e,solution:n,tests:r,hints:c};export{s as default,c as hints,t as id,n as solution,e as starterCode,r as tests,a as title};
