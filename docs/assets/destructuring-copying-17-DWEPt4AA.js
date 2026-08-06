const o="08-objects-destructuring-copying-17",t="Deep Copy Pattern",n=`const obj = {arr: [1, 2], nested: {x: 10}};
const copy = structuredClone(obj);
copy.arr.push(3);
copy.nested.x = 99;
console.log(obj.arr);
console.log(obj.nested.x);`,e=`const obj = {arr: [1, 2], nested: {x: 10}};
const copy = structuredClone(obj);
copy.arr.push(3);
copy.nested.x = 99;
console.log(obj.arr);
console.log(obj.nested.x);`,s=[{input:[],expected:`[ 1, 2 ]
10`}],c=["Deep copy independent","Original untouched"],r={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{r as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
