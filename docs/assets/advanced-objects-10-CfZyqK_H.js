const o="08-objects-advanced-objects-10",t="Frozen vs Sealed",e=`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.c = 3;
console.log(obj.a);
console.log(obj.c);`,n=`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.c = 3;
console.log(obj.a);
console.log(obj.c);`,s=[{input:[],expected:`10
undefined`}],c=["Seal allows changes","Cannot add properties"],a={id:o,title:t,starterCode:e,solution:n,tests:s,hints:c};export{a as default,c as hints,o as id,n as solution,e as starterCode,s as tests,t as title};
