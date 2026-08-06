const t="13-oop-prototypes-this-10",e="Object.create",o=`const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,s=`const proto = { greet() { return 'hi'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,n=[{input:[],expected:"hi"}],r=["Object.create creates new object","Sets prototype to argument"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
