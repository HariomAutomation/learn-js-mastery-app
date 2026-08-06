const t="13-oop-prototypes-this-06",e="Call Method",n=`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
greet.call({ name: 'John' }, 'Hello');`,o=`function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}
greet.call({ name: 'John' }, 'Hello');`,s=[{input:[],expected:"Hello John"}],i=["call sets this and passes args","First arg is this context"],l={id:t,title:e,starterCode:n,solution:o,tests:s,hints:i};export{l as default,i as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
