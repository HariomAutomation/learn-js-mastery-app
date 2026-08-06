const t="07-arrays-array-patterns-02",n="Chunk Array",s=`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));`,e=`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1,2,3,4,5], 2));`,r=[{input:[],expected:"[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]"}],i=["Slice into chunks","Step by size"],o={id:t,title:n,starterCode:s,solution:e,tests:r,hints:i};export{o as default,i as hints,t as id,e as solution,s as starterCode,r as tests,n as title};
