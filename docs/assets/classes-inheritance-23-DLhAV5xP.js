const e="13-oop-classes-inheritance-23",t="Private Method",s=`class Foo {
  #secret() { return 42; }
  reveal() { return this.#secret(); }
}
console.log(new Foo().reveal());`,n=`class Foo {
  #secret() { return 42; }
  reveal() { return this.#secret(); }
}
console.log(new Foo().reveal());`,o=[{input:[],expected:"42"}],r=["# before method name makes it private","Can only call from class"],c={id:e,title:t,starterCode:s,solution:n,tests:o,hints:r};export{c as default,r as hints,e as id,n as solution,s as starterCode,o as tests,t as title};
