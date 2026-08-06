const r="04-control-flow-early-return-15",n="Fail fast on non-array",t=`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray('not an array'));`,a=`function processArray(arr) {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];
  return arr.map(x => x * 2);
}
console.log(processArray('not an array'));`,o=[{input:[],expected:""}],e=["'not an array' is not an array","Returns empty array"],s={id:r,title:n,starterCode:t,solution:a,tests:o,hints:e};export{s as default,e as hints,r as id,a as solution,t as starterCode,o as tests,n as title};
