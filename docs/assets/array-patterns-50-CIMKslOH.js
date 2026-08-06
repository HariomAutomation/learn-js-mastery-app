const e="07-arrays-array-patterns-50",t="Sort Merge",n=`function mergeSorted(a, b) {
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
  }
  return merged.concat(a.slice(i), b.slice(j));
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,r=`function mergeSorted(a, b) {
  const merged = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
  }
  return merged.concat(a.slice(i), b.slice(j));
}
console.log(mergeSorted([1,3,5], [2,4,6]));`,s=[{input:[],expected:"[ 1, 2, 3, 4, 5, 6 ]"}],o=["Two pointer merge","Efficient merge"],i={id:e,title:t,starterCode:n,solution:r,tests:s,hints:o};export{i as default,o as hints,e as id,r as solution,n as starterCode,s as tests,t as title};
