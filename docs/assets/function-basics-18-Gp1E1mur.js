const e="06-functions-function-basics-18",n="Bind Method",t=`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
const person = {name: 'Alice'};
const greetAlice = greet.bind(person);
greetAlice('Hi');`,i=`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
const person = {name: 'Alice'};
const greetAlice = greet.bind(person);
greetAlice('Hi');`,s=[{input:[],expected:"Hi Alice"}],o=["bind() returns new function","Sets this permanently"],c={id:e,title:n,starterCode:t,solution:i,tests:s,hints:o};export{c as default,o as hints,e as id,i as solution,t as starterCode,s as tests,n as title};
