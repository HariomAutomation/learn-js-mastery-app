const t="13-oop-classes-inheritance-19",n="Symbol.iterator",e=`class Range {
  constructor(start, end) { this.start = start; this.end = end; }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}
console.log([...new Range(1, 3)]);`,s=`class Range {
  constructor(start, end) { this.start = start; this.end = end; }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}
console.log([...new Range(1, 3)]);`,r=[{input:[],expected:"1,2,3"}],o=["Symbol.iterator makes class iterable","Return object with next()"],a={id:t,title:n,starterCode:e,solution:s,tests:r,hints:o};export{a as default,o as hints,t as id,s as solution,e as starterCode,r as tests,n as title};
