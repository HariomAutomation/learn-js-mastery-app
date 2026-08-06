const o="08-objects-advanced-objects-39",t="Seal Practice",n=`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.b = 20;
obj.c = 30;
console.log(obj.a, obj.b, obj.c);`,e=`const obj = Object.seal({a: 1, b: 2});
obj.a = 10;
obj.b = 20;
obj.c = 30;
console.log(obj.a, obj.b, obj.c);`,s=[{input:[],expected:"10 20 undefined"}],c=["Seal allows changes","Cannot add c"],b={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{b as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
