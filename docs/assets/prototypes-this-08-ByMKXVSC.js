const n="13-oop-prototypes-this-08",t="Bind Method",o=`function greet() {
  console.log(this.name);
}
const bound = greet.bind({ name: 'John' });
bound();`,e=`function greet() {
  console.log(this.name);
}
const bound = greet.bind({ name: 'John' });
bound();`,s=[{input:[],expected:"John"}],i=["bind returns new function","this is permanently set"],c={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
