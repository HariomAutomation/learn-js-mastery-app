const t="08-objects-advanced-objects-23",n="ToString Override",e=`const obj = {
  name: 'Alice',
  toString() { return this.name; }
};
console.log(String(obj));`,o=`const obj = {
  name: 'Alice',
  toString() { return this.name; }
};
console.log(String(obj));`,s=[{input:[],expected:"Alice"}],i=["Override toString","String conversion"],c={id:t,title:n,starterCode:e,solution:o,tests:s,hints:i};export{c as default,i as hints,t as id,o as solution,e as starterCode,s as tests,n as title};
