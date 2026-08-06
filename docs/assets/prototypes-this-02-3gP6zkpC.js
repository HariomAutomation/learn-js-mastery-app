const t="13-oop-prototypes-this-02",o="__proto__ Property",e=`const obj = { a: 1 };
const child = Object.create(obj);
console.log(child.__proto__ === obj);`,s=`const obj = { a: 1 };
const child = Object.create(obj);
console.log(child.__proto__ === obj);`,c=[{input:[],expected:"true"}],n=["__proto__ is reference to prototype","Object.create sets prototype"],r={id:t,title:o,starterCode:e,solution:s,tests:c,hints:n};export{r as default,n as hints,t as id,s as solution,e as starterCode,c as tests,o as title};
