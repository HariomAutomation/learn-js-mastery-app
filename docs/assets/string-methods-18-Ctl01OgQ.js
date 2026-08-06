const t="09-strings-string-methods-18",s="Replace Callback",o=`const str = 'hello world';
console.log(str.replace(/\\w+/g, w => w.toUpperCase()));`,e=`const str = 'hello world';
console.log(str.replace(/\\w+/g, w => w.toUpperCase()));`,l=[{input:[],expected:"HELLO WORLD"}],n=["Callback transforms","Capitalize words"],r={id:t,title:s,starterCode:o,solution:e,tests:l,hints:n};export{r as default,n as hints,t as id,e as solution,o as starterCode,l as tests,s as title};
