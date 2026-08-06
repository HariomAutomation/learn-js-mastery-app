const t="06-functions-function-basics-23",n="Return Early",e=`function getLength(str) {
  if (!str) return 0;
  return str.length;
}
console.log(getLength('hello'));
console.log(getLength(''));`,s=`function getLength(str) {
  if (!str) return 0;
  return str.length;
}
console.log(getLength('hello'));
console.log(getLength(''));`,o=[{input:[],expected:`5
0`}],r=["Check empty first","Return early if empty"],l={id:t,title:n,starterCode:e,solution:s,tests:o,hints:r};export{l as default,r as hints,t as id,s as solution,e as starterCode,o as tests,n as title};
