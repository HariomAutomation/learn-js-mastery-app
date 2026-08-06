const n="07-arrays-array-patterns-42",t="Chunk Consecutive",e=`function chunkConsecutive(arr, predicate) {
  return arr.reduce((acc, x) => {
    const last = acc[acc.length - 1];
    if (last && last[last.length - 1] < x) {
      last.push(x);
    } else {
      acc.push([x]);
    }
    return acc;
  }, []);
}
console.log(chunkConsecutive([1,2,3,1,2,3,4,1,2]));`,c=`function chunkConsecutive(arr, predicate) {
  return arr.reduce((acc, x) => {
    const last = acc[acc.length - 1];
    if (last && last[last.length - 1] < x) {
      last.push(x);
    } else {
      acc.push([x]);
    }
    return acc;
  }, []);
}
console.log(chunkConsecutive([1,2,3,1,2,3,4,1,2]));`,s=[{input:[],expected:"[ [ 1, 2, 3 ], [ 1, 2, 3, 4 ], [ 1, 2 ] ]"}],a=["Group consecutive increasing","Check last element"],r={id:n,title:t,starterCode:e,solution:c,tests:s,hints:a};export{r as default,a as hints,n as id,c as solution,e as starterCode,s as tests,t as title};
