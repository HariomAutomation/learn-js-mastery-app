const s="13-oop-classes-inheritance-46",n="Inheritance Chain",t=`class A { type() { return 'A'; } }
class B extends A {}
class C extends B {}
const c = new C();
console.log(c.type() + ' ' + (c instanceof A));`,e=`class A { type() { return 'A'; } }
class B extends A {}
class C extends B {}
const c = new C();
console.log(c.type() + ' ' + (c instanceof A));`,c=[{input:[],expected:"A true"}],o=["C inherits from B inherits from A","instanceof checks chain"],i={id:s,title:n,starterCode:t,solution:e,tests:c,hints:o};export{i as default,o as hints,s as id,e as solution,t as starterCode,c as tests,n as title};
