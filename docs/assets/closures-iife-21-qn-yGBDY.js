const n="06-functions-closures-iife-21",t="Counter Reset",e=`function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
}
const c = makeCounter();
c.increment();
c.increment();
c.increment();
console.log(c.getCount());
c.reset();
console.log(c.getCount());`,o=`function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
}
const c = makeCounter();
c.increment();
c.increment();
c.increment();
console.log(c.getCount());
c.reset();
console.log(c.getCount());`,c=[{input:[],expected:`3
0`}],s=["reset sets count to 0","Methods share closure"],u={id:n,title:t,starterCode:e,solution:o,tests:c,hints:s};export{u as default,s as hints,n as id,o as solution,e as starterCode,c as tests,t as title};
