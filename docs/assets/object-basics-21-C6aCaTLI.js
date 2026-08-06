const o="08-objects-object-basics-21",n="Clone Object",t=`const original = {a: 1, b: 2};
const clone = {...original};
clone.a = 10;
console.log(original.a);
console.log(clone.a);`,e=`const original = {a: 1, b: 2};
const clone = {...original};
clone.a = 10;
console.log(original.a);
console.log(clone.a);`,s=[{input:[],expected:`1
10`}],c=["Spread creates shallow clone","Changes don't affect original"],l={id:o,title:n,starterCode:t,solution:e,tests:s,hints:c};export{l as default,c as hints,o as id,e as solution,t as starterCode,s as tests,n as title};
