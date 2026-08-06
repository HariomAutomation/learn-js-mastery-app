const t="13-oop-prototypes-this-20",o="Prototype Pollution",e=`// Warning: prototype pollution is a security risk
const obj = {};
Object.prototype.polluted = 'yes';
console.log({}.polluted);`,s=`// Warning: prototype pollution is a security risk
const obj = {};
Object.prototype.polluted = 'yes';
console.log({}.polluted);`,n=[{input:[],expected:"yes"}],i=["Modifying Object.prototype affects all","Security vulnerability"],l={id:t,title:o,starterCode:e,solution:s,tests:n,hints:i};export{l as default,i as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
