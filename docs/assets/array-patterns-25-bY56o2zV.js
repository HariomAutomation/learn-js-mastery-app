const n="07-arrays-array-patterns-25",t="Zip Longest",e=`function zipLongest(a, b) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] || null, b[i] || null]);
}
console.log(zipLongest([1,2], ['a','b','c']));`,a=`function zipLongest(a, b) {
  const maxLen = Math.max(a.length, b.length);
  return Array.from({length: maxLen}, (_, i) => [a[i] || null, b[i] || null]);
}
console.log(zipLongest([1,2], ['a','b','c']));`,o=[{input:[],expected:"[ [ 1, 'a' ], [ 2, 'b' ], [ null, 'c' ] ]"}],s=["Array.from with length","Pad with null"],l={id:n,title:t,starterCode:e,solution:a,tests:o,hints:s};export{l as default,s as hints,n as id,a as solution,e as starterCode,o as tests,t as title};
