const i="07-arrays-array-patterns-14",n="Sliding Window",s=`function slidingWindow(arr, size) {
  return arr.slice(0, arr.length - size + 1).map((_, i) => arr.slice(i, i + size));
}
console.log(slidingWindow([1,2,3,4,5], 3));`,t=`function slidingWindow(arr, size) {
  return arr.slice(0, arr.length - size + 1).map((_, i) => arr.slice(i, i + size));
}
console.log(slidingWindow([1,2,3,4,5], 3));`,e=[{input:[],expected:"[ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]"}],r=["Slice windows of size","Map with slice"],o={id:i,title:n,starterCode:s,solution:t,tests:e,hints:r};export{o as default,r as hints,i as id,t as solution,s as starterCode,e as tests,n as title};
