const n="07-arrays-array-patterns-32",s="Chunk Size",t=`function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunk([1,2,3,4,5,6,7], 3));`,e=`function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunk([1,2,3,4,5,6,7], 3));`,r=[{input:[],expected:"[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]"}],i=["Step by size","Last chunk may be smaller"],c={id:n,title:s,starterCode:t,solution:e,tests:r,hints:i};export{c as default,i as hints,n as id,e as solution,t as starterCode,r as tests,s as title};
