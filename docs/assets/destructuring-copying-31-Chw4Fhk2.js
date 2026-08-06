const o="08-objects-destructuring-copying-31",t="Copy with Assign",n=`const obj = {a: 1, b: 2};
const copy = Object.assign({}, obj);
copy.a = 10;
console.log(obj.a);
console.log(copy.a);`,s=`const obj = {a: 1, b: 2};
const copy = Object.assign({}, obj);
copy.a = 10;
console.log(obj.a);
console.log(copy.a);`,c=[{input:[],expected:`1
10`}],e=["Object.assign creates clone","Independent copy"],i={id:o,title:t,starterCode:n,solution:s,tests:c,hints:e};export{i as default,e as hints,o as id,s as solution,n as starterCode,c as tests,t as title};
