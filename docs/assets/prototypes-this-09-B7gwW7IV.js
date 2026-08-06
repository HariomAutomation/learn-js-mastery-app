const n="13-oop-prototypes-this-09",t="Prototype Methods",o=`function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};
const p = new Person('John');
console.log(p.greet());`,e=`function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return 'Hello ' + this.name;
};
const p = new Person('John');
console.log(p.greet());`,s=[{input:[],expected:"Hello John"}],r=["Methods go on prototype","Shared across instances"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:r};export{i as default,r as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
