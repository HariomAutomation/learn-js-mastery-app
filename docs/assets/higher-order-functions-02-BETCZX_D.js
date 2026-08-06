const t="06-functions-higher-order-functions-02",n="Function As Return Value",e=`function createMultiplier(n) {
  return (x) => x * n;
}
const triple = createMultiplier(3);
console.log(triple(5));`,o=`function createMultiplier(n) {
  return (x) => x * n;
}
const triple = createMultiplier(3);
console.log(triple(5));`,r=[{input:[],expected:"15"}],i=["Return a function","Closure captures n"],s={id:t,title:n,starterCode:e,solution:o,tests:r,hints:i};export{s as default,i as hints,t as id,o as solution,e as starterCode,r as tests,n as title};
