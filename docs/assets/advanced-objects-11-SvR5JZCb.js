const e="08-objects-advanced-objects-11",t="Object DefineProperty",n=`const obj = {};
Object.defineProperty(obj, 'x', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.x);`,o=`const obj = {};
Object.defineProperty(obj, 'x', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.x);`,s=[{input:[],expected:"42"}],r=["Full descriptor","All flags true"],c={id:e,title:t,starterCode:n,solution:o,tests:s,hints:r};export{c as default,r as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
