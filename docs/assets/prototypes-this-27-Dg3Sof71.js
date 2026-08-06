const o="13-oop-prototypes-this-27",t="__proto__ vs prototype",n=`function Foo() {}
const f = new Foo();
console.log(f.__proto__ === Foo.prototype);`,s=`function Foo() {}
const f = new Foo();
console.log(f.__proto__ === Foo.prototype);`,e=[{input:[],expected:"true"}],p=["__proto__ is instance reference","prototype is on constructor"],r={id:o,title:t,starterCode:n,solution:s,tests:e,hints:p};export{r as default,p as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
