const t="05-loops-for-of-for-in-15",n="For...Of With Arguments",o=`function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));`,s=`function sum() {
  let total = 0;
  for (const num of arguments) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3));`,e=[{input:[],expected:"6"}],r=["arguments is array-like","Use for...of on it"],u={id:t,title:n,starterCode:o,solution:s,tests:e,hints:r};export{u as default,r as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
