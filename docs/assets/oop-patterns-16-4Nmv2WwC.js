const t="13-oop-oop-patterns-16",n="Iterator",e=`class Counter {
  constructor(limit) { this.limit = limit; }
  [Symbol.iterator]() {
    let n = 0;
    const limit = this.limit;
    return {
      next() {
        return n < limit ? { value: n++, done: false } : { done: true };
      }
    };
  }
}
console.log([...new Counter(3)]);`,o=`class Counter {
  constructor(limit) { this.limit = limit; }
  [Symbol.iterator]() {
    let n = 0;
    const limit = this.limit;
    return {
      next() {
        return n < limit ? { value: n++, done: false } : { done: true };
      }
    };
  }
}
console.log([...new Counter(3)]);`,i=[{input:[],expected:"0,1,2"}],s=["Symbol.iterator makes iterable","next() returns value/done"],r={id:t,title:n,starterCode:e,solution:o,tests:i,hints:s};export{r as default,s as hints,t as id,o as solution,e as starterCode,i as tests,n as title};
