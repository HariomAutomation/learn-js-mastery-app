const r="04-control-flow-early-return-14",t="Fail fast pattern",n=`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray([1, 2, 3]));`,e=`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray([1, 2, 3]));`,a=[{input:[],expected:"2,4,6"}],s=["arr is an array","arr has elements","map doubles each element"],o={id:r,title:t,starterCode:n,solution:e,tests:a,hints:s};export{o as default,s as hints,r as id,e as solution,n as starterCode,a as tests,t as title};
