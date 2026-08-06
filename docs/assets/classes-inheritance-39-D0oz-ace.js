const e="13-oop-classes-inheritance-39",t="Static Factory Method",n=`class User {
  constructor(name) { this.name = name; }
  static create(name) { return new User(name); }
}
const u = User.create('Admin');
console.log(u.name);`,s=`class User {
  constructor(name) { this.name = name; }
  static create(name) { return new User(name); }
}
const u = User.create('Admin');
console.log(u.name);`,a=[{input:[],expected:"Admin"}],c=["Static method creates instance","Called on class, not instance"],o={id:e,title:t,starterCode:n,solution:s,tests:a,hints:c};export{o as default,c as hints,e as id,s as solution,n as starterCode,a as tests,t as title};
