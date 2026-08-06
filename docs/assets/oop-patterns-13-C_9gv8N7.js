const n="13-oop-oop-patterns-13",t="Proxy",o=`const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'not found';
  }
};
const proxy = new Proxy({ name: 'John' }, handler);
console.log(proxy.name + ' ' + proxy.age);`,e=`const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'not found';
  }
};
const proxy = new Proxy({ name: 'John' }, handler);
console.log(proxy.name + ' ' + proxy.age);`,r=[{input:[],expected:"John not found"}],s=["Proxy intercepts operations","handler defines traps"],p={id:n,title:t,starterCode:o,solution:e,tests:r,hints:s};export{p as default,s as hints,n as id,e as solution,o as starterCode,r as tests,t as title};
