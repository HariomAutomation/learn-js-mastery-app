const e="08-objects-advanced-objects-19",t="Prevent Extensions",n=`const obj = Object.preventExtensions({a: 1});
obj.b = 2;
console.log(obj.b);
console.log(Object.isExtensible(obj));`,o=`const obj = Object.preventExtensions({a: 1});
obj.b = 2;
console.log(obj.b);
console.log(Object.isExtensible(obj));`,s=[{input:[],expected:`undefined
false`}],c=["Cannot add properties","isExtensible returns false"],b={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{b as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
