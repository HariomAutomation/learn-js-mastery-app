const t="13-oop-prototypes-this-37",o="Object Create",e=`const proto = { greet() { return 'hello'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,s=`const proto = { greet() { return 'hello'; } };
const obj = Object.create(proto);
console.log(obj.greet());`,r=[{input:[],expected:"hello"}],n=["Object.create creates with prototype","Inherits from proto"],c={id:t,title:o,starterCode:e,solution:s,tests:r,hints:n};export{c as default,n as hints,t as id,s as solution,e as starterCode,r as tests,o as title};
