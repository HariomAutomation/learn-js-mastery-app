const o="08-objects-object-basics-32",t="Practice 3",s=`const obj1 = {a: 1};
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
console.log(obj2.a);`,n=`const obj1 = {a: 1};
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a);
console.log(obj2.a);`,c=[{input:[],expected:`1
2`}],e=["Object.assign creates clone","Changes don't affect original"],a={id:o,title:t,starterCode:s,solution:n,tests:c,hints:e};export{a as default,e as hints,o as id,n as solution,s as starterCode,c as tests,t as title};
