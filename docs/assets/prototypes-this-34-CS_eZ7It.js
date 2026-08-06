const s="13-oop-prototypes-this-34",t="This in Method",n=`const person = {
  name: 'Alice',
  sayHi() { return 'Hi ' + this.name; }
};
console.log(person.sayHi());`,o=`const person = {
  name: 'Alice',
  sayHi() { return 'Hi ' + this.name; }
};
console.log(person.sayHi());`,e=[{input:[],expected:"Hi Alice"}],i=["this is the calling object","person is calling sayHi"],c={id:s,title:t,starterCode:n,solution:o,tests:e,hints:i};export{c as default,i as hints,s as id,o as solution,n as starterCode,e as tests,t as title};
