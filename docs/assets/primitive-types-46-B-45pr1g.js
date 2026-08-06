const t="02-data-types-primitive-types-46",s="Use unary plus for conversion",o=`const str = "42";
const num = ;
console.log(typeof num);`,e=`const str = "42";
const num = +str;
console.log(typeof num);`,n=[{input:[],expected:"number"}],r=["+ before a value converts to number","It's the fastest conversion method"],c={id:t,title:s,starterCode:o,solution:e,tests:n,hints:r};export{c as default,r as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
