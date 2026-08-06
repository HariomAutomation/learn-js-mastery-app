const t="08-objects-advanced-objects-05",e="Property Descriptors",o=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, writable: false});
obj.x = 20;
console.log(obj.x);`,s=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, writable: false});
obj.x = 20;
console.log(obj.x);`,n=[{input:[],expected:"10"}],c=["writable prevents change","Assignment fails"],a={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
