const t="07-arrays-array-patterns-20",n="Chunking Practice",e=`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk(['a','b','c','d','e'], 3));`,s=`function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk(['a','b','c','d','e'], 3));`,r=[{input:[],expected:"[ [ 'a', 'b', 'c' ], [ 'd', 'e' ] ]"}],i=["Loop with step size","Slice chunks"],o={id:t,title:n,starterCode:e,solution:s,tests:r,hints:i};export{o as default,i as hints,t as id,s as solution,e as starterCode,r as tests,n as title};
