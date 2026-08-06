const e="08-objects-destructuring-copying-45",t="Deep Freeze",o=`function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).filter(v => typeof v === 'object' && v !== null).forEach(deepFreeze);
  return obj;
}
const obj = deepFreeze({a: 1, b: {c: 2}});
obj.b.c = 99;
console.log(obj.b.c);`,n=`function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).filter(v => typeof v === 'object' && v !== null).forEach(deepFreeze);
  return obj;
}
const obj = deepFreeze({a: 1, b: {c: 2}});
obj.b.c = 99;
console.log(obj.b.c);`,c=[{input:[],expected:"2"}],b=["Recursive freeze","Deep immutability"],r={id:e,title:t,starterCode:o,solution:n,tests:c,hints:b};export{r as default,b as hints,e as id,n as solution,o as starterCode,c as tests,t as title};
