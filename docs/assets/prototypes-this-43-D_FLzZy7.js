const t="13-oop-prototypes-this-43",n="This Lost Fix",o=`const obj = {
  name: 'lost',
  getName() { return this.name; }
};
const fn = obj.getName.bind(obj);
console.log(fn());`,s=`const obj = {
  name: 'lost',
  getName() { return this.name; }
};
const fn = obj.getName.bind(obj);
console.log(fn());`,e=[{input:[],expected:"lost"}],i=["bind fixes lost this","Returns bound function"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
