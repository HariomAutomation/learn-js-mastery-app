const t="13-oop-classes-inheritance-41",e="Method Override",n=`class Base {
  toString() { return 'Base'; }
}
class Child extends Base {
  toString() { return 'Child'; }
}
console.log(new Child().toString());`,s=`class Base {
  toString() { return 'Base'; }
}
class Child extends Base {
  toString() { return 'Child'; }
}
console.log(new Child().toString());`,o=[{input:[],expected:"Child"}],i=["Override by same method name","Child version is called"],r={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{r as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
