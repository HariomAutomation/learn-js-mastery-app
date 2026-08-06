const e="08-objects-advanced-objects-38",t="Descriptor Get Set",n=`const obj = {};
let _val = 0;
Object.defineProperty(obj, 'val', {
  get() { return _val; },
  set(v) { _val = v; },
  enumerable: true
});
obj.val = 42;
console.log(obj.val);`,o=`const obj = {};
let _val = 0;
Object.defineProperty(obj, 'val', {
  get() { return _val; },
  set(v) { _val = v; },
  enumerable: true
});
obj.val = 42;
console.log(obj.val);`,s=[{input:[],expected:"42"}],l=["Define getter/setter","External variable"],a={id:e,title:t,starterCode:n,solution:o,tests:s,hints:l};export{a as default,l as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
