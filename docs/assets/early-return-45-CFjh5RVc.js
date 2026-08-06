const t="04-control-flow-early-return-45",n="Early return with try/catch",e=`function safeParse(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(safeParse('{"key": "value"}'));`,r=`function safeParse(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(safeParse('{"key": "value"}'));`,s=[{input:[],expected:"[object Object]"}],o=["str is truthy","JSON.parse succeeds"],l={id:t,title:n,starterCode:e,solution:r,tests:s,hints:o};export{l as default,o as hints,t as id,r as solution,e as starterCode,s as tests,n as title};
