const s="13-oop-classes-inheritance-27",e="Inheritance Chain",t=`class A { foo() { return 'A'; } }
class B extends A { foo() { return 'B'; } }
class C extends B {}
console.log(new C().foo());`,n=`class A { foo() { return 'A'; } }
class B extends A { foo() { return 'B'; } }
class C extends B {}
console.log(new C().foo());`,o=[{input:[],expected:"B"}],c=["C inherits from B","B overrides foo"],r={id:s,title:e,starterCode:t,solution:n,tests:o,hints:c};export{r as default,c as hints,s as id,n as solution,t as starterCode,o as tests,e as title};
