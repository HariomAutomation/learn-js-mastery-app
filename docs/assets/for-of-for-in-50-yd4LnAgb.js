const o="05-loops-for-of-for-in-50",n="For...In Object In",t=`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,s=`const obj = {a: 1, b: 2};
console.log('a' in obj);
console.log('c' in obj);`,e=[{input:[],expected:`true
false`}],c=["in operator checks key","Returns boolean"],l={id:o,title:n,starterCode:t,solution:s,tests:e,hints:c};export{l as default,c as hints,o as id,s as solution,t as starterCode,e as tests,n as title};
