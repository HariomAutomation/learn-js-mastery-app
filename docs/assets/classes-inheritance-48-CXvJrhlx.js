const e="13-oop-classes-inheritance-48",t="Symbol.iterator",n=`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,s=`class Range {
  constructor(s, e) { this.s = s; this.e = e; }
  [Symbol.iterator]() {
    let n = this.s;
    const e = this.e;
    return { next: () => n <= e ? { value: n++, done: false } : { done: true } };
  }
}
console.log([...new Range(1, 3)]);`,o=[{input:[],expected:"1,2,3"}],r=["Symbol.iterator makes iterable","next() returns value/done"],a={id:e,title:t,starterCode:n,solution:s,tests:o,hints:r};export{a as default,r as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
