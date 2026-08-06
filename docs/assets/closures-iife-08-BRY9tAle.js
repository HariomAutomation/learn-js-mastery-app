const n="06-functions-closures-iife-08",t="Counter Closure",e=`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const c = createCounter();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.getCount());`,c=`function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const c = createCounter();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.getCount());`,o=[{input:[],expected:"2"}],r=["Private count variable","Methods modify it"],u={id:n,title:t,starterCode:e,solution:c,tests:o,hints:r};export{u as default,r as hints,n as id,c as solution,e as starterCode,o as tests,t as title};
