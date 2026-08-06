const n="07-arrays-array-patterns-46",t="Zip Longest Fill",l=`function zipLongestFill(a, b, fill = null) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] ?? fill, b[i] ?? fill]);
}
console.log(zipLongestFill([1,2], ['a','b','c','d']));`,i=`function zipLongestFill(a, b, fill = null) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] ?? fill, b[i] ?? fill]);
}
console.log(zipLongestFill([1,2], ['a','b','c','d']));`,e=[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ null, 'c' ], [ null, 'd' ] ]"}],a=["Nullish coalescing ??","Array.from with map"],o={id:n,title:t,starterCode:l,solution:i,tests:e,hints:a};export{o as default,a as hints,n as id,i as solution,l as starterCode,e as tests,t as title};
