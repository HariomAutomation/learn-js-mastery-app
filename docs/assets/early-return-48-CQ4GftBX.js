const n="04-control-flow-early-return-48",e="Early return boolean - type check",t=`function isString(value) {
  if (value === null) return false;
  if (value === undefined) return false;
  return typeof value === 'string';
}
console.log(isString('hello'));`,l=`function isString(value) {
  if (value === null) return false;
  if (value === undefined) return false;
  return typeof value === 'string';
}
console.log(isString('hello'));`,o=[{input:[],expected:"true"}],r=["value is not null","value is not undefined","typeof is 'string'"],s={id:n,title:e,starterCode:t,solution:l,tests:o,hints:r};export{s as default,r as hints,n as id,l as solution,t as starterCode,o as tests,e as title};
