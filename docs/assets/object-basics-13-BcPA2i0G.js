const t="08-objects-object-basics-13",o="Define Property",e=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10});
console.log(obj.x);`,s=`const obj = {};
Object.defineProperty(obj, 'x', {value: 10});
console.log(obj.x);`,n=[{input:[],expected:"10"}],c=["defineProperty adds property","With descriptor"],i={id:t,title:o,starterCode:e,solution:s,tests:n,hints:c};export{i as default,c as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
