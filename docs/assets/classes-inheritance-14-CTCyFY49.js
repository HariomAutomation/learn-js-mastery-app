const n="13-oop-classes-inheritance-14",s="instanceof",t=`class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);`,o=`class Animal {}
class Dog extends Animal {}
const d = new Dog();
console.log(d instanceof Dog);`,e=[{input:[],expected:"true"}],c=["instanceof checks prototype chain","Returns boolean"],a={id:n,title:s,starterCode:t,solution:o,tests:e,hints:c};export{a as default,c as hints,n as id,o as solution,t as starterCode,e as tests,s as title};
