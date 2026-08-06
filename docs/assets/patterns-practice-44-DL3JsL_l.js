const t="05-loops-patterns-practice-44",e="Power Calculation",n=`function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));`,s=`function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 10));`,o=[{input:[],expected:"1024"}],r=["Multiply base exp times","Start with 1"],l={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{l as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
