const n="13-oop-classes-inheritance-02",s="Constructor",t=`class Person {
  constructor(name) {
    // TODO: set name
  }
}
const p = new Person('John');
console.log(p.name);`,o=`class Person {
  constructor(name) {
    this.name = name;
  }
}
const p = new Person('John');
console.log(p.name);`,e=[{input:[],expected:"John"}],c=["constructor runs on new","this refers to new instance"],r={id:n,title:s,starterCode:t,solution:o,tests:e,hints:c};export{r as default,c as hints,n as id,o as solution,t as starterCode,e as tests,s as title};
