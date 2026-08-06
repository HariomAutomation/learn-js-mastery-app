const o="08-objects-advanced-objects-18",e="Seal",t=`const obj = Object.seal({a: 1, b: 2});
del obj.a;
console.log(obj.a);
obj.c = 3;
console.log(Object.keys(obj));`,s=`const obj = Object.seal({a: 1, b: 2});
del obj.a;
console.log(obj.a);
obj.c = 3;
console.log(Object.keys(obj));`,n=[{input:[],expected:`1
[ 'a', 'b' ]`}],c=["Seal prevents delete","Cannot add properties"],a={id:o,title:e,starterCode:t,solution:s,tests:n,hints:c};export{a as default,c as hints,o as id,s as solution,t as starterCode,n as tests,e as title};
