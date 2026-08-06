const s="13-oop-classes-inheritance-29",t="Class vs Function",o=`// class is syntactic sugar for function constructors
class Foo {}
function Bar() {}
console.log(typeof Foo);`,n=`// class is syntactic sugar for function constructors
class Foo {}
function Bar() {}
console.log(typeof Foo);`,c=[{input:[],expected:"function"}],e=["class is actually a function","Both create constructors"],a={id:s,title:t,starterCode:o,solution:n,tests:c,hints:e};export{a as default,e as hints,s as id,n as solution,o as starterCode,c as tests,t as title};
