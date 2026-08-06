const n="13-oop-prototypes-this-16",t="This in Constructor",o=`function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name);`,e=`function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name);`,s=[{input:[],expected:"John"}],c=["new creates empty object","this refers to new object"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
