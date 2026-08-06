const n="06-functions-closures-iife-15",t="Counter Increment Decrement",c=`function createCounter(start = 0) {
  let count = start;
  return {
    inc: () => ++count,
    dec: () => --count,
    val: () => count
  };
}
const c = createCounter(10);
c.inc();
c.inc();
c.dec();
console.log(c.val());`,e=`function createCounter(start = 0) {
  let count = start;
  return {
    inc: () => ++count,
    dec: () => --count,
    val: () => count
  };
}
const c = createCounter(10);
c.inc();
c.inc();
c.dec();
console.log(c.val());`,o=[{input:[],expected:"11"}],s=["Start with parameter","Methods modify count"],r={id:n,title:t,starterCode:c,solution:e,tests:o,hints:s};export{r as default,s as hints,n as id,e as solution,c as starterCode,o as tests,t as title};
