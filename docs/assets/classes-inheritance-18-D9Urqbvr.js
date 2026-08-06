const e="13-oop-classes-inheritance-18",s="Mixin Pattern",n=`function Timestamped(Base) {
  return class extends Base {
    createdAt = new Date();
  }
}
class User { constructor(name) { this.name = name; } }
class TimestampedUser extends Timestamped(User) {}
console.log(new TimestampedUser('John').name);`,t=`function Timestamped(Base) {
  return class extends Base {
    createdAt = new Date();
  }
}
class User { constructor(name) { this.name = name; } }
class TimestampedUser extends Timestamped(User) {}
console.log(new TimestampedUser('John').name);`,a=[{input:[],expected:"John"}],o=["Mixin is a function returning class","Extends base class"],c={id:e,title:s,starterCode:n,solution:t,tests:a,hints:o};export{c as default,o as hints,e as id,t as solution,n as starterCode,a as tests,s as title};
