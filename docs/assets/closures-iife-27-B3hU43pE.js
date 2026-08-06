const n="06-functions-closures-iife-27",t="Counter Object Pattern",e=`function createCounterObj() {
  let count = 0;
  return {
    count: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0)
  };
}
const c = createCounterObj();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.count());
c.reset();
console.log(c.count());`,c=`function createCounterObj() {
  let count = 0;
  return {
    count: () => count,
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0)
  };
}
const c = createCounterObj();
c.increment();
c.increment();
c.increment();
c.decrement();
console.log(c.count());
c.reset();
console.log(c.count());`,o=[{input:[],expected:`3
0`}],r=["Object with methods","Private count"],s={id:n,title:t,starterCode:e,solution:c,tests:o,hints:r};export{s as default,r as hints,n as id,c as solution,e as starterCode,o as tests,t as title};
