const t="13-oop-oop-patterns-42",n="Proxy Pattern",o=`const handler = {
  get(t, p) { return p in t ? t[p] : 'default'; }
};
const proxy = new Proxy({ x: 1 }, handler);
console.log(proxy.x + ' ' + proxy.y);`,e=`const handler = {
  get(t, p) { return p in t ? t[p] : 'default'; }
};
const proxy = new Proxy({ x: 1 }, handler);
console.log(proxy.x + ' ' + proxy.y);`,r=[{input:[],expected:"1 default"}],s=["Proxy intercepts operations","handler defines traps"],p={id:t,title:n,starterCode:o,solution:e,tests:r,hints:s};export{p as default,s as hints,t as id,e as solution,o as starterCode,r as tests,n as title};
