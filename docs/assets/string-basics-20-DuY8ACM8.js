const t="09-strings-string-basics-20",s="Match",o=`const str = 'hello world';
const result = str.match(/\\w+/g);
console.log(result);`,l=`const str = 'hello world';
const result = str.match(/\\w+/g);
console.log(result);`,n=[{input:[],expected:"[ 'hello', 'world' ]"}],e=["match with regex","Global flag for all"],r={id:t,title:s,starterCode:o,solution:l,tests:n,hints:e};export{r as default,e as hints,t as id,l as solution,o as starterCode,n as tests,s as title};
