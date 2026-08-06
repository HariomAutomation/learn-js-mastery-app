const t="13-oop-prototypes-this-07",e="Apply Method",n=`function greet(greeting, punct) {
  console.log(greeting + ' ' + this.name + punct);
}
greet.apply({ name: 'John' }, ['Hello', '!']);`,o=`function greet(greeting, punct) {
  console.log(greeting + ' ' + this.name + punct);
}
greet.apply({ name: 'John' }, ['Hello', '!']);`,s=[{input:[],expected:"Hello John!"}],a=["apply takes args as array","Same as call but with array"],l={id:t,title:e,starterCode:n,solution:o,tests:s,hints:a};export{l as default,a as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
