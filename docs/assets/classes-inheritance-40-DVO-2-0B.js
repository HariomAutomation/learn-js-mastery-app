const n="13-oop-classes-inheritance-40",e="Extends Super",t=`class Animal {
  constructor(type) { this.type = type; }
}
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
}
console.log(new Dog('Rex').type + ' ' + new Dog('Rex').name);`,s=`class Animal {
  constructor(type) { this.type = type; }
}
class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
}
console.log(new Dog('Rex').type + ' ' + new Dog('Rex').name);`,o=[{input:[],expected:"dog Rex"}],c=["super() calls parent constructor","Set own properties after super"],a={id:n,title:e,starterCode:t,solution:s,tests:o,hints:c};export{a as default,c as hints,n as id,s as solution,t as starterCode,o as tests,e as title};
