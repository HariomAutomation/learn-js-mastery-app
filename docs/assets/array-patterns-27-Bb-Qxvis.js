const t="07-arrays-array-patterns-27",n="Rotate Right N",r=`function rotateRight(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}
console.log(rotateRight([1,2,3,4,5], 2));`,s=`function rotateRight(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(-shift).concat(arr.slice(0, -shift));
}
console.log(rotateRight([1,2,3,4,5], 2));`,e=[{input:[],expected:"[ 4, 5, 1, 2, 3 ]"}],o=["Slice from end","Concat with start"],a={id:t,title:n,starterCode:r,solution:s,tests:e,hints:o};export{a as default,o as hints,t as id,s as solution,r as starterCode,e as tests,n as title};
