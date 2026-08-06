const t="08-objects-object-basics-36",o="Practice 7",s=`const obj = {a: 1, b: 2, c: 3};
const result = {};
for (const key of Object.keys(obj)) {
  result[key] = obj[key] * 10;
}
console.log(result);`,e=`const obj = {a: 1, b: 2, c: 3};
const result = {};
for (const key of Object.keys(obj)) {
  result[key] = obj[key] * 10;
}
console.log(result);`,n=[{input:[],expected:"{ a: 10, b: 20, c: 30 }"}],c=["Loop keys","Transform values"],l={id:t,title:o,starterCode:s,solution:e,tests:n,hints:c};export{l as default,c as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
