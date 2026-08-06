const e="08-objects-advanced-objects-12",o="Enumerable Configurable",n=`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false, configurable: false});
console.log(Object.keys(obj));
console.log(obj.hidden);`,t=`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false, configurable: false});
console.log(Object.keys(obj));
console.log(obj.hidden);`,s=[{input:[],expected:`[]
42`}],l=["Not enumerable","Still accessible"],c={id:e,title:o,starterCode:n,solution:t,tests:s,hints:l};export{c as default,l as hints,e as id,t as solution,n as starterCode,s as tests,o as title};
