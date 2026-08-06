const t="07-arrays-map-filter-reduce-48",e="Reduce Deep Flatten",a=`const arr = [1, [2, [3, [4]]]];
function deepFlatten(arr) {
  return arr.____((acc, val) =>
    acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
console.log(deepFlatten(arr));`,r=`const arr = [1, [2, [3, [4]]]];
function deepFlatten(arr) {
  return arr.reduce((acc, val) =>
    acc.concat(Array.isArray(val) ? deepFlatten(val) : val), []);
}
console.log(deepFlatten(arr));`,n=[{input:[],expected:"[ 1, 2, 3, 4 ]"}],c=["Recursive flatten","Check Array.isArray"],l={id:t,title:e,starterCode:a,solution:r,tests:n,hints:c};export{l as default,c as hints,t as id,r as solution,a as starterCode,n as tests,e as title};
