const e="08-objects-advanced-objects-40",o="Freeze Practice",t=`const obj = Object.freeze({a: 1, b: 2});
obj.a = 10;
console.log(obj.a);
console.log(Object.isFrozen(obj));`,n=`const obj = Object.freeze({a: 1, b: 2});
obj.a = 10;
console.log(obj.a);
console.log(Object.isFrozen(obj));`,s=[{input:[],expected:`1
true`}],c=["Freeze prevents change","isFrozen check"],b={id:e,title:o,starterCode:t,solution:n,tests:s,hints:c};export{b as default,c as hints,e as id,n as solution,t as starterCode,s as tests,o as title};
