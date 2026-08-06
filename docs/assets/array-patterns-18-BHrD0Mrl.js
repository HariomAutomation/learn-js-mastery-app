const t="07-arrays-array-patterns-18",n="Circular Shift",r=`function circularShift(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(circularShift([1,2,3,4,5], 2));`,s=`function circularShift(arr, n) {
  const len = arr.length;
  const shift = n % len;
  return arr.slice(shift).concat(arr.slice(0, shift));
}
console.log(circularShift([1,2,3,4,5], 2));`,c=[{input:[],expected:"[ 3, 4, 5, 1, 2 ]"}],o=["Modulo for wrap around","Slice and concat"],i={id:t,title:n,starterCode:r,solution:s,tests:c,hints:o};export{i as default,o as hints,t as id,s as solution,r as starterCode,c as tests,n as title};
