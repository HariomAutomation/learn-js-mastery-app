const t="08-objects-advanced-objects-09",e="Immutable Object",o=`const obj = Object.freeze({a: 1, b: {c: 2}});
obj.a = 10;
console.log(obj.a);`,s=`const obj = Object.freeze({a: 1, b: {c: 2}});
obj.a = 10;
console.log(obj.a);`,n=[{input:[],expected:"1"}],c=["Freeze prevents mutation","Top level only"],a={id:t,title:e,starterCode:o,solution:s,tests:n,hints:c};export{a as default,c as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
