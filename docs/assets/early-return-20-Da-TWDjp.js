const t="04-control-flow-early-return-20",n="Null check early return",e=`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength('hello'));`,r=`function getLength(str) {
  if (str === null) return 0;
  if (str === undefined) return 0;
  return str.length;
}
console.log(getLength('hello'));`,s=[{input:[],expected:"5"}],l=["str is not null","str is not undefined","str.length is 5"],o={id:t,title:n,starterCode:e,solution:r,tests:s,hints:l};export{o as default,l as hints,t as id,r as solution,e as starterCode,s as tests,n as title};
