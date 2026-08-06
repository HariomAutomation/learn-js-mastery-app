const t="13-oop-prototypes-this-19",o="setPrototypeOf",s=`const obj = { a: 1 };
const child = {};
Object.setPrototypeOf(child, obj);
console.log(child.a);`,e=`const obj = { a: 1 };
const child = {};
Object.setPrototypeOf(child, obj);
console.log(child.a);`,n=[{input:[],expected:"1"}],c=["setPrototypeOf changes prototype","Child can access parent properties"],i={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{i as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
