const e="08-objects-destructuring-copying-04",t="Rename Variables",n=`const obj = {name: 'Alice'};
const {name: userName} = obj;
console.log(userName);`,o=`const obj = {name: 'Alice'};
const {name: userName} = obj;
console.log(userName);`,s=[{input:[],expected:"Alice"}],c=["Rename with colon","New variable name"],a={id:e,title:t,starterCode:n,solution:o,tests:s,hints:c};export{a as default,c as hints,e as id,o as solution,n as starterCode,s as tests,t as title};
