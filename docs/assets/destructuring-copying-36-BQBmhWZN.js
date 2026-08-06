const o="08-objects-destructuring-copying-36",t="Shallow Copy Demo",s=`const original = {arr: [1, 2], nested: {a: 1}};
const shallow = {...original};
shallow.arr.push(3);
console.log(original.arr);`,n=`const original = {arr: [1, 2], nested: {a: 1}};
const shallow = {...original};
shallow.arr.push(3);
console.log(original.arr);`,r=[{input:[],expected:"[ 1, 2, 3 ]"}],e=["Shallow copy shares arrays","Reference to nested"],a={id:o,title:t,starterCode:s,solution:n,tests:r,hints:e};export{a as default,e as hints,o as id,n as solution,s as starterCode,r as tests,t as title};
