const t="13-oop-classes-inheritance-42",n="Private Field",e=`class Counter {
  #count = 0;
  increment() { this.#count++; }
  getCount() { return this.#count; }
}
const c = new Counter();
c.increment(); c.increment();
console.log(c.getCount());`,c=`class Counter {
  #count = 0;
  increment() { this.#count++; }
  getCount() { return this.#count; }
}
const c = new Counter();
c.increment(); c.increment();
console.log(c.getCount());`,o=[{input:[],expected:"2"}],s=["# creates private field","Access via method"],i={id:t,title:n,starterCode:e,solution:c,tests:o,hints:s};export{i as default,s as hints,t as id,c as solution,e as starterCode,o as tests,n as title};
