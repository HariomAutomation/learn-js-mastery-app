const n="13-oop-classes-inheritance-13",t="Static Factory",e=`class User {
  constructor(name) { this.name = name; }
  static create(name) {
    return new User(name);
  }
}
const u = User.create('John');
console.log(u.name);`,s=`class User {
  constructor(name) { this.name = name; }
  static create(name) {
    return new User(name);
  }
}
const u = User.create('John');
console.log(u.name);`,a=[{input:[],expected:"John"}],c=["Static factory creates instances","Alternative to new"],o={id:n,title:t,starterCode:e,solution:s,tests:a,hints:c};export{o as default,c as hints,n as id,s as solution,e as starterCode,a as tests,t as title};
