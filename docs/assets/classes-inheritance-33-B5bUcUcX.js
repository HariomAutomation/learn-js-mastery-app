const t="13-oop-classes-inheritance-33",n="Static Property",o=`class Counter {
  static count = 0;
  constructor() { Counter.count++; }
}
new Counter(); new Counter();
console.log(Counter.count);`,e=`class Counter {
  static count = 0;
  constructor() { Counter.count++; }
}
new Counter(); new Counter();
console.log(Counter.count);`,s=[{input:[],expected:"2"}],c=["Static property shared across instances","Increment in constructor"],r={id:t,title:n,starterCode:o,solution:e,tests:s,hints:c};export{r as default,c as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
