const e="13-oop-classes-inheritance-06",t="Super Call",n=`class Parent {
  greet() { return 'hello'; }
}
class Child extends Parent {
  greet() {
    return super.greet() + ' world';
  }
}
console.log(new Child().greet());`,s=`class Parent {
  greet() { return 'hello'; }
}
class Child extends Parent {
  greet() {
    return super.greet() + ' world';
  }
}
console.log(new Child().greet());`,r=[{input:[],expected:"hello world"}],l=["super.method() calls parent method","Can modify return value"],o={id:e,title:t,starterCode:n,solution:s,tests:r,hints:l};export{o as default,l as hints,e as id,s as solution,n as starterCode,r as tests,t as title};
