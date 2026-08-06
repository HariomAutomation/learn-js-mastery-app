const e="13-oop-oop-patterns-11",t="Mixin",n=`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User {
  constructor(name) { this.name = name; }
}
Object.assign(User.prototype, Serializable);
console.log(new User('John').serialize());`,s=`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User {
  constructor(name) { this.name = name; }
}
Object.assign(User.prototype, Serializable);
console.log(new User('John').serialize());`,o=[{input:[],expected:'{"name":"John"}'}],i=["Mixin is object with methods","Object.assign adds to prototype"],r={id:e,title:t,starterCode:n,solution:s,tests:o,hints:i};export{r as default,i as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
