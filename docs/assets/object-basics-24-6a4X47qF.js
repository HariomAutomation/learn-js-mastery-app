const t="08-objects-object-basics-24",e="Invert Object",s=`const obj = {a: 1, b: 2, c: 3};
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
console.log(inverted);`,n=`const obj = {a: 1, b: 2, c: 3};
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
console.log(inverted);`,o=[{input:[],expected:"{ '1': 'a', '2': 'b', '3': 'c' }"}],c=["Swap keys and values","Map entries"],i={id:t,title:e,starterCode:s,solution:n,tests:o,hints:c};export{i as default,c as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
