const e="13-oop-oop-patterns-04",t="Factory",n=`function createUser(name, role) {
  return { name, role, greet() { return 'Hi ' + this.name; } };
}
const user = createUser('John', 'admin');
console.log(user.greet());`,o=`function createUser(name, role) {
  return { name, role, greet() { return 'Hi ' + this.name; } };
}
const user = createUser('John', 'admin');
console.log(user.greet());`,r=[{input:[],expected:"Hi John"}],s=["Factory returns new object","No need for new keyword"],c={id:e,title:t,starterCode:n,solution:o,tests:r,hints:s};export{c as default,s as hints,e as id,o as solution,n as starterCode,r as tests,t as title};
