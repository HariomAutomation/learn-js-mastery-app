const o="08-objects-object-basics-27",t="Map Values",e=`const obj = {a: 1, b: 2, c: 3};
const doubled = {};
for (const [k, v] of Object.entries(obj)) {
  doubled[k] = v * 2;
}
console.log(doubled);`,s=`const obj = {a: 1, b: 2, c: 3};
const doubled = {};
for (const [k, v] of Object.entries(obj)) {
  doubled[k] = v * 2;
}
console.log(doubled);`,n=[{input:[],expected:"{ a: 2, b: 4, c: 6 }"}],c=["Loop entries","Double each value"],b={id:o,title:t,starterCode:e,solution:s,tests:n,hints:c};export{b as default,c as hints,o as id,s as solution,e as starterCode,n as tests,t as title};
