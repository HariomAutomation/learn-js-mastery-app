const t="06-functions-function-basics-16",n="Call Method",e=`function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const person = {name: 'Bob'};
greet.call(person, 'Hello');`,o=`function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const person = {name: 'Bob'};
greet.call(person, 'Hello');`,s=[{input:[],expected:"Hello, Bob"}],i=["call() sets this","First arg is context"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
