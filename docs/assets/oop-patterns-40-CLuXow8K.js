const t="13-oop-oop-patterns-40",e="Mixin Pattern",s=`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User { constructor(n) { this.name = n; } }
Object.assign(User.prototype, Serializable);
console.log(new User('X').serialize());`,n=`const Serializable = {
  serialize() { return JSON.stringify(this); }
};
class User { constructor(n) { this.name = n; } }
Object.assign(User.prototype, Serializable);
console.log(new User('X').serialize());`,i=[{input:[],expected:'{"name":"X"}'}],o=["Mixin adds methods to prototype","Object.assign merges"],r={id:t,title:e,starterCode:s,solution:n,tests:i,hints:o};export{r as default,o as hints,t as id,n as solution,s as starterCode,i as tests,e as title};
