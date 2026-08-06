const t="04-control-flow-early-return-10",n="Error handling early return",r=`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON('{"a": 1}'));`,s=`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON('{"a": 1}'));`,e=[{input:[],expected:"[object Object]"}],o=["str is a string, guard passes","JSON.parse succeeds"],l={id:t,title:n,starterCode:r,solution:s,tests:e,hints:o};export{l as default,o as hints,t as id,s as solution,r as starterCode,e as tests,n as title};
