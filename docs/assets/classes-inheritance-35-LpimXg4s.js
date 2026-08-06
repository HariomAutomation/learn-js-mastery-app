const s="13-oop-classes-inheritance-35",n="Super Constructor",t=`class Base {
  constructor(x) { this.x = x; }
}
class Child extends Base {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
const c = new Child(1, 2);
console.log(c.x + c.y);`,e=`class Base {
  constructor(x) { this.x = x; }
}
class Child extends Base {
  constructor(x, y) {
    super(x);
    this.y = y;
  }
}
const c = new Child(1, 2);
console.log(c.x + c.y);`,c=[{input:[],expected:"3"}],o=["super() must be called first","Then set own properties"],r={id:s,title:n,starterCode:t,solution:e,tests:c,hints:o};export{r as default,o as hints,s as id,e as solution,t as starterCode,c as tests,n as title};
