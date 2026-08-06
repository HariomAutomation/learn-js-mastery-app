const n="13-oop-classes-inheritance-24",e="Field Declaration",s=`class User {
  name = 'John';
  age = 30;
}
const u = new User();
console.log(u.name + ' ' + u.age);`,t=`class User {
  name = 'John';
  age = 30;
}
const u = new User();
console.log(u.name + ' ' + u.age);`,o=[{input:[],expected:"John 30"}],a=["Fields are initialized in class body","No need for constructor"],c={id:n,title:e,starterCode:s,solution:t,tests:o,hints:a};export{c as default,a as hints,n as id,t as solution,s as starterCode,o as tests,e as title};
