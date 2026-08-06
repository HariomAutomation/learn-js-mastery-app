const t="08-objects-destructuring-copying-29",e="structuredClone Advanced",o=`const obj = {arr: [1, [2, 3]], date: new Date('2024-01-01'), regex: /test/gi};
const copy = structuredClone(obj);
copy.arr[1].push(4);
console.log(obj.arr[1]);`,n=`const obj = {arr: [1, [2, 3]], date: new Date('2024-01-01'), regex: /test/gi};
const copy = structuredClone(obj);
copy.arr[1].push(4);
console.log(obj.arr[1]);`,s=[{input:[],expected:"[ 2, 3 ]"}],r=["Deep clone even nested arrays","Original untouched"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:r};export{c as default,r as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
