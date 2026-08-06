const e="08-objects-advanced-objects-43",t="IsExtensible",s=`const obj1 = {a: 1};
const obj2 = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj1));
console.log(Object.isExtensible(obj2));`,o=`const obj1 = {a: 1};
const obj2 = Object.preventExtensions({a: 1});
console.log(Object.isExtensible(obj1));
console.log(Object.isExtensible(obj2));`,n=[{input:[],expected:`true
false`}],c=["isExtensible check","Normal vs prevented"],b={id:e,title:t,starterCode:s,solution:o,tests:n,hints:c};export{b as default,c as hints,e as id,o as solution,s as starterCode,n as tests,t as title};
