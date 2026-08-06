const t="13-oop-prototypes-this-46",e="This in Constructor",n=`function User(name) { this.name = name; }
const u = new User('Charlie');
console.log(u.name);`,s=`function User(name) { this.name = name; }
const u = new User('Charlie');
console.log(u.name);`,o=[{input:[],expected:"Charlie"}],i=["new creates empty object","this is the new object"],c={id:t,title:e,starterCode:n,solution:s,tests:o,hints:i};export{c as default,i as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
