const e="08-objects-advanced-objects-33",t="DefineProperty Configurable",o=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, configurable: false});
try {
  delete obj.x;
} catch(e) {}
console.log(obj.x);`,n=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10, configurable: false});
try {
  delete obj.x;
} catch(e) {}
console.log(obj.x);`,s=[{input:[],expected:"10"}],c=["configurable: false","Cannot delete"],l={id:e,title:t,starterCode:o,solution:n,tests:s,hints:c};export{l as default,c as hints,e as id,n as solution,o as starterCode,s as tests,t as title};
