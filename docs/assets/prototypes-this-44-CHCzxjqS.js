const t="13-oop-prototypes-this-44",e="SetPrototypeOf",o=`const parent = { type: 'parent' };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.type);`,n=`const parent = { type: 'parent' };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.type);`,s=[{input:[],expected:"parent"}],p=["setPrototypeOf changes prototype","child inherits from parent"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:p};export{c as default,p as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
