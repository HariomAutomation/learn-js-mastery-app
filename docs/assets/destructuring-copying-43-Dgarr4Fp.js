const t="08-objects-destructuring-copying-43",s="Rest Params",n=`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,e=`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`,o=[{input:[],expected:"10"}],u=["Rest params collect args","Use reduce"],c={id:t,title:s,starterCode:n,solution:e,tests:o,hints:u};export{c as default,u as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
