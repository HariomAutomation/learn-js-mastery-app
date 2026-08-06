const t="13-oop-prototypes-this-35",e="Call Apply Bind",n=`function greet(greeting) { return greeting + ' ' + this.name; }
const ctx = { name: 'Bob' };
console.log(greet.call(ctx, 'Hey'));`,s=`function greet(greeting) { return greeting + ' ' + this.name; }
const ctx = { name: 'Bob' };
console.log(greet.call(ctx, 'Hey'));`,o=[{input:[],expected:"Hey Bob"}],i=["call sets this and passes args","First arg is context"],c={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
