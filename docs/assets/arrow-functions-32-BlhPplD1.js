const t="06-functions-arrow-functions-32",o="Arrow String Transform",s=`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,e=`const words = ['hello', 'world'];
const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized);`,n=[{input:[],expected:"[ 'Hello', 'World' ]"}],i=["Capitalize first letter","Concat rest"],l={id:t,title:o,starterCode:s,solution:e,tests:n,hints:i};export{l as default,i as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
