const t="13-oop-classes-inheritance-20",o="toStringTag",e=`class Collection {
  get [Symbol.toStringTag]() { return 'Collection'; }
}
console.log(Object.prototype.toString.call(new Collection()));`,n=`class Collection {
  get [Symbol.toStringTag]() { return 'Collection'; }
}
console.log(Object.prototype.toString.call(new Collection()));`,l=[{input:[],expected:"[object Collection]"}],s=["Symbol.toStringTag sets type string","Used by Object.prototype.toString"],c={id:t,title:o,starterCode:e,solution:n,tests:l,hints:s};export{c as default,s as hints,t as id,n as solution,e as starterCode,l as tests,o as title};
