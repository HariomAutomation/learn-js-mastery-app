const t="04-control-flow-early-return-21",n="Null check - null input",e=`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength(null));`,r=`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength(null));`,s=[{input:[],expected:"0"}],l=["str is null","First guard returns 0"],u={id:t,title:n,starterCode:e,solution:r,tests:s,hints:l};export{u as default,l as hints,t as id,r as solution,e as starterCode,s as tests,n as title};
