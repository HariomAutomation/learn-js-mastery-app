const n="07-arrays-array-patterns-47",t="Rotate In Place",e=`function rotateInPlace(arr, n) {
  const len = arr.length;
  n = ((n % len) + len) % len;
  return [...arr.slice(n), ...arr.slice(0, n)];
}
console.log(rotateInPlace([1,2,3,4,5], -1));`,r=`function rotateInPlace(arr, n) {
  const len = arr.length;
  n = ((n % len) + len) % len;
  return [...arr.slice(n), ...arr.slice(0, n)];
}
console.log(rotateInPlace([1,2,3,4,5], -1));`,a=[{input:[],expected:"[ 5, 1, 2, 3, 4 ]"}],o=["Handle negative rotation","Modulo for wrap"],l={id:n,title:t,starterCode:e,solution:r,tests:a,hints:o};export{l as default,o as hints,n as id,r as solution,e as starterCode,a as tests,t as title};
