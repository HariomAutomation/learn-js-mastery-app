const r="04-control-flow-early-return-31",t="Early return arrays - not array",e=`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree('hello'));`,n=`function getFirstThree(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.slice(0, 3);
}
console.log(getFirstThree('hello'));`,s=[{input:[],expected:""}],o=["'hello' is not an array","Returns empty array"],a={id:r,title:t,starterCode:e,solution:n,tests:s,hints:o};export{a as default,o as hints,r as id,n as solution,e as starterCode,s as tests,t as title};
