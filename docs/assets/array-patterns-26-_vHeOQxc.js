const t="07-arrays-array-patterns-26",n="Rotate Left N",e=`function rotateLeft(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(rotateLeft([1,2,3,4,5], 3));`,r=`function rotateLeft(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(rotateLeft([1,2,3,4,5], 3));`,o=[{input:[],expected:"[ 4, 5, 1, 2, 3 ]"}],s=["Modulo for wrap","Slice then concat"],a={id:t,title:n,starterCode:e,solution:r,tests:o,hints:s};export{a as default,s as hints,t as id,r as solution,e as starterCode,o as tests,n as title};
