const e="02-data-types-reference-types-typeof-41",t="WeakMap holds object keys",o=`const wm = new WeakMap();
const obj = {};
wm.set(obj, 42);
console.log();`,s=`const wm = new WeakMap();
const obj = {};
wm.set(obj, 42);
console.log(wm.get(obj));`,n=[{input:[],expected:"42"}],c=["WeakMap keys must be objects","It allows garbage collection"],a={id:e,title:t,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
