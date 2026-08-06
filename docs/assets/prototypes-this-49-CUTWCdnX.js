const t="13-oop-prototypes-this-49",n="This in Class",s=`class Counter {
  constructor() { this.count = 0; }
  increment() { this.count++; return this; }
}
const c = new Counter();
c.increment().increment();
console.log(c.count);`,o=`class Counter {
  constructor() { this.count = 0; }
  increment() { this.count++; return this; }
}
const c = new Counter();
c.increment().increment();
console.log(c.count);`,e=[{input:[],expected:"2"}],c=["Class methods use this","Return this for chaining"],i={id:t,title:n,starterCode:s,solution:o,tests:e,hints:c};export{i as default,c as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
