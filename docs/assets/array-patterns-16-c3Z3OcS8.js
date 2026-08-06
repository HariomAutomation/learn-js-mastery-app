const t="07-arrays-array-patterns-16",e="Merge Sorted",o=`function mergeSorted(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,n=`function mergeSorted(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,r=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],s=["Concat then sort","Use compare function"],a={id:t,title:e,starterCode:o,solution:n,tests:r,hints:s};export{a as default,s as hints,t as id,n as solution,o as starterCode,r as tests,e as title};
