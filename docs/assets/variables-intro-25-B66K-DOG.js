const t="01-variables-declarations-variables-intro-25",s="Rest parameters sum",n=`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4))`,e=`function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
console.log(sum(1, 2, 3, 4))`,o=[{input:[],expected:"10"}],r=["... collects args into array"],a={id:t,title:s,starterCode:n,solution:e,tests:o,hints:r};export{a as default,r as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
