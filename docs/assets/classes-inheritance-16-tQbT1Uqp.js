const e="13-oop-classes-inheritance-16",t="Protected Pattern",n=`class Base {
  _internal() { return 'protected'; }
}
class Child extends Base {
  access() { return this._internal(); }
}
console.log(new Child().access());`,s=`class Base {
  _internal() { return 'protected'; }
}
class Child extends Base {
  access() { return this._internal(); }
}
console.log(new Child().access());`,c=[{input:[],expected:"protected"}],o=["_ prefix convention for protected","Not truly private in JS"],r={id:e,title:t,starterCode:n,solution:s,tests:c,hints:o};export{r as default,o as hints,e as id,s as solution,n as starterCode,c as tests,t as title};
