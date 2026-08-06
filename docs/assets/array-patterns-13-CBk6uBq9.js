const t="07-arrays-array-patterns-13",r="Partition",n=`function partition(arr, predicate) {
  return arr.reduce((acc, x) => {
    acc[predicate(x) ? 0 : 1].push(x);
    return acc;
}, [[], []]);
}
console.log(partition([1,2,3,4,5], x => x > 3));`,e=`function partition(arr, predicate) {
  return arr.reduce((acc, x) => {
    acc[predicate(x) ? 0 : 1].push(x);
    return acc;
  }, [[], []]);
}
console.log(partition([1,2,3,4,5], x => x > 3));`,a=[{input:[],expected:"[ [ 4, 5 ], [ 1, 2, 3 ] ]"}],c=["Two buckets","true goes first"],o={id:t,title:r,starterCode:n,solution:e,tests:a,hints:c};export{o as default,c as hints,t as id,e as solution,n as starterCode,a as tests,r as title};
