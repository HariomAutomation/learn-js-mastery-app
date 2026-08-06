const n="04-control-flow-early-return-11",t="Error handling on invalid input",r=`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON(123));`,s=`function parseJSON(str) {
  if (typeof str !== 'string') return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
console.log(parseJSON(123));`,e=[{input:[],expected:"null"}],o=["123 is not a string","Guard clause returns null"],l={id:n,title:t,starterCode:r,solution:s,tests:e,hints:o};export{l as default,o as hints,n as id,s as solution,r as starterCode,e as tests,t as title};
