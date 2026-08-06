const e="13-oop-classes-inheritance-47",s="Mixin Pattern",n=`function Timestamped(Base) {
  return class extends Base {
    created = Date.now();
  };
}
class User { constructor(n) { this.name = n; } }
class TSUser extends Timestamped(User) {}
console.log(new TSUser('John').name);`,t=`function Timestamped(Base) {
  return class extends Base {
    created = Date.now();
  };
}
class User { constructor(n) { this.name = n; } }
class TSUser extends Timestamped(User) {}
console.log(new TSUser('John').name);`,a=[{input:[],expected:"John"}],o=["Mixin adds behavior","Returns extended class"],c={id:e,title:s,starterCode:n,solution:t,tests:a,hints:o};export{c as default,o as hints,e as id,t as solution,n as starterCode,a as tests,s as title};
