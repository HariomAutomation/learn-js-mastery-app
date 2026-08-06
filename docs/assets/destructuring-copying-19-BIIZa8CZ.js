const o="08-objects-destructuring-copying-19",t="Copy Practice",s=`const obj = {a: 1, b: 2};
const copy1 = {...obj};
const copy2 = Object.assign({}, obj);
console.log(copy1.a === copy2.a);`,c=`const obj = {a: 1, b: 2};
const copy1 = {...obj};
const copy2 = Object.assign({}, obj);
console.log(copy1.a === copy2.a);`,n=[{input:[],expected:"true"}],e=["Both create shallow copy","Same result"],a={id:o,title:t,starterCode:s,solution:c,tests:n,hints:e};export{a as default,e as hints,o as id,c as solution,s as starterCode,n as tests,t as title};
