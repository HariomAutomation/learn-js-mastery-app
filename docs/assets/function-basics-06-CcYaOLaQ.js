const t="06-functions-function-basics-06",n="Rest Parameters",o=`function sum(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));`,s=`function sum(...nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));`,e=[{input:[],expected:"10"}],c=["...args collects arguments","Use for...of to iterate"],u={id:t,title:n,starterCode:o,solution:s,tests:e,hints:c};export{u as default,c as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
