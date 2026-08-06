const t="08-objects-destructuring-copying-48",s="Destructuring Regex",o=`const match = 'hello world'.match(/(\\w+)\\s(\\w+)/);
const [, first, second] = match;
console.log(first, second);`,c=`const match = 'hello world'.match(/(\\w+)\\s(\\w+)/);
const [, first, second] = match;
console.log(first, second);`,e=[{input:[],expected:"hello world"}],n=["Destructure match result","Skip full match"],l={id:t,title:s,starterCode:o,solution:c,tests:e,hints:n};export{l as default,n as hints,t as id,c as solution,o as starterCode,e as tests,s as title};
