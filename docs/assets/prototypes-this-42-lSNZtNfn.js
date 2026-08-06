const o="13-oop-prototypes-this-42",t="Instanceof",n=`function Dog() {}
const d = new Dog();
console.log(d instanceof Dog);`,s=`function Dog() {}
const d = new Dog();
console.log(d instanceof Dog);`,e=[{input:[],expected:"true"}],c=["instanceof checks prototype chain","Returns boolean"],i={id:o,title:t,starterCode:n,solution:s,tests:e,hints:c};export{i as default,c as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
