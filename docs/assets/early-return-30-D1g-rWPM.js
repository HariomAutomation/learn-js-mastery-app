const r="04-control-flow-early-return-30",t="Early return arrays",e=`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));`,n=`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));`,s=[{input:[],expected:"1,2,3"}],o=["arr is an array","slice(0,3) returns first 3 elements"],i={id:r,title:t,starterCode:e,solution:n,tests:s,hints:o};export{i as default,o as hints,r as id,n as solution,e as starterCode,s as tests,t as title};
