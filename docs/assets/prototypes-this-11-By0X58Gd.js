const t="13-oop-prototypes-this-11",n="instanceof",o=`function Animal() {}
const a = new Animal();
console.log(a instanceof Animal);`,s=`function Animal() {}
const a = new Animal();
console.log(a instanceof Animal);`,e=[{input:[],expected:"true"}],i=["instanceof checks prototype chain","Returns boolean"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
