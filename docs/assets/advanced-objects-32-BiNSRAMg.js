const e="08-objects-advanced-objects-32",t="DefineProperty Enumerable",o=`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false});
console.log(Object.keys(obj));
console.log('hidden' in obj);`,n=`const obj = {};
Object.defineProperty(obj, 'hidden', {value: 42, enumerable: false});
console.log(Object.keys(obj));
console.log('hidden' in obj);`,s=[{input:[],expected:`[]
true`}],c=["Not in keys","But exists"],d={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{d as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
