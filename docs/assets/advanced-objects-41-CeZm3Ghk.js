const e="08-objects-advanced-objects-41",t="PreventExtensions Check",o=`const obj = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj));
obj.b = 2;
console.log(obj.b);`,n=`const obj = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj));
obj.b = 2;
console.log(obj.b);`,s=[{input:[],expected:`false
undefined`}],c=["Not extensible","Cannot add properties"],b={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{b as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
