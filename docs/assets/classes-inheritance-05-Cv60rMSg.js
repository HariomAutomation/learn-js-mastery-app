const n="13-oop-classes-inheritance-05",e="Extends",s=`class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  // TODO: call super
}
const d = new Dog('Rex');
console.log(d.name);`,t=`class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
const d = new Dog('Rex');
console.log(d.name);`,o=[{input:[],expected:"Rex"}],c=["extends creates inheritance","super() calls parent constructor"],a={id:n,title:e,starterCode:s,solution:t,tests:o,hints:c};export{a as default,c as hints,n as id,t as solution,s as starterCode,o as tests,e as title};
