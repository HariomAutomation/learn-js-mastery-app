const o="08-objects-destructuring-copying-44",t="Shallow Clone",n=`const obj = {a: 1, b: [2, 3]};
const clone = {...obj};
clone.b.push(4);
console.log(obj.b);`,s=`const obj = {a: 1, b: [2, 3]};
const clone = {...obj};
clone.b.push(4);
console.log(obj.b);`,e=[{input:[],expected:"[ 2, 3, 4 ]"}],c=["Shallow clone shares arrays","Same reference"],l={id:o,title:t,starterCode:n,solution:s,tests:e,hints:c};export{l as default,c as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
