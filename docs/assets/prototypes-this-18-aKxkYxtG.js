const t="13-oop-prototypes-this-18",o="getPrototypeOf",e=`const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype);`,s=`const obj = {};
const proto = Object.getPrototypeOf(obj);
console.log(proto === Object.prototype);`,p=[{input:[],expected:"true"}],n=["getPrototypeOf returns prototype","Compare with Object.prototype"],r={id:t,title:o,starterCode:e,solution:s,tests:p,hints:n};export{r as default,n as hints,t as id,s as solution,e as starterCode,p as tests,o as title};
