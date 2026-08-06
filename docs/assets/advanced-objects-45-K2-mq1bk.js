const o="08-objects-advanced-objects-45",t="Property in Operator",n=`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,e=`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,s=[{input:[],expected:`true
false`}],c=["in operator checks","Returns boolean"],a={id:o,title:t,starterCode:n,solution:e,tests:s,hints:c};export{a as default,c as hints,o as id,e as solution,n as starterCode,s as tests,t as title};
