const t="06-functions-arrow-functions-14",e="Return Object Arrow",n=`const makeUser = (name) => ({ name });
const user = makeUser('Bob');
console.log(user.name);`,s=`const makeUser = (name) => ({ name });
const user = makeUser('Bob');
console.log(user.name);`,o=[{input:[],expected:"Bob"}],r=["Wrap object in parens","Implicit return object"],c={id:t,title:e,starterCode:n,solution:s,tests:o,hints:r};export{c as default,r as hints,t as id,s as solution,n as starterCode,o as tests,e as title};
