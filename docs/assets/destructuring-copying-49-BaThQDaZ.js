const t="08-objects-destructuring-copying-49",s="Default Regex",e=`const obj = {};
const {pattern = /test/, flags = 'g'} = obj;
console.log(pattern.flags);`,o=`const obj = {};
const {pattern = /test/, flags = 'g'} = obj;
console.log(pattern.flags);`,n=[{input:[],expected:"g"}],c=["Default regex value","Access flags property"],l={id:t,title:s,starterCode:e,solution:o,tests:n,hints:c};export{l as default,c as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
