const e="08-objects-advanced-objects-21",t="Descriptor Enumerate",o=`const obj = {};
Object.defineProperty(obj, 'a', {value: 1, enumerable: true});
Object.defineProperty(obj, 'b', {value: 2, enumerable: false});
console.log(Object.keys(obj));
console.log(obj.b);`,n=`const obj = {};
Object.defineProperty(obj, 'a', {value: 1, enumerable: true});
Object.defineProperty(obj, 'b', {value: 2, enumerable: false});
console.log(Object.keys(obj));
console.log(obj.b);`,s=[{input:[],expected:`[ 'a' ]
2`}],b=["Enumerable affects keys","Still accessible"],c={id:e,title:t,starterCode:o,solution:n,tests:s,hints:b};export{c as default,b as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
