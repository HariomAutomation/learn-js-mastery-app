const n="13-oop-classes-inheritance-03",s="Instance Methods",t=`class Dog {
  constructor(name) { this.name = name; }
  bark() {
    // TODO: return bark string
  }
}
const d = new Dog('Rex');
console.log(d.bark());`,e=`class Dog {
  constructor(name) { this.name = name; }
  bark() {
    return this.name + ' says woof';
  }
}
const d = new Dog('Rex');
console.log(d.bark());`,o=[{input:[],expected:"Rex says woof"}],a=["Methods are on the prototype","Use this to access instance"],c={id:n,title:s,starterCode:t,solution:e,tests:o,hints:a};export{c as default,a as hints,n as id,e as solution,t as starterCode,o as tests,s as title};
